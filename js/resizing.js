function adjustFontSize(config) {
    config.forEach(item => {
        // Select the target elements
        const elements = document.querySelectorAll(item.selector);

        // Determine the base value based on the specified percentage of the viewport dimension
        let epsilon = 2.71828; // Approximation of Euler's number
        let dimension = item.dependentOn === 'height' ? window.innerHeight : window.innerWidth;
        let baseValue = dimension * item.percentage * Math.pow(epsilon, item.exponent / epsilon);

        // Adjust the value based on resizing points
        if (item.resizingPoints) {
            item.resizingPoints.forEach(point => {
                if (dimension <= point[0]) {
                    // Calculate the adjustment factor
                    let adjustmentFactor = point[1] / (point[0] * item.percentage * Math.pow(epsilon, item.exponent / epsilon));
                    baseValue = dimension * item.percentage * Math.pow(epsilon, item.exponent / epsilon) * adjustmentFactor;

                    // If freezeBelow is true, set the value to the point value and stop further adjustments
                    if (item.freezeBelow) {
                        baseValue = point[1];
                        return;
                    }
                }
            });
        }

        // Apply the calculated value in pixels to each element
        elements.forEach(element => {
            element.style[item.cssProperty] = baseValue + 'px';
        });
    });
}

// Configuration for different elements and their respective percentages, exponents, resizing points, freezeBelow flag, CSS property, and dependent dimension
const fontSizeConfig = [
    { selector: '#top-left-name', percentage: 0.012, exponent: 0.9, resizingPoints: [[1200, 25]], freezeBelow: true, cssProperty: 'fontSize', dependentOn: 'width' },
    { selector: '#menu.navbar-default .navbar-nav>li>a', percentage: 0.006, exponent: 0.9, resizingPoints: [[1200, 15]], freezeBelow: true, cssProperty: 'fontSize', dependentOn: 'width' },
    { selector: '#menu.navbar-default .navbar-nav>li>a', percentage: 0.006, exponent: 0.9, resizingPoints: [[1200, 15]], freezeBelow: false, cssProperty: 'margin-left', dependentOn: 'width' },
    { selector: '#menu.navbar-default .navbar-nav>li>a', percentage: 0.006, exponent: 0.9, resizingPoints: [[1200, 15]], freezeBelow: false, cssProperty: 'margin-right', dependentOn: 'width' },
    { selector: '#header-title-inside h1', percentage: 0.026, exponent: 0.9, resizingPoints: [[1200, 50]], freezeBelow: true, cssProperty: 'fontSize', dependentOn: 'width' },
    { selector: '#header', percentage: 0.7, exponent: 0.9, freezeBelow: true, cssProperty: 'height', dependentOn: 'height' },
    { selector: '#menu', percentage: 0.06, exponent: 0.9, freezeBelow: true, cssProperty: 'height', dependentOn: 'height' },
    { selector: '#menu.navbar-default .navbar-nav>li>a', percentage: 0.0025, exponent: 1.2, freezeBelow: true, cssProperty: 'padding', dependentOn: 'height' },
    { selector: '.coloured-faded-text', percentage: 0.014, exponent: 0.9, resizingPoints: [[1200, 35]], freezeBelow: true, cssProperty: 'fontSize', dependentOn: 'width' },
    { selector: '.episkepsi-text li', percentage: 0.006, exponent: 0.9, resizingPoints: [[1640, 16]], freezeBelow: true, cssProperty: 'fontSize', dependentOn: 'width' },
    { selector: '#profile-pic', percentage: 0.25, exponent: 0.9, resizingPoints: [[1200, 418]], freezeBelow: true, cssProperty: 'width', dependentOn: 'width' },
    { selector: '#profile-pic', percentage: 0.3, exponent: 0.9, resizingPoints: [[1200, 512]], freezeBelow: true, cssProperty: 'height', dependentOn: 'height' },
    { selector: '.services-text h2', percentage: 0.006, exponent: 0.9, resizingPoints: [[1640, 30]], freezeBelow: true, cssProperty: 'fontSize', dependentOn: 'width' },
    { selector: '.services-text li', percentage: 0.007, exponent: 0.9, resizingPoints: [[1640, 16]], freezeBelow: true, cssProperty: 'fontSize', dependentOn: 'width' },
    { selector: '#contact-container-specific', percentage: 0.35, exponent: 0.9, resizingPoints: [[900, 400]], freezeBelow: true, cssProperty: 'height', dependentOn: 'height' },
    { selector: '.screen-header-button', percentage: 0.007, exponent: 0.9, resizingPoints: [[900, 20]], freezeBelow: true, cssProperty: 'width', dependentOn: 'width' },
    { selector: '.screen-header-button', percentage: 0.007, exponent: 0.9, resizingPoints: [[900, 20]], freezeBelow: true, cssProperty: 'height', dependentOn: 'width' },
];

// Run the function on page load with the configuration
adjustFontSize(fontSizeConfig);

// Run the function every time the window is resized with the configuration
window.addEventListener('resize', () => adjustFontSize(fontSizeConfig));