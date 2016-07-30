Template.home.helpers({
'thisUser': function(){
  return Meteor.user().emails[0].address
    }

});

Template.home.events({
"click .submitItem":function(event, template){
    event.preventDefault();
       if(Meteor.user) {
        $('.small.modal').modal('show');
      } else {
        alert("Need to be logged in");
      }
 }     
});

Template.home.onRendered(function () {
$('.activating.icon')
  .popup()
;

});

