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

let typeText = document.querySelector('.typeText');
let textToBeTyped = '';
let textToBeTypedArr = ['안녕하세요.', '배우는 것을 즐기고 끝없이 성장하는 \n 프론트엔드 개발자가 목표인 최연정입니다.', ' 初めまして。\n 開発者を目じゃしているチェ・ヨンジョンです。'];
let index = 0,
    isAdding = true,
    textToBeTypedIndex = 0;

function typing() {
    setTimeout(
        function () {
            typeText.innerText = textToBeTypedArr[textToBeTypedIndex].slice(0, index);
            if (isAdding) {
                if (index > textToBeTypedArr[textToBeTypedIndex].length) {
                    isAdding = false;
                    setTimeout(function () {
                        typing();
                    }, 1000);
                    return;
                } else {
                    index++;
                }
            } else {
                if (index === 0) {
                    isAdding = true;
                    textToBeTypedIndex = (textToBeTypedIndex + 1) % textToBeTypedArr.length;
                } else {
                    index--;
                }
            }
            // call itself
            typing();
        },
        isAdding ? 120 : 60
    );
}
// start animation
typing();
