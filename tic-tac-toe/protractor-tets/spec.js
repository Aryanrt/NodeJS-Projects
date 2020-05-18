describe('Protractor Demo App', function() {

  var squars = element.all(by.css('.square'));
  var gameInfo = element(by.css('.game-info'));
  var score = element(by.css('.score-table'));
  var score = element(by.css('.score-table'));
  var scoreX = element(by.css('.score-table > tr:nth-child(1) > td:nth-child(2)'));
  var scoreO = element(by.css('.score-table > tr:nth-child(2) > td:nth-child(2)'));
  var newGame = element(by.css('.newGameButton'));
  var scoreX2 = score.element(by.xpath('tr[1]/td[2]'));
  var scoreO2 = score.element(by.xpath('tr[2]/td[2]'));
 
  browser.ignoreSynchronization = true;
  browser.get('http://localhost:3000/');  

  it('X should win game', function() {
    squars.get(0).click();
    squars.get(1).click();
    squars.get(4).click();
    squars.get(5).click();
    squars.get(8).click();

    expect(gameInfo.getText()).toContain('X Congrats!');
    expect(score.getText()).toContain('X : 1');
    expect(score.getText()).toContain('O : 0');

    //First way  (CSS SELECTOR)
    expect(scoreX.getText()).toContain('1');
    expect(scoreO.getText()).toContain('0');

    //second way  (XPATH SELECTOR FROM PARENT NODE)
    expect(scoreX2.getText()).toContain('1');
    expect(scoreO2.getText()).toContain('0');

    //third way CSS SELECTOR FROM PARENT NODE)
    expect(score.element(by.css('tr:nth-child(2) > td:nth-child(2)')).getText()).toContain('0');

  });

  it('new Game Should be created', function() {
    newGame.click();

    expect(gameInfo.getText()).toContain('Next X');
    expect(score.getText()).toContain('X : 1');
    expect(score.getText()).toContain('O : 0');
    expect(scoreX.getText()).toContain('1');
    expect(scoreO.getText()).toContain('0');

  });
});