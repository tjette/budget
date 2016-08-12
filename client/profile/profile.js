Template.profile.helpers({
    'thisUser': function(){
        return Meteor.user().emails[0].address
    },
    'profile': function(){
        return Profile.find().fetch();

    }
});

Template.profile.events({
'submit .profile': function(event){
    event.preventDefault();

    var profile = {};
    //var value = $(this).val();
    profile.firstName = $(".firstName").val();
    profile.lastName  = $(".lastName").val();

    Meteor.call('addProfile', profile, function(err, resp){
        if(resp){
            console.log("Profile inserted", resp);
        } else {
            console.log("error", err);
        }
    })
}
});