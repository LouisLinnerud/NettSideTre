$(document).ready(function(){
    //scroll change navbar color
    $(window).scroll(function(){
        if (this.scrollY > 50){
            $(".navBar").addClass("sticky");
        }else{
            $(".navBar").removeClass("sticky");
        }
    })
    $(".menuBtn").click(function(){
        $(".navBar .menu").toggleClass("active");
        $(".navBar .menuBtn i").toggleClass("active");
    });

    var typed = new Typed(".types",{
        strings: ["Ingeniørvitenskap","IT","Programmering"],
        typeSpeed: 30,
        backSpeed: 30,
        backDelay: 2000,
        loop: true
    })



});