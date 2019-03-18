import React from "react"
import firebase from "firebase"

//styles
import 'antd/dist/antd.css';
import {
  Form, Icon, Input, Button, Checkbox,Tooltip
} from 'antd';


//auth
var config = {
 apiKey: "AIzaSyBdD-dZnTara6z3jjKOENeqWQJz8Lk53jQ",
 authDomain: "fir-auth-b1ee0.firebaseapp.com",
};
firebase.initializeApp(config);

class FLogin extends React.Component{

state = {
  isSignedIn: false,
  modal:"login",
  confirmDirty: false,
  autoCompleteResult: [],
  dismiss:"none",
  LoginerrorMessage:" ",
  SignuperrorMessage:" "
}


handleSubmitLogin = (e) => {
  e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {

            firebase.auth().signInWithEmailAndPassword(values.userName, values.password)
            .then(user=>{let data=user.user
               this.setState({isSignedIn:true,
                              LoginerrorMessage:" "
                              })
             return this.props.setLoginStates(data) })
            .catch(error=> {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              console.log(errorMessage);
              this.setState({
                LoginerrorMessage:"Sorryy! gievn email or password didnt match ,try forgot password if you need help resetting"
              });

            });
          }
        });


      }
handleSubmitSignup = (e) => {
  e.preventDefault();
  this.props.form.validateFieldsAndScroll((err, values) => {
    if (!err) {

    var promise= new Promise((resolve,reject)=>resolve(firebase.auth().createUserWithEmailAndPassword(values.email, values.password)))
    promise.then(user=>{
          user.user.updateProfile({
            displayName: values.nickname,
              photoURL: "https://cdn.dribbble.com/users/199982/screenshots/4044699/furkan-avatar-dribbble.png"
          }).then(function() {
            // Update successful.
          }).catch(function(error) {
            // An error happened.
          });
          this.setState({
                        SignuperrorMessage:" ",
                        modal:"login",
                      })}  )
    .catch(error=> {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      this.setState({
        SignuperrorMessage:errorMessage
      });

    });



    }
  });
}

compareToFirstPassword = (rule, value, callback) => {
  const form = this.props.form;
  if (value && value !== form.getFieldValue('password')) {
    callback('Two passwords that you enter is inconsistent!');
  } else {
    callback();
  }
}

validateToNextPassword = (rule, value, callback) => {
  const form = this.props.form;
  if (value && this.state.confirmDirty) {
    form.validateFields(['confirm'], { force: true });
  }
  callback();
}

displaySignup = ()=>{
  return this.setState({modal:"signup"})
}
displayLogin = ()=>{
  return this.setState({modal:"login"})
}



    render(){

       const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;

        const formItemLayout = {
          labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
          },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
          },
        };
        const tailFormItemLayout = {
          wrapperCol: {
            xs: {
              span: 24,
              offset: 0,
            },
            sm: {
              span: 16,
              offset: 8,
            },
          },
        };

      return(
        <React.Fragment>
        <h1>{this.state.isSignedIn}</h1>
        {
          this.state.modal==="login" ?
        <React.Fragment>
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalCenterTitle" style={{margin:"auto"}}>Login</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
                            <Form onSubmit={this.handleSubmitLogin} style={{ maxWidth: "300px",margin:"auto"}}>
                                 <Form.Item>
                                   {getFieldDecorator('userName', {
                                     rules: [{
                                       type: 'email', message: 'The input is not valid E-mail!',
                                     }, {
                                       required: true, message: 'Please input your E-mail!',
                                     }],
                                   })(
                                     <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}  placeholder="email"/>
                                   )}
                                 </Form.Item>
                                 <Form.Item>
                                   {getFieldDecorator('password', {
                                     rules: [{ required: true, message: 'Please input your Password!' }],
                                   })(
                                     <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                                   )}
                                 </Form.Item>
                                 <Form.Item>
                                   {getFieldDecorator('remember', {
                                     valuePropName: 'checked',
                                     initialValue: true,
                                   })(
                                     <Checkbox>Remember me</Checkbox>
                                   )}
                                   <a atyle={{float: "right"}} href="">Forgot password</a>
                                <Button type="primary" htmlType="submit" style={{ width: "100%"  }} data-dismiss={this.state.dismiss}  >
                                        Log in
                                   </Button>
                                   Or <a  onClick={this.displaySignup}>register now!</a>
                                 </Form.Item>
                                 {this.state.LoginerrorMessage}
                          </Form>
        </div>
        </React.Fragment>
        :
        <React.Fragment>
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalCenterTitle" style={{margin:"auto"}}>Signup</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
                             <Form {...formItemLayout} onSubmit={this.handleSubmitSignup}  style={{ maxWidth: "400px",margin:"auto"}}>
                                <Form.Item
                                  label="E-mail"
                                >
                                  {getFieldDecorator('email', {
                                    rules: [{
                                      type: 'email', message: 'The input is not valid E-mail!',
                                    }, {
                                      required: true, message: 'Please input your E-mail!',
                                    }],
                                  })(
                                    <Input />
                                  )}
                                </Form.Item>
                                <Form.Item
                                  label="Password"
                                >
                                  {getFieldDecorator('password', {
                                    rules: [{
                                      required: true, message: 'Please input your password!',
                                    }, {
                                      validator: this.validateToNextPassword,
                                    }],
                                  })(
                                    <Input type="password" />
                                  )}
                                </Form.Item>
                                <Form.Item
                                  label="Confirm Password"
                                >
                                  {getFieldDecorator('confirm', {
                                    rules: [{
                                      required: true, message: 'Please confirm your password!',
                                    }, {
                                      validator: this.compareToFirstPassword,
                                    }],
                                  })(
                                    <Input type="password" onBlur={this.handleConfirmBlur} />
                                  )}
                                </Form.Item>
                                <Form.Item
                                  label={(
                                    <span>
                                      Displayname&nbsp;
                                      <Tooltip title="What do you want others to call you?">
                                        <Icon type="question-circle-o" />
                                      </Tooltip>
                                    </span>
                                  )}
                                >
                                  {getFieldDecorator('nickname', {
                                    rules: [{ required: true, message: 'Please input your Displayname!', whitespace: true }],
                                  })(
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} />
                                  )}
                                </Form.Item>
                                <Form.Item {...tailFormItemLayout}>
                                  {getFieldDecorator('agreement', {
                                    valuePropName: 'checked',
                                  })(
                                    <Checkbox>I have read the <a href="">agreement</a></Checkbox>
                                  )}
                                </Form.Item>

                                <Form.Item {...tailFormItemLayout}>
                                 <Button type="primary" htmlType="submit"  style={{width: "100%"  }} >
                                 Register</Button>
                                 Already have an accout? <a  onClick={this.displayLogin}>sign in  now!</a>
                               </Form.Item>

                                  { this.state.SignuperrorMessage }
                                </Form>
        </div>
        </React.Fragment>
      }
        <div className="modal-footer" style={{margin:"auto"}}>
        <button type="button" className="btn btn-primary">Google</button>
        <button type="button" className="btn btn-primary">Facebook</button>
        <button type="button" className="btn btn-primary">Github</button>
        <button type="button" className="btn btn-primary">LinkedIn</button>
        </div>

      </React.Fragment>

    );
    }

}

const WrappedLoginForm = Form.create({ name: 'firebase_login' })(FLogin);

export default WrappedLoginForm;
