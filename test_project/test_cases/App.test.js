var expect = require('chai').expect;

describe('Simple App testing', () => {

  beforeEach(() => {
    $("~app-root").waitForDisplayed(11000, false)
  });

  for(let i=0;i<100000;i++){
     it('Connect', async => {
    $('~url').setValue("https://www.youtube.com/watch?v=nFEH4-hR3V0");

    $("~connect").click();
    
    });
    it('Kill', async => {
      $("~kill").click();
      $("~root").waitForDisplayed(11000)
      
    });


    it('Wificonnect', async => {
      $("~Wificonnect").click();
      $("~delay").waitForDisplayed(11000)
    });

  

    it('Recoonect', async => {
      $("~reconnect").click();
    });
    
  }
});