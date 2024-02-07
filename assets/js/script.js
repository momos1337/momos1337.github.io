    var maxnumhours = 23;
    var maxnummins = 59;
    var maxnumsecs = 60;
    var maxmilisecs = 999;
    
    
    function updateNumbers() {
    var start_time = 1707279338;
    var duration = parseInt(Date.now() / 1000 - start_time);
    
    var seconds = duration % 60;
    if (seconds < 10)
    seconds = "0" + seconds;
    duration = parseInt(duration / 60);
    var minutes = duration % 60;
    if (minutes < 10)
    minutes = "0" + minutes;
    duration = parseInt(duration / 60);
    var hours = duration % 24;
    if (hours < 10)
    hours = "0" + hours;
    duration = parseInt(duration / 24);
    var days = duration;
    $('.days-number').text("" + days);
    $('.seconds').text(hours + " hours " + minutes + " minutes " + seconds + " seconds");
    setTimeout("updateNumbers()", 1000);
    }
