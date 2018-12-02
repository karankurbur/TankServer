const http = new XMLHttpRequest();


window.onload = function () {
    console.log('helo world');
    document.getElementById("fi").onclick = swag;


};


function swag () {
    const url='localhost:80/';
    http.open("GET", url);
    http.send();
}