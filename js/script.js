$(document).ready(function() {

    //---------------------ANIMATIONS---------------------

    //Fade in functionality - uses Animate.css
        $('.js--wp-1').waypoint(function(direction) {
            $('.js--wp-1').addClass('animated fadeInUp');
        }, {
            offset: '90%'
        });

        $('.js--wp-2').waypoint(function(direction) {
            $('.js--wp-2').addClass('animated fadeInUp');
        }, {
            offset: '90%'
        });

        $('.js--wp-3').waypoint(function(direction) {
            $('.js--wp-3').addClass('animated jackInTheBox');
        }, {
            offset: '80%'
        });

        $('.js--wp-4').waypoint(function(direction) {
            $('.js--wp-4').addClass('animated bounceIn');
        }, {
            offset: '70%'
        });
        $('.js--wp-5').waypoint(function(direction) {
            $('.js--wp-5').addClass('animated bounceIn');
        }, {
            offset: '80%'
        });

//---------------------SCROLLING---------------------
    var scrollLink = $('.scroll');

    scrollLink.click(function(e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000 );
    });

//---------------------INSTAFEED---------------------

    var userFeed = new Instafeed({
        get: 'user',
        userId: '4882411762',
        accessToken: '4882411762.28b9a92.21892786d6e342369e02089da8ec4394',
        resolution: 'standard_resolution'
    });
    userFeed.run();


});

//---------------------MAP---------------------

function initMap() {
    //Global variable - keeps track of open infoWindows
    var activeWindow;
    //Starting position for map
    var startPosition = {lat: 54.7388, lng: 55.9721,};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: startPosition
    });
    //Array of objects containing marker coordinates
    var markers = [
        {
            coords:{lat: 54.746167, lng: 55.976194,},
            content:'<p><b>UFA</b><p> г.Уфа <br> ул.Кировоградская <br> 36 <br> 450001 </p>'
        }
        ];

    //Loop through the markers array and execute addMarker function for each object
    for(var i = 0;i < markers.length;i++){
        addMarker(markers[i]);
    }

    //Adds the markers to the google map, takes in
    function addMarker(props){
        var marker = new google.maps.Marker({
            position:props.coords,
            map:map
        });

        //Creates a new infoWindow and displays content from markers Array
        if(props.content){
          var infoWindow = new google.maps.InfoWindow({
            content:props.content
          });

        //Executes the follow when the user clicks on a marker
        marker.addListener('click', function(){
            //Checks if an infoWindow is already open when clicking on a marker
            if(activeWindow != null){
                //Uses the google API .close() method to close the infoWindow
                activeWindow.close();
              }
              //infoWindow is then opened and variable activeWindow is not equal to null
              infoWindow.open(map, marker);
              activeWindow = infoWindow;
          });
        }
    }
}
