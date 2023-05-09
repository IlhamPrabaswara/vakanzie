import Layout from "@/components/layout";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function Home({ jobData }) {
  const [search, setSearch] = useState("");
  const [viewModal, setViewModal] = useState(true);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <Head>
        <title>Vakanzie - Home</title>
      </Head>
      <Layout>
        <div className="h-[50vh] flex justify-center flex-col items-center">
          <p className="font-bold text-5xl leading-[58px] mb-2.5">
            Find your dream job at{" "}
            <span className="text-[#006492]">Vakanzie</span>
          </p>
          <p className="font-normal text-xl leading-[1.6em]">
            Get the most exciting jobs from all around the world and grow your
            career.
          </p>
          {/* <form>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
              <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2"
            >
              Search
            </button>
            </div>
          </form> */}
        </div>
        <h2>Recent Jobs</h2>
        <main className="grid mx-auto gap-5 mt-5 md:grid-cols-3">
          {jobData
            .filter((item) =>
              search.toLowerCase() === ""
                ? item
                : item.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((item) => (
              <div key={item.id}>
                <Link
                  href={`/dashboard/list-job-vacancy/detail/${item.id}`}
                  className="flex flex-col p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 min-h-[350px]"
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
                    {item.job_description
                      ? item.job_description.substring(0, 200) + "..."
                      : null}
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

        <div
          id="marketing-banner"
          tabindex="-1"
          className={`${
            viewModal ? null : "hidden"
          } fixed z-50 flex flex-col md:flex-row justify-between w-[calc(100%-2rem)] p-4 -translate-x-1/2 bg-white border border-gray-300 rounded-lg shadow-sm lg:max-w-7xl left-1/2 bottom-6`}
        >
          <div class="flex flex-col items-start mb-3 mr-4 md:items-center md:flex-row md:mb-0">
            <p class="flex items-center text-sm font-normal text-gray-500">
              This website is currently optimized for mobile only.
            </p>
          </div>
          <div class="flex items-center flex-shrink-0">
            <button
              data-dismiss-target="#marketing-banner"
              type="button"
              class="absolute top-2.5 right-2.5 md:relative md:top-auto md:right-auto flex-shrink-0 inline-flex justify-center items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5"
              onClick={() => {
                setViewModal(!viewModal);
              }}
            >
              <svg
                aria-hidden="true"
                class="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Close banner</span>
            </button>
          </div>
        </div>
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
