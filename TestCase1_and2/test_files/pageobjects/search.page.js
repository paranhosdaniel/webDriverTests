const assert = require('assert'); // Ensure the assert module is imported for validation

class SearchPage {
    // Getter for the search input box element
    get searchTexbox() {
        return $('#searchbox_input'); // Locate the search input box by its ID
    }

    // Getter for the search button element
    get searchButton() {
        return $('button[aria-label="Search"]'); // Locate the search button by its aria-label attribute
    }

    // Perform a search using the specified search term
    async makeASearch(search) {
        await this.searchTexbox.setValue(search); // Enter the search term into the input box
        await this.searchButton.click(); // Click the search button to submit
    }

    // Open the DuckDuckGo homepage
    async openPage() {
        return await browser.url('https://start.duckduckgo.com/'); // Navigate to the DuckDuckGo homepage
    }

    // Verify the search results contain the expected term and count occurrences
    async checkSearchTitles() {
        // Collect all search result titles
        const results = await $$('[data-testid="result-title-a"]');

        // Ensure that there are search results available
        assert(results.length > 0, 'No search results were found.');

        let androidCount = 0; // Counter for occurrences of the term "android"

        // Loop through each result to check for the term and count occurrences
        for (const result of results) {
            const resultText = await result.getText(); // Get the text of the result
            const occurrences = (resultText.toLowerCase().match(/android/g) || []).length; // Count "android"
            androidCount += occurrences;

            // Assert that the result text contains the term "android"
            assert(
                resultText.toLowerCase().includes('android'),
                `The result does not contain "android": ${resultText}`
            );
        }

        // Log the total count of "android" occurrences across all results
        console.log(`The word "android" appeared ${androidCount} times across all results.`);
    }

    // Retrieve and count the total number of elements in the "All Regions" field
    async getAllRegionCount() {
        // Collect all span elements inside the target container
        const spanElements = await $$(
            'div.BDI1KtNF8HUPBZ4Cw_nK .XDlY0TtgvNNpAZYGOLff .M0ujmOhCHtsN1oLaSQki span.fdosLIuRgrWo7SyeqSUb'
        );

        const totalCount = spanElements.length; // Count the number of elements found
        console.log(`The total number of elements found in the field is: ${totalCount}`);

        // Assert that the total count is greater than 10
        expect(totalCount).toBeGreaterThan(10);
    }
}

module.exports = new SearchPage(); // Export the SearchPage class as a singleton
