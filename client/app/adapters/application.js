import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'api/v1',
  host: 'http://localhost:3000',

  updateRecord(store, type, snapshot) {
    const payload = {};
    const changedAttributes = snapshot.changedAttributes();
    let hash = {}
    console.log(changedAttributes)
    Object.keys(changedAttributes).forEach((attributeName) => {
      const newValue = changedAttributes[attributeName][1];
      hash[attributeName] = newValue;
      Object.assign(payload, {user: hash});
    });
    const id = snapshot.id;
    const url = this.buildURL(type.modelName, id, snapshot, 'updateRecord');

    return this.ajax(url, 'PATCH', {data: payload});
  }
});
