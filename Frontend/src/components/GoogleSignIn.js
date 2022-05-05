import { GoogleLogin } from 'react-google-login';

const clientId="759490956581-7i571b001qbqn4jk596iqs1pvgnevc71.apps.googleusercontent.com";

function GoogleSignIn() {


const onSuccess = (res) =>{
    console.log("LOGIN SUCCESSFUL! CURRENT USER:",res.profileobj);
  } 

  const onFailure = (res) =>{
    console.log("LOGIN FAILED! CURRENT USER:",res);
  } 

  return (
      <div id= "signinButton">
      <GoogleLogin
      clientId={clientId}
      buttonText="Login With Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      isSignedIn={true}
    />
</div>
    )
  }

  export default GoogleSignIn