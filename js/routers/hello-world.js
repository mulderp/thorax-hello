define([
  'backbone',
  'views/layouts/application',
  'views/people',
  'views/header',
  'views/sidebar',
  'views/footer'
], function(Backbone, RootView, PeopleUI, HeaderUI, SidebarUI, FooterUI) {
  return Backbone.Router.extend({
    routes: {
      "": "index"
    },
    index: function() {
      var main = new PeopleUI();
      var layout = RootView.getInstance($('#main'));
      layout.setView(main);

      var header = new HeaderUI();
      RootView.getHeader().setView(header);

      var sidebar = new SidebarUI();
      RootView.getSidebar().setView(sidebar);

      var footer = new FooterUI();
      RootView.getFooter().setView(footer);
    }
  });
});
