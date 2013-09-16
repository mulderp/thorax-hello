define([
  'collection',
  'models/person'
], function(Collection, Person) {
  return Collection.extend({
    name: "people",
    model: Person,
    url: "/people"
  })
});
