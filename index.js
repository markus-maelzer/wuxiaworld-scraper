const puppeteer = require('puppeteer');
const _ = require('lodash');

const scrapeIt = async () => {
  const browser = await puppeteer.launch({
    headless: true
  });
  const page = await browser.newPage();

  await page.goto('https://www.wuxiaworld.com/novel/emperors-domination/emperor-chapter-1');
  // await page.waitFor(1000);
  // click .pg-modal-close;
  await page.click('.pg-modal-close');
  // await page.waitFor(1000);
  const pageText = await page.evaluate(() => {
    const paragraphs = document.querySelectorAll('.fr-view p');
    let text = [];
    for (var i = 0; i < paragraphs.length; i++) {
      text.push(paragraphs[i].innerText);
    }
    return text;
  })
  // await page.waitFor(1000);
  console.log(pageText);
  await browser.close();
}
scrapeIt();
