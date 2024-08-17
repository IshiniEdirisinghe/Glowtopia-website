function showDetails(product) {
    alert("More details about " + product);
}

document.getElementById('contactForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us, ' + document.getElementById('name').value + '!');
});

function openAcne() {
    document.getElementById("acne").style.display = "block";
}

function closeAcne() {
    document.getElementById("acne").style.display = "none";
}


function openOily() {
    document.getElementById("oily").style.display = "block";
}

function closeOily() {
    document.getElementById("oily").style.display = "none";
}


function openDry() {
    document.getElementById("dry").style.display = "block";
}

function closeDry() {
    document.getElementById("dry").style.display = "none";
}

function openSen() {
    document.getElementById("sensitive").style.display = "block";
}

function closeSen() {
    document.getElementById("sensitive").style.display = "none";
}

function openLow() {
    document.getElementById("low").style.display = "block";
}

function closeLow() {
    document.getElementById("low").style.display = "none";
}

function openMed() {
    document.getElementById("medium").style.display = "block";
}

function closeMed() {
    document.getElementById("medium").style.display = "none";
}

function openHigh() {
    document.getElementById("high").style.display = "block";
}

function closeHigh() {
    document.getElementById("high").style.display = "none";
}


function openStr() {
    document.getElementById("straight").style.display = "block";
}

function closeStr() {
    document.getElementById("straight").style.display = "none";
}

function openWavy() {
    document.getElementById("wavy").style.display = "block";
}

function closeWavy() {
    document.getElementById("wavy").style.display = "none";
}

function openCurl() {
    document.getElementById("curly").style.display = "block";
}

function closeCurl() {
    document.getElementById("curly").style.display = "none";
}




