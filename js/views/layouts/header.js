define([
  'layout-view',
  'templates/layouts/header'
], function(LayoutView, template) {

  var Header = LayoutView.extend({
    name: 'layouts/header',
    template: template
  });

  return Header;
})
