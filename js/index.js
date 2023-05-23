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
        image: 'https://drive.google.com/uc?export=download&id=1e4J6KT6xVrWqyim_MhavSOzBKDOck1Vo',
    },
    {
        id: 6,
        image: 'https://drive.google.com/uc?export=download&id=1VR4WJtXcran8w3sl4E_wMtu5o3RgNssD',
    },
    {
        id: 7,
        image: 'https://drive.google.com/uc?export=download&id=1lLjjpIjmLUJCWKLzuiwNo8bPumnOYIp5',
    },
    {
        id: 8,
        image: 'https://drive.google.com/uc?export=download&id=1OWiMJUNsM1Ig6wfwdmhiY_fOq7uvUqjD',
    },
    {
        id: 9,
        image: 'https://drive.google.com/uc?export=download&id=1e4J6KT6xVrWqyim_MhavSOzBKDOck1Vo',
    },
    {
        id: 10,
        image: 'https://drive.google.com/uc?export=download&id=1VR4WJtXcran8w3sl4E_wMtu5o3RgNssD',
    },
    {
        id: 11,
        image: 'https://drive.google.com/uc?export=download&id=1lLjjpIjmLUJCWKLzuiwNo8bPumnOYIp5',
    },
    {
        id: 12,
        image: 'https://drive.google.com/uc?export=download&id=1OWiMJUNsM1Ig6wfwdmhiY_fOq7uvUqjD',
    },
    {
        id: 13,
        image: 'https://drive.google.com/uc?export=download&id=1e4J6KT6xVrWqyim_MhavSOzBKDOck1Vo',
    },
    {
        id: 14,
        image: 'https://drive.google.com/uc?export=download&id=1VR4WJtXcran8w3sl4E_wMtu5o3RgNssD',
    },
    {
        id: 15,
        image: 'https://drive.google.com/uc?export=download&id=1lLjjpIjmLUJCWKLzuiwNo8bPumnOYIp5',
    },
    {
        id: 16,
        image: 'https://drive.google.com/uc?export=download&id=1OWiMJUNsM1Ig6wfwdmhiY_fOq7uvUqjD',
    },
    {
        id: 17,
        image: 'https://drive.google.com/uc?export=download&id=1e4J6KT6xVrWqyim_MhavSOzBKDOck1Vo',
    },
    {
        id: 18,
        image: 'https://drive.google.com/uc?export=download&id=1VR4WJtXcran8w3sl4E_wMtu5o3RgNssD',
    },
    {
        id: 19,
        image: 'https://drive.google.com/uc?export=download&id=1lLjjpIjmLUJCWKLzuiwNo8bPumnOYIp5',
    },
    {
        id: 20,
        image: 'https://drive.google.com/uc?export=download&id=1OWiMJUNsM1Ig6wfwdmhiY_fOq7uvUqjD',
    },
    {
        id: 21,
        image: 'https://drive.google.com/uc?export=download&id=1e4J6KT6xVrWqyim_MhavSOzBKDOck1Vo',
    },
    {
        id: 22,
        image: 'https://drive.google.com/uc?export=download&id=1VR4WJtXcran8w3sl4E_wMtu5o3RgNssD',
    },
    {
        id: 23,
        image: 'https://drive.google.com/uc?export=download&id=1lLjjpIjmLUJCWKLzuiwNo8bPumnOYIp5',
    },
    {
        id: 24,
        image: 'https://drive.google.com/uc?export=download&id=1OWiMJUNsM1Ig6wfwdmhiY_fOq7uvUqjD',
    },
    {
        id: 25,
        image: 'https://drive.google.com/uc?export=download&id=1e4J6KT6xVrWqyim_MhavSOzBKDOck1Vo',
    },
    {
        id: 26,
        image: 'https://drive.google.com/uc?export=download&id=1VR4WJtXcran8w3sl4E_wMtu5o3RgNssD',
    },
    {
        id: 27,
        image: 'https://drive.google.com/uc?export=download&id=1lLjjpIjmLUJCWKLzuiwNo8bPumnOYIp5',
    },
    {
        id: 28,
        image: 'https://drive.google.com/uc?export=download&id=1OWiMJUNsM1Ig6wfwdmhiY_fOq7uvUqjD',
    },
    {
        id: 29,
        image: 'https://drive.google.com/uc?export=download&id=1e4J6KT6xVrWqyim_MhavSOzBKDOck1Vo',
    },
    {
        id: 30,
        image: 'https://drive.google.com/uc?export=download&id=1VR4WJtXcran8w3sl4E_wMtu5o3RgNssD',
    },
    {
        id: 31,
        image: 'https://drive.google.com/uc?export=download&id=1lLjjpIjmLUJCWKLzuiwNo8bPumnOYIp5',
    },
    {
        id: 32,
        image: 'https://drive.google.com/uc?export=download&id=1OWiMJUNsM1Ig6wfwdmhiY_fOq7uvUqjD',
    },
    {
        id: 33,
        image: 'https://drive.google.com/uc?export=download&id=1e4J6KT6xVrWqyim_MhavSOzBKDOck1Vo',
    },
    {
        id: 34,
        image: 'https://drive.google.com/uc?export=download&id=1VR4WJtXcran8w3sl4E_wMtu5o3RgNssD',
    },
    {
        id: 35,
        image: 'https://drive.google.com/uc?export=download&id=1lLjjpIjmLUJCWKLzuiwNo8bPumnOYIp5',
    },
    {
        id: 36,
        image: 'https://drive.google.com/uc?export=download&id=1OWiMJUNsM1Ig6wfwdmhiY_fOq7uvUqjD',
    },
    {
        id: 37,
        image: 'https://drive.google.com/uc?export=download&id=1e4J6KT6xVrWqyim_MhavSOzBKDOck1Vo',
    },
    {
        id: 38,
        image: 'https://drive.google.com/uc?export=download&id=1VR4WJtXcran8w3sl4E_wMtu5o3RgNssD',
    },
    {
        id: 39,
        image: 'https://drive.google.com/uc?export=download&id=1lLjjpIjmLUJCWKLzuiwNo8bPumnOYIp5',
    },
    {
        id: 40,
        image: 'https://drive.google.com/uc?export=download&id=1OWiMJUNsM1Ig6wfwdmhiY_fOq7uvUqjD',
    },
    {
        id: 41,
        image: 'https://drive.google.com/uc?export=download&id=1e4J6KT6xVrWqyim_MhavSOzBKDOck1Vo',
    },
    {
        id: 42,
        image: 'https://drive.google.com/uc?export=download&id=1VR4WJtXcran8w3sl4E_wMtu5o3RgNssD',
    },
    {
        id: 43,
        image: 'https://drive.google.com/uc?export=download&id=1lLjjpIjmLUJCWKLzuiwNo8bPumnOYIp5',
    },
    {
        id: 44,
        image: 'https://drive.google.com/uc?export=download&id=1OWiMJUNsM1Ig6wfwdmhiY_fOq7uvUqjD',
    },
    {
        id: 45,
        image: 'https://drive.google.com/uc?export=download&id=1e4J6KT6xVrWqyim_MhavSOzBKDOck1Vo',
    },
    {
        id: 46,
        image: 'https://drive.google.com/uc?export=download&id=1VR4WJtXcran8w3sl4E_wMtu5o3RgNssD',
    },
    {
        id: 47,
        image: 'https://drive.google.com/uc?export=download&id=1lLjjpIjmLUJCWKLzuiwNo8bPumnOYIp5',
    },
    {
        id: 48,
        image: 'https://drive.google.com/uc?export=download&id=1OWiMJUNsM1Ig6wfwdmhiY_fOq7uvUqjD',
    },
]

// let newArray = data.slice(0, 5);
let preparedArray = []
let shuffledData

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
        // console.log(allPieces)
        element.addEventListener('click', () => {
            if (running) {
                if ($(element).hasClass('turn')) {
                    return
                } else {
                    manageIinteractionsWithBoard($(element).data('id'))
                    element.classList.toggle('turn')
                }
                // alert($(element).data('id'))
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
                alert('Parabéns') // Fim de Jogo
            }
            break

        case 'medium':
            if (allTurned.length >= 12) {
                alert('Parabéns') // Fim de Jogo
            }
            break

        case 'large':
            if (allTurned.length >= 24) {
                alert('Parabéns') // Fim de Jogo
            }
            break
    }
}

function inicia() {
    startButtonFuction()
    allDifficultyChoiceFunction()
}

inicia()
