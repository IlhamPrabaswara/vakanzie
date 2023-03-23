import Layout from "@/components/layout";

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(
    `https://dev-example.sanbercloud.com/api/job-vacancy/${id}`
  );
  const result = await res.json();
  return { props: { result } };
}

const JobVacancyEdit = ({ result }) => {
  return (
    <Layout>
      <form>
        <div className="mb-6">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Job title
          </label>
          <input
            type="text"
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Front-end Developer"
            value={result.title}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Job description
          </label>
          <input
            type="text"
            id="description"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Front-end Developer"
            value={result.job_description}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="qualification"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Job qualification
          </label>
          <textarea
            type="text"
            id="qualification"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Front-end Developer"
            value={result.job_qualification}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="type"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Job type
          </label>
          <input
            type="text"
            id="type"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Front-end Developer"
            value={result.job_type}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="tenure"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Job tenure
          </label>
          <input
            type="text"
            id="tenure"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Front-end Developer"
            value={result.job_tenure}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="status"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Job status
          </label>
          <input
            type="text"
            id="status"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Front-end Developer"
            value={result.job_status}
            required
          />
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

export default JobVacancyEdit;
