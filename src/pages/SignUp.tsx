import Button from "../components/Button";
import Input from "../components/Input";
import { FaArrowRight } from "react-icons/fa";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  conformPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required(),
});

type SignUpFormData = yup.InferType<typeof schema>;

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: yupResolver(schema),
  });

  const handleSignIn = (data: SignUpFormData) => {
    console.log(data);
  };

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24 min-h-screen">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover object-top"
              src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2lnbnVwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 min-h-screen dark:bg-black">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
              Sign Up
            </h2>
            <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
              Already have an account?{" "}
              <a className="font-medium text-indigo-600 transition-all duration-200 hover:text-indigo-700 hover:underline focus:text-indigo-700">
                Sign In
              </a>
            </p>

            <form className="mt-8" onSubmit={handleSubmit(handleSignIn)}>
              <div className="space-y-5">
                <Input
                  register={register}
                  error={errors.email?.message}
                  title="Email Address"
                  name="email"
                  type="email"
                  placeholder="Enter You Email"
                />
                <Input
                  register={register}
                  error={errors.password?.message}
                  title="Password"
                  name="password"
                  type="password"
                  placeholder="Enter You Password"
                />
                <Input
                  register={register}
                  error={errors.conformPassword?.message}
                  title="Conform Password"
                  name="conformPassword"
                  type="password"
                  placeholder="Enter You Password Again"
                />
                <div>
                  <Button
                    type="submit"
                    title="Sign Up"
                    icon={<FaArrowRight />}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
