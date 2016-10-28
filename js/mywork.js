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
        if (i == step) { //��Ҫ��ʾ����һ��
            utils.css(curDiv, 'zIndex', 1);
            zhufengAnimate(curDiv, {opacity: 1}, 200, function () {
                //��ǰ�˶�����һ�ŵ�͸���ȴ�0�˶���1֮������Ҫ��������ͼƬ���ӵ�͸�����ó�0
                var siblings = utils.siblings(this); //��ȡ������֮��������ֵܽڵ�
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
        k === step ? utils.addClass(curLi, 'bg') : utils.removeClass(curLi, 'bg'); //�͵�ǰ��ʾͼƬ������ͬ�����bg����࣬�����Ƴ������
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
        curLi.index = i; //��������Զ����������������ʱ���˶�����һ��
        curLi.onclick = function () {
            step = this.index;
            setBanner();
        }
    }
}
bindEvetnForFocus();

left.onclick = function () {
    if (step == 0) { //�Ѿ��˶����˵�һ�ţ���һ�ξ͸��˶������һ����
        step = imgBoxList.length;
    }
    step--;
    setBanner();
};
right.onclick = autoMove;  //���right��ť����antoMove

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







