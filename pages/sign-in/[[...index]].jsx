import { SignIn } from "@clerk/nextjs";

const SignInPage = () => (
  <center>
    <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" redirectUrl="/" />
  </center>
);

export default SignInPage;