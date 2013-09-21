define([
  'view',
  'templates/people'
], function(View, template) {
  return View.extend({
    name: 'people/index',
    template: template,
    events: {
      'click': function() {
        console.log('handle click');
      }
    },

    initialize: function() {
      console.log("** start view **");
    }

  });
});
