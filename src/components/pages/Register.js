import React from 'react';
import { Link } from 'react-router-dom';


class Register extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name:'',
      email:'',
      phone:'',
      password:'',
      userId: 0, 
      registrationSuccess: false,
    }
  }
  
  onChangeName = (e) =>{
    this.setState({name:e.target.value})
  }

  onChangeEmail = (e) =>{
    this.setState({email:e.target.value})
  }

  onChangePhone = (e) =>{
    this.setState({phone:e.target.value})
  }

  onChangePassword = (e) =>{
    this.setState({password:e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault();
  
    const existingData = JSON.parse(localStorage.getItem('formdata') || '[]');
    const existingUser = existingData.find(user => user.email === this.state.email || user.name === this.state.name);
  
    if (existingUser) {
      alert('User with this email or username already exists');
      return;
    }
  
    const ob = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password,
      userId: existingData.length + 1,
    };
  
    const newData = [...existingData, ob];
  
  
    localStorage.setItem('formdata', JSON.stringify(newData));
    this.setState({ registrationSuccess: true });
  };
  

  render() {
    const { registrationSuccess } = this.state;

    return (
      <div className='loginDivContainer'>
      <div className='loginDiv'>
      <form onSubmit={this.onSubmit} className='loginForm'>
      {registrationSuccess && (
          <div className="alert alert-success" role="alert">
            Registration is successful!
          </div>
        )}
      <p className='loginTitle'>Register</p>
        <div className="formGroup">
          <label>Name</label>
          <input type="text" className="name" value={this.state.name} onChange={this.onChangeName} required />
        </div>
        <div className="formGroup">
          <label>Email</label>
          <input type="email" className="email" value={this.state.email} onChange={this.onChangeEmail} required />
        </div>
        <div className="formGroup">
          <label>Phone</label>
          <input type="tel" className="passwordEnter" value={this.state.phone} onChange={this.onChangePhone} required />
        </div>
        <div className="formGroup">
          <label>Password</label>
          <input type="password" className="password" value={this.state.password} onChange={this.onChangePassword} required />
        </div>
        <button type="submit"  className="regButton" onClick={this.props.onRegister}>Register</button>
       <Link to={'/'} >Login</Link>
        
       
      </form>
      </div>
      </div>
    )
  }
}

export default Register;