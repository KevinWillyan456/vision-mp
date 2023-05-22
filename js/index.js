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
            <div class="piece">
                <img style="display: none;"
                    src="https://drive.google.com/uc?export=download&id=1e4J6KT6xVrWqyim_MhavSOzBKDOck1Vo"
                />

                <div class="piece-back"></div>
            </div>
        `
    }
}

generatorBoardPieces(gameConfig.boardSize.small)

startButton.addEventListener('click', () => {
    stageElementsStart.forEach((element) => $(element).toggle())
    stageElementsBoardChoice.forEach((element) => $(element).toggle())
})
