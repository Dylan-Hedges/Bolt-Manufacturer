$(document).ready(function() {

        $('.js--wp-1').waypoint(function(direction) {
            $('.js--wp-1').addClass('animated fadeIn');
        }, {
            offset: '90%'
        });

        //Google maps starting position
    var map = new GMaps({
        div: '.map',
        lat: 54.7388,
        lng: 55.9721,
        zoom: 12
    });

    map.addMarker({
        lat: 54.7388,
        lng: 55.9721,
        title: 'UFA',
        infoWindow: {
            content: '<p> You can find us at: <br> x number <br> x street <br> UFA </p>'
        }
    });

});
