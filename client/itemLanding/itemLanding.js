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
'catBalance':function(){
  return CatBalance.findOne({'_id':this.name})
},
 'total': function(){
    return Session.get('totalBalance')
    console.log('total');
  },
  'type': function(){
    
    
  }
});

Template.itemLanding.events({
  'click .remove': function(){
    Items.remove(this._id);
  },
  'click .payment': function(){
    FlowRouter.go('/makePayment/'+this._id);
  }

});

Template.itemLanding.onCreated(function(){
  Meteor.call('totalBalance', function(err, resp){
      Session.set('totalBalance', resp[0].balance || 0)
      console.log(resp);
    });

  Meteor.call('totalCategoryBalance',function(err,resp){
  console.log(resp);
    _.each(resp,function(e){
      console.log(e)
      CatBalance.insert(e); // insert to local collection
    })
  })


})


