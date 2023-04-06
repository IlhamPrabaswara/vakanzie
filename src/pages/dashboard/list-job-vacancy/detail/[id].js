import Layout from "@/components/layout";

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(
    `https://dev-example.sanbercloud.com/api/job-vacancy/${id}`
  );
  const result = await res.json();
  return { props: { result } };
}

const JobVacancyDetail = ({ result }) => {
  return (
    <Layout>
      <p>{`Hello it's ${result.job_description}`}</p>
    </Layout>
  );
};

export default JobVacancyDetail;
