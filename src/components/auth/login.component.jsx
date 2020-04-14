import React from "react";


class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
              <form className="mt-4">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control mb-0" id="exampleInputEmail1" placeholder="Enter email" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <a href="#" className="float-right">Forgot password?</a>
                  <input type="password" className="form-control mb-0" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="d-inline-block w-100">
                  <div className="custom-control custom-checkbox d-inline-block mt-2 pt-1">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember Me</label>
                  </div>
                  <button type="submit" className="btn btn-primary float-right">Sign in</button>
                </div>
                <div className="sign-info text-center">
                  <span className="dark-color d-inline-block line-height-2">Don't have an account? <a title className="pointer" onClick={() => this.props.handleForm("register")}>Sign up</a></span>
                </div>
              </form>
        )
    }

}


export default Login;