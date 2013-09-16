define([
  'layout-view',
  'templates/root',
  'views/layouts/header',
  'views/layouts/footer',
  'views/layouts/sidebar'
], function(LayoutView, rootTemplate, HeaderLayout, FooterLayout, SidebarLayout) {
  var ApplicationLayout = LayoutView.extend({
    name: 'root',
    template: rootTemplate,
    initialize: function() {
      this.header = new HeaderLayout;
      this.footer = new FooterLayout;
      this.sidebar = new SidebarLayout;
    }
  });

  var instance;
  ApplicationLayout.getInstance = function(target) {
    if (!instance) {
      instance = new ApplicationLayout;
      instance.appendTo(target || document.body);
      instance.header.appendTo($('#header'));
      instance.footer.appendTo($('#footer'));
      instance.sidebar.appendTo($('#sidebar'));
    }
    return instance;
  };

  return ApplicationLayout;
});
