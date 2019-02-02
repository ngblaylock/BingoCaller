var myVar;
var Default = 15;
var startTime = Default;
var time;
var freq = 1000;
var timerInProcess = false;

function advanceTimer() {
    myVar = setTimeout(function () {
        $('#timer').html(time);
        time--;
        if (time == startTime - 1) callNumber();
        if (time === 0) time = startTime;
        if (!time && time !== 0) return;
        advanceTimer();
    }, freq);
}

function stopTimer() {
    $('#timerControl').addClass('timerRunning').html('<i class="far fa-clock"></i> Start Timer');
    $('#timer').text('');
    clearTimeout(myVar);
}

$('#timerControl').click(function () {
    if ($(this).hasClass('timerRunning')) {
        // button says Start the timer
        startTime = parseInt(Math.abs($('#setTime').val()));
        if (!startTime) {
            $('#setTime').val(Default);
            startTime = Default;
        //     $('#addAlert').html(`<div class="alert alert-warning alert-dismissible fade show" role="alert">
        //     <strong>FYI</strong> Your custom time input was invalid and was reset to the default time.
        //     <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        //         <span aria-hidden="true">&times;</span>
        //     </button>
        // </div>`);
        }
        time = startTime - 1;
        $('#timer').html(startTime);
        callNumber();
        $('#feedback').html('');
        $(this).html('STOP').removeClass('timerRunning');
        advanceTimer();

    } else {
        // button says Stop the timer
        stopTimer();
    }
});

