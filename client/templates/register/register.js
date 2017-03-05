
Template.register.helpers({

});

Template.register.events({
  "submit form": function(e){
     e.preventDefault();

     var email = e.target.email.value;
     var password = e.target.password.value;

     Accounts.createUser({ 
        email: email,
        password: password
     });
  }
});
