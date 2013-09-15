define([
  'view',
  'templates/footer'
], function(View, template) {
  return Thorax.View.extend({
    name: 'footer',
    template: template
  })
})
