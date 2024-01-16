const images = document.querySelectorAll(".slider_img");
const controlls = document.querySelectorAll(".controlls");
let imageIndex = 0;

function show(index) {
    images[imageIndex].classList.remove('active');
    images[index].classList.add('active');
    imageIndex = index;

    updateButtonState();
}

function updateButtonState() {
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    prevButton.disabled = (imageIndex === 0);
    nextButton.disabled = (imageIndex === images.length -1)
}

controlls.forEach((e) => {
    e.addEventListener('click', () => {
        if (event.target.classList.contains('prev')) {
            let index = imageIndex - 1;

            if (index < 0) {
                index = images.length - 1;
            }

            show(index);
        } else if (event.target.classList.contains('next')) {
            let index = imageIndex + 1;

            if (index >= images.length) {
                index = 0;
            }
            show(index);
        }
    })
})

// document.addEventListener('keydown', (e) => {
//     if (e.key === 'ArrowLeft') {
//         let index = imageIndex -1;

//         if (index < 0) {
//             index = images.length -1;
//         }

//         show(index)
//     } else if(e.key === 'ArrowRight'){
//         let index = imageIndex + 1;

//         if(index >= images.length) {
//             index = 0;
//         }

//         show(index)
//     }
// })

show(imageIndex);
