import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Job(props) {
  const { data: session } = useSession();
  async function Apply() {
    console.log("Clicked");
    const res = await fetch("/api/JobApply", {
      method: "POST",
      body: JSON.stringify({
        props,
        name: session.user.name,
        email: session.user.email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);
    if (data.message == "Applied") {
      toast.success("Applied", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.error("Something Wrong !!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }

  return (
    <Card className="JobDetails">
      <Card.Header>
        <div className="JobHeading">
          <div>
            <Link href={`/account/Jobs/${props.JobId}`}>
              <h3>{props.title}</h3>
            </Link>
            <h6>{`${props.organisation}, ${props.location}`}</h6>
          </div>
          <div>
            <p>{`Salary Type:  ${props.salaryType}`}</p>
            <h6>{props.type}</h6>
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>Description</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <div className="foot">
          <Button variant="success" onClick={Apply}>
            Apply Now
          </Button>
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </Card.Body>
    </Card>
  );
}

export default Job;
