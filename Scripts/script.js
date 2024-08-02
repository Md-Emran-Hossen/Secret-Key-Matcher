

window.onload = function () {
    /* Code for generate secret key */

    document.getElementById("btn-secretkey-generator").addEventListener('click', function () {
     
        console.log("Hello Emran");
            let minm = 100000;
            let maxm = 999999;
            let randomNumber = Math.floor(Math.random() * (maxm - minm + 1)) + minm;

            let textShowSecretKey = document.getElementById("text-secretkey");

            console.log(textShowSecretKey);
            document.getElementById("text-secretkey").innerText = randomNumber;


    });
}