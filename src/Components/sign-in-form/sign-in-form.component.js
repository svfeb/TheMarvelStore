import { useState } from "react";
import Button from "../button/button.component";
import "./sign-in-form.styles.scss";
import FormInput from "../form-input/form-input.component";
import {
  signInAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

const defaultSignInField = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [signInFields, setSignInFields] = useState(defaultSignInField);
  const { email, password } = signInFields;

  const resetSignInFields = () => {
    setSignInFields(defaultSignInField);
  };

  const handleLogIn = async (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignInFields({ ...signInFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>I already have a account</h2>
      <span>Sign In with your Email and Password</span>
      <form onSubmit={handleLogIn}>
        <label>Email</label>
        <FormInput
          label="Email"
          type="text"
          value={email}
          required
          name="email"
          onChange={handleChange}
        />
        <label>password</label>
        <FormInput
          label="Email"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <Button type="submit">LogIn</Button>
      </form>
    </div>
  );
};

export default SignInForm;
