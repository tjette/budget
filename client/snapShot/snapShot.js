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
}

});

