const puppeteer = require('puppeteer');

const scrapeIt = async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();

  await page.goto('https://www.wuxiaworld.com/novel/emperors-domination/emperor-chapter-1');
  await page.waitFor(100000);
  // click .pg-modal-close;
  const pageText = await page.evaluate(() => {
    const paragraphs = document.querySelectorAll('.fr-view > p');
    // const text = paragraphs.map(p => {
    //   return p.innerHTML;
    // });
    console.log(paragraphs);
    return 'text';
  })
  console.log(pageText);
  await browser.close();
}
scrapeIt();
