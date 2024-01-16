let indexBoardChoice
let previousPiece = '',
    nextPiece = ''
let duplicateArray
let running = true
let allTurned = []

const startButton = document.querySelector('#start')
const descriptionButton = document.querySelector('#description')
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
        image: 'https://i.ibb.co/ykZxRs6/a0.png',
    },
    {
        id: 2,
        image: 'https://i.ibb.co/X2bqxDD/a1.png',
    },
    {
        id: 3,
        image: 'https://i.ibb.co/g3g0qM7/a2.png',
    },
    {
        id: 4,
        image: 'https://i.ibb.co/dkZcZ6y/a3.png',
    },
    {
        id: 5,
        image: 'https://i.ibb.co/ZB48GgH/a4.png',
    },
    {
        id: 6,
        image: 'https://i.ibb.co/hgCkwdG/a5.png',
    },
    {
        id: 7,
        image: 'https://i.ibb.co/DKPqnLq/a6.png',
    },
    {
        id: 8,
        image: 'https://i.ibb.co/qgXkfnK/a7.png',
    },
    {
        id: 9,
        image: 'https://i.ibb.co/7bnZcKR/a8.png',
    },
    {
        id: 10,
        image: 'https://i.ibb.co/8Y2VKLx/a9.png',
    },
    {
        id: 11,
        image: 'https://i.ibb.co/Wt9wbqP/a10.png',
    },
    {
        id: 12,
        image: 'https://i.ibb.co/Mp2Gpqs/a11.png',
    },
    {
        id: 13,
        image: 'https://i.ibb.co/S51Ysvp/a12.png',
    },
    {
        id: 14,
        image: 'https://i.ibb.co/7n4t9jS/a13.png',
    },
    {
        id: 15,
        image: 'https://i.ibb.co/tsgPzJD/a14.png',
    },
    {
        id: 16,
        image: 'https://i.ibb.co/FBzfYtj/a15.png',
    },
    {
        id: 17,
        image: 'https://i.ibb.co/b6bWtj3/a16.png',
    },
    {
        id: 18,
        image: 'https://i.ibb.co/Sd9jtsb/a17.png',
    },
    {
        id: 19,
        image: 'https://i.ibb.co/v1wH8Y4/a18.png',
    },
    {
        id: 20,
        image: 'https://i.ibb.co/Xy1Rf8m/a19.png',
    },
    {
        id: 21,
        image: 'https://i.ibb.co/LN2xqj3/a20.png',
    },
    {
        id: 22,
        image: 'https://i.ibb.co/GHS8CV3/a21.png',
    },
    {
        id: 23,
        image: 'https://i.ibb.co/qNxvpJW/a22.png',
    },
    {
        id: 24,
        image: 'https://i.ibb.co/FmYW9BM/a23.png',
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
                    src="${shuffledData[i].image}"
                />

                <div class="piece-back"></div>
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
                    element.classList.toggle('turn')
                    manageIinteractionsWithBoard($(element).data('id'))
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
                $('.main-game .container-board-pieces').removeClass('medium')
                $('.main-game .container-board-pieces').removeClass('large')
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
                $('.main-game .container-board-pieces').removeClass('small')
                $('.main-game .container-board-pieces').removeClass('large')
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
                $('.main-game .container-board-pieces').removeClass('small')
                $('.main-game .container-board-pieces').removeClass('medium')
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
    descriptionButton.addEventListener('click', () => {
        $('.description-container').show()
        $('.container-close-btn').show()
    })
    aboutButton.addEventListener('click', () => {
        $('.about-container').show()
        $('.container-close-btn').show()
    })
    document
        .querySelector(
            '.main-game .completed-game .play-again .icon-play-again'
        )
        .addEventListener('click', routinePlayAgain)
    $('.container-close-btn').click(() => {
        $('.about-container ,.description-container').hide()
        $('.container-close-btn').hide()
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
        $('.piece.turn').removeClass('turn')

        $('.main-game .match-container').css('display', 'flex')
        $('.main-game .match-container').addClass('entrace')
        $('.main-game .match-container').on('animationend', function (anime) {
            if (
                anime.originalEvent.animationName == 'match-container-entrace'
            ) {
                $('.main-game .match-container').removeClass('entrace')
                $('.main-game .match-container').addClass('output')

                $('.main-game .match-container').on(
                    'animationend',
                    function (anime) {
                        if (
                            anime.originalEvent.animationName ==
                            'match-container-output'
                        ) {
                            $('.main-game .match-container').removeClass(
                                'output'
                            )
                            $('.main-game .match-container').css(
                                'display',
                                'none'
                            )
                        }
                    }
                )
            }
        })

        endGame()
    } else {
        running = false
        previousPiece = ''
        nextPiece = ''
        setTimeout(() => {
            $('.piece.turn').removeClass('turn')
            running = true
        }, 2000)
    }
}

function endGame() {
    switch (indexBoardChoice) {
        case 'small':
            if (allTurned.length >= 6) {
                running = false
                $('.completed-game').toggle()
            }
            break

        case 'medium':
            if (allTurned.length >= 12) {
                running = false
                $('.completed-game').toggle()
            }
            break

        case 'large':
            if (allTurned.length >= 24) {
                running = false
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

function loadingScreen() {
    var loading = $('.loading-screen')
    $('.loading-screen').addClass('ready')

    loading.on('animationend', function (anime) {
        if (anime.originalEvent.animationName == 'loading-screen-fade') {
            $('.loading-screen').removeClass('ready')
            $('.loading-screen').toggle()
        }
    })
}

function inicia() {
    loadingScreen()
    startButtonFuction()
    allDifficultyChoiceFunction()
}

window.addEventListener('load', inicia)
