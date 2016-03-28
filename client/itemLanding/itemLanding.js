Template.itemLanding.helpers({
'items': function(){
  return Items.find({'_id':Session.get('theItem')}).fetch()
},
'raw':function(){
  return EJSON.stringify(Items.findOne(Session.get('theItem')),{'indent':true})
},
'allItems': function(){
  return Items.find({'category':this.name}).fetch();
},
'allCategories': function(){
  return Categories.find({},{sort:{'name': 1}}).fetch();
},
 'total': function(){
    return Session.get('totalBalance')
    console.log('total');
  }
});

Template.itemLanding.events({
  'click .remove': function(){
    Items.remove(this._id);
  },
  'click .payment': function(){
    FlowRouter.go('/makePayment');
  }

});

Tracker.autorun(function(){
  if(Items.find().count()) {
    Meteor.call('totalBalance', function(err, resp){
      Session.set('totalBalance', resp[0].balance || 0)
    });
  }
});
