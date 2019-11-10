
$(`#submitBtn`).on("click", function(event) {
    event.preventDefault(); 

    let userInput = {
        name: $(`#nameInput`).val().trim(), 
        photo: $(`#photoInput`).val().trim(), 
        answers: [
            parseInt($(`#question1`).val()), 
            parseInt($(`#question2`).val()), 
            parseInt($(`#question3`).val()), 
            parseInt($(`#question4`).val()), 
            parseInt($(`#question5`).val()), 
            parseInt($(`#question6`).val()), 
            parseInt($(`#question7`).val()), 
            parseInt($(`#question8`).val()), 
            parseInt($(`#question9`).val()), 
            parseInt($(`#question10`).val())
        ]
    }
    
    let userInputArr = userInput.answers; 

    if(userInputArr.includes(NaN)) {
        alert(`Oops!`); 
        return; 
    }
    console.log(JSON.stringify(userInput)); 


    //this part is not complete!! 
    $.post("/api/friends", userInput)
    .then(function(data){

    })
}); 