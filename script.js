$(document).ready(function(){
    // hide loading text when page finish loading
    $(".load").hide("swing");
    // show the counter and the contact icons
    $(".counter, .contact").show("swing");

    // Set the date we're counting down to
    var countDownDate = new Date("Jul 31, 2018 15:37:25").getTime();

    // Update the count down every 1 second
    var countdownfunction = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();
        
        // Find the distance between now an the count down date
        var distance = countDownDate - now;
        
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // add the results on the corresponding paragraph
        $(".days").text(days+"d");
        $(".hours").text(hours+"h");
        $(".minutes").text(minutes+"m");
        $(".seconds").text(seconds+"s");
        
    }, 1000);    
});