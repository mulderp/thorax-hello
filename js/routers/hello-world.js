define([
  'backbone',
  'collections/people',
  'models/menu',
  'views/layouts/application',
  'views/people',
  'views/new_person',
  'views/details_ui',
  'views/header',
  'views/sidebar',
  'views/footer'
], function(Backbone, People, Menu, RootView, PeopleUI, AddPersonUI, DetailsUI, HeaderUI, SidebarUI, FooterUI) {
  return Backbone.Router.extend({
    routes: {
      "": "index",
      "details/:id": "details"
    },
    index: function() {

      // Setup views
      var layout = RootView.getInstance($('#main'));
    },

    details: function(id) {
      var details = new DetailsUI({collection: this.people});
      var layout = RootView.getInstance($('#main'));
      layout.setView(details);
    },

    initialize: function() {
      console.log("*** init");
      
      // Data
      this.people = new People([{id: 1, firstName: 'Patrick', lastName: 'Mulder'},
                               {id: 2, firstName: 'Colin', lastName: 'Megill'},
                               {id: 3, firstName: 'Ryan', lastName: 'Eastridge'}]);
    }
  });
});
