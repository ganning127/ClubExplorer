import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => (
  <center>
    <title>Sign Up | GT Club Explorer</title>

    <SignUp
      path="/sign-up"
      routing="path"
      signInUrl="/sign-in"
      redirectUrl="/"
    />
  </center>
);

export default SignUpPage;