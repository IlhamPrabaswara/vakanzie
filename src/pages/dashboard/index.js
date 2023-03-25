import Layout from "@/components/layout";
import NavBar from "@/components/navbar";
import Head from "next/head";
import Link from "next/link";

export default function Dashboard({ result }) {
  return (
    <>
    <Head>
      <title>Vakanzie - Dashboard</title>
    </Head>
      <Layout>
        <NavBar />
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 sticky left-0 bg-gray-50">
                  Company Logo
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">
                    Title
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3 ml-1"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 320 512"
                      >
                        <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                      </svg>
                    </a>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">
                    Company name
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3 ml-1"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 320 512"
                      >
                        <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                      </svg>
                    </a>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">
                    Company city
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3 ml-1"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 320 512"
                      >
                        <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                      </svg>
                    </a>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">
                    Job status
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3 ml-1"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 320 512"
                      >
                        <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                      </svg>
                    </a>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">Action</div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {result.data.map((el) => (
                <tr key={el.id} className="bg-white border-b">
                  <td
                    scope="row"
                    className="px-6 sticky left-0 py-4 font-medium text-gray-900 whitespace-nowrap bg-white"
                  >
                    <img
                      className="rounded shadow-md"
                      width={75}
                      src={el.company_image_url}
                    ></img>
                  </td>
                  <td className="px-6 py-4">{el.title}</td>
                  <td className="px-6 py-4">{el.company_name}</td>
                  <td className="px-6 py-4">{el.company_city}</td>
                  <td className="px-6 py-4">
                    {el.job_status === 1 ? "Open" : "Closed"}
                  </td>
                  <td className="px-6 py-4 text-left">
                    <Link
                      href={`/dashboard/list-job-vacancy/edit/${el.id}`}
                      className="font-medium mr-6 text-blue-600 hover:underline"
                    >
                      Edit
                    </Link>
                    <a
                      href="#"
                      className="font-medium text-red-600 hover:underline"
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="absolute bottom-5 right-5">
          <Link href="/dashboard/list-job-vacancy/create">
            <svg
              width="40"
              height="40"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M49.9999 70.8333C51.1805 70.8333 52.1708 70.4333 52.9708 69.6333C53.7708 68.8333 54.1694 67.8445 54.1666 66.6667V54.1667H66.7708C67.9513 54.1667 68.9235 53.7667 69.6874 52.9667C70.4513 52.1667 70.8333 51.1778 70.8333 50C70.8333 48.8195 70.4333 47.8292 69.6333 47.0292C68.8333 46.2292 67.8444 45.8306 66.6666 45.8333H54.1666V33.2292C54.1666 32.0486 53.7666 31.0764 52.9666 30.3125C52.1666 29.5486 51.1777 29.1667 49.9999 29.1667C48.8194 29.1667 47.8291 29.5667 47.0291 30.3667C46.2291 31.1667 45.8305 32.1556 45.8333 33.3333V45.8333H33.2291C32.0485 45.8333 31.0763 46.2333 30.3124 47.0333C29.5485 47.8333 29.1666 48.8222 29.1666 50C29.1666 51.1806 29.5666 52.1708 30.3666 52.9708C31.1666 53.7708 32.1555 54.1695 33.3333 54.1667H45.8333V66.7708C45.8333 67.9514 46.2333 68.9236 47.0333 69.6875C47.8333 70.4514 48.8221 70.8333 49.9999 70.8333ZM49.9999 91.6667C44.236 91.6667 38.8194 90.5722 33.7499 88.3833C28.6805 86.1945 24.2708 83.2264 20.5208 79.4792C16.7708 75.7292 13.8027 71.3195 11.6166 66.25C9.43047 61.1806 8.33603 55.7639 8.33325 50C8.33325 44.2361 9.4277 38.8195 11.6166 33.75C13.8055 28.6806 16.7735 24.2708 20.5208 20.5208C24.2708 16.7708 28.6805 13.8028 33.7499 11.6167C38.8194 9.43057 44.236 8.33612 49.9999 8.33334C55.7638 8.33334 61.1805 9.42779 66.2499 11.6167C71.3194 13.8056 75.7291 16.7736 79.4791 20.5208C83.2291 24.2708 86.1985 28.6806 88.3874 33.75C90.5763 38.8195 91.6694 44.2361 91.6666 50C91.6666 55.7639 90.5721 61.1806 88.3833 66.25C86.1944 71.3195 83.2263 75.7292 79.4791 79.4792C75.7291 83.2292 71.3194 86.1986 66.2499 88.3875C61.1805 90.5764 55.7638 91.6695 49.9999 91.6667Z"
                fill="#212121"
              />
            </svg>
          </Link>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `https://dev-example.sanbercloud.com/api/job-vacancy`
  );
  const result = await res.json();
  return { props: { result } };
}
