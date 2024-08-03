

window.onload = function () {
    /* Code for generate secret key */

     document.getElementById("btn-secretkey-generator").addEventListener('click', function () {
        let minm = 100000;
        let maxm = 999999;
        let randomNumber = Math.floor(Math.random() * (maxm - minm + 1)) + minm;

        let textShowSecretKey = document.getElementById("text-secretkey");

        textShowSecretKey.setAttribute("value", randomNumber);

    });

    let gridItems = document.getElementsByClassName("grid-item");

    let inputNumber = document.getElementById("text-Input");
    let digit = 0;

    for (let i = 0; i < gridItems.length - 2; i++) {
        gridItems[i].addEventListener('click', function () {
            display(gridItems[i].innerHTML);
        })
    }

    function display(val) {
        ++digit;
        if (digit >= 0 && digit <= 6) {
            document.getElementById("text-Input").value += val;
        } else {
            alert("You can't enter more then 6 digit.");
        }

    }

    document.getElementById("button-clear").addEventListener('click', function () {
        document.getElementById("text-Input").value = " ";
        digit = 0;
    })

}