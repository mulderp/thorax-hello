define([
  'view',
  'templates/sidebar'
], function(View, template) {
  return Thorax.View.extend({
    name: 'sidebar',
    template: template
  })
})
