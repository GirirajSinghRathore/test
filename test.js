(function() {
    // Function to find and click the button
    function clickConfirmProceedButton() {
        // Get all buttons on the page
        const buttons = document.querySelectorAll("button");
        let found = false;

        // Iterate over the buttons to find the ones with the required text
        buttons.forEach(button => {
            if (button.textContent.toLowerCase().includes('confirm') || button.textContent.toLowerCase().includes('proceed')) {
                button.click();
                console.log("Button clicked successfully.");
                found = true;
            }
        });

        if (!found) {
            console.log("Button not found.");
        }
    }

    // Function to observe changes in the DOM
    function observeDOMChanges() {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        clickConfirmProceedButton();
                    }
                });
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    // Initial call to handle buttons already on the page
    clickConfirmProceedButton();

    // Start observing the DOM for changes
    observeDOMChanges();
})();
