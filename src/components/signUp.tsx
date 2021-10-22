import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { object, string, TypeOf } from "zod";

const signUpSchema = object({
  email: string().nonempty("Email is required").email("Invalid email address"),
  name: string().nonempty("Full name is required").regex(/\S+( +\S+)+/, "Missing last name"),
  password: string()
    .nonempty("Password is required")
    .min(8, "Password is too short"),
  passwordConfirmation: string().nonempty("Please confirm your password"),
}).refine((data) => data.password === data.passwordConfirmation, {
  message: "Please confirm your password",
  path: ["passwordConfirmation"],
});

type SignUpInput = TypeOf<typeof signUpSchema>;

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignUpInput>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (values: SignUpInput) => {
    console.log(values);
  };

  return (
    <div className="container">
      <h1 className="container__title">Sign up</h1>
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
          <label htmlFor="name">Full name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your full name..."
            {...register("name")}
            required
          />
          <p className="input__error">{errors.name?.message}</p>
        </div>
        <div className="form__input">
          <label htmlFor="password"
            data-testid="passwordLabel">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password..."
            {...register("password")}
            required
            data-testid="passwordInput"
          />
          <p className="input__error">{errors.password?.message}</p>
        </div>
        <div className="form__input">
          <label htmlFor="password">Confirm your password</label>
          <input
            type="password"
            id="passwordConfirmation"
            placeholder="Confirm your password..."
            {...register("passwordConfirmation")}
            required
          />
          <p className="input__error">{errors.passwordConfirmation?.message}</p>
        </div>
        <button className="form__continue" type="submit">
          Continue
        </button>
      </form>
      <p className="container__footer">
        Already using our app?{" "}
        <a className="underline" href="/signIn">
          Click here to sign in
        </a>
      </p>
    </div>
  );
};

export default SignUp;
