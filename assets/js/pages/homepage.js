/**
 * Created by nicholase on 19/01/16.
 */
var lock = new Auth0Lock('Te51IapTbN96hBOWs6neimnMNhUDmFtb', 'enicky.eu.auth0.com');


function signin() {
  $('.btn-login').on('click', function(e){
    e.preventDefault();
    lock.show(function(err, profile, token){
      if (err) {
        // Error callback
        alert('There was an error');
      } else {
        // Success callback

        // Save the JWT token.
        localStorage.setItem('userToken', token);

        // Save the profile
        userProfile = profile;
      }
    })
  })

}
