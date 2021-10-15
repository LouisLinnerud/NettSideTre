$(document).ready(function(){
    $(window).scroll(function(){
        if (this.scrollY > 50){
            $(".navBar").addClass("sticky");
        }else{
            $(".navBar").removeClass("sticky");
        }
    })
});