Template.snapShot.helpers({
'thisSnap':function(){
  return Items.findOne(Session.get('theSnap'));
},
'items': function(){
  return Items.find({'_id':Session.get('theItem')}).fetch()
},
'thisItem': function(){
  return Items.findOne(Session.get('theItem'));
},
 'categories': function(){
    return Categories.find({},{sort:{'name':1}}).fetch();
  }
});

Template.snapShot.events({
'click .editLinks': function(){
  return FlowRouter.go("/itemLanding/:id");
},
'click .save': function(event, template){
  event.preventDefault();
  
  var inputs = template.findAll('.form-control');

  var updateObj = Items.findOne(Session.get('theSnap'));

  _.each(inputs, function(inp, ite){
    if(inp.name && inp.value){
        return updateObj[inp.name] = inp.value;
    }
  });

    updateObj.balance = parseFloat(updateObj.balance) || parseInt('0');


  Meteor.call('updateItem', Session.get('theSnap'), updateObj);

}

});

