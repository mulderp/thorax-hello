define([
  'layout-view',
  'templates/layouts/footer'
], function(LayoutView, template) {

  var Footer = LayoutView.extend({
    name: 'layouts/footer',
    template: template
  });

  return Footer;
})
