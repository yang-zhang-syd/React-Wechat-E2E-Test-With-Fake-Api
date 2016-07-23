module.exports = {

  'Authenticate through wechat': function(browser) {
    var homePage = browser.page.homePage();
    
    homePage.navigate()
    .waitForElementVisible('@greeting');

    homePage.expect.element('@greeting').text.to.contain('Yang');

    browser.end();
  }
  
};