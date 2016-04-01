Template.makePayment.helpers({
  'thisPayment': function(){
  return Items.findOne(Session.get('thePayment'));
  }
});

Template.makePayment.events({
  'click .payment': function(event, template){
    event.preventDefault(); 

    var payment = Session.get('thePayment');

    Meteor.call('makePayment', payment , -5);
  }
});