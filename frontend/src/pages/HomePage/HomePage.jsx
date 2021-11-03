import React, { useState } from "react";
import Footer from "../../component/Footer/Footer";
import Home from "../../component/Home";
import { MainSearchContainer } from "../../component/mainSearchContainer/MainSearchContainer";
import { HomePageWrapper } from "./HomePageSC";
export const HomePage = () => {
  const [jobs, setJobs] = useState([]);
  const homeProps = { jobs, setJobs };

  return (
    <HomePageWrapper id="homepage">
      <MainSearchContainer setJobs={setJobs} />
      <section>
        <Home {...homeProps} />
      </section>
    </HomePageWrapper>
  );
};
