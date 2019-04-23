// Import requirement packages
require('chromedriver');
const assert = require('assert');
const { Builder, Key, By, until } = require('selenium-webdriver');

describe('Login & vote Dalaran Wow', function () {
    let driver;

    beforeEach(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    // Next, we will write steps for our test.
    // For the element ID, you can find it by open the browser inspect feature.
    it('Skrattar', async function() {
        // Load the page
        await driver.get('https://www.dalaran-wow.com/account-log/');
        // Find the search box by id
        await driver.findElement(By.id('accountName')).sendKeys('{{SKRATTAR_USERNAME}}');
        // Enter keywords and click enter
        await driver.findElement(By.id('password')).sendKeys('{{SKRATTAR_PASSWORD}}', Key.RETURN);
        // Wait for the results box by id
        await driver.wait(until.elementLocated(By.className('service-welcome')), 20000);
        // We will get the title value and test it
        await driver.get('https://www.dalaran-wow.com/account/vote/1');
        await driver.get('https://www.dalaran-wow.com/account/vote/2');
        await driver.get('https://www.dalaran-wow.com/account/vote/3');
        await driver.get('https://www.dalaran-wow.com/account/vote/4');
    });

    // Next, we will write steps for our test.
    // For the element ID, you can find it by open the browser inspect feature.
    it('Redriot', async function() {
        // Load the page
        await driver.get('https://www.dalaran-wow.com/account-log/');
        // Find the search box by id
        await driver.findElement(By.id('accountName')).sendKeys('{{REDRIOT_USERNAME}}');
        // Enter keywords and click enter
        await driver.findElement(By.id('password')).sendKeys('{{REDRIOT_PASSWORD}}', Key.RETURN);
        // Wait for the results box by id
        await driver.wait(until.elementLocated(By.className('service-welcome')), 20000);
        // We will get the title value and test it
        await driver.get('https://www.dalaran-wow.com/account/vote/1');
        await driver.get('https://www.dalaran-wow.com/account/vote/2');
        await driver.get('https://www.dalaran-wow.com/account/vote/3');
        await driver.get('https://www.dalaran-wow.com/account/vote/4');
    });

    // Next, we will write steps for our test.
    // For the element ID, you can find it by open the browser inspect feature.
    it('Forlorar', async function() {
        // Load the page
        await driver.get('https://www.dalaran-wow.com/account-log/');
        // Find the search box by id
        await driver.findElement(By.id('accountName')).sendKeys('{{FORLORAR_USERNAME}}');
        // Enter keywords and click enter
        await driver.findElement(By.id('password')).sendKeys('{{FORLORAR_PASSWORD}}', Key.RETURN);
        // Wait for the results box by id
        await driver.wait(until.elementLocated(By.className('service-welcome')), 20000);
        // We will get the title value and test it
        await driver.get('https://www.dalaran-wow.com/account/vote/1');
        await driver.get('https://www.dalaran-wow.com/account/vote/2');
        await driver.get('https://www.dalaran-wow.com/account/vote/3');
        await driver.get('https://www.dalaran-wow.com/account/vote/4');
    });

    // close the browser after running tests
    afterEach(() => driver && driver.quit());
})