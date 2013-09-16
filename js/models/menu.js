define([
  'model',
], function(Model) {
    return Model.extend({
      name: "menu",
      defaults: {
        selected: 'index'
      },
      select: function(item) {
        this.set('selected', item);
      }
  })
});
