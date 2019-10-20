$(document).ready(function () {
    // $('textarea')[0].val(JSON.parse(localStorage.getItem('apptTextContent')));


    var currentDay = $("#currentDay");
    var date = $("<div>");



    setInterval(getCurrentTime, 1000);
    function getCurrentTime() {
        date.text(moment().format('dddd, MMMM Do YYYY, h:mm:ss a'));
        currentDay.append(date);
    }


    // var apptText = $("<textarea>");
    // // var apptTextContent = apptText.val();
    // $(".col-md-10").append(apptText);

    var clickToSave = $(".saveBtn").on("click", function () {
        alert("you saved this appointment");
        var apptTextContent = $(this).siblings(".col-md-10").val();
        console.log($(this).sibling('.col-md-1').text);//get inner str
        localStorage.setItem("apptTextContent" + $(this).sibling('.col-md-1').text, apptTextContent);
    });

    clickToSave()
}





);




// use the following in the HTML file
    // create 9 rows
    // create 3 columns 
    // add time slot in first column (in bootstrap) using an array of hours (9-5pm)
    // add text area 

    // create a function for the save button to save to local storage when clicked. Add event listner to save div for each hour 

    //change colors for time of day
    //past = gray
    //present = red
    //future = green
