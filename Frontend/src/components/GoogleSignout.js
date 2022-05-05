import { GoogleLogout, useGoogleLogout } from 'react-google-login'

const clientId = "759490956581-7i571b001qbqn4jk596iqs1pvgnevc71.apps.googleusercontent.com"

function GoogleSignout(){

    const onSuccess=()=>{
        console.log("Logout successfull");
    }

    return(
        <div id= "signoutButton">
        <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
       
      />
  </div>

    )
}

export default GoogleSignout