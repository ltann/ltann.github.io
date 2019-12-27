//turn sidebar into header

$(function() {
    //caches a jQuery object containing the header element
    let header = document.getElementById("sidebar"); //this can be done with document.getElementbyId.... but this is using Jquery syntax
    $(window).scroll(function() {
        let scroll = $(window).scrollTop();
        console.log(header);
        if (scroll >= 500) {
            header.style.transform = "translateY(-100%)";
        } else {
            header.style.transform = "translateY(0)";
        }
    });
});

