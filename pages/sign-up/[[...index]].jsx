import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => (
  <center>
    <SignUp
      path="/sign-up"
      routing="path"
      signInUrl="/sign-in"
      redirectUrl="/"
    />
  </center>
);

export default SignUpPage;