const startButton = document.querySelector('#start')
const aboutButton = document.querySelector('#about')

const stageElementsStart = document.querySelectorAll(
    '.logo-game, .container-options, .theme-description'
)
const stageElementsBoardChoice = document.querySelectorAll(
    '.board-choice, .container-difficulty'
)
const containerBoardPieces = document.querySelector('.container-board-pieces')

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
            <div class="piece" data-id="${data[i].id}">
                <img style="display: none;"
                    src="https://drive.google.com/uc?export=download&id=1e4J6KT6xVrWqyim_MhavSOzBKDOck1Vo"
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
        console.log(allPieces)
        element.addEventListener('click', () => {
            // alert($(element).data('id'))
            element.classList.toggle('turn')
        })
    })
}

const allDifficultyChoice = document.querySelectorAll(
    '.container-difficulty div'
)

allDifficultyChoice.forEach((element) => {
    element.addEventListener('click', () => {
        const tipo = $(element).data('size')

        console.log(tipo)

        if (tipo == 'small') {
            generatorBoardPieces(gameConfig.boardSize.small)
            $('.main-frame').toggle()
            $('.main-game').toggle()
            $('.main-game .container-board-pieces').addClass('small')
            $('.main-game .title-game').html('Tabuleiro Pequeno')
            return
        }
        if (tipo == 'medium') {
            generatorBoardPieces(gameConfig.boardSize.medium)
            $('.main-frame').toggle()
            $('.main-game').toggle()
            $('.main-game .container-board-pieces').addClass('medium')
            $('.main-game .title-game').html('Tabuleiro Médio')
            return
        }
        if (tipo == 'large') {
            generatorBoardPieces(gameConfig.boardSize.large)
            $('.main-frame').toggle()
            $('.main-game').toggle()
            $('.main-game .container-board-pieces').addClass('large')
            $('.main-game .title-game').html('Tabuleiro Grande')
            return
        }
    })
})

// generatorBoardPieces(gameConfig.boardSize.small)

startButton.addEventListener('click', () => {
    stageElementsStart.forEach((element) => $(element).toggle())
    stageElementsBoardChoice.forEach((element) => $(element).toggle())
})
