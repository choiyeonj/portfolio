const btn = $('.nav_bar a');
const homeBtn = $('.home_btn a');
const menuBtn = $('.menu_btn a');
const btnSpan = $('.nav_bar ul li a span');
const page = $('.contents section');
const aboutBox = $('.animated-box');

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
}); //window_scroll

let d_width = 0; // 브라우저 가로
let d_height = 0; // 문서 전체의 높이

function tmp() {
    // container의 가로사이즈(화면가로 * box 개수)
    let con_width = $(window).outerWidth() * $('.box').length;

    $('.container').css({
        width: con_width,
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
    });

    // css에서 해도 상관없다.
    $('.box').css({
        width: con_width / $('.box').length,
        height: '100vh',
        float: 'left',
    });

    // box들을 위로 끌어올렸기 때문에 body의 높이는 100vh나 마찬가지인 상태.
    // 그래서 억지로 전체 box들의 세로크기 만큼 body에 줘야한다.(스크롤 내리기위함)
    // 이때 높이는 가로영역의 비율과 동일하게 준다. (이후 리미트를 주게 됨으로써 비율의 값이 정해진다.)
    $('body').css({
        height: '100vh',
    });

    let w_width = $(window).width(); // 화면의 가로값
    let w_height = $(window).height(); // 화면의 세로값

    // 스크롤 될때의 리미트
    d_width = con_width - w_width; // 전체 가로값 - 현재 화면의 가로값
    d_height = $('body').height() - w_height; // 전체 세로값 - 현재 화면의 세로값
}

tmp();

let array = [];
for (let i = 0; i < $('.box').length; i++) {
    array[i] = $('.box').eq(i).offset().left;
}

let chk = true;
$('.box').on('mousewheel DOMMouseScroll', function () {
    if (chk) {
        // 휠 일정시간동안 막기
        chk = false;
        setTimeout(function () {
            chk = true;
        }, 500);

        // 휠 방향 감지(아래: -120, 위: 120)
        let w_delta = event.wheelDelta / 120;

        // 휠 아래로
        if (w_delta < 0 && $(this).next().length > 0) {
            $('.container').animate(
                {
                    left: -array[$(this).index() + 1],
                },
                500
            );
        }
        // 휠 위로
        else if (w_delta > 0 && $(this).prev().length > 0) {
            $('.container').animate(
                {
                    left: -array[$(this).index() - 1],
                },
                500
            );
        }
    }
});

//브라우저를 resize했을시를 대비해 박스의 크기는 다시 구해준다.
$(window).resize(function () {
    for (let i = 0; i < $('.box').length; i++) {
        array[i] = $('.box').eq(i).offset().left;
    }

    tmp();
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
