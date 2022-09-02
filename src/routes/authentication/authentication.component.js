import {
  signInWithGooglePopup,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignUpFrom from "../../Components/sign-up-form/sign-up-form.component";
import SignInFrom from "../../Components/sign-in-form/sign-in-form.component";

const Authentication = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In With Google Popup</button>
      <SignInFrom />
      <SignUpFrom />
    </div>
  );
};

export default Authentication;
