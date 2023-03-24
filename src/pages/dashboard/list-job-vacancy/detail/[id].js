import Layout from "@/components/layout";
import NavBar from "@/components/navbar";

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
      <NavBar />
      <p>{`Hello it's ${result.job_description}`}</p>
    </Layout>
  );
};

export default JobVacancyDetail;
