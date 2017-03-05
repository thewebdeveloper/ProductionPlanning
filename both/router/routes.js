FlowRouter.route(['/', '/home'], {
  action: function(){
    BlazeLayout.render('layout', {sidebar: 'sidebar', main: 'home', cart: 'cart'});
  }
});

FlowRouter.route('/register', {
  action: function(){
    BlazeLayout.render('layout', {sidebar: '', main: 'register', cart: ''});
  }
});

FlowRouter.route('/signin', {
  action: function(){
    BlazeLayout.render('layout', {sidebar: '', main: 'signin', cart: ''});
  }
});

FlowRouter.route('/signout', {
  action: function(){
    Meteor.logout(function(err) {
      if (!err) {
        FlowRouter.go('/signin');
      }
    });
  }
});

FlowRouter.route('/checkout', {
  action: function(){
    BlazeLayout.render('layout', {sidebar: '', main: 'checkout', cart: ''});
  }
});

FlowRouter.route('/category/:categoryName', {
  subscriptions: function(params) {
    console.log("Subscribe", params);
    // make sure subscription exist
  },
  triggersEnter: function(params) {
    console.log("Enter", params);
    // check that user is logged in
  },
  triggersExit: function(params) {
    console.log("Exist", params);
    // check that there is no unsaved data
  },
  action: function(){
    BlazeLayout.render('layout', {sidebar: 'sidebar', main: 'category', cart: 'cart'});
  }
});
