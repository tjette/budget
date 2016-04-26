
FlowRouter.route('/', {
    action: function() {
 BlazeLayout.render('home', {content: 'home'});   
  }
});


FlowRouter.route('/submitItem', {
    action: function() {
 BlazeLayout.render('submitItem', {content: 'submitItem'});   
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

FlowRouter.route('/makePayment/:id', {
  action: function(params) {
  var thePaymentId = params.id
  Session.set('thePayment', thePaymentId);
    
 BlazeLayout.render('makePayment', {content: 'makePayment'});   
  }
});

FlowRouter.route('/totalStats', {
  action: function(){
    BlazeLayout.render('totalStats');
  }
});