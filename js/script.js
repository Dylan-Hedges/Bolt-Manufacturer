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
        lat: 54.746167,
        lng: 55.976194,
        title: 'UFA',
        infoWindow: {
            content: '<p> г.Уфа <br> ул.Кировоградская <br> 36 <br> 450001 </p>'
        }
    });

});
