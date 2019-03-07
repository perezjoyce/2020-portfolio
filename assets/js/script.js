document.addEventListener("DOMContentLoaded", function(event) {
    window.onscroll = function() {scrollFunction()};

    //when page scrolls down, show btn-resume
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("btn-resume").style.display = "block";
        } else {
            document.getElementById("btn-resume").style.display = "none";
        }
    }
});
