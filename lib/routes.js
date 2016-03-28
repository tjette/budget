FlowRouter.route('/', {
    action: function() {
 BlazeLayout.render('home', {content: 'home'});   
  }
});

FlowRouter.route('/itemLanding', {
  action: function(params) {
    var theItemId = params.id
    Session.set('theItem',theItemId)
    BlazeLayout.render('itemLanding', {content: 'itemLanding'});
  }
});

FlowRouter.route('/snapShot/:id',{
  action: function(params) {
    var theSnapId = params.id
    Session.set('theSnap', theSnapId)
    BlazeLayout.render('snapShot', {content: 'snapShot'});
  }
});

FlowRouter.route('/makePayment', {
    action: function() {
 BlazeLayout.render('makePayment', {content: 'makePayment'});   
  }
});