define([
  'view',
  'templates/details'
], function(View, template) {
  return Thorax.View.extend({
    name: 'details',
    template: template
  })
})
