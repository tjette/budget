Template.itemLanding.helpers({
'items': function(){
  return Items.find({'_id':Session.get('theItem')}).fetch()
},
'raw':function(){
  return EJSON.stringify(Items.findOne(Session.get('theItem')),{'indent':true})
},
'allItems': function(){
  return Items.find({'category':this._id}).fetch();
},
'allCategories': function(){
  return Categories.find({},{sort:{'name': 1}}).fetch();
},
'catBalance':function(){
  return CatBalance.findOne({'_id':this._id})
},
    'date':function(theDate){
        return moment(theDate).format('M/DD/YYYY')
    },
 'total': function(){
    return Session.get('totalBalance')
    console.log('total');
  },
  'dolla':function(theItem){
  return numeral(theItem).format('$00.00')
},
'editing':function(){
  return Items.find({'id':Session.get('theSnap')}).fetch();

},
    'gitHub': function(){
        return Session.get('gitHubProfile');
    }
});

Template.itemLanding.events({
  'click .remove': function(){
    Items.remove(this._id);
  },
  'click .payment': function(){
    FlowRouter.go('/makePayment/'+this._id);
  },
  'click .edit': function(){
  return FlowRouter.go("/itemLanding/" + this._id);
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


  Meteor.call('updateItem', Session.get('theItem'), updateObj);

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
  }),

      $.get('https://api.github.com/users/tjette',function(resp){
          console.log(resp)
          Session.set('gitHubProfile',resp);
      });






})


