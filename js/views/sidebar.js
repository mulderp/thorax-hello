define([
  'channel',
  'view',
  'templates/sidebar'
], function(channel, View, template) {
  return Thorax.View.extend({
    name: 'sidebar',
    template: template,

    events: {
      'click a': function(ev) {
        var action = $(ev.currentTarget).data('action');
        // this.model.select(action);
        console.log("*** trigger");
        channel.trigger('sidebar', action); 
      }
    }
  })
})
