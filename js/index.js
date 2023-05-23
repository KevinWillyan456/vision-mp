let indexBoardChoice
let previousPiece = '',
    nextPiece = ''
let duplicateArray
let running = true
let allTurned = []

const startButton = document.querySelector('#start')
const aboutButton = document.querySelector('#about')

const stageElementsStart = document.querySelectorAll(
    '.logo-game, .container-options, .theme-description'
)
const stageElementsBoardChoice = document.querySelectorAll(
    '.board-choice, .container-difficulty'
)
const containerBoardPieces = document.querySelector('.container-board-pieces')

const allDifficultyChoice = document.querySelectorAll(
    '.container-difficulty div'
)

const data = [
    {
        id: 1,
        image: 'https://drive.google.com/uc?export=download&id=1e4J6KT6xVrWqyim_MhavSOzBKDOck1Vo',
    },
    {
        id: 2,
        image: 'https://drive.google.com/uc?export=download&id=1VR4WJtXcran8w3sl4E_wMtu5o3RgNssD',
    },
    {
        id: 3,
        image: 'https://drive.google.com/uc?export=download&id=1lLjjpIjmLUJCWKLzuiwNo8bPumnOYIp5',
    },
    {
        id: 4,
        image: 'https://drive.google.com/uc?export=download&id=1OWiMJUNsM1Ig6wfwdmhiY_fOq7uvUqjD',
    },
    {
        id: 5,
        image: 'https://drive.google.com/uc?export=download&id=1FH3tOcV0dFOND4_wS0gKDZyq2j-jcgg_',
    },
    {
        id: 6,
        image: 'https://drive.google.com/uc?export=download&id=1PEan_f54sPk0aBSZsmc70aVEZVrFjjJY',
    },
    {
        id: 7,
        image: 'https://drive.google.com/uc?export=download&id=1KFJ4aqAQMyX0slOgRDKY_AbmIdFrspkX',
    },
    {
        id: 8,
        image: 'https://drive.google.com/uc?export=download&id=1fuMbBEl34z9uy7w_etxeINI9NlDrRqI_',
    },
    {
        id: 9,
        image: 'https://drive.google.com/uc?export=download&id=1FAU4LkB7N0hVcc3dsPAiF7wTGwXLDDRV',
    },
    {
        id: 10,
        image: 'https://drive.google.com/uc?export=download&id=1gsDDitY9-lNiL7diHpuMceC7uPH_Hrwe',
    },
    {
        id: 11,
        image: 'https://drive.google.com/uc?export=download&id=1UmZsMh5bF9qkTjRO7HjYQ6FQ01ITj2mZ',
    },
    {
        id: 12,
        image: 'https://drive.google.com/uc?export=download&id=1WD2L2vaP7W9FTw2ezRHDP9lA-cc0Zh70',
    },
    {
        id: 13,
        image: 'https://drive.google.com/uc?export=download&id=1WLI7UXhvZXsztyf2EWVvhMQ0TWiTtTm5',
    },
    {
        id: 14,
        image: 'https://drive.google.com/uc?export=download&id=1YK75zRLTbTwkHNeUR06pUlrNSZGd1Fpl',
    },
    {
        id: 15,
        image: 'https://drive.google.com/uc?export=download&id=1cedm_IUS7QM6aSUHqGmA9mtrvITUAGDf',
    },
    {
        id: 16,
        image: 'https://drive.google.com/uc?export=download&id=1pGwQhRRShjXUqMbBMI2sWHyYMzUsfBnh',
    },
    {
        id: 17,
        image: 'https://drive.google.com/uc?export=download&id=10qMaRJ0Rs1g_RhIWNKdAjPU97LtdoiCh',
    },
    {
        id: 18,
        image: 'https://drive.google.com/uc?export=download&id=1TUS3zPUa_RpkpeZ6YIR2NEJYDmvOzoB8',
    },
    {
        id: 19,
        image: 'https://drive.google.com/uc?export=download&id=1keZvoUy5w84CTUyD9G89Lkz82_8qwkuS',
    },
    {
        id: 20,
        image: 'https://drive.google.com/uc?export=download&id=1c5c6E3tUeI8Lq4glRKWbKi59iD6ZxS1C',
    },
    {
        id: 21,
        image: 'https://drive.google.com/uc?export=download&id=1fnas4xygZRB2rgDDmCPR-pM2-ljTgpn5',
    },
    {
        id: 22,
        image: 'https://drive.google.com/uc?export=download&id=18M7dCd6jkqVPFKlFZVUprBafsWHIYuXe',
    },
    {
        id: 23,
        image: 'https://drive.google.com/uc?export=download&id=1KFT-xw0lZ6sOe_-ZGoHdM8SmWg0SdaqF',
    },
    {
        id: 24,
        image: 'https://drive.google.com/uc?export=download&id=1ISGpCLl5V2kTQ2IP7hsTrZiYsT3xECSE',
    },
]

let preparedArray = []
let shuffledData = []

const gameConfig = {
    boardSize: {
        small: 12,
        medium: 24,
        large: 48,
    },
}

function generatorBoardPieces(size) {
    for (let i = 0; i < size; i++) {
        containerBoardPieces.innerHTML += `
            <div class="piece" data-id="${shuffledData[i].id}">
                <img style="display: none;"
                    src="https://drive.google.com/uc?export=download&id=1e4J6KT6xVrWqyim_MhavSOzBKDOck1Vo"
                />

                <div class="piece-back">${shuffledData[i].id}</div>
            </div>
        `
    }

    actionsInTheElement()
}

function actionsInTheElement() {
    const allPieces = document.querySelectorAll('.piece')

    allPieces.forEach((element) => {
        element.addEventListener('click', () => {
            if (running) {
                if (
                    $(element).hasClass('turn') ||
                    $(element).hasClass('turned')
                ) {
                    return
                } else {
                    manageIinteractionsWithBoard($(element).data('id'))
                    element.classList.toggle('turn')
                }
            }
        })
    })
}

function shuffleArray(array) {
    var shuffledArray = array.slice()

    for (var i = shuffledArray.length - 1; i > 0; i--) {
        var randomIndex = Math.floor(Math.random() * (i + 1))

        var temp = shuffledArray[i]
        shuffledArray[i] = shuffledArray[randomIndex]
        shuffledArray[randomIndex] = temp
    }
    return shuffledArray
}

function prepareArray(array) {
    switch (indexBoardChoice) {
        case 'small':
            duplicateArray = array.slice(0, 6)
            for (let i = 0; i < duplicateArray.length; i++) {
                preparedArray.push(duplicateArray[i])
                preparedArray.push(duplicateArray[i])
            }
            break

        case 'medium':
            duplicateArray = array.slice(0, 12)
            for (let i = 0; i < duplicateArray.length; i++) {
                preparedArray.push(duplicateArray[i])
                preparedArray.push(duplicateArray[i])
            }
            break

        case 'large':
            duplicateArray = array.slice(0, 24)
            for (let i = 0; i < duplicateArray.length; i++) {
                preparedArray.push(duplicateArray[i])
                preparedArray.push(duplicateArray[i])
            }
            break
    }
}

function allDifficultyChoiceFunction() {
    allDifficultyChoice.forEach((element) => {
        element.addEventListener('click', () => {
            const tipo = $(element).data('size')

            if (tipo == 'small') {
                indexBoardChoice = 'small'
                prepareArray(data)
                shuffledData = shuffleArray(preparedArray)
                generatorBoardPieces(gameConfig.boardSize.small)
                $('.main-frame').toggle()
                $('.main-game').toggle()
                $('.main-game .container-board-pieces').addClass('small')
                $('.main-game .title-game').html('Tabuleiro Pequeno')
                return
            }
            if (tipo == 'medium') {
                indexBoardChoice = 'medium'
                prepareArray(data)
                shuffledData = shuffleArray(preparedArray)
                generatorBoardPieces(gameConfig.boardSize.medium)
                $('.main-frame').toggle()
                $('.main-game').toggle()
                $('.main-game .container-board-pieces').addClass('medium')
                $('.main-game .title-game').html('Tabuleiro Médio')
                return
            }
            if (tipo == 'large') {
                indexBoardChoice = 'large'
                prepareArray(data)
                shuffledData = shuffleArray(preparedArray)
                generatorBoardPieces(gameConfig.boardSize.large)
                $('.main-frame').toggle()
                $('.main-game').toggle()
                $('.main-game .container-board-pieces').addClass('large')
                $('.main-game .title-game').html('Tabuleiro Grande')
                return
            }
        })
    })
}

function startButtonFuction() {
    startButton.addEventListener('click', () => {
        stageElementsStart.forEach((element) => $(element).toggle())
        stageElementsBoardChoice.forEach((element) => $(element).toggle())
    })
    document
        .querySelector(
            '.main-game .completed-game .play-again .icon-play-again'
        )
        .addEventListener('click', routinePlayAgain)
}

function manageIinteractionsWithBoard(value) {
    if (!previousPiece) {
        previousPiece = value
        return
    }

    nextPiece = value

    if (previousPiece == nextPiece) {
        $(`[data-id="${previousPiece}"]`).addClass('turned')
        allTurned.push(previousPiece)
        previousPiece = ''
        nextPiece = ''
        alert('MATCH!')
        endGame()
    } else {
        running = false
        previousPiece = ''
        nextPiece = ''
        setTimeout(() => {
            $('.piece.turn').removeClass('turn')
            running = true
        }, 1500)
    }
}

function endGame() {
    switch (indexBoardChoice) {
        case 'small':
            if (allTurned.length >= 6) {
                $('.completed-game').toggle()
            }
            break

        case 'medium':
            if (allTurned.length >= 12) {
                $('.completed-game').toggle()
            }
            break

        case 'large':
            if (allTurned.length >= 24) {
                $('.completed-game').toggle()
            }
            break
    }
}

function routinePlayAgain() {
    containerBoardPieces.innerHTML = ''
    previousPiece = ''
    nextPiece = ''
    running = true
    allTurned = []
    preparedArray = []
    shuffledData = []

    $('.main-game').toggle()
    $('.main-frame').toggle()
    $('.completed-game').toggle()
}

function inicia() {
    startButtonFuction()
    allDifficultyChoiceFunction()
}

inicia()
