import { Builder, By, until } from 'selenium-webdriver';
import { expect } from 'chai';
import chrome  from'selenium-webdriver/chrome.js';


const options = new chrome.Options();
options.addArguments('--headless'); // executa sem abrir janela
options.addArguments('--no-sandbox');
options.addArguments('--disable-dev-shm-usage');
options.addArguments('--window-size=1920,1080');

let driver = await new Builder()
  .forBrowser('chrome')
  .setChromeOptions(options)
  .build();

console.log('Abrindo site...');
await driver.get('https://fatec.sp.gov.br/');

const titulo = await driver.getTitle();
console.log('Título:', titulo);
expect(titulo).to.include('Fatec');

const menu = await driver.findElement(By.css('nav'));
const visivel = await menu.isDisplayed();
console.log('Menu visível?', visivel);
expect(visivel).to.be.true;

const campoBusca = await driver.findElement(By.css('input[type="search"], input[name*="busca"]'));
await campoBusca.sendKeys('cursos\n');
await driver.wait(until.urlContains('curso'), 5000);
console.log('Redirecionamento OK');

await driver.quit();