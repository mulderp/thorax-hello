define([
  'backbone',
  'collections/people',
  'models/menu',
  'views/layouts/application',
  'views/people',
  'views/new_person',
  'views/header',
  'views/sidebar',
  'views/footer'
], function(Backbone, People, Menu, RootView, PeopleUI, AddPersonUI, HeaderUI, SidebarUI, FooterUI) {
  return Backbone.Router.extend({
    routes: {
      "": "index",
      "/details/:id": "details"
    },
    index: function() {
      // Data
    var people = new People([{firstName: 'Patrick', lastName: 'Mulder'},
                             {firstName: 'Colin', lastName: 'Megill'},
                             {firstName: 'Ryan', lastName: 'Eastridge'}]);
      var menu = new Menu({selected: 'new_contact'});

      // UI
      var index = new PeopleUI({collection: people});
      var addPerson = new AddPersonUI({collection: people});
      var header = new HeaderUI();
      var sidebar = new SidebarUI({model: menu});
      var footer = new FooterUI();

      // Setup views
      var layout = RootView.getInstance($('#main'));
      layout.setView(index);
      layout.header.setView(header);
      layout.sidebar.setView(sidebar);
      layout.footer.setView(footer);

      menu.bind('change:selected', function(ev) {
        if (menu.get('selected') == 'new') {
          index.retain();
          layout.setView(addPerson);
        }
        if (menu.get('selected') == 'index') {
          addPerson.retain();
          layout.setView(index);
        }
      });

    },
    details: function(id) {
      console.log(id);
    }
  });
});
