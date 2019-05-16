$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.materialboxed').materialbox();
    $('.parallax').parallax();
    $('.tabs').tabs();
    $('.datepicker').datepicker({
        disableWeekends: true
    });
    $('.tooltipped').tooltip();
    $('.scrollspy').scrollSpy();
    $('.btn').click(function(){
        Materialize.toast({html: 'Thank You!', displayLength: 8000,  completeCallback: function(){
            alert('Your toast was dismissed')
        }
    
    })
    })
});