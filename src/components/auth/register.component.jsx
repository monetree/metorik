import React from "react";


class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <form className="mt-4">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Your Full Name</label>
                <input type="email" className="form-control mb-0" id="exampleInputEmail1" placeholder="Your Full Name" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail2">Email address</label>
                <input type="email" className="form-control mb-0" id="exampleInputEmail2" placeholder="Enter email" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control mb-0" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <div className="d-inline-block w-100">
                <div className="custom-control custom-checkbox d-inline-block mt-2 pt-1">
                  <input type="checkbox" className="custom-control-input" id="customCheck1" />
                  <label className="custom-control-label" htmlFor="customCheck1">I accept <a href="#">Terms and Conditions</a></label>
                </div>
                <button type="submit" className="btn btn-primary float-right">Sign Up</button>
              </div>
              <div className="sign-info text-center">
                <span className="dark-color d-inline-block line-height-2">Already Have Account ? <a title className="pointer" onClick={() => this.props.handleForm("login")}>Log In</a></span>
              </div>
            </form>
        )
    }

}


export default Register;