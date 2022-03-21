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


    // Assign customScrollTo function to main navigation spied nav items 
    $('.smoothscroll').on('click', function (event) {
        event.preventDefault();
        var where = $(this).attr("href");
        where = where.replace("#", ""); //console.log('donde: ' + where);
        customScrollTo(where);
    });

}); // end document ready


function customScrollTo(idOrClass) {
    if ($('#' + idOrClass).length) {
        $('html,body').animate({ scrollTop: $('#' + idOrClass).offset().top - 92 }, 30);
    } else {
        $('html,body').animate({ scrollTop: $('.' + idOrClass).offset().top - 92 }, 30);
    }
}