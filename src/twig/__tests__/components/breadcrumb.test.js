const { describe } = require('mocha');
const { expect } = require('chai');
const testRenderer = require('../twig-renderer');
const puppeteer = require('puppeteer');
const breadcrumbPath = './_patterns/02-molecules/menus/breadcrumbs/breadcrumbs.twig'
const timeout = 90000;

describe('Breadcrumb Tests', () => {
  let browser;
  let page;
  let html;
  let shortBreadcrumb = {
    breadcrumbs: [{ url: "#", text: "test1" }, { url: "#", text: "test2" }]
  };

  before(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  after(async () => {
    await page.close();
    await browser.close();
  })

  it("Renders an element with breadcrumb classname", async () => {
    var results = await testRenderer(breadcrumbPath, shortBreadcrumb);
    await page.setContent(results);
    var customClass = await page.$('.breadcrumbs');
    expect(customClass, "breadcrumbs class should be found").not.to.be.null;
  })

  it('Renders a breadcrumb with the correct names and URLs', async () => {
    let results = await testRenderer(breadcrumbPath, shortBreadcrumb);
    await page.setContent(results);

    let breadcrumbLinks = await page.$$('a.breadcrumbs__link');
    let link1 = await (await breadcrumbLinks[0].getProperty('innerText')).jsonValue();
    let link2 = await (await breadcrumbLinks[1].getProperty('innerText')).jsonValue();

    expect(link1).to.equal("test1");
    expect(link2).to.equal("test2");
  });
})
