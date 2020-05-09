// how to loop over the rows

// <div id="hour0"></div>
// <div id="hour1"></div>
// <div id="hour2"></div>
// <div id="hour3"></div>
// <div id="hour4"></div>

// for (var i = 0; i < 5; i++) {
//     $("#hour" + i).text("You are in hour " + i)

// }




// var textEl = document.querySelector(".description")
// var saveBtnEL = document.querySelector(".saveBtn")

// var count = localStorage.getItem("count")

// textEl.textContent = count

// saveBtnEL.addEventListener("click", function() {

//     localStorage.setItem("count", count)
// })

$(document).ready(function() {

    var currentDateAndTime = Date(Date.now());// exp: Fri Oct 25 2019 17:40:56 GMT-0400 (Eastern Daylight Time)`
    $("#currentDay").append(currentDateAndTime)
    // var currentHour = new Date().getHours();//Current hour in military time

    //place all of your javascript code here
    var test = 5;
    console.log("testing")
    
    
    $(".btn").on("click", function() {
        var time = $(this).val()
        console.log(time)
        var storeContent = $("#textArea" + time).val().trim()
        localStorage.getItem("storeContent")
    })
    
})
