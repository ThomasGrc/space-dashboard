
// IDs of inputs, and IDs of the html element that'll display the information
// ex: input-xxx, display-xxx
const data = [
        {id: "input-fuel", destID: "display-fuel"}, // <- this is an object with two elements: ID and destinationID
        {id: "input-speed", destID: "display-speed"},
        {id: "input-gravity", destID: "display-gravity"},
        {id: "input-water", destID: "display-water"},
        {id: "input-food", destID: "display-food"},
]

function saveValues() {
    data.forEach(element => {  //this allows you to loop on your array and access elements inside. (ex for first iteration: element = {id: "input-fuel", destID: "display-fuel"} so element.id = "input-fuel" and element.destID = "display-fuel")
        var x = document.getElementById(element.id).value;   // here where are retreiving the data from the input field and we store it in x
        if (x != "")  // here we just check if the input field is not epmty because if it is we don't want our values to vanish (try to remove the line and you'll get it)
            document.getElementById(element.destID).innerHTML = x; //here we are giving x to the html element with the destination ID.
    });

    //this is to make the popup vanish by applying new style through javascript
    var x = document.getElementById('popup')
    x.style.display = "none"
}

function switchMode() {
    //this is to make the popup appear by applying new style through javascript
    var x = document.getElementById('popup')
    x.style.display = "flex"
}