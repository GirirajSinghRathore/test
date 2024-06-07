(function() {
    // Function to find and click the button
    function clickConfirmProceedButton() {
        // Find the button with text 'confirm' or 'proceed'
        const buttons = document.querySelectorAll("button");
        let found = false;

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
                if (mutation.addedNodes.length > 0) {
                    clickConfirmProceedButton();
                }
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    // Call the functions
    clickConfirmProceedButton();
    observeDOMChanges();
})();
