
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
});

document.getElementById('option2').addEventListener('click', function () {
    console.log('Option 2 clicked');
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
    document.getElementById('services').style.background = "-webkit-linear-gradient(top, rgb(91 166 179) 60%, rgb(229, 229, 229) 100%)";
    document.getElementById('resume').style.background = "#e5e5e5";
    document.querySelectorAll('p').forEach(function (el) {
        el.style.color = 'black';
    });
    document.getElementById('contact').style.background = "rgb(99 99 99)";
});
