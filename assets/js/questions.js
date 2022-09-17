var autovalues = [
    auto1 = [
        q1 = {
            text: 'Suono e Audio sono sinonimi. Utilizziamo il termine "Suono" nel contesto di onde meccaniche, mentre quello "Audio" nel contesto di onde elettromagnetiche.',
            answers: [
                'Vero',
                'Falso'
            ],
            right: 'Vero'
        },
        q2 = {
            text: 'Il suono è un insieme di onde meccaniche longitudinali, generato da una sorgente in vibrazione che propaga l\'energia in un mezzo o nel vuoto modificando la pressione locale delle particelle che costituiscono il mezzo, o attraverso onde elettromagnetiche se nel vuoto.',
            answers: [
                'Vero',
                'Falso'
            ],
            right: 'Falso'
        },
        q3 = {
            text: 'L\'Audio è un segnale elettromagnetico che si può trasmettere nel vuoto.',
            answers: [
                'Vero',
                'Falso'
            ],
            right: 'Vero'
        },
        q4 = {
            text: 'Quale delle due affermazioni è vera?',
            answers: [
                'Il suono permette la trasmissione dell\'audio',
                'L\'audio permette la trasmissione del suono'
            ],
            right: 'L\'audio permette la trasmissione del suono'
        },
        q5 = {
            text: 'Quale delle due affermazioni è vera? Nella storia degli strumenti di registrazione e riproduzione musicale si è imparato...',
            answers: [
                'prima a scrivere, poi a leggere',
                'ovviamente prima a leggere, poi a scrivere'
            ],
            right: 'prima a scrivere, poi a leggere'
        },
        q6 = {
            text: 'Quale tra le seguenti affermazioni è corretta?',
            answers: [
                'L\'onda è spostamento di energia cui non è associato spostamento di materia',
                'L\'onda è spostamento di materia cui non è associato spostamento di energia',
                'L\'onda è spostamento di energia cui è associato spostamento di materia',
                'L\'onda è spostamento di materia cui è associato spostamento di energia'
            ],
            right: 'L\'onda è spostamento di energia cui non è associato spostamento di materia'
        },
        q7 = {
            text: 'La definizione di "onda meccanica" è relativa a...',
            answers: [
                'Mezzo di propagazione',
                'Forma d\'onda',
                'Direzione di spostamento dell\'energia',
                'Direzione di oscillazione delle particelle',
                'Periodicità'
            ],
            right: 'Mezzo di propagazione'
        },
        q8 = {
            text: 'La definizione di "onda trasversale" è relativa a...',
            answers: [
                'Mezzo di propagazione',
                'Forma d\'onda',
                'Direzione di spostamento dell\'energia',
                'Direzione di oscillazione delle particelle',
                'Periodicità',
                'Nessuna delle precedenti'
            ],
            right: 'Nessuna delle precedenti'
        },
        q9 = {
            text: 'La definizione di "onda sinusoidale" è relativa a...',
            answers: [
                'Mezzo di propagazione',
                'Forma d\'onda',
                'Direzione di spostamento dell\'energia',
                'Direzione di oscillazione delle particelle',
                'Periodicità',
                'Nessuna delle precedenti'
            ],
            right: 'Forma d\'onda'
        },
        q10 = {
            text: 'La definizione di "onda che si ripete ogni T secondi" è relativa a...',
            answers: [
                'Mezzo di propagazione',
                'Forma d\'onda',
                'Direzione di spostamento dell\'energia',
                'Direzione di oscillazione delle particelle',
                'Periodicità',
                'Nessuna delle precedenti'
            ],
            right: 'Periodicità'
        },
        q11 = {
            text: 'Quali sono i 3 elementi necessari per il verificarsi della sensazione sonora? [selezione multipla]',
            answers: [
                'Strumento musicale',
                'Mezzo di propagazione',
                'Silenzio',
                'Un rivelatore sonoro (ad es. l\'orecchio)',
                'Un corpo vibrante',
                'Una cassa audio'
            ],
            right: [
                'Mezzo di propagazione',
                'Un rivelatore sonoro (ad es. l\'orecchio)',
                'Un corpo vibrante'
            ]
        },
        q12 = {
            text: 'L\'ampiezza di un\'onda è associata a... [Scelta multipla]',
            answers: [
                'Volume del suono',
                'Energia trasportata dall\'onda',
                'Intensità del suono',
                'Altezza del suono',
                'Spazializzazione del suono'
            ],
            right: [
                'Volume del suono',
                'Energia trasportata dall\'onda',
                'Intensità del suono'
            ]
        },
        q13 = {
            text: 'La fase di un\'onda è associata a... [Scelta multipla]',
            answers: [
                'Volume del suono',
                'Energia trasportata dall\'onda',
                'Intensità del suono',
                'Altezza del suono',
                'Spazializzazione del suono'
            ],
            right: 'Spazializzazione del suono'
        },
        q14 = {
            text: 'La frequenza di un\'onda è associata a... [Scelta multipla]',
            answers: [
                'Volume del suono',
                'Energia trasportata dall\'onda',
                'Intensità del suono',
                'Altezza del suono',
                'Spazializzazione del suono'
            ],
            right: 'Altezza del suono'
        },
        q15 = {
            text: 'Un\'onda con frequenza 30Hz... [Scelta multipla]',
            answers: [
                'Si ripete 30 volte al minuto',
                'Si ripete 30 volte',
                'Si ripete 30 volte al secondo',
                'Ha un periodo pari a 0.33 s',
                'Ha un periodo pari a 0.033 s'
            ],
            right: [
                'Si ripete 30 volte al secondo',
                'Ha un periodo pari a 0.033 s'
            ]
        },
        q16 = {
            text: 'L\'unità di misura della lunghezza d\'onda è...',
            answers: [
                'm',
                'mm',
                'nm',
                'W'
            ],
            right: 'm'
        },
        q17 = {
            text: 'Data l\'equazione sinusoidale y(t) = 3 sin (12*π*t + 4), l\'ampiezza vale...',
            answers: [
                '3',
                '12',
                '6',
                '4'
            ],
            right: '3'
        },
        q18 = {
            text: 'Data l\'equazione sinusoidale y(t) = 3 sin (12*π*t + 4), la frequenza vale...',
            answers: [
                '3',
                '12',
                '6',
                '4'
            ],
            right: '6'
        },
        q19 = {
            text: 'Data l\'equazione sinusoidale y(t) = 3 sin (12*π*t + 4), la fase vale...',
            answers: [
                '3',
                '12',
                '6',
                '4'
            ],
            right: '4'
        }
    ],
    auto2 = [
        q1 = {
            text: 'La pressione si misura in... [Scelta multipla]',
            answers: [
                'Pascal',
                'N / m^2',
                'N / m',
                'N^2 / m',
                'W / m^2',
                'Kg',
                'dB (Decibel)'
            ],
            right: [
                'Pascal',
                'N / m^2'
            ]
        },
        q2 = {
            text: 'L\'intensità sonora si misura in... [Scelta multipla]',
            answers: [
                'Pascal',
                'N / m^2',
                'N / m',
                'N^2 / m',
                'W / m^2',
                'Kg',
                'dB (Decibel)'
            ],
            right: [
                'W / m^2',
                'dB (Decibel)'
            ]
        },
        q3 = {
            text: 'Calcolare l\'RMS dei seguenti valori: 0, 1, 0, -1 [Scelta multipla]',
            answers: [
                '√2 / 2',
                '1 / √2',
                '√(1/2)',
                '√(2/4)'
            ],
            right: [
                '√2 / 2',
                '1 / √2',
                '√(1/2)',
                '√(2/4)'
            ]
        },
        q4 = {
            text: 'Calcolare l\'RMS dei seguenti valori: 0, 2, 0, -2 [Scelta multipla]',
            answers: [
                '√2',
                '1 / √2',
                '√(8/4)',
                '√(4/8)'
            ],
            right: [
                '√2',
                '√(8/4)',
            ]
        },
        q5 = {
            text: 'Qual è la soglia MIN di udibilità (in Pa)? [Scelta multipla]',
            answers: [
                '2.5 x 10e-5 Pa',
                '25 microPa',
                '2.5 microPa',
                '25 x 10e-5 Pa',
                '25 x 10e-5 N/m^2',
                '25 x 10e-6 Pa',
                '2.5 x 10e-6 Pa'
            ],
            right: [
                '2.5 x 10e-5 Pa',
                '25 microPa',
                '25 x 10e-6 Pa'
            ]
        },
        q6 = {
            text: 'Qual è la soglia MAX di udibilità (in Pa) [Scelta multipla]',
            answers: [
                '3 Pa',
                '30 Pa',
                '300 Pa',
                '3000 Pa',
                '1.000.000.000 di volte più grande della MIN',
                '1.000.000 di volte più grande della MIN',
                '1.000 di volte più grande della MIN',
                '100 volte più grande della MIN'
            ],
            right: [
                '30 Pa',
                '1.000.000 di volte più grande della MIN',
            ]
        },
        q7 = {
            text: 'La scala logaritmica tende a...',
            answers: [
                'Aumentare il range di valori, per una maggiore precisione',
                'Appiattire gli incrementi per valori elevati'
            ],
            right: 'Appiattire gli incrementi per valori elevati'
        },
        q8 = {
            text: '1 Decibel corrisponde a...',
            answers: [
                '10 volte un Bel',
                'un decimo di Bel'
            ],
            right: 'un decimo di Bel'
        },
        q9 = {
            text: 'Il Decibel è una "unità di misura relativa" perché...',
            answers: [
                'E\' relativa all\'unità di misura utilizzata',
                'E\' relativa alla pressione atmosferica di 1M Pa',
                'Serve a misurare il rapporto di due grandezze omogenee'
            ],
            right: 'Serve a misurare il rapporto di due grandezze omogenee'
        },
        q10 = {
            text: 'Data una sorgente in grado di emettere  con potenza 200.000 W, calcolare i dB assoluti rispetto ad una sorgente di riferimento di 20.000 W',
            answers: [
                '0 dB',
                '1 dB',
                '10 dB',
                '100 dB'
            ],
            right: '10 dB'
        },
        q11 = {
            text: 'Data una sorgente in grado di emettere  con potenza 300.000 W, calcolare i dB assoluti rispetto ad una sorgente di riferimento di 3.000 W',
            answers: [
                '1 dB',
                '2 dB',
                '3 dB',
                '10 dB',
                '20 dB',
                '30 dB',
                '100 dB',
                '200 dB',
                '300 dB'
            ],
            right: '20 dB'
        },
        q12 = {
            text: 'Data una sorgente in grado di emettere  con potenza 300 W, calcolare i dB assoluti rispetto ad una sorgente di riferimento di 3.000 W',
            answers: [
                '-20 dB',
                '-10 dB',
                '-1 dB',
                '0 dB',
                '1 dB',
                '10 dB',
                '20 dB'
            ],
            right: '-10 dB'
        },
        q13 = {
            text: 'La soglia del dolore nella scala dB SPL è fissata a...',
            answers: [
                '100 dB',
                '110 dB',
                '120 dB',
                '130 dB',
                '140 dB',
                '150 dB',
                '300 dB'
            ],
            right: '130 dB'
        },
        q14 = {
            text: 'In quale range dinamico andrebbe suonata la musica?',
            answers: [
                '10 - 30 dB',
                '0 - 40 dB',
                '0 - 130 dB',
                '30 - 50 dB',
                '30 - 70 dB',
                '30 - 100 dB',
                '70 - 100 dB'
            ],
            right: '30 - 100 dB'
        }
    ],
    auto3 = [
        q1 = {
            text: 'La legge dell\'inverso del quadrato afferma che...',
            answers: [
                'L\'intensità sonora varia proporzionalmente al quadrato della distanza dalla sorgente',
                'La distanza raggiungibile dall\'onda varia proporzionalmente al quadrato dell\'intensità sonora'
            ],
            right: 'L\'intensità sonora varia proporzionalmente al quadrato della distanza dalla sorgente'
        },
        q2 = {
            text: 'Un suono viene percepito con intensità 100 W/m^2 a distanza 1 metro. Quale sarà la sua intensità percepita a distanza 5 metri?',
            answers: [
                '100 W/m^2',
                '25 W/m^2',
                '8 W/m^2',
                '4 W/m^2',
                '0.25 W/m^2',
                '0.8 W/m^2',
                '0.04 W/m^2',
                '0.4 W/m^2',
                'E\' già troppo lontano per essere percepito',
            ],
            right: '4 W/m^2'
        },
        q3 = {
            text: 'Un suono viene percepito con intensità 100 W/m^2 a distanza 2 metri. Quale sarà la sua intensità percepita a distanza 4 metri?',
            answers: [
                '100 W/m^2',
                '25 W/m^2',
                '8 W/m^2',
                '4 W/m^2',
                '0.25 W/m^2',
                '0.8 W/m^2',
                '0.04 W/m^2',
                '0.4 W/m^2',
                'E\' già troppo lontano per essere percepito',
            ],
            right: '25 W/m^2'
        },
        q4 = {
            text: 'Un suono viene percepito con intensità 100 W/m^2 a distanza 9 metri. Quale sarà la sua intensità percepita a distanza 3 metri?',
            answers: [
                '1000 W/m^2',
                '900 W/m^2',
                '300 W/m^2',
                '90 W/m^2',
                '30 W/m^2',
                '11.11 W/m^2',
                '9 W/m^2',
                '3 W/m^2',
                'E\' già troppo lontano per essere percepito',
            ],
            right: '900 W/m^2'
        },
        q5 = {
            text: 'La velocità del suono nell\'aria è...',
            answers: [
                '343.85 m/s',
                '521.22 m/s',
                '12.94 m/s',
                '440 Hz',
                '20 Pa',
                'Non abbiamo sufficienti elementi per rispondere'
            ],
            right: 'Non abbiamo sufficienti elementi per rispondere'
        },
        q6 = {
            text: 'A livello del mare, a che temperatura il suono viaggia nell\'aria se ha una velocità di a 331.45 m/s?',
            answers: [
                '20°C',
                '10°C',
                '0°C',
                '-10°C',
                '-20°C',
                'Non abbiamo sufficienti elementi per rispondere'
            ],
            right: '0°C'
        },
        q7 = {
            text: 'Calcolare la velocità del suono nell\'aria a 35°C (a 1 Atmosfera)',
            answers: [
                '373.11 m/s',
                '363.24 m/s',
                '353.15 m/s',
                '343.85 m/s',
                '331.45 m/s',
                'Non abbiamo sufficienti elementi per rispondere'
            ],
            right: '353.15 m/s'
        },
        q8 = {
            text: 'Calcolare la velocità del suono nell\'aria a -20°C (a livello del mare)',
            answers: [
                '363.24 m/s',
                '343.85 m/s',
                '331.45 m/s',
                '319.05 m/s',
                '315.64 m/s',
                'Non abbiamo sufficienti elementi per rispondere'
            ],
            right: '319.05 m/s'
        },
        q9 = {
            text: 'Quale potrebbe essere un limite minimo di velocità per un suono che viaggia nell\'aria (a 1Atm)?',
            answers: [
                '0 m/s',
                '100 m/s',
                '110.20 m/s',
                '145 m/s',
                '162 m/s',
                '300 m/s',
                'Non abbiamo sufficienti elementi per rispondere'
            ],
            right: '162 m/s'
        },
        q10 = {
            text: 'A che velocità viaggia l\'audio trasmesso come onda elettromagnetica nello spazio?',
            answers: [
                '343.85 m/s',
                'Considerato che nello spazio si raggiungono i -270°C, la velocità dell\'audio calcolabile è 164.05 m/s',
                'Alla velocità della luce (300.000 km/s)',
                'L\'audio non si può trasmettere nello spazio perché non c\'è nessun mezzo di trasmissione',
            ],
            right: 'Alla velocità della luce (300.000 km/s)'
        },
        q11 = {
            text: 'Quali fattori possono influenzare la velocità del suono nell\'acqua?',
            answers: [
                'Quantità di acqua nel contenitore',
                'Temperatura dell\'aria',
                'Temperatura dell\'acqua',
                'Pressione atmosferica dovuta alla profondità',
                'La percentuale di salinità'
            ],
            right: [
                'Temperatura dell\'acqua',
                'Pressione atmosferica dovuta alla profondità',
                'La percentuale di salinità'
            ]
        },
        q12 = {
            text: 'Cosa possiamo dire in merito alla velocità del suono nell\'acqua?',
            answers: [
                'Aumenta costantemente con l\'aumentare della profondità (perché aumenta la pressione)',
                'Diminuisce costantemente con l\'aumentare della profondità (perché diminuisce la temperatura)',
                'E\' sempre variabile sia in positivo che in negativo con l\'aumentare della profondità',
                'E\' più veloce in superficie',
                'E\' più veloce a medie profondità (non molto in basso, ma neanche in superficie)',
                'E\' più veloce ad altissime profondità (molto in basso)',
                'E\' più veloce nel Mar Morto',
                'E\' più veloce nel Lago di Garda'
            ],
            right: [
                'E\' più veloce ad altissime profondità (molto in basso)',
                'E\' più veloce nel Mar Morto'
            ]
        }
    ],
    auto4 = [
        q1 = {
            text: 'Se un\'onda durante la propagazione subisce una deviazione che la \"spezza\" in più onde, allora si è verificata la:',
            answers: [
                'Rifrazione',
                'Riflessione',
                'Diffrazione'
            ],
            right: 'Diffrazione'
        },
        q2 = {
            text: 'Osservando la Figura, dove ci aspettiamo che sia maggiore la temperatura?',
            answers: [
                'In alto',
                'In basso',
                'Al centro',
                'Ovunque',
                'Non abbiamo abbastanza elementi per rispondere'
            ],
            right: 'In basso',
            img: 'assets/img/fig1.png'
        },
        q3 = {
            text: 'Osservando la Figura, quale ci aspettiamo che sia il verso di propagazione finale delle onde sonore?',
            answers: [
                'In alto',
                'In basso',
                'Al centro',
                'Non abbiamo abbastanza elementi per rispondere'
            ],
            right: 'In alto',
            img: 'assets/img/fig1.png'
        },
        q4 = {
            text: 'Osservando la Figura 1, supponendo che a destra ci sia un ascoltatore:',
            answers: [
                'sarà più facile percepire il suono',
                'sarà più difficile percepire il suono',
                'non ci saranno variazioni nella percezione del suono',
            ],
            right: 'sarà più difficile percepire il suono'
        },
        q5 = {
            text: 'Affinché si verifichi la riflessione:',
            answers: [
                'La lunghezza d\'onda dev\'essere più grande dell\'ostacolo, per garantire sufficiente energia per la riflessione',
                'La lunghezza d\'onda dev\'essere più piccola dell\'ostacolo, per garantire sufficiente energia per la riflessione',
                'Deve verificarsi un cambio di mezzo di propagazione',
                'Deve verificarsi un cambio di temperatura',
                'Per ridurre la riflessione si possono utilizzare materiali con alto coefficiente di comprimibilità',
                'Per ridurre la riflessione si possono utilizzare materiali con basso coefficiente di comprimibilità'
            ],
            right: [
                'La lunghezza d\'onda dev\'essere più piccola dell\'ostacolo, per garantire sufficiente energia per la riflessione',
                'Per ridurre la riflessione si possono utilizzare materiali con alto coefficiente di comprimibilità'
            ]
        },
        q6 = {
            text: 'Quanto tempo impiegherebbe un SONAR ad individuare nell\'acqua di mare un oggetto distante 2km? (si assuma v=1500 m/s e pressione 1Atm)',
            answers: [
                'Circa 4 secondi',
                'Circa 3.5 secondi',
                'Circa 3 secondi',
                'Circa 2.5 secondi',
                'Circa 2 secondi',
                'Non abbiamo sufficienti elementi per rispondere',
            ],
            right: 'Circa 2.5 secondi'
        },
        q7 = {
            text: 'Sapendo che un dispositivo nell\'aria a 1Atm e 20°C (v=343,85 m/s) emette un suono al tempo t e registra lo stesso suono tornare indietro dopo 10 secondi, calcolare la distanza dell\'oggetto che ha riflesso il suono all\'indietro.',
            answers: [
                '3622.72 m',
                '3438.5 m',
                '2498.1 m',
                '1719.25 m',
                '1718.25 m',
                'Non abbiamo sufficienti elementi per rispondere'
            ],
            right: '1719.25 m'
        },
        q8 = {
            text: '[Doppio calcolo] Sapendo che un SONAR impiega 3 secondi a rilevare un ostacolo  a distanza 500m nell\'aria (a 1Atm), a che temperatura è l\'aria?',
            answers: [
                '10° C',
                '5° C',
                '2.5° C',
                '0° C',
                '-2.5° C',
                '-5° C',
                '-10° C'
            ],
            right: '2.5° C'
        },
        q9 = {
            text: 'Qual è la distanza minima affinché si possa verificare l\'eco (nell\'aria a 20°C e 1Atm)?',
            answers: [
                '20 m',
                '19 m',
                '18 m',
                '17 m',
                '16 m'
            ],
            right: '17 m'
        },
        q10 = {
            text: 'Qual è la distanza minima affinché si possa verificare l\'eco (nell\'acqua, assumendo v=1500 m/s e 1Atm)?',
            answers: [
                '100 m',
                '75 m',
                '50 m',
                '25 m',
                '17 m'
            ],
            right: '75 m'
        },
        q11 = {
            text: 'Qual è la velocità che dovrebbe avere un suono nel\'aria a 1Atm, affinché sia vero che l\'eco si percepisca con distanza minima pari ad almeno 25 m?',
            answers: [
                '1000 m/s',
                '750 m/s',
                '500 m/s',
                '250 m/s',
                '100 m/s',
            ],
            right: '500 m/s'
        },
        q12 = {
            text: 'Effetto Doppler: quando un\'ambulanza ci viene incontro, le sue sirene vengono udite...',
            answers: [
                'ad una frequenza più alta',
                'ad una frequenza più bassa'
            ],
            right: 'ad una frequenza più alta'
        },
        q13 = {
            text: 'Il bang supersonico è...',
            answers: [
                'Dovuto ai potentissimi motori dei jet supersonici',
                'Dovuto all\'accumularsi delle onde sonore in corrispondenza della sorgente in movimento',
                'Percepibile prima che la sorgente superi l\'ascoltatore',
                'Percepibile nel momento in cui la sorgente supera l\'ascoltatore',
                'Percepibile dopo che la sorgente ha superato l\'ascoltatore',
                'Dovuto alla rottura del continuum-spazio-temporale'
            ],
            right: [
                'Dovuto all\'accumularsi delle onde sonore in corrispondenza della sorgente in movimento',
                'Percepibile dopo che la sorgente ha superato l\'ascoltatore'
            ]
        }
        
    ],
    auto5 = [
        q1 = {
            text: 'Uno spettro di un tono puro è...',
            answers: [
                'discreto',
                'continuo',
                'limitato',
                'illimitato',
                'puro',
                'non esiste'
            ],
            right: 'discreto'
        },
        q2 = {
            text: 'Uno spettro di un tono complesso periodico è...',
            answers: [
                'discreto',
                'continuo',
                'limitato',
                'illimitato',
                'puro',
                'non esiste'
            ],
            right: 'discreto'
        },
        q3 = {
            text: 'Uno spettro di un tono complesso non periodico è...',
            answers: [
                'discreto',
                'continuo',
                'limitato',
                'illimitato',
                'puro',
                'non esiste'
            ],
            right: 'continuo'
        },
        q4 = {
            text: 'Nell\'analisi armonica, la fase delle armoniche può generare spettri diversi',
            answers: [
                'Vero',
                'Falso'
            ],
            right: 'Falso'
        },
        q5 = {
            text: 'Il teorema di Fourier recita che "Qualunque funzione periodica di periodo T (o frequenza fondamentale f=1/T) può essere rappresentata mediante una somma di onde sinusoidali e/o cosinusoidali di opportuna ampiezza e di frequenza multipla della frequenza fondamentale"',
            answers: [
                'Vero',
                'Falso'
            ],
            right: 'Falso'
        },
        q6 = {
            text: 'Quali fra queste sono "Condizioni di Dirichlet"? [risposte multiple]',
            answers: [
                'f deve essere un segnale periodico',
                'f deve essere scomponibile in segnali più semplici',
                'f deve avere un numero finito di estremi in un qualunque intervallo limitato',
                'f può essere continua a tratti',
                'f può essere una funzione di Cantor',
                'f non può essere una funzione di Cantor',
                'f deve essere assolutamente integrabile in un intervallo pari al periodo',
                'f deve essere integrabile in un intervallo pari al periodo'
            ],
            right : [
                'f deve avere un numero finito di estremi in un qualunque intervallo limitato',
                'f può essere continua a tratti',
                'f può essere una funzione di Cantor',
                'f deve essere assolutamente integrabile in un intervallo pari al periodo'
            ]
        },
        q7 = {
            text: 'Quali di queste frasi sulle onda quadre sono vere?',
            answers: [
                'Le onde sono sempre arrotondate, non possono esistere onde quadre',
                'Ha la stessa frequenza dell\'armonica fondamentale',
                'E\' composta da un numero di armoniche (pari e dispari) tendente a infinito',
                'E\' composta dalle sole armoniche pari, tendenti a infinito',
                'E\' composta dalle sole armoniche dispari, tendenti a infinito',
                'E\' un\'onda simmetrica'
            ],
            right : [
                'Ha la stessa frequenza dell\'armonica fondamentale',
                'E\' composta dalle sole armoniche dispari, tendenti a infinito',
                'E\' un\'onda simmetrica'
            ],
            img : 'assets/img/fig2.png'
        },
        q8 = {
            text: 'Quali fra queste definizioni su Serie e Trasformata di Fourier sono vere?',
            answers: [
                'La Trasformata permette di trovare le componenti di frequenza di un segnale',
                'La Serie si può utilizzare su segnali non periodici',
                'La Serie si può utilizzare su segnali periodici',
                'La Trasformata si può utilizzare su segnali non periodici',
                'La Trasformata si può utilizzare su segnali periodici'
            ],
            right : [
                'La Trasformata permette di trovare le componenti di frequenza di un segnale',
                'La Serie si può utilizzare su segnali periodici',
                'La Trasformata si può utilizzare su segnali non periodici',
                'La Trasformata si può utilizzare su segnali periodici'
            ]
        },
        q9 = {
            text: 'Nella pratica, quale trasformata si preferisce utilizzare?',
            answers: [
                'La Trasformata di Fourier (FT)',
                'La Trasformata Veloce di Fourier (FFT)',
                'La Trasformata Discreta di Fourier o del Coseno (DCT)'
            ],
            right : 'La Trasformata Discreta di Fourier o del Coseno (DCT)'
        },
        q10 = {
            text: 'L\'operazione inversa dell\'analisi armonica si chiama...',
            answers: [
                'Analisi inversa',
                'Antianalisi',
                'Sintesi',
                'Composizione'
            ],
            right : 'Sintesi'
        },
        q11 = {
            text: 'Sonogrammi e spettrogrammi permettono di...',
            answers: [
                'Rappresentare in un unico grafico (bidimensionale o tridimensionale) tempo, frequenza e ampiezza',
                'Mostrare come si propaga il suono al variare del tempo',
                'Colorare lo spettro di Fourier (ne migliora la leggibilità)',
                'Rappresentare in un unico grafico (bidimensionale o tridimensionale) il risultato di una trasformata di Fourier su un segnale non periodico'
            ],
            right : 'Rappresentare in un unico grafico (bidimensionale o tridimensionale) tempo, frequenza e ampiezza'
        }
    ],
    auto6 = [
        q1 = {
            text: 'Quali fra queste sono successioni di intervalli (modi) validi per una scala diatonica?',
            answers: [
                'sT - T - T - sT - T - T - T',
                'sT - T - T - T - sT - T - T', 
                'T - sT - T - sT - T - T - T',
                'T - T - T - sT - T - T - sT',
                'T - T - T - T - T - T - T'
            ],
            right: [
                'sT - T - T - sT - T - T - T',
                'sT - T - T - T - sT - T - T',
                'T - T - T - sT - T - T - sT'
            ]
        },
        q2 = {
            text: 'Fissata a 440Hz la frequenza del La4 (cioè il La della 4^ ottava, con ottave che iniziano e terminano con Do), calcolare quanto valgono, rispettivamente: La2, La3, La5, La7',
            answers: [
                '220Hz, 330Hz, 550Hz, 770Hz',
                '110Hz, 220Hz, 880Hz, 3520Hz',
                '110Hz, 220Hz, 880Hz, 1760Hz',
                '220Hz, 330Hz, 550Hz, 660Hz',
                'Non abbiamo sufficienti elementi per calcolarlo'
            ],
            right: '110Hz, 220Hz, 880Hz, 3520Hz'
        },
        q3 = {
            text: 'Fissata a 440Hz la frequenza del La4 (cioè il La della 4^ ottava, con ottave che iniziano e terminano con Do), calcolare quanto vale il Re#5',
            answers: [
                '800Hz',
                '880Hz',
                '587.3Hz',
                '622.3Hz',
                'Non abbiamo sufficienti elementi per calcolarlo'
            ],
            right: '622.3Hz'
        },
        q4 = {
            text: 'Fissata a 440Hz la frequenza del La4 (cioè il La della 4^ ottava, con ottave che iniziano e terminano con Do), calcolare quanto vale il Mib4 (Mi bemolle della 4^ ottava)',
            answers: [
                '400Hz',
                '410Hz',
                'circa 330Hz',
                'circa 310Hz',
                'Non abbiamo sufficienti elementi per calcolarlo'
            ],
            right: 'circa 330Hz'
        },
        q5 = {
            text: 'Gli inviluppi sonori hanno tutti 4 transitori nell\'ordine ADSR, cioè Attack, Decay, Sustain, Release',
            answers: [
                'Vero',
                'Falso'
            ],
            right: 'Falso'
        },
        q6 = {
            text: 'Quale di questi strumenti musicali ha un inviluppo con 2 picchi caratteristici in fase di Attack?',
            answers: [
                'Flauto',
                'Tromba',
                'Pianoforte',
                'Violino',
                'Blocchi di legno'
            ],
            right: 'Tromba'
        },
        q7 = {
            text: 'Quale di questi strumenti musicali è caratterizzato da un transitore Attack seguito immediatamente da un transitore Release?',
            answers: [
                'Flauto',
                'Tromba',
                'Pianoforte',
                'Violino',
                'Blocchi di legno'
            ],
            right: [
                'Pianoforte',
                'Blocchi di legno'
            ]
        },
        q8 = {
            text: 'Il timbro di un suono è una proprietà caratterizzata da...',
            answers: [
                'Ampiezza del suono',
                'Frequenza del suono',
                'Fase del suono',
                'Spettro delle frequenze'
            ],
            right: 'Spettro delle frequenze'
        },
        q9 = {
            text: 'Nello spettro delle frequenze, la frequenza che contribuisce maggiormente (quella con l\'ampiezza maggiore) caratterizza...',
            answers: [
                'Il timbro dello strumento',
                'Il volume del suono',
                'La nota suonata',
                'L\'altezza del suono',
                'La spazializzazione del suono'
            ],
            right: 'La nota suonata'
        },
        q10 = {
            text: 'Nello spettro delle frequenze, il contributo e il numero delle varie frequenze  caratterizza...',
            answers: [
                'Il timbro dello strumento',
                'Il volume del suono',
                'La nota suonata',
                'L\'altezza del suono',
                'La spazializzazione del suono'
            ],
            right: 'Il timbro dello strumento'
        },
        q11 = {
            text: 'E\' possibile che due strumenti musicali che suonino la stessa nota abbiano spettri delle frequenze diverse',
            answers: [
                'Vero',
                'Falso'
            ],
            right: 'Vero'
        },
        q12 = {
            text: 'Quali fra questi rumori sono caratterizzati da valori d\'ampiezza che seguono una legge di probabilità uniforme?',
            answers: [
                'Rumore rosa',
                'Rumore marrone',
                'Rumore bianco',
                'Rumore grigio',
                'Rumore viola',
                'Rumore blu'
            ],
            right: 'Rumore bianco'
        },
        q13 = {
            text: 'Quali fra questi rumori sono caratterizzati da valori d\'ampiezza che decrescono per ogni ottava?',
            answers: [
                'Rumore rosa',
                'Rumore marrone',
                'Rumore bianco',
                'Rumore grigio',
                'Rumore viola',
                'Rumore blu'
            ],
            right: [
                'Rumore rosa',
                'Rumore marrone'
            ]
        },
        q14 = {
            text: 'Quali fra questi rumori sono caratterizzati da valori d\'ampiezza che crescono per ogni ottava?',
            answers: [
                'Rumore rosa',
                'Rumore marrone',
                'Rumore bianco',
                'Rumore grigio',
                'Rumore viola',
                'Rumore blu'
            ],
            right: [
                'Rumore viola',
                'Rumore blu'
            ]
        },
        q15 = {
            text: 'Quali fra questi rumori ricordano il suono della pioggia o di una cascata?',
            answers: [
                'Rumore rosa',
                'Rumore marrone',
                'Rumore bianco',
                'Rumore grigio',
                'Rumore viola',
                'Rumore blu'
            ],
            right: [
                'Rumore rosa',
                'Rumore marrone'
            ]
        },
        q16 = {
            text: 'Quali fra questi rumori ricorda maggiormente il fischio di una pentola a vapore?',
            answers: [
                'Rumore rosa',
                'Rumore marrone',
                'Rumore bianco',
                'Rumore grigio',
                'Rumore viola',
                'Rumore blu'
            ],
            right: 'Rumore viola'
        },
        q17 = {
            text: 'Quali fra questi rumori segue un andamento simile a quello delle curve isofoniche?',
            answers: [
                'Rumore rosa',
                'Rumore marrone',
                'Rumore bianco',
                'Rumore grigio',
                'Rumore viola',
                'Rumore blu'
            ],
            right: 'Rumore grigio'
        }
    ],
    auto7 = [
        q1 = {
            text: 'Quali sono i funzionamenti principali legati all\'udito individuati dagli psicofisici?',
            answers: [
                'Funzionamento adattivo',
                'Funzionamento localizzatore',
                'Funzionamento cognitivo',
                'Funzionamento creativo',
                'Funzionamento spazializzatore',
                'Funzionamento fisiologico'
            ],
            right: [
                'Funzionamento cognitivo',
                'Funzionamento fisiologico'
            ]
        },
        q2 = {
            text: 'Quali fra questi sono i compiti del sistema uditivo?',
            answers: [
                'Comprensione del linguaggio',
                'Riconoscimento del tipo di sorgente sonora',
                'Ascolto musicale',
                'Riconoscimento dell\'ambiente circostante',
                'Localizzazione delle sorgenti sonore'
            ],
            right: [
                'Comprensione del linguaggio',
                'Riconoscimento del tipo di sorgente sonora',
                'Ascolto musicale',
                'Riconoscimento dell\'ambiente circostante',
                'Localizzazione delle sorgenti sonore'
            ]
        },
        q3 = {
            text: 'Per quanto riguarda l\'udito, dal punto di vista scientifico degli psicofisici, quale di questi funzionamenti non è ancora esattamente chiaro?',
            answers: [
                'Funzionamento creativo',
                'Funzionamento cognitivo',
                'Funzionamento adattivo',
                'Funzionamento fisiologico'
            ],
            right: 'Funzionamento cognitivo'
        },
        q4 = {
            text: 'Quali fra questi elementi dell\'orecchio segna il confine fra orecchio esterno e orecchio medio?',
            answers: [
                'Padiglione auricolare',
                'Condotto uditivo ',
                'Timpano',
                'Martello',
                'Incudine',
                'Staffa',
                'Tromba di Eustachio',
                'Muscolo Stapedio',
                'Coclea',
                'Labirinto'
            ],
            right: 'Timpano'
        },
        q5 = {
            text: 'Quali fra questi elementi dell\'orecchio rappresenta un sistema di protezione dai suoni ad altissimo volume?',
            answers: [
                'Padiglione auricolare',
                'Condotto uditivo ',
                'Timpano',
                'Martello',
                'Incudine',
                'Staffa',
                'Tromba di Eustachio',
                'Muscolo Stapedio',
                'Coclea',
                'Labirinto'
            ],
            right: 'Muscolo Stapedio'
        },
        q6 = {
            text: 'Quali fra questi elementi dell\'orecchio rappresenta un sistema di protezione dai suoni ad altissimo volume?',
            answers: [
                'Padiglione auricolare',
                'Condotto uditivo ',
                'Timpano',
                'Martello',
                'Incudine',
                'Staffa',
                'Tromba di Eustachio',
                'Muscolo Stapedio',
                'Coclea',
                'Labirinto'
            ],
            right: 'Tromba di Eustachio'
        },
        q7 = {
            text: 'Quali fra questi elementi dell\'orecchio serve per restare in equilibrio?',
            answers: [
                'Padiglione auricolare',
                'Condotto uditivo ',
                'Timpano',
                'Martello',
                'Incudine',
                'Staffa',
                'Tromba di Eustachio',
                'Muscolo Stapedio',
                'Coclea',
                'Labirinto'
            ],
            right: 'Labirinto'
        },
        q8 = {
            text: 'Quali fra questi elementi dell\'orecchio serve a trasformare i segnali sonori in nervosi?',
            answers: [
                'Padiglione auricolare',
                'Condotto uditivo ',
                'Timpano',
                'Martello',
                'Incudine',
                'Staffa',
                'Tromba di Eustachio',
                'Muscolo Stapedio',
                'Coclea',
                'Labirinto'
            ],
            right: 'Coclea'
        },
        q9 = {
            text: 'Martello, Incudine e Staffa sono...',
            answers: [
                'Un sistema rigido e solidale per trasmettere le vibrazioni dall\'orecchio esterno a quello interno',
                'Tre parti molli attraverso cui la vibrazione viene amplificata',
                'Un sistema di leve per trasmettere le vibrazioni dall\'orecchio esterno a quello interno',
                'Un sistema che permette di amplificare le piccole vibrazioni',
                'Un sistema per proteggere l\'orecchio da suoni ad alta intensità',
                'Situati nell\'orecchio esterno',
                'Situati nell\'orecchio medio',
                'Situati nell\'orecchio interno'
            ],
            right: [
                'Un sistema di leve per trasmettere le vibrazioni dall\'orecchio esterno a quello interno',
                'Un sistema che permette di amplificare le piccole vibrazioni',
                'Situati nell\'orecchio medio'
            ]
        },
        q10 = {
            text: 'Secondo il dlgs 81/2008, al di sotto degli 80dB...',
            answers: [
                'Non c\'è obbligo di utilizzare i DPI (che non sono neanche consigliati)',
                'I DPI sono consigliati',
                'I DPI sono obbligatori',
                'L\'informazione e la formazione sono consigliate ma non obbligatorie',
                'C\'è obbligo di informazione e formazione'
            ],
            right: [
                'Non c\'è obbligo di utilizzare i DPI (che non sono neanche consigliati)',
                'L\'informazione e la formazione sono consigliate ma non obbligatorie'
            ]
        },
        q11 = {
            text: 'Secondo il dlgs 81/2008, fra 80 e 85 dB...',
            answers: [
                'Non c\'è obbligo di utilizzare i DPI (che non sono neanche consigliati)',
                'I DPI sono consigliati',
                'I DPI sono obbligatori',
                'L\'informazione e la formazione sono consigliate ma non obbligatorie',
                'C\'è obbligo di informazione e formazione'
            ],
            right: [
                'I DPI sono consigliati',
                'C\'è obbligo di informazione e formazione'
            ]
        },
        q12 = {
            text: 'Secondo il dlgs 81/2008, oltre 85 dB...',
            answers: [
                'Non c\'è obbligo di utilizzare i DPI (che non sono neanche consigliati)',
                'I DPI sono consigliati',
                'I DPI sono obbligatori',
                'L\'informazione e la formazione sono consigliate ma non obbligatorie',
                'C\'è obbligo di informazione e formazione'
            ],
            right: [
                'I DPI sono obbligatori',
                'C\'è obbligo di informazione e formazione'
            ]
        },
        q13 = {
            text: 'Secondo il dlgs 81/2008, il limite massimo di 87dB si riferisce a...',
            answers: [
                'Una condizione in cui non è più consentito lavorare',
                'I dB percepiti senza DPI',
                'I dB percepiti se muniti di DPI',
                'Un limite vicinissimo al limite massimo di 85dB oltre il quale adottare i DPC',
                'Il limite dopo il quale i DPC diventano da consigliati a obbligatori'
            ],
            right: [
                'Una condizione in cui non è più consentito lavorare',
                'I dB percepiti se muniti di DPI'
            ]
        },
        q14 = {
            text: 'Il Quizzone finale: quali fra queste affermazioni sulla coclea sono vere?',
            answers: [
                'La coclea è piena di un liquido',
                'Nella coclea, i canali superiore, inferiore e mediano sono collegati',
                'La vibrazione che entra nella coclea si esaurisce al suo interno dopo che viene recepita',
                'La membrana tettoria copre la membrana basilare',
                'La membrana basilare è più spessa vicino all\'orecchio medio',
                'La membrana basilare è più spessa vicino l\'elicotrema (il centro della chiocciola)',
                'Nell\'organo di Corti ci sono circa 2.000 ciglia',
                'Nell\'organo di Corti ci sono circa 20.000 ciglia',
                'Nell\'organo di Corti ci sono circa 200.000 ciglia',
                'Nell\'organo di Corti ci sono circa 2.000.000 di ciglia',
                'Le basse frequenze sono percepite meglio vicino all\'orecchio medio',
                'Le basse frequenze sono percepite meglio vicino l\'elicotrema (il centro della chiocciola)'
            ],
            right: [
                'La staffa è in contatto con la finestra ovale',
                'La vibrazione entra nella coclea dal canale superiore (rampa vestibulare)',
                'La coclea è piena di un liquido',
                'Nella coclea, i canali superiore, inferiore e mediano sono collegati',
                'La membrana tettoria copre la membrana basilare',
                'La membrana basilare è più spessa vicino l\'elicotrema (il centro della chiocciola)',
                'Nell\'organo di Corti ci sono circa 20.000 ciglia',
                'Le basse frequenze sono percepite meglio vicino l\'elicotrema (il centro della chiocciola)'
            ]
        }
    ],
    auto8 = [
        q1 = {
            text: 'La Frequenza influisce su...',
            answers: [
                'Volume alto o basso',
                'Suono acuto o grave',
                'Timbro o armonia del suono'
            ],
            right: 'Suono acuto o grave'
        },
        q2 = {
            text: 'L\'Ampiezza influisce su...',
            answers: [
                'Suono acuto o grave',
                'Timbro o armonia del suono',
                'Volume alto o basso'
            ],
            right: 'Volume alto o basso'
        },
        q3 = {
            text: 'Lo Spettro influisce su...',
            answers: [
                'Suono acuto o grave',
                'Timbro o armonia del suono',
                'Volume alto o basso'
            ],
            right: 'Timbro o armonia del suono'
        },
        q4 = {
            text: 'Nella definizione di Sound Intensity Level (SIL) il valore di intensità I_0 ("i con zero") è riferito ad un\'onda di frequenza...',
            answers: [
                '0 Hz',
                '50 Hz',
                '100 Hz',
                '250 Hz',
                '500 Hz',
                '1000 Hz',
                '5000 Hz',
                '10kHz',
                '20kHz'
            ],
            right: '1000 Hz'
        },
        q5 = {
            text: 'Una frequenza pari a 1kHz con 50dB SIL ha un volume di...',
            answers: [
                '0 phon',
                '10 phon',
                '20 phon',
                '30 phon',
                '40 phon',
                '50 phon'
            ],
            right: '50 phon'
        },
        q6 = {
            text: 'Una frequenza pari a 1kHz con 30dB SIL ha un volume di...',
            answers: [
                '0 phon',
                '10 phon',
                '20 phon',
                '30 phon',
                '40 phon',
                '50 phon'
            ],
            right: '30 phon'
        },
        q7 = {
            text: 'Rispetto alla Figura 1, la zona tratteggiata a sinistra indica...',
            answers: [
                'I suoni percepiti col volume più alto',
                'Suoni non udibili',
                'I suoni a bassa frequenza',
                'Tutti suoni a 40 phon',
                'Suoni che hanno bisogno di un\'energia maggiore per essere uditi'
            ],
            right: [
                'I suoni a bassa frequenza',
                'Suoni che hanno bisogno di un\'energia maggiore per essere uditi'
            ],
            img: 'assets/img/fig3.png'
        },
        q8 = {
            text: 'Rispetto alla Figura 1, i punti P, Q, e R indicano...',
            answers: [
                '3 suoni a 50dB',
                '3 suoni percepiti con lo stesso volume',
                '3 suoni con la stessa frequenza',
                'Lo stesso suono'
            ],
            right: '3 suoni percepiti con lo stesso volume',
            img: 'assets/img/fig3.png'
        },
        q9 = {
            text: 'Rispetto alla Figura 1, qual è il range di frequenze in cui l\'orecchio umano risulta essere più sensibile?',
            answers: [
                'Quello in cui l\'energia richiesta per udire il suono è minore',
                'Quelle in cui l\'energia richiesta per udire il suono è maggiore',
                'Quelle nella zona tratteggiata a sinistra',
                'Fra 100 e 1000 Hz',
                'Fra 2000 e 10000Hz'
            ],
            right: [
                'Quello in cui l\'energia richiesta per udire il suono è minore',
                'Fra 2000 e 10000Hz'
            ],
            img: 'assets/img/fig3.png'
        },
        q10 = {
            text: 'Rispetto alla Figura 1, sono ammessi valori di dB negativi?',
            answers: [
                'Vero',
                'Falso'
            ],
            right: 'Vero',
            img: 'assets/img/fig3.png'
        },
        q11 = {
            text: 'Rispetto alla Figura 1, sono ammessi valori di phon negativi?',
            answers: [
                'Vero',
                'Falso'
            ],
            right: 'Falso',
            img: 'assets/img/fig3.png'
        },
        q12 = {
            text: 'Per "frequenza fantasma" si intende...',
            answers: [
                'La frequenza fondamentale di un suono all\'interno di uno spettro complesso in cui non si è in grado di distinguere un\'unica frequenza dominante',
                'La frequenza di un rumore che attenua il segnale sonoro',
                'Un suono ad altissima frequenza che ne attenua uno a bassissima frequenza'
            ],
            right: 'La frequenza fondamentale di un suono all\'interno di uno spettro complesso in cui non si è in grado di distinguere un\'unica frequenza dominante'
        },
        q13 = {
            text: 'Indicare le affermazioni corrette:',
            answers: [
                'La differenza ITD è relativa alla frequenza',
                'La differenza ITD è relativa alla fase',
                'La differenza ITD è relativa all\'ampiezza',
                'La differenza ITD è relativa allo spettro',
                'La differenza IID (o ILD) è relativa alla frequenza',
                'La differenza IID (o ILD) è relativa alla fase',
                'La differenza IID (o ILD) è relativa all\'ampiezza',
                'La differenza IID (o ILD) è relativa allo spettro'
            ],
            right: [
                'La differenza ITD è relativa alla fase',
                'La differenza IID (o ILD) è relativa all\'ampiezza',
                'La differenza IID (o ILD) è relativa allo spettro'
            ]
        }
    ],
    auto9 = [
        q1 = {
            text: 'Il principale determinante fisico del timbro è...',
            answers: [
                'La frequenza fondamentale',
                'La frequenza di Nyquist',
                'L\'armonica fondamentale',
                'Il contenuto armonico'
            ],
            right: 'Il contenuto armonico'
        },
        q2 = {
            text: 'Indicare le affermazioni vere:',
            answers: [
                'Il tremolo è una variazione periodica della frequenza di una nota',
                'Il tremolo è una variazione periodica dell\'ampiezza di una nota',
                'Il vibrato è una variazione periodica dell\'altezza di una nota',
                'Il vibrato è una variazione periodica dell\'ampiezza di una nota'
            ],
            right: [
                'Il tremolo è una variazione periodica dell\'ampiezza di una nota',
                'Il vibrato è una variazione periodica dell\'altezza di una nota'
            ]
        },
        q3 = {
            text: 'Facendo riferimento alla Figura 1, indicare l\'affermazione vera:',
            answers: [
                'La traccia A rappresenta un Vibrato, mentre la traccia B rappresenta un Tremolo',
                'La traccia A rappresenta un Tremolo, mentre la traccia B rappresenta un Vibrato'
            ],
            right: 'La traccia A rappresenta un Tremolo, mentre la traccia B rappresenta un Vibrato',
            img: 'assets/img/fig4.png'
        },
        q4 = {
            text: 'La larghezza di banda critica di un segnale da 350Hz è...',
            answers: [
                'Più di 5000Hz',
                '5000Hz',
                '2500Hz',
                '1000Hz',
                '750Hz',
                '500Hz',
                '250Hz',
                '100Hz',
                '0Hz'
            ],
            right: '100Hz'
        },
        q5 = {
            text: 'La larghezza di banda critica di un segnale da 1250Hz è...',
            answers: [
                'Più di 5000Hz',
                '5000Hz',
                '2500Hz',
                '1000Hz',
                '750Hz',
                '500Hz',
                '250Hz',
                '100Hz',
                '0Hz'
            ],
            right: '250Hz'
        },
        q6 = {
            text: 'La larghezza di banda critica di un segnale da 15kHz è...',
            answers: [
                'Più di 5000Hz',
                '5000Hz',
                '2500Hz',
                '1000Hz',
                '750Hz',
                '500Hz',
                '250Hz',
                '100Hz',
                '0Hz'
            ],
            right: 'Più di 5000Hz'
        },
        q7 = {
            text: 'Quante sono le bande critiche definite nella Scala di Bark mostrata a lezione?',
            answers: [
                '14',
                '21',
                '22',
                '23',
                '24',
                '25'
            ],
            right: '24'
        },
        q8 = {
            text: 'Facendo riferimento alla Figura 2, quali sono le bande più piccole?',
            answers: [
                'Quelle a sinistra del grafico',
                'Quelle a destra nel grafico',
                'Bel tentativo! Tutte le bande di Bark hanno la stessa grandezza!'
            ],
            right: '24',
            img: 'assets/img/fig5.png'
        },
        q9 = {
            text: 'Con riferimento alla Figura 3, quali di queste frasi sul mascheramento non tonale con rumore a banda larga sono vere:',
            answers: [
                'Test tone emessi con 60dB sono mascherati da rumore a 60dB',
                'Test tone emessi con 60dB sono mascherati da rumore a 50dB',
                'Test tone emessi con 60dB potrebbero essere mascherati da rumore a 40dB',
                'Test tone emessi con 60dB sono mascherati da rumore a 30dB',
                'Test tone emessi con 60dB sono mascherati da rumore a 20dB'
            ],
            right: [
                'Test tone emessi con 60dB sono mascherati da rumore a 60dB',
                'Test tone emessi con 60dB sono mascherati da rumore a 50dB',
                'Test tone emessi con 60dB potrebbero essere mascherati da rumore a 40dB',
            ],
            img: 'assets/img/fig6.png'
        },
        q10 = {
            text: 'Aiutandoti con la Figura 3, quali di queste frasi sul mascheramento non tonale con rumore a banda larga sono vere:',
            answers: [
                'Questo mascheramento mostra un comportamento lineare',
                'Questo mascheramento mostra un comportamento quadratico',
                'Questo mascheramento mostra un comportamento logaritmico'
            ],
            right: 'Questo mascheramento mostra un comportamento lineare',
            img: 'assets/img/fig6.png'
        },
        q11 = {
            text: 'Aiutandoti con la Figura 3, in generale, il mascheramento non tonale con rumore a banda larga...',
            answers: [
                'Maschera meglio le basse frequenze',
                'Maschera meglio le frequenze medie',
                'Maschera meglio le alte frequenze',
                'Maschera in maniera simile tutte le frequenze',
                'Nessuna delle precedenti'
            ],
            right: 'Maschera in maniera simile tutte le frequenze',
            img: 'assets/img/fig6.png'
        },
        q12 = {
            text: 'Con riferimento alla Figura 4, quali di queste frasi sul mascheramento non tonale con rumore a banda stretta sono vere:',
            answers: [
                'Test tone di 5kHz emessi con 60dB sono mascherati da rumore a 80dB',
                'Test tone di 2kHz emessi con 40dB sono mascherati da rumore a 80dB',
                'Test tone di 0.5kHz emessi con 20dB sono mascherati da rumore a 60dB',
                'Test tone di 10kHz emessi con 20dB sono mascherati da rumore a 80dB',
                'Test tone di 10kHz emessi con 20dB sono mascherati da rumore a 100dB',
                'Test tone di 10kHz emessi con 30dB sono mascherati da rumore a 100dB',
                'Test tone di 10kHz emessi con 40dB sono mascherati da rumore a 100dB'
            ],
            right: [
                'Test tone di 2kHz emessi con 40dB sono mascherati da rumore a 80dB',
                'Test tone di 10kHz emessi con 20dB sono mascherati da rumore a 100dB',
                'Test tone di 10kHz emessi con 30dB sono mascherati da rumore a 100dB'
            ],
            img: 'assets/img/fig7.png'
        },
        q13 = {
            text: 'Aiutandoti con la Figura 4, in generale, il mascheramento non tonale con rumore a banda stretta...',
            answers: [
                'Maschera meglio le basse frequenze',
                'Maschera meglio le frequenze medie',
                'Maschera meglio le alte frequenze',
                'Maschera in maniera simile tutte le frequenze',
                'Nessuna delle precedenti'
            ],
            right: 'Maschera meglio le alte frequenze',
            img: 'assets/img/fig7.png'
        },
        q14 = {
            text: 'Con riferimento alla Figura 5, quali di queste frasi sul mascheramento tonale con tono semplice sono vere:',
            answers: [
                'Test tone di 1.14kHz emessi con 30dB sono mascherati da rumore a 60dB',
                'Test tone di 1.14kHz emessi con 30dB sono mascherati da rumore a 50dB',
                'Test tone di 1.14kHz emessi con 20dB sono mascherati da rumore a 60dB',
                'Test tone di 1.14kHz emessi con 20dB sono mascherati da rumore a 50dB',
                'Test tone di 0.85kHz emessi con 30dB sono mascherati da rumore a 60dB',
                'Test tone di 0.85kHz emessi con 30dB sono mascherati da rumore a 50dB',
                'Test tone di 0.85kHz emessi con 30dB sono mascherati da rumore a 40dB'
            ],
            right: [
                'Test tone di 1.14kHz emessi con 30dB sono mascherati da rumore a 60dB',
                'Test tone di 1.14kHz emessi con 20dB sono mascherati da rumore a 60dB',
                'Test tone di 1.14kHz emessi con 20dB sono mascherati da rumore a 50dB'
            ],
            img: 'assets/img/fig8.png'
        },
        q15 = {
            text: 'Aiutandoti con la Figura 5, in generale, il mascheramento tonale con tono semplice...',
            answers: [
                'Maschera sempre meglio le basse frequenze',
                'Maschera sempre meglio le frequenze medie',
                'Maschera sempre meglio le alte frequenze',
                'Maschera in maniera simile tutte le frequenze',
                'Nessuna delle precedenti'
            ],
            right: 'Maschera sempre meglio le frequenze medie',
            img: 'assets/img/fig8.png'
        },
        q16 = {
            text: 'Confrontando mascheramento non tonale con rumore a banda stretta e mascheramento tonale con tono semplice, quale fra queste frasi è vera?',
            answers: [
                'Il mascheramento tonale impone una soglia più alta, ma è meno efficace per le alte frequenze',
                'Il mascheramento non tonale impone una soglia più alta, ma è meno efficace per le alte frequenze'
            ],
            right: 'Il mascheramento non tonale impone una soglia più alta, ma è meno efficace per le alte frequenze'
        },
        q17 = {
            text: 'Nella "Tuning Curve" del mascheramento tonale con tono semplice...',
            answers: [
                'Il test tone è fisso',
                'Il test tone è variabile',
                'il masking tone è fisso',
                'il masking tone è variabile'
            ],
            right: [
                'Il test tone è fisso',
                'il masking tone è variabile',
            ]
        }
    ]
];