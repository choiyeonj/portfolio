const btn = $('.nav_bar a');
const homeBtn = $('.home_btn a');
const menuBtn = $('.menu_btn a');
const btnSpan = $('.nav_bar ul li a span');
const page = $('.contents section');

// hash이용한 스크롤 페이지
btn.click(function () {
    $(window).scrollTo(this.hash || 0, 500);
});
homeBtn.click(function () {
    $(window).scrollTo(this.hash || 0, 500);
});
menuBtn.click(function () {
    $(window).scrollTo(this.hash || 0, 500);
});

$(window).scroll(function () {
    page.each(function () {
        let point = $(window).scrollTop();
        let index = $(this).index();

        if (point >= $(this).offset().top) {
            btnSpan.removeClass('active');
            btnSpan.eq(index).addClass('active');
        }
    });
}); //window_scroll

// menu_btn
const listMenu = $('.fullpage_menu');

$(document).ready(function () {
    $('.hamburger').click(function () {
        $(this).toggleClass('menu_btn');

        listMenu.stop().slideToggle(300);
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
