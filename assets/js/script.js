document.addEventListener("DOMContentLoaded", function (event)
{
    window.onscroll = function () { scrollFunction() }

    //when page scrolls down, show btn-resume
    function scrollFunction ()
    {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
        {
            document.getElementById("btn-resume").style.display = "block"
        } else
        {
            document.getElementById("btn-resume").style.display = "none"
        }
    }

    //initialize modal
    var elems = document.querySelectorAll('.modal')
    M.Modal.init(elems)


    //carousel
    var elem = document.querySelector('.main-carousel')
    new Flickity(elem, {
        // options
        cellAlign: 'left',
        contain: true,
        // wrapAround: true,
        dragThreshold: 10,
        freeScroll: true,
        freeScrollFriction: 0.03
    })
})
