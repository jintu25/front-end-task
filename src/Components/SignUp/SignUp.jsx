import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import Swal from 'sweetalert2';
const SignUp = () => {

    const [showPassword, setShowPassword] = useState(false);
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
      createUser(data.email, data.password).then((result) => {
        const user = result.user;
          console.log(user)
          reset();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Sign Up successfully...",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
      });
    };

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    return (
      <div className="w-full rounded-xl bg-white md:w-3/5 lg:w-2/5 m-auto py-4 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] px-8">
        <div className="w-full h-100 ">
          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
            Sign up
          </h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-6"
            action="#"
            method="POST">
            <div>
              <label className="block text-gray-700">Type Your Name</label>
              <input
                {...register("name", { required: true })}
                type="text"
                name="name"
                id=""
                placeholder="Type your Name"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                autoFocus
                required
              />
              {errors.name && (
                <span className="text-red-500 text-sm font-semibold">
                  Name field is required
                </span>
              )}
            </div>
            <div className="mt-4">
              <label className="block text-gray-700">Type your E-mail</label>
              <input
                type="email"
                name="email"
                {...register("email", { required: true })}
                id=""
                placeholder="Type your Name"
                minLength="6"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
              focus:bg-white focus:outline-none"
                required
              />
              {errors.email && (
                <span className="text-red-500 text-sm font-semibold">
                  Please Type Your E-mail
                </span>
              )}
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Type your password"
                  name="password"
                  className="input input-bordered w-full"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                    pattern: {
                      value:
                        /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                      message: "Password must be strong",
                    },
                  })}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 focus:outline-none">
                  {showPassword ? (
                    <span className="text-2xl">
                      <BiSolidShow></BiSolidShow>
                    </span>
                  ) : (
                    <span className="text-2xl">
                      <BiSolidHide></BiSolidHide>
                    </span>
                  )}
                </button>
              </div>
              {errors.password && (
                <p role="alert" className="text-red-600">
                  {errors.password?.message}
                </p>
              )}
            </div>

            <input
              type="submit"
              value="Sign Up"
              className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
            px-4 py-3 mt-6"
            />
          </form>
          <p className="mb-8 mt-3 text-center">
            Already have an account{" "}
            <Link
              to="/login"
              href="#"
              className="text-blue-500 hover:text-blue-700 font-semibold">
              Please Login
            </Link>
          </p>
        </div>
      </div>
    );
};

export default SignUp;