import SignUpFrom from "../../Components/sign-up-form/sign-up-form.component";
import SignInFrom from "../../Components/sign-in-form/sign-in-form.component";
import "./authentication.style.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInFrom />
      <SignUpFrom />
    </div>
  );
};

export default Authentication;
