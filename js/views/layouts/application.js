define([
  'layout-view',
  'templates/root',
  'views/layouts/header',
  'views/layouts/footer',
  'views/layouts/sidebar'
], function(LayoutView, rootTemplate, HeaderLayout, FooterLayout, SidebarLayout) {
  var ApplicationLayout = LayoutView.extend({
    name: 'root',
    template: rootTemplate
  });

  var instance, header, footer, sidebar;
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

  ApplicationLayout.getSidebar = function(target) {
    if (!sidebar) {
      sidebar = new SidebarLayout;
      sidebar.appendTo(target || $('#sidebar'));
    }
    return sidebar;
  };

  return ApplicationLayout;
});
