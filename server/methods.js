Meteor.methods({
  addItem: function (item) {
    return Items.insert(item);
  },

  addCategory: function (category){
  return Categories.insert(category);
 },
 'totalBalance': function(){
  var pipeline = [
    {$group: {_id: "master",
     balance: {$sum: "$balance"}}}
    
  ];
  var result = Items.aggregate(pipeline);
  console.log(result);
  return result;
 },
 'totalCategoryBalance': function(){
  
  var pipeline = [
{$group: {
  _id: "$category",
  balance: {
    $sum: "$balance"
  }
}}];

  var result = Items.aggregate(pipeline);
  console.log(result);
  return result;
},
 updateItem: function(id, updateObj) {
  return Items.update({'_id': id}, {$set: updateObj});
 },
 makePayment: function(payment, paymentValue){
  return Items.update({'_id': payment }, {$inc: {balance: paymentValue }});
 }
});