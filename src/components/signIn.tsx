import { useForm } from "react-hook-form";
import "./signIn.css";

const SignIn = () => {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <div className="container">
      <h1 className="container__title">Sign in</h1>
      <form className="form">
        <div className="form__input">
          <label htmlFor="email">E-mail address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address..."
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
        </div>
        <div className="form__input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password..."
            {...register("password")}
          />
        </div>
        <button className="form__continue" type="submit">
          cContinue
        </button>
      </form>
      <p className="container__footer">
        Not out member yet? <a className="underline" href="/signUp">Click here to create new account</a>
      </p>
    </div>
  );
};

export default SignIn;
