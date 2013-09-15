define([
  'backbone',
  'views/layouts/application',
  'views/people',
  'views/header',
  'views/footer'
], function(Backbone, RootView, PeopleUI, HeaderUI, FooterUI) {
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

      var footer = new FooterUI();
      RootView.getFooter().setView(footer);
    }
  });
});
