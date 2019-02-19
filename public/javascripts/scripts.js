$(document).ready(function () {
    navBarCollapse()
});  

function navBarCollapse() {
    $('.navbar-nav>li>a, .dropdown-item').on('click', function (e) {
        if(!$(e.target).is("#navbarDropdownMenuLink")){
             $('.navbar-collapse').collapse('hide');
        }
    });
}