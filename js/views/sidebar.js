define([
  'view',
  'templates/sidebar'
], function(View, template) {
  return Thorax.View.extend({
    name: 'sidebar',
    template: template,

    events: {
      'click a': function(ev) {
        var action = $(ev.currentTarget).data('action');
        this.model.select(action);
      }
    }
  })
})
