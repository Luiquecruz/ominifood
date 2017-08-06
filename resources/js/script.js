$(document).ready(function() {
    
    /* Sticky Navigation */
    
    $('#section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '68px'
    });
    
    /* Scroll Buttons */
    
    $('#btn-to-plans').click(function() {
       $('html, body').animate({scrollTop: $('#section-plans').offset().top}, 700);
    });
    
    $('#btn-to-features').click(function(){
       $('html, body').animate({scrollTop: $('#section-features').offset().top}, 1000); 
    });
    
    /* SmoothScroll */
    
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
           if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                   scrollTop: target.offset().top 
                }, 700);
                return false;
                }
            }                   
        });
    });

    /* Animations on Scrool */
    
    $('#wp-1').waypoint(function(direction){
       $('#wp-1').addClass('animated fadeIn'); 
    },{
        offset: '55%'
    });
    
    $('#wp-2').waypoint(function(direction){
       $('#wp-2').addClass('animated fadeInUp'); 
    },{
        offset: '55%'
    });
    
    $('#wp-3').waypoint(function(direction){
       $('#wp-3').addClass('animated fadeIn'); 
    },{
        offset: '55%'
    });
    
    $('#wp-4').waypoint(function(direction){
       $('#wp-4').addClass('animated pulse'); 
    },{
        offset: '55%'
    });
    
    /* Mobile Navigation */
    
    $('#nav-icon').click(function() {
        var nav = $('#main-nav');
        var icon = $('#nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon')) {
            icon.removeClass('ion-navicon');
            icon.addClass('ion-ios-close-outline');
        } else {
            icon.removeClass('ion-ios-close-outline');
            icon.addClass('ion-navicon');
        }
        
    });
    
    /* Gmaps */
    
    var map = new GMaps({
      div: '.map',
      lat: 38.7236057,
      lng: -9.1713698,
      zoom: 12
    });
    
    map.addMarker({
      lat: 38.7436057,
      lng: -9.2302433,
      title: 'Lisbon',
      infoWindow: {
          content: '<p>Our Lisbon HQ</p>'
        }
        
    });
    
});