// how to loop over the rows

// <div id="hour0"></div>
// <div id="hour1"></div>
// <div id="hour2"></div>
// <div id="hour3"></div>
// <div id="hour4"></div>





$(document).ready(function() {

    //place all of your javascript code here
    for (var i = 0; i < 1; i++) {
        $("#hour" + i).text("You are in hour " + i)
    }

    var Time = Date(Date.now());// exp: Fri Oct 25 2019 17:40:56 GMT-0400 (Eastern Daylight Time)`
    $("#currentDay").append(Time)
    var currentHour = new Date().getHours();//Current hour in military time
    $(".description").append(currentHour)
    
    
    
    
    
    $(".btn").click(function() {

    

            
            var descriptEl = $(".description").val()
            localStorage.setItem("description", JSON.stringify(descriptEl))
            
            localStorage.getItem("description")
        

    })

    
    
})
