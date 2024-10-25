document.getElementById('option1').addEventListener('click', function() {
    console.log('Option 1 clicked');
  document.querySelector('.wrapper').style = "justify-content: center; display: flex; font-family: 'Source Sans Pro', sans-serif; color: white; font-weight: 300; background: -webkit-linear-gradient(top left, #1b7983 0%, #5a5d5c 100%); top: 50%; left: 0; width: 100%; height: 1000px; overflow: hidden; position: relative; z-index: 1;";
  document.querySelectorAll('.coloured-faded-text').forEach(function(el) {
    el.style = "background: white; -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: #3392a7d1;";
  });
  document.querySelectorAll('li').forEach(function(el) {
    el.style.color = 'black';
  });
  document.getElementById('about').style = "background: #e5e5e5; padding: 200px 0;";
  document.querySelectorAll('#about h2::after').forEach(function(el) {
    el.style = "position: absolute; content: ''; background: -webkit-linear-gradient(top left, #1b7983 0%, #5a5d5c 100%); height: 4px; width: 60px; bottom: 0; left: 0;";
  });
  document.getElementById('services').style = "overflow-x: hidden; padding: 100px 20px; height: fit-content; background: -webkit-linear-gradient(top left, #bbbbbb 0%, #20ab9e 100%);";
  document.getElementById('resume').style = "background: #e5e5e5; padding: 100px 0px;";
  document.querySelectorAll('p').forEach(function(el) {
    el.style.fontSize = '15px';
    el.style.color = 'black';
  });
  document.getElementById('contact').style = "padding: 160px 40px; position: relative; height: fit-content; background: rgb(27 54 73);";
});

document.getElementById('option2').addEventListener('click', function() {
    console.log('Option 2 clicked');
  // Apply different styles for option 2
  document.querySelector('.wrapper').style = "/* Add your custom styles for option 2 here */";
  document.querySelectorAll('.coloured-faded-text').forEach(function(el) {
    el.style = "/* Add your custom styles for option 2 here */";
  });
  document.querySelectorAll('li').forEach(function(el) {
    el.style.color = '/* Add your custom color for option 2 here */';
  });
  document.getElementById('about').style = "/* Add your custom styles for option 2 here */";
  document.querySelectorAll('#about h2::after').forEach(function(el) {
    el.style = "/* Add your custom styles for option 2 here */";
  });
  document.getElementById('services').style = "/* Add your custom styles for option 2 here */";
  document.getElementById('resume').style = "/* Add your custom styles for option 2 here */";
  document.querySelectorAll('p').forEach(function(el) {
    el.style.fontSize = '/* Add your custom font size for option 2 here */';
    el.style.color = '/* Add your custom color for option 2 here */';
  });
  document.getElementById('contact').style = "/* Add your custom styles for option 2 here */";
});