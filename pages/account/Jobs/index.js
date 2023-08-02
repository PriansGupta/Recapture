import Job from "@/Components/Job";
import Account from "..";
import { Container } from "@mui/material";
import { createClient } from "next-sanity";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { getSession } from "next-auth/react";

export default function Jobs(props) {
  const [JobsList, setJobs] = useState(props.jobs);
  const [Location, setLocation] = useState("All");
  const [SalaryType, setSalaryType] = useState("All");
  const [JobType, setJobType] = useState("All");
  const [Role, setRole] = useState("All");

  const setLocationHandler = (event) => {
    setLocation(event.target.value);
  };
  const setSalaryTypeHandler = (event) => {
    setSalaryType(event.target.value);
  };
  const setJobTypeHandler = (event) => {
    setJobType(event.target.value);
  };
  const setRoleHandler = (event) => {
    setRole(event.target.value);
  };
  const FilterJobs = () => {
    let NewJobs = props.jobs;
    if (Location !== "All")
      NewJobs = props.jobs.filter((ele) => ele.location === Location);
    if (Role !== "All")
      NewJobs = NewJobs.filter((ele) => ele.jobTitle === Role);
    if (SalaryType !== "All")
      NewJobs = NewJobs.filter((ele) => ele.salaryType === SalaryType);
    if (JobType !== "All")
      NewJobs = NewJobs.filter((ele) => ele.jobType === JobType);
    setJobs(NewJobs);
  };
  const ClearFilterJobs = () => {
    setJobType("All");
    setLocation("All");
    setRole("All");
    setSalaryType("All");
  };
  useEffect(() => {
    FilterJobs();
  }, [Location, Role, SalaryType, JobType]);
  const filters = [
    {
      category: "Location",
      options: [
        "All",
        "Delhi",
        "Pune",
        "Banglore",
        "Hyderabad",
        "Gurgaon",
        "Chennai",
        "kolkata",
        "Noida",
      ],
      fxn: setLocationHandler,
      val: Location,
    },
    {
      category: "SalaryType",
      options: ["All", "Annual", "Fixed", "Monthly"],
      fxn: setSalaryTypeHandler,
      val: SalaryType,
    },
    {
      category: "JobType",
      options: ["All", "Full Time", "Part Time", "Contract", "Internship"],
      fxn: setJobTypeHandler,
      val: JobType,
    },
    {
      category: "Role",
      options: [
        "All",
        "Software Engineer",
        "Frontend Developer",
        "Backend Developer",
        "Full Stack Developer",
        "Mobile App Developer",
        "DevOps Engineer",
        "Data Scientist",
        "Machine Learning Engineer",
        "Quality Assurance Engineer",
        "UI/UX Designer",
        "Product Manager",
      ],
      fxn: setRoleHandler,
      val: Role,
    },
  ];
  const buttons = [
    filters.map((filter) => (
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">{filter.category}</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={filter.val}
          label={filter.category}
          onChange={filter.fxn}
        >
          {filter.options.map((option) => (
            <MenuItem value={option}>{option}</MenuItem>
          ))}
        </Select>
      </FormControl>
    )),
  ];
  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <Account>
        <Container>
          <br></br>
          <h1 className="JobsHeading">Jobs</h1>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
              {buttons.map((button) => (
                <Grid item xs>
                  <Item>{button}</Item>
                </Grid>
              ))}
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
              >
                <Button variant="contained" onClick={ClearFilterJobs}>
                  Clear all filters
                </Button>
              </ButtonGroup>
            </Grid>
          </Box>
          <br></br>
          {(JobsList && JobsList.length) > 0 ? (
            JobsList.map((job) => (
              <Job
                key={job.jobTitle}
                title={job.jobTitle}
                organisation={job.organisation}
                location={job.location}
                type={job.jobType}
                sector={job.sector}
                salary={job.salary}
                salaryType={job.salaryType}
                description={job.description}
                closing={job.closingDate}
                cta={job.cta}
                JobId={job.JobId}
              ></Job>
            ))
          ) : (
            <h2 className="JobsHeading">No Jobs Found !</h2>
          )}
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
