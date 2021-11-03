import React, { useContext, useState } from "react";
import {
  Button,
  Chip,
  Grid,
  Paper,
  TextField,
  Typography,
  Modal,
} from "@material-ui/core";
import { useStyles } from "../Home";
import { SetPopupContext } from "../../App";
import axios from "axios";
import apiList from "../../lib/apiList";
import { Rating } from "@material-ui/lab";
import isAuth, { userType } from "../../lib/isAuth";

export const JobCard = (props) => {
  const classes = useStyles();
  const { job } = props;
  const setPopup = useContext(SetPopupContext);

  const [open, setOpen] = useState(false);
  const [sop, setSop] = useState("");

  const handleClose = () => {
    setOpen(false);
    setSop("");
  };

  const handleApply = () => {
    console.log(job._id);
    console.log(sop);
    axios
      .post(
        `${apiList.jobs}/${job._id}/applications`,
        {
          sop: sop,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "token"
            )}`,
          },
        }
      )
      .then((response) => {
        setPopup({
          open: true,
          severity: "success",
          message: response.data.message,
        });
        handleClose();
      })
      .catch((err) => {
        console.log(err.response);
        setPopup({
          open: true,
          severity: "error",
          message: err.response.data.message,
        });
        handleClose();
      });
  };

  const deadline = new Date(job.deadline).toLocaleDateString();

  return (
    <Paper
      className={classes.jobTileOuter}
      elevation={3}
      style={{ width: "30%" }}
    >
      <Grid container>
        <Grid container item spacing={1} direction="column">
          <Grid item>
            <Typography variant="h5">{job.title}</Typography>
          </Grid>
          <Grid item>
            <Rating
              value={job.rating !== -1 ? job.rating : null}
              readOnly
            />
          </Grid>
          <Grid item>Role : {job.jobType}</Grid>
          <Grid item>Salary : &#36; {job.salary} per month</Grid>
          <Grid item>
            Duration :{" "}
            {job.duration !== 0
              ? `${job.duration} month`
              : `Flexible`}
          </Grid>
          <Grid item>Posted By : {job.recruiter.name}</Grid>
          <Grid item>Application Deadline : {deadline}</Grid>

          <Grid item>
            {job.skillSets.map((skill) => (
              <Chip label={skill} style={{ marginRight: "2px" }} />
            ))}
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              // className={classes.button}
              onClick={() => {
                setOpen(true);
              }}
              disabled={
                userType() === "recruiter" ||
                !localStorage.getItem("token")
              }
            >
              Apply
            </Button>
          </Grid>
        </Grid>
        {/* <Grid item xs={3}>
        </Grid> */}
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        className={classes.popupDialog}
      >
        <Paper
          style={{
            padding: "20px",
            outline: "none",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minWidth: "50%",
            alignItems: "center",
          }}
        >
          <TextField
            label="Write SOP (upto 250 words)"
            multiline
            rows={8}
            style={{ width: "100%", marginBottom: "30px" }}
            variant="outlined"
            value={sop}
            onChange={(event) => {
              if (
                event.target.value.split(" ").filter(function (n) {
                  return n != "";
                }).length <= 250
              ) {
                setSop(event.target.value);
              }
            }}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ padding: "10px 50px" }}
            onClick={() => handleApply()}
          >
            Submit
          </Button>
        </Paper>
      </Modal>
    </Paper>
  );
};
