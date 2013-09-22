require([
  'jquery',
  'backbone',
  'views/layouts/application',
  'routers/hello-world'
], function ($, Backbone, RootView, HelloWorldRouter) {
  
  initialize(function(next) {
    // Load any data that your app requires to boot
    // and initialize all routers here, the callback
    // `next` is provided in case the operations
    // needed are aysynchronous
    var router = new HelloWorldRouter();

    next();
  });

  function initialize(complete) {
    $(function() {
      Backbone.history.start({
        pushState: false,
        root: '/',
        silent: true
      });

      // RootView may use link or url helpers which
      // depend on Backbone history being setup
      // so need to wait to loadUrl() (which will)
      // actually execute the route
      RootView.getInstance(document.body);

      complete(function() {
        Backbone.history.loadUrl();
      });
    });
  }

});
