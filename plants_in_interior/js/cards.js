$(document).ready(function(){
    $.getJSON("cards.json", function(data){
       
        $.each(data, function(key, card){

            //создаем новый элемент для карточки с фотографией, куда будем складывать все составляющие
            let cardImage = document.createElement('div')
            cardImage.className = "card"
            
            //создаем новый элемент image
            let image = document.createElement('img')
            image.className = "card-image"        
            let src = `./img/${card.img}`
            image.setAttribute("src", src)
            image.setAttribute("alt", "alt")

            //создаем контейнер для всех кнопок в карточке
            let buttonsContainer = document.createElement('div')
            buttonsContainer.className = "buttons-container"

            $.each(card.buttons, function(index, btn){

                //создаем новый элемент для кнопки
                let button = document.createElement('a')
                button.className = "card-button"
                button.setAttribute("href", "#")
                button.textContent = btn.name
                $(button).css({
                    'top': btn.top + '%',
                    'left': btn.left + '%',
                    'padding-top': btn.paddingTop + 'px'
                })

                buttonsContainer.append(button)
            })

            let cardButtonLike = document.createElement('div')
            cardButtonLike.className = 'card-button-like'
            cardButtonLike.innerHTML = `<svg class="button-like-image" width="30" height="30" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24.9952 3.53337C24.3599 2.88873 23.6056 2.37736 22.7754 2.02847C21.9451 1.67958 21.0553 1.5 20.1566 1.5C19.258 1.5 18.3681 1.67958 17.5379 2.02847C16.7077 2.37736 15.9534 2.88873 15.3181 3.53337L13.9997 4.87059L12.6812 3.53337C11.398 2.23186 9.65748 1.50067 7.84269 1.50067C6.0279 1.50067 4.28743 2.23186 3.00418 3.53337C1.72092 4.83488 1 6.6001 1 8.44072C1 10.2813 1.72092 12.0466 3.00418 13.3481L4.32264 14.6853L13.9997 24.5L23.6767 14.6853L24.9952 13.3481C25.6307 12.7037 26.1349 11.9387 26.4789 11.0967C26.8229 10.2547 27 9.35216 27 8.44072C27 7.52928 26.8229 6.62677 26.4789 5.78475C26.1349 4.94273 25.6307 4.1777 24.9952 3.53337Z" stroke="#3A4736" stroke-width="1.6126" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>`

            buttonsContainer.append(cardButtonLike)
            cardImage.append(buttonsContainer)
            cardImage.append(image)
            $(".photocards").append(cardImage)
        })
    })
})