/**
 * Created by Administrator on 2016/7/18.
 */
var banner = document.getElementById('banner'),
    bannerInner = utils.fistEleChild(banner),
    focusList = utils.children(banner, 'ul')[0],
    left = utils.getElementsByClass('left', banner)[0],
    right = utils.getElementsByClass('right', banner)[0],
    imgBoxList = bannerInner.getElementsByTagName('div'),
    imgList = bannerInner.getElementsByTagName('img'),
    lis = focusList.getElementsByTagName('li');

var data = null;

function imgDelayLoad() {
    for (var i = 0; i < imgList.length; i++) {
        ;
        (function (i) {
            var curImg = imgList[i];
            if (curImg.isLoad) return;
            var tempImg = new Image();
            tempImg.src = curImg.getAttribute('trueSrc');
            tempImg.onload = function () {
                curImg.src = this.src;
                utils.css(curImg, 'display', 'block');
                tempImg = null;
                if (i === 0) {
                    utils.css(curImg.parentNode, 'zIndex', 1);
                    zhufengAnimate(curImg.parentNode, {opacity: 1}, 100);
                } else {
                    utils.css(curImg, 'zIndex', 0);
                }
            }
            curImg.isLoad = true;
        })(i);
    }
}
window.setTimeout(imgDelayLoad, 500);

var step = 0;
var timer = null;
var interval = 2000;

function autoMove() {
    if (step == imgBoxList.length - 1) {
        step = -1;
    }
    step++;
    setBanner();
}

function setBanner() {
    for (var i = 0; i < imgBoxList.length; i++) {
        var curDiv = imgBoxList[i];
        if (i == step) { //我要显示的那一张
            utils.css(curDiv, 'zIndex', 1);
            zhufengAnimate(curDiv, {opacity: 1}, 200, function () {
                //当前运动的那一张的透明度从0运动到1之后，我需要把其他的图片盒子的透明设置成0
                var siblings = utils.siblings(this); //获取除了我之外的所有兄弟节点
                for (var j = 0; j < siblings.length; j++) {
                    var curSibling = siblings[j];
                    utils.css(curSibling, 'opacity', 0);
                }
            });
        } else {
            utils.css(curDiv, 'zIndex', 0);
        }
    }

    for (var k = 0; k < lis.length; k++) {
        var curLi = lis[k];
        k === step ? utils.addClass(curLi, 'bg') : utils.removeClass(curLi, 'bg'); //和当前显示图片索引相同的添加bg这个类，否则移除这个类
    }
}
timer = window.setInterval(autoMove, interval);

banner.onmouseover = function () {
    window.clearInterval(timer);
    utils.css(left, 'display', 'block');
    utils.css(right, 'display', 'block');
}
banner.onmouseout = function () {
    timer = window.setInterval(autoMove, interval);
    utils.css(left, 'display', 'none');
    utils.css(right, 'display', 'none');
}

function bindEvetnForFocus() {
    for (var i = 0; i < lis.length; i++) {
        var curLi = lis[i];
        curLi.index = i; //保存这个自定义属性是用来点击时候运动到这一张
        curLi.onclick = function () {
            step = this.index;
            setBanner();
        }
    }
}
bindEvetnForFocus();

left.onclick = function () {
    if (step == 0) { //已经运动到了第一张，下一次就该运动到最后一张了
        step = imgBoxList.length;
    }
    step--;
    setBanner();
};
right.onclick = autoMove;  //点击right按钮就是antoMove

$(".subnav li").mousemove(function(e){
    $(this).addClass("bgg").siblings().removeClass("bgg");
    var _index = $(this).index();
    $(this).parent().parent().next().children(".main").children().each(function (index, item) {
        index === _index ? $(item).show(): $(item).hide();
    });
});

~function(){
   var step1=0;
    $('#right1').click(function(e){
        if(step1>=3){
            return;
        }
        step1++;

        $("#wrapperList1").css("left",step1*-296+"px");
        changeBg();
    });
    $('#left1').click(function(e){
        if(step1<=0){
            return;
        }
        step1--;

        $("#wrapperList1").css("left",step1*-296+"px");
        changeBg();
    });
    function changeBg(){
        $("#focusList1 li").eq(step1).addClass("bg").siblings().removeClass("bg");
    }

}();
~function(){
    var step2=0;
    $('#right2').click(function(e){
        if(step2>=3){
            return;
        }
        step2++;

        $("#wrapperList2").css("left",step2*-296+"px");
        changeBg();
    });
    $('#left1').click(function(e){
        if(step2<=0){
            return;
        }
        step2--;

        $("#wrapperList1").css("left",step2*-296+"px");
        changeBg();
    });
    function changeBg(){
        $("#focusList2 li").eq(step2).addClass("bg").siblings().removeClass("bg");
    }

}();
~function(){
    var step3=0;
    $('#right3').click(function(e){
        if(step3>=3){
            return;
        }
        step3++;

        $("#wrapperList3").css("left",step3*-296+"px");
        changeBg();
    });
    $('#left1').click(function(e){
        if(step3<=0){
            return;
        }
        step3--;

        $("#wrapperList3").css("left",step3*-296+"px");
        changeBg();
    });
    function changeBg(){
        $("#focusList1 li").eq(step3).addClass("bg").siblings().removeClass("bg");
    }

}();
~function(){
    var step4=0;
    $('#right1').click(function(e){
        if(step4>=3){
            return;
        }
        step4++;

        $("#wrapperList1").css("left",step4*-296+"px");
        changeBg();
    });
    $('#left1').click(function(e){
        if(step4<=0){
            return;
        }
        step4--;

        $("#wrapperList1").css("left",step1*-296+"px");
        changeBg();
    });
    function changeBg(){
        $("#focusList1 li").eq(step1).addClass("bg").siblings().removeClass("bg");
    }

}();







