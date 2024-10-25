document.getElementById('option1').addEventListener('click', function () {
    console.log('Option 1 clicked');
    // Reset to default styles
    document.querySelector('.wrapper').style.background = "";
    document.querySelectorAll('.coloured-faded-text').forEach(function (el) {
        el.style.background = "";
    });
    document.querySelectorAll('.episkepsi-text li').forEach(function (el) {
        el.style.color = '';
    });
    document.getElementById('about').style.background = "";
    document.querySelectorAll('#about h2::after').forEach(function (el) {
        el.style.background = "";
    });
    document.querySelectorAll('.services-text').forEach(function (el) {
        el.style.textShadow = "";
    });
    document.getElementById('services').style.background = "";
    document.getElementById('resume').style.background = "";
    document.querySelectorAll('p').forEach(function (el) {
        el.style.color = '';
    });
    document.getElementById('contact').style.background = "";
    document.querySelectorAll('.header-shadow').forEach(function (el) {
        el.style.visibility = 'visible';
    });
});

document.getElementById('option2').addEventListener('click', function () {
    console.log('Option 2 clicked');
    document.querySelector('.wrapper').style.background = "-webkit-linear-gradient(top, rgb(123 167 227) 80%, rgb(229, 229, 229) 100%)";
    document.querySelectorAll('.coloured-faded-text').forEach(function (el) {
        el.style.background = "-webkit-linear-gradient(left top, rgb(123, 167, 227) 0%, rgb(130, 185, 171) 100%) text";
    });
    document.querySelectorAll('.episkepsi-text li').forEach(function (el) {
        el.style.color = 'black';
    });
    document.getElementById('about').style.background = "#e5e5e5";
    document.querySelectorAll('#about h2::after').forEach(function (el) {
        el.style.background = "-webkit-linear-gradient(top left, #1b7983 0%, #5a5d5c 100%)";
    });
    document.querySelectorAll('.services-text').forEach(function (el) {
        el.style.textShadow = "5px 4px 6px black";
    });
    document.getElementById('services').style.background = "-webkit-linear-gradient(top, rgb(130 185 171) 80%, rgb(229, 229, 229) 100%)";    document.getElementById('resume').style.background = "#e5e5e5";
    document.querySelectorAll('p').forEach(function (el) {
        el.style.color = 'black';
    });
    document.getElementById('contact').style.background = "rgb(165 165 165)";
    document.querySelectorAll('.header-shadow').forEach(function (el) {
        el.style.visibility = 'hidden';
    });
});

document.getElementById('option3').addEventListener('click', function () {
    console.log('Option 3 clicked');
    document.querySelector('.wrapper').style.background = "-webkit-linear-gradient(top, rgb(91, 179, 157) 80%, rgb(229, 229, 229) 100%)";
    document.querySelectorAll('.coloured-faded-text').forEach(function (el) {
        el.style.background = "-webkit-linear-gradient(left top, rgb(67 225 134) 0%, rgb(49 69 58) 100%) text";
    });
    document.querySelectorAll('.episkepsi-text li').forEach(function (el) {
        el.style.color = 'black';
    });
    document.getElementById('about').style.background = "#e5e5e5";
    document.querySelectorAll('#about h2::after').forEach(function (el) {
        el.style.background = "-webkit-linear-gradient(top left, #1b7983 0%, #5a5d5c 100%)";
    });
    document.querySelectorAll('.services-text').forEach(function (el) {
        el.style.textShadow = "5px 4px 6px black";
    });
    document.getElementById('services').style.background = "-webkit-linear-gradient(top, rgb(65 127 111) 80%, rgb(229, 229, 229) 100%)";
    document.getElementById('resume').style.background = "#e5e5e5";
    document.querySelectorAll('p').forEach(function (el) {
        el.style.color = 'black';
    });
    document.getElementById('contact').style.background = "-webkit-linear-gradient(top, rgb(34 71 62) 50%, rgb(229, 229, 229) 100%)";
    document.querySelectorAll('.header-shadow').forEach(function (el) {
        el.style.visibility = 'hidden';
    });
});



document.getElementById('option4').addEventListener('click', function () {
    console.log('Option 4 clicked');
    document.querySelector('.wrapper').style.background = "-webkit-linear-gradient(top, rgb(123, 167, 227) 80%, rgb(229, 229, 229) 100%)";
    document.querySelectorAll('.coloured-faded-text').forEach(function (el) {
        el.style.background = "-webkit-linear-gradient(left top, rgb(123, 167, 227) 0%, rgb(49 69 58) 100%) text";
    });
    document.querySelectorAll('.episkepsi-text li').forEach(function (el) {
        el.style.color = 'black';
    });
    document.getElementById('about').style.background = "#e5e5e5";
    document.querySelectorAll('#about h2::after').forEach(function (el) {
        el.style.background = "-webkit-linear-gradient(top, rgb(47 97 165) 50%, rgb(229, 229, 229) 100%))";
    });
    document.querySelectorAll('.services-text').forEach(function (el) {
        el.style.textShadow = "5px 4px 6px black";
    });
    document.getElementById('services').style.background = "-webkit-linear-gradient(top, rgb(65 118 191) 50%, rgb(229, 229, 229) 100%)";
    document.getElementById('resume').style.background = "#e5e5e5";
    document.querySelectorAll('p').forEach(function (el) {
        el.style.color = 'black';
    });
    document.getElementById('contact').style.background = "-webkit-linear-gradient(top, rgb(0 42 99) 50%, rgb(229, 229, 229) 100%)";
    document.querySelectorAll('.header-shadow').forEach(function (el) {
        el.style.visibility = 'hidden';
    });
});