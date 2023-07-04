/* ---------------page_scroll--------------- */
const btn = $('.nav_bar a');
const homeBtn = $('.home_btn a');
const menuBtn = $('.menu_btn a');
const btnSpan = $('.nav_bar ul li a span');
const page = $('.contents section');
const aboutBox = $('.animated-box');
const header = $('.header');
const skillZoom = $('#skill ul');

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
            aboutBox.addClass('in');
        }
    });
    if ($(document).scrollTop() > 50) {
        header.addClass('header-shadow');
    } else {
        header.removeClass('header-shadow');
    }
}); //window_scroll

/* ---------------typing--------------- */
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
            typing();
        },
        isAdding ? 120 : 60
    );
}
typing();

/* ---------------profile_btn--------------- */
const profileOpenBtn = document.querySelector('.about_left .open_profile');
const profileCloseBtn = document.querySelector('.about_left .close_profile');
const openProfile = document.getElementById('open_profile');

profileOpenBtn.onclick = function () {
    openProfile.style.visibility = 'visible';
    profileOpenBtn.style.display = 'none';
    profileCloseBtn.style.display = 'block';
};
profileCloseBtn.onclick = function () {
    openProfile.style.visibility = 'hidden';
    profileOpenBtn.style.display = 'block';
    profileCloseBtn.style.display = 'none';
};

/* ---------------skill_zoomIn--------------- */

/* ---------------swiper--------------- */
let projectSwiper = new Swiper('.project_swiper', {
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '</span>';
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

/* ---------------img_sizeUp--------------- */
const imgSizeUp = document.querySelectorAll('.left_project li');
const sizeUp = document.getElementById('view');
const changeImg = document.querySelector('#view .view_img img');
const imgCloseBtn = document.querySelector('#view .img_close i');
const body = document.querySelector('body');

for (let i = 0; i < imgSizeUp.length; i++) {
    imgSizeUp[i].onclick = function () {
        changeImg.src = './images/viewImg_0' + (i + 1) + '.png';
        sizeUp.style.visibility = 'visible';
        document.querySelector('#view .view_img').scrollTo(0, 0);
        body.style.overflow = 'hidden';
    };
    imgCloseBtn.onclick = function () {
        sizeUp.style.visibility = 'hidden';
        body.style.removeProperty('overflow');
    };
    changeImg.onclick = function () {
        sizeUp.style.visibility = 'hidden';
        body.style.removeProperty('overflow');
    };
}

/* ---------------go_to_btn--------------- */
const teamPopup = document.getElementById('team_popup');
const personalPopup = document.getElementById('personal_popup');
const codeCloseBtn = document.querySelector('#team_popup .code_close i');
const personalClose = document.querySelector('#personal_popup .code_close i');

function codeOpen(type) {
    if (type === 'team') {
        teamPopup.style.visibility = 'visible';
        body.style.overflow = 'hidden';
    } else if (type === 'personal') {
        personalPopup.style.visibility = 'visible';
        body.style.overflow = 'hidden';
    }
}

function codeClose(type) {
    if (type === 'team') {
        teamPopup.style.visibility = 'hidden';
        body.style.removeProperty('overflow');
    } else if (type === 'personal') {
        personalPopup.style.visibility = 'hidden';
        body.style.removeProperty('overflow');
    }
}

/* ---------------code_tab--------------- */
const TabBtn = document.querySelectorAll('.code_tab_btn li');
const codeTab = document.querySelectorAll('.code_img .tab');

for (let i = 0; i < TabBtn.length; i++) {
    TabBtn[i].onclick = function () {
        codeTab.forEach((e) => {
            e.classList.remove('tab_open');
        });
        codeTab[i].classList.add('tab_open');
    };
}
