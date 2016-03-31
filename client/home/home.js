Template.home.helpers({
  'categories': function(){
    return Categories.find({},{sort:{'name':1}}).fetch();
  }

})

Template.home.events({
"submit .item": function(event, template){
  event.preventDefault();
  var inputs = template.findAll('.form-control');
  var item = {};
  _.each(inputs, function(inp, ite){
    if(inp.name && inp.value) {
       item[inp.name] = inp.value;
    }
});

  item.balance = parseFloat(item.balance) || parseInt('0');

  console.log('theItem',item)

  Meteor.call('addItem', item, function(err, suc){
    if(!err){
      FlowRouter.go('/itemLanding');
    } else {
      alert("Error");
    }
  });
  
},

'click .newCategory': function(event,template){
  event.preventDefault();
    var catObj = {};
    catObj.name = prompt("Enter Category Name");
    if(catObj.name){
    Meteor.call('addCategory', catObj,function(err,resp){
      if(resp){
      console.log('did it insert? ', resp)
      }else{
        console.log('nope it didnt ', err)
      }
    });

  }else{
    return false
  }

}

});