

const photos = document.getElementById('photos');
const noImage = document.getElementById('chosen');
const clear = document.getElementById('clear');

const noImageReturn = {
    src: noImage.src,
};

photos.addEventListener('click', function (event) {
    if(event.target.src) {
        noImage.src = event.target.src;
    }
    console.log(event)
    if(event.target == 'button') {
        noImage.src = photos.img;
    }
})

clear.addEventListener('click', function () {
    noImage.src = noImageReturn.src;
})


