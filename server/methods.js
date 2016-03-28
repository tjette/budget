Meteor.methods({
  addItem: function (item) {
    return Items.insert(item);
  },

  addCategory: function (category){
  return Categories.insert(category);
 },
 'totalBalance': function(){
  var pipeline = [
    {$group: {_id: master,
     balance: {$sum: "$balance"}}}
    
  ];
  var result = Items.aggregate(pipeline);
  console.log(result);
  return result
 }
});