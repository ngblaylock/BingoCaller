var myVar;
var Default = 15;
var startTime = Default;
var time;
var freq = 1000;
var timerInProcess = false;

function myFunction() {
    myVar = setTimeout(function () {
        $('#timer').html(time);
        time--;
        if (time === 0) {
            time = startTime;
        }
        if (!time && time !== 0) return;
        console.log(time);
        myFunction();
    }, freq);
}

function myStopFunction() {
    clearTimeout(myVar);
}

$('#timerControl').click(function () {
    if ($(this).hasClass('timerRunning')) {
        // button says Start the timer
        startTime = $('#setTime').val();
        time = startTime - 1;
        if (startTime) {
            $('#timer').text(startTime)
            $(this).text('Stop the Timer').removeClass('timerRunning');
            myFunction();
        } else {
            $('#timer').html('<span class="text-danger">Invalid number. The timer was reset to the default timespan.</span>');
            $('#setTime').val(Default);
            return;
        }
    } else {
        // button says Stop the timer
        $('#timer').text('');
        $(this).addClass('timerRunning').text('Start the Timer');
        myStopFunction();
    }
});

