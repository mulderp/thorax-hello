define([
  'channel',
  'layout-view',
  'templates/root',
  'views/layouts/header',
  'views/layouts/footer',
  'views/layouts/sidebar'
], function(channel, LayoutView, rootTemplate, HeaderLayout, FooterLayout, SidebarLayout) {
  var ApplicationLayout = LayoutView.extend({
    name: 'root',
    template: rootTemplate,
    initialize: function() {
      this.header = new HeaderLayout;
      this.footer = new FooterLayout;
      this.sidebar = new SidebarLayout;

      this.listenTo(channel, 'sidebar', function(action) {
        // this.header.updateAction(action);
        if (action === 'new') {
          this.index.retain();
          this.setView(this.addPerson);
          //
        }
        if (action === 'index') {
          this.addPerson.retain();
          this.setView(this.index);
        }
      }, this);
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

      instance.index = new Thorax.Views['people/index']({collection: instance.people});
      instance.addPerson = new Thorax.Views['new_person']({collection: instance.people});
      var header = new Thorax.Views['header']();
      var sidebar = new Thorax.Views['sidebar']({model: this.menu});
      var footer = new Thorax.Views['footer']();

      instance.header.setView(header);
      instance.sidebar.setView(sidebar);
      instance.footer.setView(footer);
      instance.setView(instance.index);
    }
    return instance;
  };

  return ApplicationLayout;
});
