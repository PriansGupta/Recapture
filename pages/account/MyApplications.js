import { MongoClient } from "mongodb";
import Account from ".";
import { Container } from "@mui/material";
import { useSession, getSession } from "next-auth/react";
import ApplicationsList from "@/Components/ApplicationsList";
import NotFound from "@/Components/NotFound";

export default function MyApplications(props) {
  const Applied = JSON.parse(props.data);
  console.log(Applied);
  let Element;

  if (Applied.length > 0) {
    Element = (
      <div className="abc">
        <div className="Applications-head">
          <p className="w-3/4">Role</p>
          <p className="w-1/4">Status</p>
        </div>
        <ApplicationsList props={JSON.parse(props.data)}></ApplicationsList>
      </div>
    );
  } else {
    Element = <NotFound></NotFound>;
  }
  return (
    <>
      <Account>
        <Container className="JobsContainer">
          <h1 className="JobsHeading">Applications</h1>
          {Element}
        </Container>
      </Account>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }
  const client = await MongoClient.connect(
    "mongodb+srv://priyanshg615:B80oBjOUGV2D30vn@careersportal.dlu5ln9.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();
  const JobApplications = db.collection(session.user.email);
  const Applied = await JobApplications.find().toArray();
  const data = JSON.stringify(Applied);
  client.close();
  return {
    props: { data },
  };
}
