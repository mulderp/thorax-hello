define([
  'layout-view',
  'templates/layouts/sidebar'
], function(LayoutView, template) {

  var Header = LayoutView.extend({
    name: 'layouts/sidebar',
    template: template
  });

  return Header;
})
