define([
  'layout-view',
  'view',
  'templates/header'
], function(LayoutView, View, template) {

  var Header = LayoutView.extend({
    name: 'layouts/header',
    template: 'template'
  });

  return Header;
})
