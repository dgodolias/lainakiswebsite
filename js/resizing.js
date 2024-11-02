function adjustFontSize(config) {
    config.forEach(item => {
        // Select the target elements
        const elements = document.querySelectorAll(item.selector);

        // Determine the base font size based on the specified percentage of the viewport width
        let epsilon = 2.71828; // Approximation of Euler's number
        let baseFontSize = window.innerWidth * item.percentage * Math.pow(epsilon, item.exponent / epsilon);

        // Adjust the font size based on resizing points
        if (item.resizingPoints) {
            item.resizingPoints.forEach(point => {
                if (window.innerWidth <= point[0]) {
                    // Calculate the adjustment factor
                    let adjustmentFactor = point[1] / (point[0] * item.percentage * Math.pow(epsilon, item.exponent / epsilon));
                    baseFontSize = window.innerWidth * item.percentage * Math.pow(epsilon, item.exponent / epsilon) * adjustmentFactor;

                    // If freezeBelow is true, set the font size to the point value and stop further adjustments
                    if (item.freezeBelow) {
                        baseFontSize = point[1];
                        return;
                    }
                }
            });
        }

        // Apply the calculated font size in pixels to each element
        elements.forEach(element => {
            element.style.fontSize = baseFontSize + 'px';
        });
    });
}

// Configuration for different elements and their respective percentages, exponents, resizing points, and freezeBelow flag
const fontSizeConfig = [
    { selector: '#top-left-name', percentage: 0.013, exponent: 0.9, resizingPoints: [[1200, 25]], freezeBelow: true },
    { selector: '#menu.navbar-default .navbar-nav>li>a', percentage: 0.007, exponent: 0.9, resizingPoints: [[1200, 15]], freezeBelow: true }
];

// Run the function on page load with the configuration
adjustFontSize(fontSizeConfig);

// Run the function every time the window is resized with the configuration
window.addEventListener('resize', () => adjustFontSize(fontSizeConfig));