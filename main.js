let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    let i;
    let x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

// Owl carousel

let api = 'https://api.thecatapi.com/v1/images/search?limit=10';
let show_image = '';

fetch(api)
    .then(image => image.json())
    .then(data => {
        data.map((image) => {
            show_image += '<div class="item"><img src=" ' + image.url + ' " /></div>';
            console.log(image.url);
        });
        $('#show-cats').html(show_image);

    });

$('#show-cats').trigger('refresh.owl.carousel');


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})

// Show All

let button = document.getElementById('show-all');
button.addEventListener("click", myFunction);

function myFunction() {
    let api_1 = 'https://api.thecatapi.com/v1/images/search';
    let cat = ''
    fetch(api_1)
        .then(image => image.json())
        .then(data => {
            data.map((image) => {
                cat = image.url;
                console.log(image.url);
            });
            document.getElementById("app").innerHTML = '<img width="400" src="' + cat + '"/>';
        });
}
