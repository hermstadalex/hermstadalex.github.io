$('body').click(function(e) {
    // don't close when opening a sub-menu in our menu
    if(!$(e.target).filter('#bs-example-navbar-collapse-1 .dropdown-toggle').length > 0) {
        $('#bs-example-navbar-collapse-1.in').collapse('hide');
    }
})