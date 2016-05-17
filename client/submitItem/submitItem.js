Template.submitItem.helpers({
    'categories': function () {
        return Categories.find({}, {sort: {'name': 1}}).fetch();
    },
    'recur':function(){
        return Session.get('recur');
    },
    loading:function(){
        return Session.get('loading');
    }

})

Template.submitItem.events({
    "submit .submitItem": function (event, template) {
        event.preventDefault();

        //var inputs = template.findAll('.form-control');
        var inputs = $(event.target).serializeArray();

        var item = {};

        _.each(inputs, function (inp, ite) {
            if (inp.name && inp.value) {
                item[inp.name] = inp.value;
            }
        });


        item.balance = parseFloat(item.balance) || parseInt('0');


        item.recurring = Session.get('recur');

        if(item.recurring){
            if(item.startDate && item.endDate){
            item.startDate = new Date(item.startDate);
            item.endDate= new Date(item.endDate);
            }else{
                alert('You must have a start and end date since this is recurring!');
                return false
            }
        }else{

        }

        console.log('theItem', item)
        Session.set('loading',true);

        Meteor.call('addItem', item, function (err, suc) {
            if (!err) {
                setTimeout(function(){
                    $('.modal').modal('hide');
                },2000)

                setTimeout(function(){
                    Session.set('loading',false);
                    Session.set('recur',false);
                    FlowRouter.go('/itemLanding');
                },2300)

            } else {
                alert("Error");
            }
        });

    },

    'click .newCategory': function (event, template) {
        event.preventDefault();
        var catObj = {};
        catObj.name = prompt("Enter Category Name");
        if (catObj.name) {
            Meteor.call('addCategory', catObj, function (err, resp) {
                if (resp) {
                    console.log('did it insert? ', resp)

                } else {
                    console.log('nope it didnt ', err)
                }
            });

        } else {
            return false
        }

    }


})

Template.submitItem.onRendered(function () {

    Session.set('recur',false);

    $('select').dropdown();

    $('.recurCheck').checkbox({
        onChecked: function() {
            Session.set('recur',true);
            setTimeout(function(){
                $('.datetimepicker').datetimepicker({
                    timepicker:false,
                    format:'MM/DD/YYYY',
                });
            },100)
        },
        onUnchecked: function() {
            Session.set('recur',false);
        },

    });
});