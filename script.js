document.addEventListener('DOMContentLoaded', () => {
        //card options
        const cardArray = [{
                name: 'tom',
                img: 'images/tom.jpg'
        }, {
                name: 'angle',
                img: 'images/angle.jpg'
        }, {
                name: 'anglelite',
                img: 'images/anglelite.jpg'
        }, {
                name: 'batman',
                img: 'images/batman.jpg'
        }, {
                name: 'boy',
                img: 'images/boy.jpg'
        }, {
                name: 'doremon',
                img: 'images/doremon.jpg'
        }, {
                name: 'jerry',
                img: 'images/jerry.jpg'
        }, {
                name: 'monky',
                img: 'images/monky.jpg'
        }, {
                name: 'panda',
                img: 'images/panda.jpg'
        }, {
                name: 'picaho',
                img: 'images/picaho.jpg'
        }, {
                name: 'tom',
                img: 'images/tom.jpg'
        }, {
                name: 'angle',
                img: 'images/angle.jpg'
        }, {
                name: 'anglelite',
                img: 'images/anglelite.jpg'
        }, {
                name: 'batman',
                img: 'images/batman.jpg'
        }, {
                name: 'boy',
                img: 'images/boy.jpg'
        }, {
                name: 'doremon',
                img: 'images/doremon.jpg'
        }, {
                name: 'jerry',
                img: 'images/jerry.jpg'
        }, {
                name: 'monky',
                img: 'images/monky.jpg'
        }, {
                name: 'panda',
                img: 'images/panda.jpg'
        }, {
                name: 'picaho',
                img: 'images/picaho.jpg'
        }, {
                name: 'tom',
                img: 'images/tom.jpg'
        }, {
                name: 'angle',
                img: 'images/angle.jpg'
        }, {
                name: 'anglelite',
                img: 'images/anglelite.jpg'
        }, {
                name: 'batman',
                img: 'images/batman.jpg'
        }, {
                name: 'boy',
                img: 'images/boy.jpg'
        }, {
                name: 'doremon',
                img: 'images/doremon.jpg'
        }, {
                name: 'jerry',
                img: 'images/jerry.jpg'
        }, {
                name: 'monky',
                img: 'images/monky.jpg'
        }, {
                name: 'panda',
                img: 'images/panda.jpg'
        }, {
                name: 'picaho',
                img: 'images/picaho.jpg'
        }, {
                name: 'tom',
                img: 'images/tom.jpg'
        }, {
                name: 'angle',
                img: 'images/angle.jpg'
        }, {
                name: 'anglelite',
                img: 'images/anglelite.jpg'
        }, {
                name: 'batman',
                img: 'images/batman.jpg'
        }, {
                name: 'boy',
                img: 'images/boy.jpg'
        }, {
                name: 'doremon',
                img: 'images/doremon.jpg'
        }, {
                name: 'jerry',
                img: 'images/jerry.jpg'
        }, {
                name: 'monky',
                img: 'images/monky.jpg'
        }, {
                name: 'panda',
                img: 'images/panda.jpg'
        }, {
                name: 'picaho',
                img: 'images/picaho.jpg'
        }, {
                name: 'picaho',
                img: 'images/picaho.jpg'
        }, {
                name: 'picaho',
                img: 'images/picaho.jpg'
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
                        card.setAttribute('src', 'images/blank.gif');
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
                        cardimage[optionOneId].setAttribute('src', 'images/blank.gif')
                        cardimage[optionTwoId].setAttribute('src', 'images/blank.gif')
                } else if (cardsChosen[0] === cardsChosen[1]) {
                        cardimage[optionOneId].setAttribute('src', 'images/white.png')
                        cardimage[optionTwoId].setAttribute('src', 'images/white.png')
                        cardimage[optionOneId].removeEventListener('click', flipCard)
                        cardimage[optionTwoId].removeEventListener('click', flipCard)
                        cardsWon.push(cardsChosen);
                } else {
                        cardimage[optionOneId].setAttribute('src', 'images/blank.gif')
                        cardimage[optionTwoId].setAttribute('src', 'images/blank.gif')
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