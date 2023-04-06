import Layout from "@/components/layout";
import { useState } from "react";
import Cookies from "js-cookie";
import SideBar from "@/components/sidebar";

const JobVacancyCreate = () => {
  const [input, setInput] = useState({
    title: "",
    job_description: "",
    job_qualification: "",
    job_type: "",
    job_tenure: "",
    job_status: "",
    company_name: "",
    company_image_url: "",
    company_city: "",
    salary_min: "",
    salary_max: "",
  });
  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setInput({ ...input, [name]: value });
  };
  const handleCreate = async (e) => {
    e.preventDefault();
    const data = {
      title: input.title,
      job_description: input.job_description,
      job_qualification: input.job_qualification,
      job_type: input.job_type,
      job_tenure: input.job_tenure,
      job_status: input.job_status,
      company_name: input.company_name,
      company_image_url: input.company_image_url,
      company_city: input.company_city,
      salary_min: input.salary_min,
      salary_max: input.salary_max,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = `https://dev-example.sanbercloud.com/api/job-vacancy`;
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
    alert("Data is successfully created");
  };
  return (
    <Layout>
      <SideBar/>
      <h1>Job Vacancy Create</h1>
      <form onSubmit={handleCreate}>
        <div className="mb-6">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Job title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={input.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="job_description"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Job description
          </label>
          <textarea
            type="text"
            name="job_description"
            id="job_description"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={input.job_description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="job_qualification"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Job qualification
          </label>
          <textarea
            rows={10}
            type="text"
            name="job_qualification"
            id="job_qualification"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={input.job_qualification}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="job_type"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Job type
          </label>
          <input
            type="text"
            name="job_type"
            id="job_type"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={input.job_type}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="job_tenure"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Job tenure
          </label>
          <input
            type="text"
            name="job_tenure"
            id="job_tenure"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={input.job_tenure}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="job_status"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Job status
          </label>
          <input
            type="text"
            name="job_status"
            id="job_status"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={input.job_status}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="company_name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Company name
          </label>
          <input
            type="text"
            name="company_name"
            id="company_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={input.company_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="company_image_url"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Company image link
          </label>
          <input
            type="text"
            name="company_image_url"
            id="company_image_url"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={input.company_image_url}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="company_city"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Company city
          </label>
          <input
            type="text"
            name="company_city"
            id="company_city"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={input.company_city}
            onChange={handleChange}
            required
          />
        </div>
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Salary
        </label>
        <div className="mb-6 grid grid-cols-2 gap-2">
          <div>
            <label
              htmlFor="salary_min"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Minimum Salary
            </label>
            <input
              name="salary_min"
              type="text"
              id="salary_min"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={input.salary_min}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="salary_max"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Maximum Salary
            </label>
            <input
              type="text"
              name="salary_max"
              id="salary_max"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={input.salary_max}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </Layout>
  );
};

export default JobVacancyCreate;
