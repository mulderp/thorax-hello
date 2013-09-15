define([
  'layout-view',
  'templates/root',
  'views/layouts/header',
  'views/layouts/footer'
], function(LayoutView, rootTemplate, HeaderLayout, FooterLayout) {
  var ApplicationLayout = LayoutView.extend({
    name: 'root',
    template: rootTemplate
  });

  var instance, header, footer;
  ApplicationLayout.getInstance = function(target) {
    if (!instance) {
      instance = new ApplicationLayout;
      instance.appendTo(target || document.body);
    }
    return instance;
  };

  ApplicationLayout.getHeader = function(target) {
    if (!header) {
      header = new HeaderLayout;
      header.appendTo(target || $('#header'));
    }
    return header;
  };

  ApplicationLayout.getFooter = function(target) {
    if (!footer) {
      footer = new FooterLayout;
      footer.appendTo(target || $('#footer'));
    }
    return footer;
  };

  return ApplicationLayout;
});
