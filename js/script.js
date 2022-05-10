
function saveValues () {
    saveValue([
        {id: "input-fuel", destID: "display-fuel"},
        {id: "input-speed", destID: "display-speed"},
        {id: "input-gravity", destID: "display-gravity"},
        {id: "input-water", destID: "display-water"},
        {id: "input-food", destID: "display-food"},
    ])
}

function saveValue(data) {
    data.forEach(element => {
        var x = document.getElementById(element.id).value;
        if (x != "")
            document.getElementById(element.destID).innerHTML = x;
    });
    var x = document.getElementById('popup')
    x.style.display = "none"
}

function switchMode() {
    var x = document.getElementById('popup')
    x.style.display = "flex"
}