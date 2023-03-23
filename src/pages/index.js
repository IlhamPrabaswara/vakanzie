import Layout from "@/components/layout";
import NavBar from "@/components/navbar";

export default function Home({ jobData }) {
  return (
    <Layout>
      <NavBar />
      <main className="grid w-72 mx-auto gap-3 mt-5 md:grid-cols-3 md:w-[900px]">
        {jobData.map((item) => (
          <div>
            <a
              href="#"
              className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
            >
              <img
                className="mx-auto"
                src={item.company_image_url}
                alt="company logo"
                width={200}
              />
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {item.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {item.job_description}
              </p>
            </a>
          </div>
        ))}
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
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
