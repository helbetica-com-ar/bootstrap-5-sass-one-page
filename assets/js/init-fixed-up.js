$(document).ready(function () {

    // Add body class on navbar collapse toggle
    //var collapsibleMenu = document.getElementById('navbarsExample01');
    //collapsibleMenu.addEventListener('show.bs.collapse', function () {
    //    $('body').toggleClass('menu-collapse');
    //});
    //collapsibleMenu.addEventListener('hide.bs.collapse', function () {
    //    $('body').toggleClass('menu-collapse');
    //});

    // Initiate tooltips
    //var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    //var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    //    return new bootstrap.Tooltip(tooltipTriggerEl);
    //});


    var navMain = $(".navbar-collapse"); 
    navMain.on("click", "a:not([data-toggle])", null, function () {
        navMain.collapse('hide');
    });

    // Assign customScrollTo function to main navigation spied nav items 
    $('.smoothscroll').on('click', function (event) {
        event.preventDefault();
        var where = $(this).attr("href");
        where = where.replace("#", ""); //console.log('donde: ' + where);
        customScrollTo(where);
    });

    $('#playButton').on("click", function () {
        if ($('#playButton').hasClass('.enabled')) {
            console.log('entramos');
        } else {
            $('#myCarousel').carousel('cycle');
            $('#myCarousel').carousel('next');
            $('#playButton').addClass('enabled');
            $('#pauseButton').removeClass('enabled');
        }
    });
    
    $('#pauseButton').on("click", function () {
        if ($('#pauseButton').hasClass('enabled')){
            console.log('entramos 2');
        } else {
            $('#myCarousel').carousel('pause');
            $('#pauseButton').addClass('enabled');
            $('#playButton').removeClass('enabled');
        }
    });

}); // end document ready


function customScrollTo(idOrClass) {
    if ($('#' + idOrClass).length) {
        $('html,body').animate({ scrollTop: $('#' + idOrClass).offset().top - 92 }, 30);
    } else {
        $('html,body').animate({ scrollTop: $('.' + idOrClass).offset().top - 92 }, 30);
    }
}


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                    form.classList.add('form-invalid')
                }

                form.classList.add('was-validated')
            }, false)
        })
})()