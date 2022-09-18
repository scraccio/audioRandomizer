var len;
var data;
var questionArray = [];

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
    let checked = [];
    for(let i=0; i<arr.length; i++){
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
        data = shuffleArray(array);
        if(len.length != 0){
            data = array.slice(0, parseInt(len));
            createTest();
        }
        else{
            data = array;
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
                    data[i].right = data[i].right.sort();
                    if((Array.isArray(answers) && Array.isArray(data[i].right))
                    && (answers.length == data[i].right.length)
                    && (answers.every(function(element, index){
                        return element === data[i].right[index];
                    }))){
                        score++;
                    }
                    else{
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
        console.log("Punteggio: " + score);
        viewSolutions(score, items.length);
    }
}

function createTest(){

    data = shuffleArray(data);
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
                answer.innerHTML = '<input type="checkbox" value="' + data[i].answers[j] + '" name="answer-' + (i+1) + '">' + data[i].answers[j];
            }
            else{
                answer.innerHTML = '<input type="radio" value="' + data[i].answers[j] + '" name="answer-' + (i+1) + '">' + data[i].answers[j];
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

}

function completeTestButton(){
    len = document.querySelector('.cell').textContent;
    document.querySelector('.main').remove();

    let mainTest = document.createElement('div');
    mainTest.className = 'main-test';
    document.body.appendChild(mainTest);


    var array = [];
    for(let i=0; i<autovalues.length; i++){
        array = array.concat(autovalues[i]);
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

    for(let i=0; i<18; i++){
        var element = document.createElement('div');
        element.className = 'content-element';
        element.innerHTML = '<input type="checkbox" name="elements" value="' + (i+1) + '">' + (i+1);
        menuContent.appendChild(element);
    }

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