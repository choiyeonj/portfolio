$(function () {
    $('.btn_nav').click(function () {
        // animate content
        $('.page__style').addClass('animate_content');
        $('.page__description').fadeOut(100).delay(2800).fadeIn();

        setTimeout(function () {
            $('.page__style').removeClass('animate_content');
        }, 3200);

        //remove fadeIn class after 1500ms
        setTimeout(function () {
            $('.page__style').removeClass('fadeIn');
        }, 1500);
    });

    // on click show page after 1500ms
    $('.home_link').click(function () {
        setTimeout(function () {
            $('.home').addClass('fadeIn');
        }, 1500);
    });

    $('.projects_link').click(function () {
        setTimeout(function () {
            $('.projects').addClass('fadeIn');
        }, 1500);
    });

    $('.skills_link').click(function () {
        setTimeout(function () {
            $('.skills').addClass('fadeIn');
        }, 1500);
    });

    $('.about_link').click(function () {
        setTimeout(function () {
            $('.about').addClass('fadeIn');
        }, 1500);
    });

    $('.contact_link').click(function () {
        setTimeout(function () {
            $('.contact').addClass('fadeIn');
        }, 1500);
    });
});

let content = '안녕하세요. \n 프론트엔드 개발자를 꿈꾸는 \n 최연정 입니다.';
let typing = document.querySelector('.w3-text-light-grey');
let i = 0;

const text = document.querySelector('.text');

function typingTxt() {
    let txt = content[i++];
    text.innerHTML += txt === '\n' ? '<br/>' : txt;
    if (i > content.length) {
        text.textContent = '';
        i = 0;
    }
}
setInterval(typingTxt, 200);
