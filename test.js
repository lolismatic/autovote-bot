// Import requirement packages
require('chromedriver')
const chrome = require('selenium-webdriver/chrome');
const { Builder, Key, By, until } = require('selenium-webdriver');

describe('Login & vote for {{USERNAME}}', function () {
    let driver;

    before(async function() {
        driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(new chrome.Options().headless().windowSize({
                width: 640,
                height: 480
              }))
            .build();
    });

    // Next, we will write steps for our test.
    // For the element ID, you can find it by open the browser inspect feature.
    it('voting for {{USERNAME}}', async function() {
        // Load the page
        await driver.get('https://www.dalaran-wow.com/account-log/');
        // Find the search box by id
        await driver.findElement(By.id('accountName')).sendKeys('{{USERNAME}}');
        // Enter keywords and click enter
        await driver.findElement(By.id('password')).sendKeys('{{PASSWORD}}', Key.RETURN);
        // Wait for the results box by id
        await driver.wait(until.elementLocated(By.className('service-welcome')), 20000);
        // We will get the title value and test it
        await driver.get('https://www.dalaran-wow.com/account/vote/1');
        await driver.get('https://www.dalaran-wow.com/account/vote/2');
        await driver.get('https://www.dalaran-wow.com/account/vote/3');
        await driver.get('https://www.dalaran-wow.com/account/vote/4');
    });

    // close the browser after running tests
    after(() => driver && driver.quit());
})