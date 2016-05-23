Template.home.helpers({

});

Template.home.events({
"click .submitItem":function(event, template){
    event.preventDefault();
    $('.small.modal').modal('show');

  }
});

Template.home.onRendered(function () {
$('.activating.icon')
  .popup()
;

});

