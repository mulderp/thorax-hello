define([
  'view',
  'templates/people'
], function(View, template) {
  return View.extend({
    name: 'people/index',
    template: template,

    initialize: function() {
      console.log("** start view **");
    }

  });
});
