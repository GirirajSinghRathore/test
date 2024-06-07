(function() {
    // Function to find and click the link with text content 'Proceed'
    function clickProceedLink() {
        // Get all links on the page
        const links = document.querySelectorAll("a");
        let found = false;

        // Iterate over the links to find the ones with the required text
        links.forEach(link => {
            if (link.textContent.trim().toLowerCase() === 'proceed') {
                link.click();
                console.log("Link with text 'Proceed' clicked successfully.");
                found = true;
            }
        });

        if (!found) {
            console.log("Link with text 'Proceed' not found.");
        }
    }

    // Function to observe changes in the DOM
    function observeDOMChanges() {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        clickProceedLink();
                    }
                });
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    // Initial call to handle links already on the page
    clickProceedLink();

    // Start observing the DOM for changes
    observeDOMChanges();
})();
