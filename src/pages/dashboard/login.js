import Link from "next/link";
import { useContext, useState } from "react";
import Cookies from "js-cookie";
import Router from "next/router";
import Layout from "@/components/layout";
import { DataContext } from "@/components/dataContext";

export default function LogIn() {
  const [input, setInput] = useState({
    email: "",
    password: "",
    name: "",
    image_url: "",
  });
  const { profilePicture, setProfilePicture } = useContext(DataContext);
  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setInput({ ...input, [name]: value });
  };
  const handleLogin = async (e) => {
    e.preventDefault();

    const data = {
      email: input.email,
      password: input.password,
    };

    const JSONdata = JSON.stringify(data);

    const endpoint = "https://dev-example.sanbercloud.com/api/login";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    await response.json().then((result) => {
      let { token } = result;
      if (result.token !== undefined) {
        Cookies.set("token", token);
        Router.push("/");
        localStorage.setItem('imageUrl', result.user.image_url)
      } else {
        alert("Password Invalid");
      }
    });
  };
  return (
    <Layout>
      <h1>Log In as Recruiter</h1>
      <form className="mt-6" onSubmit={handleLogin}>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="email"
            name="email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={input.email}
            onChange={handleChange}
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="password"
            name="password"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={input.password}
            onChange={handleChange}
            required
          />
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>
        <button
          type="submit"
          className="mb-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
      <p className="text-sm">
        Don't have an account?{" "}
        <Link className="text-blue-700" href="/dashboard/signup">
          Sign up
        </Link>
      </p>
    </Layout>
  );
}
