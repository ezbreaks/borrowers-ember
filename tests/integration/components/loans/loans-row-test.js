import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('loans/loans-row', 'Integration | Component | loans/loans row', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{loans/loans-row}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#loans/loans-row}}
      template block text
    {{/loans/loans-row}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
