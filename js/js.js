///tabs
$(function(){

    $("#main-tabs").on("click", ".tab", function(){
        var tabs = $("#main-tabs .tab"),
            cont = $("#main-tabs .tab-cont");
        tabs.removeClass("active");
        cont.removeClass("active");

        $(this).addClass("active");
        cont.eq($(this).index()).addClass("active");

        return false;
    });
});
// end tabs
//////active menu
$(function () {
    $('.nav-items-link').each(function () {
        var location = window.location.href;
        var link = this.href;
        if(location == link) {
            $(this).addClass('active');
        }
    });
});
// end active menu