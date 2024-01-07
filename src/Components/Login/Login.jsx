import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;

      signIn(email, password)
        .then((result) => {
          const user = result.user;
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Login successfully...",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        })
        .catch((error) => {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Authentication failed",
            text: "Invalid email or password",
            showConfirmButton: true,
          });
        });
    };

    return (
      <div className='py-16'>
        <div className="w-full rounded-xl bg-white md:w-3/5 lg:w-2/5 m-auto py-8 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] px-8">
          <div className="w-full h-100">
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
              Login
            </h1>
<form onSubmit={handleLogin} className="mt-6" action="#">
  <div>
    <label className="block text-gray-700">Email Address</label>
    <input
      type="email"
      name="email"
      id="email" 
      placeholder="Enter Email Address"
      className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
      autoFocus
      required
    />
  </div>

  <div className="relative">
    <label className="block text-gray-700">Password</label>
    <input
      name="password"
      id="password" 
      type="password"
      placeholder="Enter Password"
      minLength="6"
      className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
      required
    />
  </div>

  <input
    className="btn btn-primary w-full block px-4 py-3 mt-6"
    type="submit"
    value="Log In"
  />
</form>
            <p className="mt-3 text-center">
              Need an account?{" "}
              <Link
                to="/signup"
                href="#"
                className="text-blue-500 hover:text-blue-700 font-semibold">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
};

export default Login;