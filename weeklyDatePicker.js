
$(document).ready(function () {

    //Initialize the datePicker(I have taken format as mm-dd-yyyy, you can     //have your owh)
    $("#weeklyDatePicker").datetimepicker({
        format: 'MM-DD-YYYY'
    });

    //Get the value of Start and End of Week
    $('#weeklyDatePicker').on('dp.change', function (e) {
        var value = $("#weeklyDatePicker").val();
        var yearNumber = moment(value, "MM-DD-YYYY").day(0).format("YYYY");
        // The week start from Sunday
        // https://stackoverflow.com/questions/25953551/moment-js-get-the-week-number-based-on-a-specific-day-also-past-years
        var weekNumber = moment(value, "MM-DD-YYYY").day(0).format("w");
        /* 
        var firstDate = moment(value, "MM-DD-YYYY").day(0).format("MM-DD");
        var lastDate =  moment(value, "MM-DD-YYYY").day(6).format("MM-DD"); 
        */
        $("#weeklyDatePicker").val("W" + weekNumber + ", " + yearNumber);

    });
});
