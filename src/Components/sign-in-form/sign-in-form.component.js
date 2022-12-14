import { useState, useContext } from "react";
import Button from "../button/button.component";
import { UserContext } from "../../context/user.context";
import "./sign-in-form.styles.scss";
import FormInput from "../form-input/form-input.component";
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

const defaultSignInField = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [signInFields, setSignInFields] = useState(defaultSignInField);
  const { email, password } = signInFields;

  const { setCurrentUser } = useContext(UserContext);

  const resetSignInFields = () => {
    setSignInFields(defaultSignInField);
  };
  const SignInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    setCurrentUser(user);
    await createUserDocFromAuth(user);
  };
  const handleLogIn = async (e) => {
    e.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(user);
      resetSignInFields();
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        alert("Incorrect Email or Password");
      } else {
        console.log("user creation encounter an error: ", error);
      }
    }
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
        <div className="buttons-container">
          <Button type="submit">LogIn</Button>
          <Button type="button" buttonType="google" onClick={SignInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
