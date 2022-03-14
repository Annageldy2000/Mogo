
let accordionBtn = document.getElementById('accordionBtn');
let accordionItems = document.getElementsByClassName('accordion__item');

for (let i = 0; i < accordionItems.length; i++) {
    accordionItems[i].addEventListener('click', e => {
        if (e.target.classList.contains('accordion__header-button')) {
            accordionItems[i].classList.toggle('active');
        }
    })
}


let prevBtn = document.getElementById ('prevBtn');
let nextBtn = document.getElementById ('nextBtn');
let previewButtons = document.getElementsByClassName('reviews__btn');
let reviewsItems = document.getElementsByClassName ('reviews__item');
let reviewsIts = document.getElementsByClassName ('reviews__it');


for (let i = 0; i < previewButtons.length; i++) {
    let currentBtn = previewButtons[i];

    currentBtn.addEventListener('click', e => {
        for (let j = 0; j < reviewsItems.length; j++) {
            let currentItem = reviewsItems[j]

            if (e.target.classList.contains('reviews__btn--prev')) {
                if (currentItem.classList.contains('active') && j != 0) {
                    currentItem.classList.remove('active');
                    reviewsItems[j - 1].classList.add('active')
                    return
                }
            }

            if (e.target.classList.contains('reviews__btn--next')) {
                if (currentItem.classList.contains('active') && j != reviewsItems.length - 1) {
                    currentItem.classList.remove('active');
                    reviewsItems[j + 1].classList.add('active')
                    return
                }
            }
        }
    })
}




for (let i = 0; i < previewButtons.length; i++) {
    let currentBtn = previewButtons[i];

    currentBtn.addEventListener('click', e => {
        for (let j = 0; j < reviewsIts.length; j++){
            let currentItem = reviewsIts[j];

            if(e.target.classList.contains('reviews__btn--prev')) {
                if (currentItem.classList.contains('active') && j != 0) {
                    currentItem.classList.remove('active');
                    reviewsIts[j - 1].classList.add('active')
                    return
                }
            }


            if (e.target.classList.contains('reviews__btn--next')) {
                if (currentItem.classList.contains('active') && j != reviewsIts.length - 1){
                    currentItem.classList.remove('active');
                    reviewsIts[j + 1].classList.add('active')
                    return
                }
            }
        }
    })
}



function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById ('span').style.display = 'none';
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById ('span').style.display = 'block';
}
