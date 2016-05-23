Template.snapShot.helpers({
'thisSnap':function(){
  return Items.findOne(Session.get('theItem'));
},
'items': function(){
  return Items.find({'_id':Session.get('theItem')}).fetch()
},
'thisItem': function(){
  return Items.findOne(Session.get('theItem'));
},
 'categories': function(){
    return Categories.find({},{sort:{'name':1}}).fetch();
  },
  'loading': function(){
    return Session.get('loading');
  }
});

Template.snapShot.events({
'click .editLinks': function(){
  return FlowRouter.go("/itemLanding");
},
'submit .save': function(event, template){
  event.preventDefault();
  
  var inputs = template.findAll('.form-control');

  var updateObj = Items.findOne(Session.get('theItem'));

  _.each(inputs, function(inp, ite){
    if(inp.name && inp.value){
        return updateObj[inp.name] = inp.value;
    }
  });

    updateObj.balance = parseFloat(updateObj.balance) || parseInt('0');

  Session.set('loading',true);

  Meteor.call('updateItem', Session.get('theItem'), updateObj, function(err,resp){
    if(!err){
     console.log('resp', resp)
     setTimeout(function(){
      Session.set('loading', false);
      FlowRouter.route('/itemLanding');
      },2000)
   }else{
    alert("error",err)
   }
  });
}

});

Template.snapShot.onRendered(function () {


});