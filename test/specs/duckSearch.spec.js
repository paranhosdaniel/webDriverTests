const assert = require('assert'); // Import the assert module
const SearchPage = require('../pageobjects/search.page')

describe('Make a Search using the DuckDuckGo page', async () => {

    beforeEach(async () => {
        await SearchPage.openPage(); // Open DuckDuckGo homepage
        await SearchPage.makeASearch('android') //make a search by the word android
    });


    it('should verify search results contain the term "android"', async () => {
                             
        //verifying the results title
        await SearchPage.checkSearchTitles()       
        
    });

    it('should count and validate the number of regions in All Regions field', async () => {
                  
        // Retrieve and count the total number of elements in the "All Regions" field
       await SearchPage.getAllRegionCount();    

       

        });

    


});
