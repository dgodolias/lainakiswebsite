
document.addEventListener("DOMContentLoaded", function () {
    function observeElements(selector, threshold) {
        const elements = document.querySelectorAll(selector);

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Element is in view, add the class
                    entry.target.classList.add('in-view');
                    console.log('in-view');
                } else {
                    // Element is out of view, remove the class
                    entry.target.classList.remove('in-view');
                    console.log('out-of-view');
                }
            });
        }, { threshold: threshold });

        elements.forEach(element => {
            observer.observe(element);
        });
    }

    // Observe elements with .episkepsi-text class
    observeElements('.service-row1', 0.3);
    observeElements('.about-row1', 0.3);
    observeElements('#header-title-inside', 0.4);
    observeElements('#biography', 0.2);
    observeElements('#contact', 0.2);
});

