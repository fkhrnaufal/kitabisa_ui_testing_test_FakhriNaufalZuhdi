import { expect } from 'chai';

describe('Salingjaga Website', function() {
  it('should open the homepage', async function() {
    await browser.url('/');
    const title = await browser.getTitle();
    expect(title).to.equal('Asuransi Jiwa Syariah dari Kitabisa');
  });

  it('should open dampak tab', async function() {
    
    const dampakButton = await $('//*[text()="Dampak"]');
    await dampakButton.click();

    await browser.waitUntil(async () => {
      return (await browser.getUrl()).includes('/dampak');
    }, { timeout: 5000, timeoutMsg: 'Expected page to load' });

    //const header = await $('button').getText();
    //expect(header).to.include('Aktifkan Keanggotaan');

  });

  it('should view video thumbnail', async function() {
    
    await browser.execute(() => {
        window.scrollBy(0, 1500); 
    });

    const playButton = await $('#list-video');
    await playButton.click();

    //const header = await $('button').getText();
    //expect(header).to.include('Aktifkan Keanggotaan');

  });

  it('should open beranda tab', async function() {
    
    const berandaButton = await $('//*[text()="Beranda"]');
    await berandaButton.click();

    await browser.execute(() => {
        window.scrollBy(0, 4000); 
    });

    const dateOfBirth = await $('#dob_ID');
    await dateOfBirth.setValue('12/12/2010');

    await browser.pause(3000)

    //const header = await $('button').getText()
    //expect(header).to.include('Aktifkan Keanggotaan');

  });

});
