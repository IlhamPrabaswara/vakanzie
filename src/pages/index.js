import Layout from "@/components/layout";
import NavBar from "@/components/navbar";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function Home({ jobData }) {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
    <Head>
      <title>Vakanzie - Home</title>
    </Head>
      <Layout>
        <NavBar />
        <div className="h-[75vh] flex justify-center flex-col items-center">
          <p className="text-4xl font-bold text-center mb-10 md:text-6xl md:w-[500px]">
            Get the <span className="text-blue-700">Right Job</span> You Deserve
          </p>
          <p className="text-center mb-10">
            Million jobs listed here! You're dream job is waiting.
          </p>
          <form>
            <label
              for="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                name="search"
                id="default-search"
                className="block w-80 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search jobs position..."
                value={search}
                onChange={handleChange}
                required
              />
              {/* <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2"
            >
              Search
            </button> */}
            </div>
          </form>
        </div>
        <main className="grid mx-auto gap-5 mt-5 md:grid-cols-3">
          {jobData
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.title.toLowerCase().includes(search.toLowerCase());
            })
            .map((item) => (
              <div>
                <Link
                  href={`/dashboard/list-job-vacancy/detail/${item.id}`}
                  className="flex flex-col p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 h-[350px]"
                >
                  <div className="flex justify-between mb-3 items-top">
                    <div className="mr-3">
                      <h5 className="mb-2 text-sm tracking-tight text-gray-400">
                        {item.company_name}
                      </h5>
                      <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
                        {item.title}
                      </h5>
                      <h5 className="mb-2 text-sm font-bold tracking-tight text-blue-500">
                        {`${item.salary_min} IDR - ${item.salary_max} IDR`}
                      </h5>
                    </div>
                    <img
                      className="rounded-xl shadow-md h-14"
                      src={item.company_image_url}
                      alt="company logo"
                    />
                  </div>

                  <p className="font-normal mb-10 text-sm text-gray-500 flex-grow">
                    {item.job_description.substring(0, 250) + "..."}
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-xs px-5 py-2.5 text-center">
                      {item.job_tenure.toUpperCase()}
                    </p>
                    <p>{item.company_city}</p>
                  </div>
                </Link>
              </div>
            ))}
        </main>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    "https://dev-example.sanbercloud.com/api/job-vacancy"
  );
  const jobs = await res.json();
  const jobData = jobs.data;
  return {
    props: {
      jobData,
    },
  };
}
