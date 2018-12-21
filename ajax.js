var myRequest = new XMLHttpRequest();

myRequest.open('GET', 'suprise.html');

myRequest.onreadystatechange = function () {
    if (myRequest.readyState === 4) {
        document.getElementById('ajax-content').innerHTML = myRequest.responseText;
    }
}

function sendTheAJAX() {
    myRequest.send();
    
    document.getElementById('reveal').style.display = 'none';
}

