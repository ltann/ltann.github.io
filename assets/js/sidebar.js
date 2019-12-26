function getBrowserSize(){
    var w, h;

    if(typeof window.innerWidth != 'undefined')
    {
        w = window.innerWidth; //other browsers
        h = window.innerHeight;
    }
    else if(typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth !== 0)
    {
        w =  document.documentElement.clientWidth; //IE
        h = document.documentElement.clientHeight;
    }
    else{
        w = document.body.clientWidth; //IE
        h = document.body.clientHeight;
    }
    return {'width':w, 'height': h};
}

if(parseInt(getBrowserSize().width) < 1280)
{
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("sidebar").style.top = "0";
        } else {
            document.getElementById("sidebar").style.top = "-100px";
        }
        prevScrollpos = currentScrollPos;
    }
}