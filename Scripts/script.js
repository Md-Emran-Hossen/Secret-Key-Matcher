

window.onload = function () {

    /* Code for generate secret key */
    document.getElementById("btn-secretkey-generator").addEventListener('click', function () {
        let minm = 100000;
        let maxm = 999999;
        let randomNumber = Math.floor(Math.random() * (maxm - minm + 1)) + minm;

        let textShowSecretKey = document.getElementById("text-secretkey");

        textShowSecretKey.setAttribute("value", randomNumber);

    });

    /* code for Read Input Number */
    let gridItems = document.getElementsByClassName("grid-item");
    let inputNumber = document.getElementById("text-Input");

    for (let i = 0; i < gridItems.length - 2; i++) {
        gridItems[i].addEventListener('click', function () {
            display(gridItems[i].innerHTML);
        })
    }

    function display(val) {

        let digit = document.getElementById("text-Input").value;
        console.log("Length", digit.length);
        if (digit.length <= 5) {
            document.getElementById("text-Input").value += val;
        } else {
            alert("You can't enter more then 6 digit.");
        }
    }

    document.getElementById("button-clear").addEventListener('click', function () {
        document.getElementById("text-Input").value = "";
        digit = 0;
    });


    document.getElementById("button-submit").addEventListener('click', function () {
        let inputText = 0;
        let showMessage = document.getElementById("showMessage");
        let secretKeyInput = document.getElementById("text-secretkey").value;
        inputText = document.getElementById("text-Input").value;
        if (inputText === secretKeyInput) {
            showMessage.innerHTML = "<span style='font-size:20px;'> &#9989; </span>" + "Your Secret Key is matched";
            showMessage.style.color="black";
            showMessage.style.fontSize = "25";
            showMessage.style.fontWeight= 600;
        } else {
            
            showMessage.innerHTML = "<span style='font-size:20px;'> &#10060; </span>" + "Sorry, Secret Key is not matched";
            showMessage.style.color="red";
            showMessage.style.fontSize = "25";
            showMessage.style.fontWeight= 600;
        }
    });

    document.getElementById("button-cancel").addEventListener('click', function (event) {

        let arrayexit = document.getElementById("text-Input").value;

        for (let i = 0; i < arrayexit.length; i++) {
            let output = arrayexit.slice(0, -1);
            document.getElementById("text-Input").value = output;
        }
    });

}