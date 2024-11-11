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
                    let adjustmentFactor = (point[1] * dimension) / (point[0] * item.percentage * Math.pow(epsilon, item.exponent / epsilon));
                    baseValue = dimension * item.percentage * Math.pow(epsilon, item.exponent / epsilon) * adjustmentFactor;

                    // If freezeBelow is true, set the value to the point value and stop further adjustments
                    if (item.freezeBelow) {
                        baseValue = point[1] * dimension;
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
    { selector: '#top-left-name', percentage: 0.015, exponent: 0.9, cssProperty: 'fontSize', dependentOn: 'height' },
    { selector: '#top-left-name', percentage: 0.006, exponent: 1, cssProperty: 'margin', dependentOn: 'height' },
    { selector: '#menu.navbar-default .navbar-nav>li>a', percentage: 0.01, exponent: 1, cssProperty: 'fontSize', dependentOn: 'height' },
    { selector: '#menu.navbar-default .navbar-nav>li>a', percentage: 0.006, exponent: 1, cssProperty: 'margin-left', dependentOn: 'width' },
    { selector: '#menu.navbar-default .navbar-nav>li>a', percentage: 0.006, exponent: 1, cssProperty: 'margin-right', dependentOn: 'width' },
    { selector: '#menu.navbar-default .navbar-nav>li>a', percentage: 0.012, exponent: 1, cssProperty: 'margin-top', dependentOn: 'height' },
    { selector: '#menu.navbar-default .navbar-nav>li>a', percentage: 0.012, exponent: 1, cssProperty: 'margin-bottom', dependentOn: 'height' },
    { selector: '#menu.navbar-default .navbar-nav>li>a', percentage: 0.0045, exponent: 1, cssProperty: 'padding', dependentOn: 'height' },
    { selector: '#header-title-inside h1', percentage: 0.023, exponent: 0.9, resizingPoints: [[1200, 0.04], [854,0.06]], freezeBelow: true, cssProperty: 'fontSize', dependentOn: 'width' },
    { selector: '#header', percentage: 0.7, exponent: 0.9, freezeBelow: true, cssProperty: 'height', dependentOn: 'height' },
    { selector: '.carousel', percentage: 0.3, exponent: 1, cssProperty: 'height', dependentOn: 'height' },
    { selector: '.carousel', percentage: 0.3, exponent: 1, cssProperty: 'width', dependentOn: 'height' },
    { selector: '.carousel', percentage: 0.3, exponent: 1, cssProperty: 'maxWidth', dependentOn: 'height' },
    { selector: '.coloured-faded-text', percentage: 0.02, exponent: 0.9, cssProperty: 'fontSize', dependentOn: 'height' },
    { selector: '.episkepsi-text li', percentage: 0.011, exponent: 1,resizingPoints: [[640, 0.02]], freezeBelow: true, cssProperty: 'fontSize', dependentOn: 'height' },
    { selector: '#profile-pic', percentage: 0.4, exponent: 0.9, resizingPoints: [[1200, 0.348]], freezeBelow: true, cssProperty: 'width', dependentOn: 'width' },
    { selector: '#profile-pic', percentage: 0.6, exponent: 0.9, resizingPoints: [[1200, 0.426]], freezeBelow: true, cssProperty: 'height', dependentOn: 'height' },
    { selector: '#about', percentage: 0.15, exponent: 1, cssProperty: 'padding-top', dependentOn: 'height' },
    { selector: '#about', percentage: 0.15, exponent: 1, cssProperty: 'padding-bottom', dependentOn: 'height' },
    { selector: '.services-text h2', percentage: 0.024, exponent: 1, cssProperty: 'fontSize', dependentOn: 'height' },
    { selector: '#services', percentage: 0.22, exponent: 1, cssProperty: 'padding-top', dependentOn: 'height' },
    { selector: '#services', percentage: 0.22, exponent: 1, cssProperty: 'padding-bottom', dependentOn: 'height' },
    { selector: '.services-text li', percentage: 0.011, exponent: 1, resizingPoints: [[640, 0.02]], freezeBelow: true, cssProperty: 'fontSize', dependentOn: 'height' },
    { selector: '#contact-container-specific', percentage: 0.35, exponent: 0.9, resizingPoints: [[900, 0.4]], freezeBelow: true, cssProperty: 'height', dependentOn: 'height' },
    { selector: '.screen-header-button', percentage: 0.007, exponent: 0.9, resizingPoints: [[900, 0.02]], freezeBelow: true, cssProperty: 'width', dependentOn: 'width' },
    { selector: '.screen-header-button', percentage: 0.007, exponent: 0.9, resizingPoints: [[900, 0.02]], freezeBelow: true, cssProperty: 'height', dependentOn: 'width' },
    { selector: '.app-title span', percentage: 0.015, exponent: 1, resizingPoints: [[640, 0.03]], freezeBelow: true,  cssProperty: 'fontSize', dependentOn: 'height' },
    { selector: '.app-form p', percentage: 0.01, exponent: 1, resizingPoints: [[640, 0.02]], freezeBelow: true,  cssProperty: 'fontSize', dependentOn: 'height' },
];

// Run the function on page load with the configuration
adjustFontSize(fontSizeConfig);

// Run the function every time the window is resized with the configuration
window.addEventListener('resize', () => adjustFontSize(fontSizeConfig));