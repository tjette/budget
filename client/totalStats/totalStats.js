Template.totalStats.helpers({
'expenseBalance':function(){
  return ExpenseBalance.findOne()
},
'incomeBalance':function(){
  return IncomeBalance.findOne()
},
'totalBalance': function(){
  return numeral(IncomeBalance.findOne({}).balance - ExpenseBalance.findOne({}).balance).format('$00.00')
},

'dolla':function(theItem){
  return numeral(theItem).format('$00.00')
}
});

Template.totalStats.events({
'click .getStats':function(event,template){
  event.preventDefault();
  ExpenseBalance.remove({});
   Meteor.call('totalExpenses', function(err, resp){
     _.each(resp,function(e){
      if(e._id === "Expense"){
      console.log(e)
      ExpenseBalance.insert(e);
    } else{
      IncomeBalance.insert(e)
    }
    });
});
}
});


 
 