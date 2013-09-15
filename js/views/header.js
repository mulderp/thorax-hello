define([
  'view',
  'templates/header'
], function(View, template) {
  return Thorax.View.extend({
    name: 'header',
    template: template
  })
})
