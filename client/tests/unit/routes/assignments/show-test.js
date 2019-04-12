import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | assignments/show', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:assignments/show');
    assert.ok(route);
  });
});
