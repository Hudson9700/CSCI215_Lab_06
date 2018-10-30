document.getElementById("name").onKeypress = function () {
    var name = document.getElementById("name");
    var regExp = new RegExp("<");
    if (regExp.test(document.getElementById("name").value)) {
        name.style.backgroundColor = "red";
    } else {
        name.style.backgroundColor = "";
    }
}

document.getElementById("email").onclick = function () {
    var regExp = new RegExp('[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?');;
    if(regExp.test(document.getElementById("email").value)){
        return(true);
    } else{
        alert("You have entered a invalid meail");
        return (false)
    }
}

document.getElementById('age').onkeyup = function () {
    var regExp = new regExp('^(([0-9][1-9])|([1-9][0-9])|[1-9])$');
    if (regExp.test(document.getElementById('age').value)) {
        name.style.backgroundColor = "red";
    } else {
        name.style.backgroundColor = "";
    }
}

