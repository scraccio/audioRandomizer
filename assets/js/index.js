var len;
var data;
var questionArray = [];
var currentMode;
var questionPool = [];

function shuffleArray(array){
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function menuButtonOnclick(){
    let arr = document.querySelectorAll('.content-element > input');
    var checked = [];
    for(let i=1; i<arr.length-1; i++){
        if(arr[i].checked){
            checked.push(arr[i].value);
        }
    }
    if(checked.length > 0){
        document.querySelector('.menu-custom').remove();
        var array = [];
        var tests = checked;
        var autoArray = [];
        for(let i=0; i<tests.length; i++){
            autoArray.push(parseInt(tests[i]));
        }
        autoArray.sort(function(a, b) {
            return a - b;
        });
        for(let i=0; i<autoArray.length; i++){
            array = array.concat(autovalues[autoArray[i] - 1]);
        }
        questionPool = array;
        data = shuffleArray(array);
        currentMode = 'custom';
        if(len.length != 0){
            data = array.slice(0, parseInt(len));
            createTest();
        }
        else{
            createTest();
        }
    }
    else if(arr[arr.length - 1].checked){
        document.querySelector('.menu-custom').remove();
        var array = [];
        for(let i=0; i<autovalues[autovalues.length - 1].length; i++){
            array.push(autovalues[autovalues.length - 1][i]);
        }
        data = shuffleArray(array);
        if(len.length != 0){
            data = array.slice(0, parseInt(len));
            createTest();
        }
        else{
            createTest();
        }
    }
}

function submitButtonOnclick(){
    let items = document.querySelectorAll('.answers-div');
    let score = 0;

    let countChecked = 0;
    for(let i=0; i<items.length; i++){
        let check = 0;
        for(let j=0; j<items[i].querySelectorAll('input').length; j++){
            if(items[i].querySelectorAll('input')[j].checked){
                check = 1;
            }
        }
        if(check == 1){
            countChecked++;
        }
        else{
            $(items[i]).parent()[0].scrollIntoView({behavior: "smooth"});
            break;
        }
    }
    if(countChecked == items.length){
        for(let i=0; i<items.length; i++){
            let type = items[i].querySelector('input').type;
            if(type == "radio"){
                for(let j=0; j<items[i].querySelectorAll('.answer').length; j++){
                    if(items[i].querySelectorAll('.answer')[j].querySelector('input').checked){
                        if(items[i].querySelectorAll('.answer')[j].querySelector('input').value == data[i].right){
                            score++;
                        }
                        else{
                            console.log('Risposta ' + (i+1) + ' errata');
                            $(items[i]).parent()[0].style.backgroundColor = 'rgba(218, 17, 17, 0.1)';
                            items[i].querySelectorAll('.answer').forEach((a)=>{
                                if(Array.isArray(data[i].right)){
                                    for(let k=0; k<data[i].right.length; k++){
                                        if(data[i].right[k] == a.textContent){
                                            a.style.color = 'rgb(0, 200, 50)';
                                            a.style.fontWeight = 'bold';
                                        }
                                        else{
                                            a.style.color = 'red';
                                            a.style.fontWeight = 'bold';
                                        }
                                    }
                                }
                                else{
                                    if(data[i].right == a.textContent){
                                        a.style.color = 'rgb(0, 200, 50)';
                                        a.style.fontWeight = 'bold';
                                    }
                                    else{
                                        a.style.color = 'red';
                                        a.style.fontWeight = 'bold';
                                    }
                                }
                            });
                        }
                    }
                    items[i].querySelectorAll('.answer')[j].querySelector('input').disabled = true;
                }
            }
            if(type == "checkbox"){
                var answers = [];
                for(let j=0; j<items[i].querySelectorAll('.answer').length; j++){
                    if(items[i].querySelectorAll('.answer')[j].querySelector('input').checked){
                        answers.push(items[i].querySelectorAll('.answer')[j].querySelector('input').value);
                    }
                    items[i].querySelectorAll('.answer')[j].querySelector('input').disabled = true;
                }
                if(answers.length > 0){
                    answers = answers.sort();
                    if(Array.isArray(data[i].right)) data[i].right = data[i].right.sort();
                    if((Array.isArray(answers) && Array.isArray(data[i].right))
                    && (answers.length == data[i].right.length)
                    && (answers.every(function(element, index){
                        return element === data[i].right[index];
                    }))){
                        score++;
                    }
                    else if(!Array.isArray(data[i].right)){
                        console.log('sus')
                        for(let j=0; j<answers.length; j++){
                            if(answers[j] == data[i].right){
                                score++;
                                break;
                            }
                        }
                        
                    }
                    
                    if(score == 0){
                        console.log('Risposta ' + (i+1) + ' errata');
                        $(items[i]).parent()[0].style.backgroundColor = 'rgba(218, 17, 17, 0.1)';
                        items[i].querySelectorAll('.answer').forEach((a)=>{
                            if(data[i].right.includes(a.textContent)){
                                a.style.color = 'rgb(0, 200, 50)';
                                a.style.fontWeight = 'bold';
                            }
                            else{
                                a.style.color = 'red';
                                a.style.fontWeight = 'bold';
                            }
                        });
                    }
                }
            }
        }
        viewSolutions(score, items.length);
    }
}

function createTest(){
    var lastData = data[data.length - 1];
    data = shuffleArray(data.slice(0, data.length - 1));
    data.push(lastData);
    for(let i=0; i<data.length; i++){
        let questionDiv = document.createElement('div');
        questionDiv.className = 'question-div';
        document.querySelector('.main-test').appendChild(questionDiv);

        if(Object.hasOwn(data[i], 'img')){
            let questionImage = document.createElement('img');
            questionImage.className = 'question-img';
            questionImage.src = data[i].img;
            questionDiv.appendChild(questionImage);
        }

        let questionTitle = document.createElement('div');
        questionTitle.className = 'question-title';
        questionDiv.appendChild(questionTitle);

        let questionTitleText = document.createElement('div');
        questionTitleText.className = 'question-title-text';
        questionTitleText.textContent = (i+1) + '- ' + data[i].text;
        questionTitle.appendChild(questionTitleText);

        let answersDiv = document.createElement('div');
        answersDiv.className = 'answers-div';
        questionDiv.appendChild(answersDiv);

        var answerArray = shuffleArray(data[i].answers);

        for(let j=0; j<data[i].answers.length; j++){
            let answer = document.createElement('div');
            answer.className = 'answer';
            if(Array.isArray(data[i].right)){
                answer.innerHTML = '<input type="checkbox" value="' + data[i].answers[j] + '" name="answer-' + (i+1) + '"><div class="answer-text">' + data[i].answers[j] + '</div>';
            }
            else{
                answer.innerHTML = '<input type="checkbox" value="' + data[i].answers[j] + '" name="answer-' + (i+1) + '"><div class="answer-text">' + data[i].answers[j] + '</div>';
            }
            answer.querySelector('div').onclick = (e)=>{
                if(!$(e.currentTarget).parent()[0].querySelector('input').checked){
                    $(e.currentTarget).parent()[0].querySelector('input').checked = true;
                }
                else if($(e.currentTarget).parent()[0].querySelector('input').type == 'checkbox'){
                    $(e.currentTarget).parent()[0].querySelector('input').checked = !$(e.currentTarget).parent()[0].querySelector('input').checked;
                }
            }
            answersDiv.appendChild(answer);
        }
    }

    let submitButton = document.createElement('div');
    submitButton.className = 'submit-button';
    submitButton.onclick = submitButtonOnclick;
    document.querySelector('.main-test').appendChild(submitButton);

    let submitButtonText = document.createElement('div');
    submitButtonText.className = 'submit-button-text';
    submitButtonText.textContent = 'Invia test';
    submitButton.appendChild(submitButtonText);
}

function viewSolutions(score, all){
    window.scrollTo(0, 0);

    document.querySelector('.submit-button').remove();

    var space = document.createElement('div');
    space.style.width = '100%';
    space.style.height = '100px';
    document.querySelector('.main-test').appendChild(space);

    var resultDiv = document.createElement('div');
    resultDiv.className = 'result-div';
    resultDiv.textContent = score + '/' + all;
    $(resultDiv).insertBefore(document.querySelector('.question-div'));

    var retakeButton = document.createElement('div');
    retakeButton.className = 'retake-div';
    retakeButton.onclick = ()=>{
        document.querySelector('.main-test').innerHTML = '';

        if(currentMode == 'complete'){
            var array = [];
            for(let i=0; i<autovalues.length-1; i++){
                array = array.concat(autovalues[i]);
            }
            data = shuffleArray(array);
            if(len.length != 0){
                data = array.slice(0, parseInt(len));
                createTest();
            }
            else{
                data = array.slice(0, 20);
                data.push(autovalues[autovalues.length - 1][Math.floor(Math.random() * autovalues[autovalues.length - 1].length)]);
                createTest();
            }
        }

        if(currentMode == 'custom'){
            if(len.length != 0){
                data = shuffleArray(questionPool).slice(0, parseInt(len));
                createTest();
            }
            else{
                data = shuffleArray(questionPool).slice(0, 20);
                createTest();
            }
        }
    }
    $(retakeButton).insertBefore(document.querySelector('.question-div'));

    var retakeButtonText = document.createElement('div');
    retakeButtonText.className = 'retake-text';
    retakeButtonText.textContent = 'Rigenera test';
    retakeButton.appendChild(retakeButtonText);

}

function completeTestButton(){
    len = document.querySelector('.cell').textContent;
    document.querySelector('.main').remove();

    let mainTest = document.createElement('div');
    mainTest.className = 'main-test';
    document.body.appendChild(mainTest);

    var array = [];
    for(let i=0; i<autovalues.length-1; i++){
        array = array.concat(autovalues[i]);
    }
    data = shuffleArray(array);
    currentMode = 'complete';
    if(len.length != 0){
        data = array.slice(0, parseInt(len));
        createTest();
    }
    else{
        data = array.slice(0, 20);
        data.push(autovalues[autovalues.length - 1][Math.floor(Math.random() * autovalues[autovalues.length - 1].length)]);
        createTest();
    }
}

function customTestButton(){
    len = document.querySelector('.cell').textContent;
    document.querySelector('.main').remove();

    let mainTest = document.createElement('div');
    mainTest.className = 'main-test';
    document.body.appendChild(mainTest);

    var menuCustom = document.createElement('div');
    menuCustom.className = 'menu-custom';
    document.body.appendChild(menuCustom);

    var menuCustomTitle = document.createElement('div');
    menuCustomTitle.className = 'menu-custom-title';
    menuCustomTitle.textContent = 'Seleziona le autovalutazioni da includere:';
    menuCustom.appendChild(menuCustomTitle);

    var menuContent = document.createElement('div');
    menuContent.className = 'menu-content';
    menuCustom.appendChild(menuContent);

    var element = document.createElement('div');
    element.className = 'content-element';
    element.innerHTML = '<input type="checkbox" name="elements" value="all">Tutte';
    element.onclick = (e)=>{
        if(e.currentTarget.checked == true){
            for(let i=1; i<document.querySelectorAll('input').length; i++){
                document.querySelectorAll('input')[i].checked = true;
            }
        }
        else{
            for(let i=1; i<document.querySelectorAll('input').length; i++){
                document.querySelectorAll('input')[i].checked = false;
            }
        }
    }
    menuContent.appendChild(element);

    for(let i=0; i<18; i++){
        var element = document.createElement('div');
        element.className = 'content-element';
        element.innerHTML = '<input type="checkbox" name="elements" value="' + (i+1) + '">' + (i+1);
        menuContent.appendChild(element);
    }

    var element = document.createElement('div');
    element.className = 'content-element';
    element.innerHTML = '<input type="checkbox" name="elements" value="bonus">Bonus';
    menuContent.appendChild(element);

    var menuButton = document.createElement('div');
    menuButton.className = 'menu-button';
    menuButton.onclick = menuButtonOnclick;
    menuCustom.appendChild(menuButton);

    var menuButtonText = document.createElement('div');
    menuButtonText.className = 'menu-button-text';
    menuButtonText.textContent = 'Inizia';
    menuButton.appendChild(menuButtonText);
}

function homeButton(){
    if(document.querySelector('.main-test') && !document.querySelector('.menu-custom')){
        document.querySelector('.main-test').remove();
        document.body.innerHTML += `<div class="main">
                                        <div class="title">Benvenuto.<br>Seleziona una modalità:</div>
                                        <div class="menu-entry2">Inserisci il numero di domande</div>
                                            <div contenteditable="true" class="cell"></div>
                                        <div class="menu">
                                            <div class="menu-entry">Genera un test completo</div>
                                            <div class="menu-entry">Genera un test customizzato</div>
                                        </div>
                                    </div>`;
        document.querySelector('.menu > :first-child').onclick = completeTestButton;
        document.querySelector('.menu > :last-child').onclick = customTestButton;
        document.querySelector('.home-button').onclick = homeButton;
        questionArray = [];
    }

    if(document.querySelector('.main-test') && document.querySelector('.menu-custom')){
        document.querySelector('.main-test').remove();
        document.querySelector('.menu-custom').remove();
        document.body.innerHTML += `<div class="main">
                                        <div class="title">Benvenuto.<br>Seleziona una modalità:</div>
                                        <div class="menu-entry2">Inserisci il numero di domande</div>
                                            <div contenteditable="true" class="cell"></div>
                                        <div class="menu">
                                            <div class="menu-entry">Genera un test completo</div>
                                            <div class="menu-entry">Genera un test customizzato</div>
                                        </div>
                                    </div>`;
        document.querySelector('.menu > :first-child').onclick = completeTestButton;
        document.querySelector('.menu > :last-child').onclick = customTestButton;
        document.querySelector('.home-button').onclick = homeButton;
        questionArray = [];
    }
}

document.querySelector('.menu > :first-child').onclick = completeTestButton;
document.querySelector('.menu > :last-child').onclick = customTestButton;
document.querySelector('.home-button').onclick = homeButton;