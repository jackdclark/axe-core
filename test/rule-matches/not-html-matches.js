describe('not-html-matches', function() {
  'use strict';

  var fixture = document.getElementById('fixture');
  var rule;

  beforeEach(function() {
    axe.teardown();
    rule = axe.utils.getRule('valid-lang');
  });

  afterEach(function() {
    fixture.innerHTML = '';
  });

  it('returns true when element is not the html element', function() {
    var vNode = axe.setup(fixture);
    assert.isTrue(rule.matches(null, vNode));
  });

  it('returns false when element is the html element', function() {
    var vNode = axe.setup(document.documentElement);
    assert.isFalse(rule.matches(null, vNode));
  });
});
