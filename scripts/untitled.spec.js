// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Untitled', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Untitled', async function() {
    await driver.get("http://localhost:5173/")
    await driver.manage().window().setRect({ width: 1130, height: 693 })
    await driver.findElement(By.name("email")).sendKeys("nivish@gmail.com")
    await driver.findElement(By.name("password")).sendKeys("123")
    await driver.findElement(By.linkText("Login")).click()
    await driver.findElement(By.name("email")).sendKeys("nivish@gmail.com")
    await driver.findElement(By.name("password")).sendKeys("123")
    await driver.findElement(By.css(".btn-primary")).click()
    await driver.findElement(By.id("input")).click()
    await driver.findElement(By.id("input")).sendKeys("dart")
    await driver.findElement(By.css(".btn-secondary")).click()
    await driver.close()
  })
})
