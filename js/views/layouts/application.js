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
        var index = new Thorax.Views['people'];
        var addPerson = new Thorax.Views['new_person'];
        if (action === 'new') {
          //index.retain();
          this.setView(addPerson);
          //
        }
        if (action === 'index') {
          // addPerson.retain();
          this.setView(index);
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
    }
    return instance;
  };

  return ApplicationLayout;
});
