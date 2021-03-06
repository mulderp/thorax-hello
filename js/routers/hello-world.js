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
      // UI
      var index = new PeopleUI({collection: this.people});
      var addPerson = new AddPersonUI({collection: this.people});
      var header = new HeaderUI();
      var sidebar = new SidebarUI({model: this.menu});
      var footer = new FooterUI();

      // Setup views
      var layout = RootView.getInstance($('#main'));
      layout.header.setView(header);
      layout.sidebar.setView(sidebar);
      layout.footer.setView(footer);
      layout.setView(index);
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
      this.menu = new Menu({selected: 'new_contact'});

    }
  });
});
