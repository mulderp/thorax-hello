define([
  'model',
], function(Model) {
    return Model.extend({
      name: "person",
      defaults: {
        firstName: "unknown",
        lastName: "unknown",
        phone: "unknown"
      }
  })
});
