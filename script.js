document.addEventListener('DOMContentLoaded', () => {
        //card options
        const cardArray = [{
                name: 'tom',
                img: 'images/tom.png'
        }, {
                name: 'angle',
                img: 'images/angle.png'
        }, {
                name: 'anglelite',
                img: 'images/anglelite.png'
        }, {
                name: 'batman',
                img: 'images/batman.png'
        }, {
                name: 'boy',
                img: 'images/boy.png'
        }, {
                name: 'doremon',
                img: 'images/doremon.png'
        }, {
                name: 'jerry',
                img: 'images/jerry.png'
        }, {
                name: 'monky',
                img: 'images/monky.png'
        }, {
                name: 'panda',
                img: 'images/panda.png'
        }, {
                name: 'picaho',
                img: 'images/picaho.png'
        }, {
                name: 'tom',
                img: 'images/tom.png'
        }, {
                name: 'angle',
                img: 'images/angle.png'
        }, {
                name: 'anglelite',
                img: 'images/anglelite.png'
        }, {
                name: 'batman',
                img: 'images/batman.png'
        }, {
                name: 'boy',
                img: 'images/boy.png'
        }, {
                name: 'doremon',
                img: 'images/doremon.png'
        }, {
                name: 'jerry',
                img: 'images/jerry.png'
        }, {
                name: 'monky',
                img: 'images/monky.png'
        }, {
                name: 'panda',
                img: 'images/panda.png'
        }, {
                name: 'picaho',
                img: 'images/picaho.png'
        }, {
                name: 'tom',
                img: 'images/tom.png'
        }, {
                name: 'angle',
                img: 'images/angle.png'
        }, {
                name: 'anglelite',
                img: 'images/anglelite.png'
        }, {
                name: 'batman',
                img: 'images/batman.png'
        }, {
                name: 'boy',
                img: 'images/boy.png'
        }, {
                name: 'doremon',
                img: 'images/doremon.png'
        }, {
                name: 'jerry',
                img: 'images/jerry.png'
        }, {
                name: 'monky',
                img: 'images/monky.png'
        }, {
                name: 'panda',
                img: 'images/panda.png'
        }, {
                name: 'picaho',
                img: 'images/picaho.png'
        }, {
                name: 'tom',
                img: 'images/tom.png'
        }, {
                name: 'angle',
                img: 'images/angle.png'
        }, {
                name: 'anglelite',
                img: 'images/anglelite.png'
        }, {
                name: 'batman',
                img: 'images/batman.png'
        }, {
                name: 'boy',
                img: 'images/boy.png'
        }, {
                name: 'doremon',
                img: 'images/doremon.png'
        }, {
                name: 'jerry',
                img: 'images/jerry.png'
        }, {
                name: 'monky',
                img: 'images/monky.png'
        }, {
                name: 'panda',
                img: 'images/panda.png'
        }, {
                name: 'picaho',
                img: 'images/picaho.png'
        }, {
                name: 'picaho',
                img: 'images/picaho.png'
        }, {
                name: 'picaho',
                img: 'images/picaho.png'
        }];

        cardArray.sort(() => 0.5 - Math.random());

        const grid = document.querySelector('.grid');
        const resultDisplay = document.getElementById('reasult');
        console.log(resultDisplay);
        let cardsChosen = [];
        let cardsChosenId = [];
        let cardsWon = [];

        //create your board
        function createBoard() {
                for (let i = 0; i < cardArray.length; i++) {
                        const card = document.createElement('img');
                        card.setAttribute('src', 'images/blank.jpg');
                        card.setAttribute('data-id', i);
                        card.addEventListener('click', flipCard);
                        grid.appendChild(card);
                }
        }

        //checkforMatch
        function checkForMatch() {
                let cardimage = document.querySelectorAll('img')
                const optionOneId = cardsChosenId[0]
                const optionTwoId = cardsChosenId[1]

                if (optionOneId == optionTwoId) {
                        cardimage[optionOneId].setAttribute('src', 'images/blank.jpg')
                        cardimage[optionTwoId].setAttribute('src', 'images/blank.jpg')
                } else if (cardsChosen[0] === cardsChosen[1]) {
                        cardimage[optionOneId].setAttribute('src', 'images/white.png')
                        cardimage[optionTwoId].setAttribute('src', 'images/white.png')
                        cardimage[optionOneId].removeEventListener('click', flipCard)
                        cardimage[optionTwoId].removeEventListener('click', flipCard)
                        cardsWon.push(cardsChosen);
                } else {
                        cardimage[optionOneId].setAttribute('src', 'images/blank.jpg')
                        cardimage[optionTwoId].setAttribute('src', 'images/blank.jpg')
                        let count = 0;
                        count++;
                        if (count == 2) {
                                cardsWon.pop(cardsChosen)
                        }
                }
                cardsChosen = []
                cardsChosenId = []

                resultDisplay.textContent = cardsWon.length
                if (cardsWon.length === cardArray.length / 2) {
                        resultDisplay.textContent = 'Congratulations! You found them all!'
                }
        }

        //flip your card
        function flipCard() {
                let idCard = this.getAttribute('data-id');
                cardsChosen.push(cardArray[idCard].name);
                cardsChosenId.push(idCard);
                this.setAttribute('src', cardArray[idCard].img);
                if (cardsChosen.length === 2) {
                        setTimeout(checkForMatch, 500);
                }
        }


        createBoard()
});