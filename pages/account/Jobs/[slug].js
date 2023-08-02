import { useRouter } from "next/router";
import Navigation from "@/Components/Appbar";
import { Container } from "@mui/material";
import { useSession } from "next-auth/react";
import { createClient } from "next-sanity";

export default function JobDetails(props) {
  const { data: session } = useSession();
  console.log(session);
  const router = useRouter();
  const job = props.jobs.filter((job) => job.JobId == router.query.slug)[0];
  return (
    <>
      <Navigation></Navigation>
      <Container className="JobsDetailsContainer">
       <div>{job.jobTitle}</div>
      </Container>
    </>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.query;
  console.log(slug);
  const client = createClient({
    projectId: "p3s4qfsf",
    dataset: "production",
    useCdn: false,
  });
  const jobs = await client.fetch(`*[_type == "Job"]`);
  return {
    props: {
      jobs,
    },
  };
}
