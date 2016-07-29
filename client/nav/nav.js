Template.nav.helpers({
    'thisUser': function(){
        return Meteor.user().emails[0].address
    }
});

Template.nav.events({


});