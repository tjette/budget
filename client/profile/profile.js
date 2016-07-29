Template.profile.helpers({
    'thisUser': function(){
        return Meteor.user().emails[0].address
    }
});

Template.profile.events({
'click submit': function(events,template){
    event.preventDefault();

    var profile = {};

    profile.firstName = this.firstName;
    profile.lastName  = this.lastName.val
}
});