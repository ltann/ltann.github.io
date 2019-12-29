//turn sidebar into header

$(function() {
    let header = document.getElementById("sidebar");
    $(window).scroll(function() {
        let scroll = $(window).scrollTop();
        // console.log(header);
        if (scroll >= 500) {
            header.style.transform = "translateY(-100%)";
        } else {
            header.style.transform = "translateY(0)";
        }
    });
});