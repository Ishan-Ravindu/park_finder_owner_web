import { FaArrowRight } from "react-icons/fa";
import Button from "../components/Button";
import Input from "../components/Input";

const SignIn = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <div className="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover object-top"
              src="https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk0fHxkZXNpZ25lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 min-h-screen dark:bg-black">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
              Sign in
            </h2>
            <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
              Don&apos;t have an account?{" "}
              <a
                href="#"
                title=""
                className="font-medium text-indigo-600 transition-all duration-200 hover:text-indigo-700 hover:underline focus:text-indigo-700"
              >
                Create a free account
              </a>
            </p>

            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <Input
                  title="Full Name"
                  name="name"
                  placeholder="Enter You Name"
                />
                <Input
                  title="Full Name"
                  name="name"
                  placeholder="Enter You Name"
                />
                <div>
                  <Button title="Get started" icon={<FaArrowRight />} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
