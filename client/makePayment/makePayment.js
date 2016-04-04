Template.makePayment.helpers({
  'thisPayment': function(){
  return Items.findOne(Session.get('thePayment'));
  }
});

Template.makePayment.events({
  'submit .payment': function(event, template){
    event.preventDefault(); 
    var payment = Session.get('thePayment');
    var balanceAmount = parseFloat($('.balanceAmount').val())
    var paymentAmount = prompt("How much would you like to Pay of your " + balanceAmount + " ? ");
    if(paymentAmount){
    Meteor.call('makePayment', payment , paymentAmount * -1,function(err,resp){
      console.log(resp)
  
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