$(document).ready(function () {



    //console.log(moment().calendar());
    //Sets current year, month and day of the week.
    $("#currentDay").text(moment().format("dddd MMMM Do YYYY"));

    



    $(".9am").click(function(){
        var nineContent = $(".nineam").val();
        console.log(nineContent)
        localStorage.setItem('nine', JSON.stringify(nineContent))
    })

    $(".10am").click(function(){
        var tenContent = $(".tenam").val();
        console.log(tenContent)
        localStorage.setItem('ten', JSON.stringify(tenContent))
    })

    $(".11am").click(function(){
        var elevenContent = $(".elevenam").val();
        console.log(elevenContent)
        localStorage.setItem('eleven', JSON.stringify(elevenContent))
    })

    $(".12pm").click(function(){
        var twelveContent = $(".twelvepm").val();
        console.log(twelveContent)
        localStorage.setItem('twelve', JSON.stringify(twelveContent))
    })

    $(".1pm").click(function(){
        var oneContent = $(".onepm").val();
        console.log(oneContent)
        localStorage.setItem('one', JSON.stringify(oneContent))
    })

    $(".2pm").click(function(){
        var twoContent = $(".twopm").val();
        console.log(twoContent)
        localStorage.setItem('two', JSON.stringify(twoContent))
    })

    $(".3pm").click(function(){
        var threeContent = $(".threepm").val();
        console.log(threeContent)
        localStorage.setItem('three', JSON.stringify(threeContent))
    })

    $(".4pm").click(function(){
        var fourContent = $(".fourpm").val();
        console.log(fourContent)
        localStorage.setItem('four', JSON.stringify(fourContent))
    })
    $(".5pm").click(function(){
        var fiveContent = $(".fivepm").val();
        console.log(fiveContent)
        localStorage.setItem('five', JSON.stringify(fiveContent))
    })



    var nine = JSON.parse(localStorage.getItem('nine'))
    $(".nineam").val(nine);
    var ten = JSON.parse(localStorage.getItem('ten'))
    $(".tenam").val(ten);
    var eleven = JSON.parse(localStorage.getItem('eleven'))
    $(".elevenam").val(eleven);
    var twelve = JSON.parse(localStorage.getItem('twelve'))
    $(".twelvepm").val(twelve);
    var one = JSON.parse(localStorage.getItem('one'))
    $(".onepm").val(one);
    var two = JSON.parse(localStorage.getItem('two'))
    $(".twopm").val(two);
    var three = JSON.parse(localStorage.getItem('three'))
    $(".threepm").val(three);
    var four = JSON.parse(localStorage.getItem('four'))
    $(".fourpm").val(four);
    var five = JSON.parse(localStorage.getItem('five'))
    $(".fivepm").val(five);
    


    




    
   
    const textAreas = $(".text-area");
    let currentHour = parseInt(moment().format('H'));

    Array.from(textAreas).forEach(textArea => {
        let textAreaIdString = textArea.id,
            tAHour;
        
        if (textAreaIdString) {
            tAHour = parseInt(textAreaIdString);
            if (tAHour) {
            console.log(currentHour)
            console.log(tAHour > tAHour - 6)
            // Compares textarea id to current hour and sets color accordingly
            if (currentHour === tAHour) {
                setColor(textArea, '#ff6961')
                
            } 
            else if ((currentHour < tAHour)  && (currentHour > tAHour - 9)) {
                setColor(textArea, '#77dd77')
            }
             else if ((currentHour > tAHour) && (currentHour < tAHour + 9)) {
                setColor(textArea, '#d3d3d3')
            }
        }}
    function setColor(element, color){
        element.style.backgroundColor = color;
    }
    }
        
    )

    

      


   


  
}
)






