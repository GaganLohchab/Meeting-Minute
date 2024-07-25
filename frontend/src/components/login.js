import { GoogleLogin } from 'react-google-login'

function Login() {

    const onSuccess = (res) => {
        console.log("Login Successfull! Current User: ", res.profileObj)
    }

    const onFaliure = (res) => {
        console.log("Login Failed! res: ", res)
    }

    return (
        <div id="signInButton">
            <GoogleLogin
                clientId={process.env.Client_ID}
                buttonText="Sign In"
                onSuccess={onSuccess}
                onFaliure={onFaliure}
                cookiepolicy={'single_host_origin'}
                isSignedIn={true} />

        </div>
    )
}

export default Login;