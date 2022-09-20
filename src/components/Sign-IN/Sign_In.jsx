import React, { Component } from "react";
import styled from "styled-components";
import InputForm from "../InputForm/Input";
import LoginButton from "../Custom/LoginButton";
import Google from "../../assets/goog.png";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../Server/firebase";
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  onChangeValue = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  submit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    if (email && password) {
      await signInWithEmailAndPassword(auth, email, password);

      alert("you have signed in successfully ");
    } else {
      alert("your fields are empty ! check them again ");
    }
    return this.setState({
      email: "",
      password: "",
    });
  };
  render() {
    return (
      <ConTainer className="login">
        <DivCon>
          <h1>SIGN IN</h1>
          <FormDiv onSubmit={this.submit}>
            <ListDiv>
              <InputForm
                key={23}
                type="email"
                value={this.state.email}
                onChangeValue={this.onChangeValue}
                title="EMAIL"
                name="email"
              />
              <InputForm
                key={53}
                type="password"
                value={this.state.password}
                onChangeValue={this.onChangeValue}
                title="PASSWORD"
                name="password"
              />
            </ListDiv>
            <LoginButton type="submit" sign>
              Sign in
            </LoginButton>
          </FormDiv>
          <LoginButton Click={true}>
            <Gogle>
              Sign in with <Icon src={Google} />
            </Gogle>
          </LoginButton>
          {/* <button onClick={this.logout}>logout</button> */}
        </DivCon>
      </ConTainer>
    );
  }
}
export default SignIn;
const Icon = styled.img`
  width: 20px;
  fill: white;
`;
const Gogle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: aliceblue;
`;
const ConTainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DivCon = styled.div`
  width: 33vw;
  height: 80vh;
  background: rgb(40, 48, 56);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 30px;

  h1 {
    width: 100%;
    color: rgb(209, 229, 238);
    letter-spacing: 2px;
    border-bottom: 2px solid rgba(184, 209, 220, 0.055);
    border-radius: 20px;
    padding: 10px;
  }
`;
const ListDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;
const FormDiv = styled.form`
  width: 100%;
  height: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 50px 0px 0px 0px;
`;
