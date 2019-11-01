const { describe } = require('mocha');
const { expect } = require('chai');
const testRenderer = require('../twig-renderer');
const puppeteer = require('puppeteer');
const buttonPath = './_patterns/01-atoms/buttons/_button.twig'
const timeout = 90000;

describe('Button Tests', () => {
  let browser;
  let page;
  let html;

  before(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  after(async() => {
    await page.close();
    await browser.close();
  })

    it('Renders custom text', async () => {
        let results = await testRenderer(buttonPath, {
          button_content: 'This is a button',
        });
        console.log("results", results);
        await page.setContent(results);
        var button = await page.$('button');
        const text = await (await button.getProperty('textContent')).jsonValue();

      });

      it("Has default classname", async() => {
        var results = await testRenderer(buttonPath);
        await page.setContent(results);
        var customClassButton = await page.$('.button');
        expect(customClassButton, "Button class should be found").not.to.be.null;
      })

      it("Sets a custom className", async () => {
        var results = await testRenderer(buttonPath, {
          button_modifiers: [
            "custom"
         ]
        });
        await page.setContent(results);
        var customClassButton = await page.$('.button--custom');
        expect(customClassButton, "Custom button class should be found").not.to.be.null;
      });

      it("Can be disabled", async () => {
        var results = await testRenderer(buttonPath, {
      button_attributes:
            {disabled: true}
        });
        await page.setContent(results);

        var disabledButton = await await page.$('button[disabled]');
        expect(disabledButton, "disabled button should be found").not.to.be.null;
      });
})
