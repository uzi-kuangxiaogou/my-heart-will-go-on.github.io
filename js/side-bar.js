/**
 * Created by admin on 2016/8/10.
 */
$(function () {
    $(".float-menu>ul>li").mouseenter(function () {
        $(this).find(".a-d").stop().animate({"top":"-55"},500);//鼠标进入li，a标签上翻

    }) ;
    $(".float-menu>ul>li").mouseleave(function () {
        $(this).find(".a-d").stop().animate({"top":"0"},500);//鼠标离开时回到原来位置

    });
    $(".float-menu .fl").mouseover(function () {//鼠标进入第三个li,dl宽度变300同时向左滑动
        $('.float-box>dl').stop().animate({"right":"5","width":"300"},500);
    });
    $(".float-menu .fl").mouseout(function () {

        $('.float-box>dl').stop().animate({"right":"-57","top":"0","width":"50"},500);

    });
    $(".float-box>dl>dt").click(function () {
        $(".fl").off("mouseout");//解除鼠标离开事件
        $(this).addClass("current").siblings("dt").removeClass("current");
        return false;//取消事件冒泡
    });
    $(document).click(function(){
        $('.float-box>dl').stop().animate({"right":"-50","width":"50"},1000);//点击页面时dl恢复位置
        $(".fl").mouseout(function () {//恢复鼠标离开事件
            $('.float-box>dl').stop().animate({"right":"-50","width":"50"},1000);
        });
    });
    //$('.float-menu dt').click(function(){
    //
    //    var a = $(this).index();
    //    if($('.float-info').eq(a).find('.float-line').length >= 4){
    //        $('.float-info').eq(a).find('.float-move').css('display','block')
    //    }else if($('.float-info').eq(a).find('.float-line').length == 0){
    //        $('.float-info').eq(a).find('.float-no').css('display','block')
    //    }
    //});
});