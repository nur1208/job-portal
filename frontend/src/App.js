import { createContext, useState } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  useHistory,
  useLocation,
} from "react-router-dom";
import { Grid, makeStyles } from "@material-ui/core";
import styled from "styled-components";
import Welcome, { ErrorPage } from "./component/Welcome";
import Login from "./component/Login";
import { NavBar } from "./component/Navbar/Navbar";
import Logout from "./component/Logout";
import Signup from "./component/Signup";
import Home from "./component/Home";
import Applications from "./component/Applications";
import Profile from "./component/Profile";
import CreateJobs from "./component/recruiter/CreateJobs";
import MyJobs from "./component/recruiter/MyJobs";
import JobApplications from "./component/recruiter/JobApplications";
import AcceptedApplicants from "./component/recruiter/AcceptedApplicants";
import RecruiterProfile from "./component/recruiter/Profile";
import MessagePopup from "./lib/MessagePopup";
import isAuth, { userType } from "./lib/isAuth";
import { Chat } from "./component/chat/Chat";
import { HomePage } from "./pages/HomePage/HomePage";
import Footer from "./component/Footer/Footer";
export const SetPopupContext = createContext();

const useStyles = makeStyles((theme) => ({
  body: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "98vh",
    paddingTop: "34px",
    boxSizing: "border-box",
    width: "100%",
  },
}));

export const Wrapper = styled.div`
  display: grid;
  grid-template:
    "A"
    "B";

  grid-template-rows: 1fr 200px;
`;

function App() {
  const classes = useStyles();
  const [popup, setPopup] = useState({
    open: false,
    severity: "",
    message: "",
  });

  const { pathname } = useLocation();
  // const history = useHistory();

  return (
    <SetPopupContext.Provider value={setPopup}>
      <Wrapper>
        <div style={{ gridArea: "A" }}>
          <NavBar />
          {/* <Grid container direction="column"> */}
          <Grid item xs container direction="column">
            {/* <Grid item xs>
          <Navbar />
        </Grid> */}
            <Grid
              item
              className={classes.body}
              style={
                pathname === "/chat" || pathname === "/"
                  ? { display: "block", paddingTop: 0 }
                  : {}
              }
            >
              <Switch>
                <Route exact path="/">
                  {/* <Welcome /> */}
                  <HomePage />
                </Route>
                <Route exact path="/login">
                  <Login />
                </Route>
                <Route exact path="/signup">
                  <Signup />
                </Route>
                <Route exact path="/logout">
                  <Logout />
                </Route>
                <Route exact path="/home">
                  <Home />
                </Route>
                <Route exact path="/applications">
                  <Applications />
                </Route>
                <Route exact path="/profile">
                  {userType() === "recruiter" ? (
                    <RecruiterProfile />
                  ) : (
                    <Profile />
                  )}
                </Route>
                <Route exact path="/addjob">
                  <CreateJobs />
                </Route>
                <Route exact path="/myjobs">
                  <MyJobs />
                </Route>
                <Route exact path="/job/applications/:jobId">
                  <JobApplications />
                </Route>
                <Route exact path="/employees">
                  <AcceptedApplicants />
                </Route>
                <Route exact path="/chat">
                  <Chat />
                </Route>
                <Route>
                  <ErrorPage />
                </Route>
              </Switch>
            </Grid>
          </Grid>
          {/* ?   <Grid item> */}
          {/* </Grid> */}
          {/* </Grid> */}
          <MessagePopup
            open={popup.open}
            setOpen={(status) =>
              setPopup({
                ...popup,
                open: status,
              })
            }
            severity={popup.severity}
            message={popup.message}
          />
        </div>
        <div style={{ gridArea: "B" }}>
          <Footer />
        </div>
      </Wrapper>
    </SetPopupContext.Provider>
  );
}

export default App;
