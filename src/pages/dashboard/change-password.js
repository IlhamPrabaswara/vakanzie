import Layout from "@/components/layout";
import { useState } from "react";
import Cookies from "js-cookie";

export default function ChangePassword() {
  const [input, setInput] = useState({
    current_password: "",
    new_password: "",
    new_confirm_password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((input) => ({
      ...input,
      [name]: value,
    }));
  };
  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    const data = {
      current_password: input.current_password,
      new_password: input.new_password,
      new_confirm_password: input.new_confirm_password,
    };
    const JSONdata = JSON.stringify(data);

    const endpoint = `https://dev-example.sanbercloud.com/api/change-password`;
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    const result = await response.json();
    alert("Password is successfully updated")
  };
  return (
    <Layout>
      <h1>Change Password</h1>
      <form onSubmit={handleUpdatePassword}>
        <div className="mb-6">
          <label
            htmlFor="current_password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Current password
          </label>
          <input
            type="password"
            name="current_password"
            id="current_password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@flowbite.com"
            value={input.current_password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="new_password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            New password
          </label>
          <input
            type="password"
            id="new_password"
            name="new_password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={input.new_password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="new_confirm_password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Repeat new password
          </label>
          <input
            type="password"
            id="new_confirm_password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={input.new_confirm_password}
            name="new_confirm_password"
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Change password
        </button>
      </form>
    </Layout>
  );
}
