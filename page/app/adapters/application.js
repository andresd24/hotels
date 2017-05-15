import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({
  namespace: 'api',
  host: 'http://localhost:4500',
  headers: {"Content-Type":"application/json"}
});
