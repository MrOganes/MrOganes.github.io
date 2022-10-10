/*jslint browser */
/*jslint devel */

function onClick() {
    let x = document.getElementById("kol").value;
    let y = document.getElementById("price").value;
    let r = document.getElementById("result");
    x = parseInt(x);
    y = parseInt(y);
    r.innerHTML = x * y;
    return false;
}

function prov() {
    let clear = document.getElementById("result");
    clear.innerHTML = "";
    let a = document.getElementById("kol").value;
    let b = document.getElementById("price").value;
    let ex = /\D/;
    a = ex.test(a);
    b = ex.test(b);
    if (a === true && b === true) {
        onClick();
    } else {
        alert("Введенные данные некорректны!");
    }
}

window.addEventListener("DOMContentLoaded", function () {
    let c = document.getElementById("my-button");
    c.addEventListener("click", prov);
});
