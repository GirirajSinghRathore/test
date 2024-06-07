(function() {
    // Function to continuously check for the link and click it
    function continuouslyCheckForLink() {
        while (true) {
            // Find all <a> elements
            const links = document.querySelectorAll('a');

            // Iterate over the links
            links.forEach(link => {
                const linkText = link.textContent.trim().toLowerCase();
                if (linkText === 'proceed') {
                    link.click();
                    console.log("Link with text 'Proceed' clicked successfully.");
                } else if (linkText === 'abort') {
                    console.log("Link with text 'Abort' found. Doing nothing.");
                }
            });

            // Wait for a short delay before checking again
            // Adjust the delay as needed
            setTimeout(() => {}, 1000); // This line creates the delay
        }
    }

    // Start the loop
    continuouslyCheckForLink();
})();
