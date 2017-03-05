Template.signin.events({
  "submit form": function(e){
    e.preventDefault();

    var email = e.target.email.value;
    var password = e.target.password.value;

    Meteor.loginWithPassword(email, password);
    FlowRouter.go('/');
  }
});
