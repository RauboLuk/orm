import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { object, string, TypeOf } from "zod";
import { Link } from "react-router-dom";

const loginSchema = object({
  email: string().email("Invalid email address"),
  password: string().nonempty("Password is required"),
});

type LoginInput = TypeOf<typeof loginSchema>;

const SignIn = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (values: LoginInput) => {
    console.log(values);
    alert("OK");
  };

  return (
    <div className="container">
      <h1 className="container__title">Sign in</h1>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__input">
          <label htmlFor="email">E-mail address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address..."
            {...register("email")}
            required
          />
          <p className="input__error">{errors.email?.message}</p>
        </div>
        <div className="form__input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password..."
            {...register("password")}
            required
          />
          <p className="input__error">{errors.password?.message}</p>
        </div>
        <button className="form__continue" type="submit">
          Continue
        </button>
      </form>
      <p className="container__footer">
        Not out member yet?{" "}
        <Link className="underline" to="/signUp">
          Click here to create new account
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
