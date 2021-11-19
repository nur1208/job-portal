import axios from "axios";
import React, { useEffect, useState } from "react";
import { SelectBtn } from "../SelectBtn/SelectBtn";
import { Wrapper } from "./MainSearchContainerSc";

export const MainSearchContainer = ({ setJobs }) => {
  const [openRecuiters, setOpenRecuiters] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [totalJobs, setTotalJobs] = useState(0);
  const handleSearch = async (e) => {
    e.preventDefault();
    console.log(searchInput);

    const { data } = await axios.get(
      `http://localhost:5050/api/v1/jobs?q=${searchInput}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    setJobs(data.data);
  };

  // useEffect(() => {
  //   (async () => {
  //     const { data } = await axios.get(
  //       `http://localhost:5050/api/v1/jobs/getTotalNumber`
  //     );

  //     setTotalJobs(data.length);
  //     // console.log({ length: data.length });
  //   })();
  // }, []);

  return (
    <Wrapper
      openRecuiters={openRecuiters}
      class="main-search-container row main-search-container-mobile new-hero-background main-search-container-margin-top"
    >
      <main>
        <div class="h1-container">
          <span
          // class="h1-title-new"
          // title="Jobs, careers, employment and recruitment at Reed.co.uk"
          >
            <span class="h1-slogan">
              Jobs, careers, employment and recruitment at
              Reed.co.uk
            </span>
          </span>
        </div>
        <div class="homepage-gradient"></div>
        <form
          id="main-search-new"
          // role="search"
          class="main-search main-search-new container signed-out gtmSearchFormHome"
          // action="/jobs"
          // method="GET"
          // novalidate="novalidate"
        >
          <div class="row row-mobile">
            <p class="job-counter job-counter-mobile">
              {/* Search {totalJobs} new jobs - 11,212 added in the last 24 hours */}
            </p>
            <div
              role="group"
              aria-labelled-by="find-job"
              class="collector"
            >
              <div
                class="top-section horizontal-form"
                data-bind="attr: {class: 'top-section horizontal-form' + (twoStepsSearchEnabled() ? ' twoStepsSearchEnabled' : '')}"
              >
                <div
                  class="keywords-container col-sm-5 col-md-5 keywords-container-mobile"
                  style={{ width: "83%" }}
                >
                  <label for="main-keywords">What</label>
                  <span
                    class="twitter-typeahead"
                    style={{
                      position: "relative",
                      display: "inline-block",
                    }}
                  >
                    <input
                      type="text"
                      class="form-control tt-input js-bound"
                      id="main-keywords"
                      name="keywords"
                      maxlength="255"
                      placeholder='e.g. "software Engendering "'
                      aria-label="keywords e.g. web design"
                      title="keywords e.g. web design"
                      autocomplete="off"
                      style={{
                        position: "relative",
                        verticalAlign: "top",
                      }}
                      onChange={(e) =>
                        setSearchInput(e.target.value)
                      }
                    />
                    <pre
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        visibility: "hidden",
                        whiteSpace: "pre",
                        fontFamily: "Red Hat Text sans-serif",
                        fontSize: " 16px",
                        fontStyle: "normal",
                        fontVariant: "normal",
                        fontWeight: 400,
                        wordSpacing: "0px",
                        letterSpacing: " 0px",
                        textIndent: "0px",
                        textRendering: "auto",
                        textTransform: "none",
                      }}
                    ></pre>
                    <div
                      class="tt-menu"
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: "0px",
                        zIndex: 100,
                        display: "none",
                      }}
                    >
                      <div class="tt-dataset tt-dataset-reed-query"></div>
                      <div class="tt-dataset tt-dataset-recentsearches-query"></div>
                    </div>
                  </span>

                  <div
                    data-bind="click: function() { clearValue('#main-keywords'); }, attr: {'class': ('clean icon icon-clean-input' + ((searchKeywords() == '' || searchKeywords() == undefined) ? ' is-hidden' : ''))}"
                    class="clean icon icon-clean-input is-hidden"
                  ></div>
                </div>
                <div
                  class="distance-container col-xs-12 col-sm-3 col-md-2"
                  data-bind="visible: twoStepsSearchEnabled"
                  style={{ display: "none" }}
                >
                  <label for="proximity">Distance</label>
                  <select
                    id="proximity"
                    name="proximity"
                    class="form-control"
                  >
                    <option value="0">0 miles</option>
                    <option value="1">1 mile</option>
                    <option value="3">3 miles</option>
                    <option value="5">5 miles</option>
                    <option value="10" selected="selected">
                      10 miles
                    </option>
                    <option value="15">15 miles</option>
                    <option value="20">20 miles</option>
                    <option value="30">30 miles</option>
                    <option value="50">50 miles</option>
                  </select>
                </div>
                <div class="form-submit form-submit-mobile col-sm-3 col-md-2">
                  <button
                    type="submit"
                    class="search-button btn btn-primary desktop-content"
                    id="homepageSearchButton"
                    tabindex="4"
                    onClick={handleSearch}
                  >
                    Search jobs
                  </button>
                </div>
                <div
                  class="col-xs-12 col-sm-3 col-md-2 browse-jobs-container browse-jobs-container-mobile text-left"
                  style={{ width: "100%", paddingLeft: "84px" }}
                >
                  <SelectBtn setJobs={setJobs} />
                </div>
              </div>
            </div>
          </div>
        </form>

        <div class="post-cv-sign-in-new">
          <a
            class="gtmPostCv"
            href="https://www.reed.co.uk/account/SignIn?reg=true#register"
            title="Register now"
          >
            Register now
          </a>
          <span class="only-ip5">
            {" "}
            or{" "}
            <a
              href="https://www.reed.co.uk/account/signin?returnUrl=%2F"
              title="sign in"
            >
              sign in
            </a>
          </span>
        </div>
      </main>

      <div id="surveyTab"></div>
    </Wrapper>
  );
};
