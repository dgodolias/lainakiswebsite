function adjustFontSize(config) {
    config.forEach(item => {
        // Select the target elements
        const elements = document.querySelectorAll(item.selector);

        // Set the base font size based on the specified percentage of the viewport width
        let epsilon = 2.71828; // Approximation of Euler's number
        let fontSize = window.innerWidth * item.percentage * Math.pow(epsilon, item.exponent / epsilon);

        // Apply the calculated font size in pixels to each element
        elements.forEach(element => {
            element.style.fontSize = fontSize + 'px';
        });
    });
}

// Configuration for different elements and their respective percentages and exponents
const fontSizeConfig = [
    { selector: '#top-left-name', percentage: 0.013, exponent: 0.9 },
    { selector: '#menu.navbar-default .navbar-nav>li>a', percentage: 0.007, exponent: 0.9 }
];

// Run the function on page load with the configuration
adjustFontSize(fontSizeConfig);

// Run the function every time the window is resized with the configuration
window.addEventListener('resize', () => adjustFontSize(fontSizeConfig));