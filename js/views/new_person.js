define([
  'view',
  'templates/new_person'
], function(View, template) {
  return Thorax.View.extend({
    name: 'new_person',
    template: template,
    events: {
      "submit form": function(ev){
        ev.preventDefault();
        alert('submit');
//        this.serialize(function(attrs){
        //var model = new Thorax.Models['person'](attrs);
        // collection.add(model);
        // collection.save():
        //all of the above are === to:

//        this.$('input').val('');
//
//        this.collection.create(attrs, {
//          success: function(model, response, options){
//            console.log('model created, attrs added, saved to serve');
//            console.log(model);
//            console.log(response);
//            console.log(options);
//          }
//        });
//      });
      }
    }
  })
})
