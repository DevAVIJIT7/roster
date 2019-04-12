import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | assignments/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:assignments/index');
    assert.ok(route);
  });
});
