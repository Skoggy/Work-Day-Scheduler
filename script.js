$(document).ready(function () {



    //console.log(moment().calendar());
    //Sets current year, month and day of the week.
    $("#currentDay").text(moment().format("dddd MMMM Do YYYY"));

    window.addEventListener("load", displayPlan) 
    

    function displayPlan() {
    var planner = localStorage.getItem('dayPlanner')
    $(".text-area").text() = planner
    }

    const textAreas = $(".text-area");
    let currentHour = parseInt(moment().format('H'));

    Array.from(textAreas).forEach(textArea => {
        let textAreaIdString = textArea.id,
            tAHour;

        if (textAreaIdString) {
            tAHour = parseInt(textAreaIdString);

        }
        if (tAHour) {
            // Compares row id to current hour and sets color accordingly
            if (currentHour === tAHour) {
                textAreas.attr('class', 'present');
            } else if ((currentHour < tAHour) && (currentHour > tAHour - 6)) {
                textAreas.attr('class', 'future');
            } else if ((currentHour > tAHour) && (currentHour < tAHour + 6)) {
                textAreas.attr('class', 'past');


            }

        }
    })

    $(".saveBtn").on('click', saveText)

    function saveText(){
     var dayPlanner = $(".text-area").val();
     localStorage.setItem('dayPlanner', dayPlanner);
     
}


  
}
)






