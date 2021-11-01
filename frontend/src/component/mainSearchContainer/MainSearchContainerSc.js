import styled from "styled-components";

export const Wrapper = styled.section`

& {
  margin-left: -15px;
  margin-right: -15px;
}
&:after,
&:before {
  content: " ";
  display: table;
}
&:after {
  clear: both;
}


& {
  position: relative;
  padding: 30px 15px;
  text-align: center;
  color: #fff;
  background-image: url(https://www.reed.co.uk/resources/images/controllers/home/homepage-banner-mobile-2021.jpg);
  background-position: 0;
  background-repeat: no-repeat;
  background-size: cover;
}
@media screen and (max-width: 767px) {
  &&-mobile {
    padding-bottom: 0 !important;
  }
}
@media screen and (min-width: 768px) {
  & {
    margin: 0 auto;
    text-align: left;
    padding: 0 0 10px 0;
    border-bottom: none;
    background-position: 50%;
  }
  &.new-hero-background {
    background-image: url(https://www.reed.co.uk/resources/images/controllers/home/homepage-banner-2021.jpg);
  }
  & input::-ms-clear {
    display: none;
  }
}
& .h1-container {
  margin: 0 auto;
  max-width: 1080px;
  padding: 0 65px;
}
@media screen and (max-width: 767px) {
  & .h1-container {
    padding: 0 15px;
    max-width: none;
  }
}
& .h1-title-new {
  height: 85px;
  margin: 0 0 auto;
  display: block;
  margin-top: 20px;
  background-image: url(https://www.reed.co.uk/resources/images/controllers/home/svg/love-mondays-mobile-new-2021.svg);
  background-repeat: no-repeat;
  background-size: contain;
}
@media screen and (min-width: 768px) {
  
   & {
    background-image: url(https://www.reed.co.uk/resources/images/controllers/home/homepage-banner-2021.jpg);
  }
    & .h1-title-new {
    background-image: url(https://www.reed.co.uk/resources/images/controllers/home/svg/love-mondays-2021.svg);
    margin: 30px 0 0;
    width: 408px;
    height: 60px;
    background-size: cover;
  }
}
@media screen and (min-width: 1025px) {
    & .h1-title-new {
    margin: 60px 0 0;
    width: 550px;
    height: 75px;
    background-size: cover;
  }
}
& .h1-slogan {
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  text-indent: -99999px;
}
& .post-cv-sign-in-new a {
  color: #fff;
  text-decoration: underline;
}
& .post-cv-sign-in-new .only-ip5 {
  display: none;
  color: #fff;
}
@media screen and (max-width: 339px) {
  & .post-cv-sign-in-new .only-ip5 {
    display: inline;
  }
}
@media screen and (min-width: 768px) {
  & .post-cv-sign-in-new {
    display: none;
  }
}
@media screen and (max-width: 767px) {
  & .post-cv-sign-in-new {
    display: none !important;
  }
}

}

.main-search {
  margin: 0 auto;
  padding: 0;
  position: relative;
  max-width: 1080px;
  width: 100%;
}


@media screen and (min-width: 768px) {
  .main-search {
    padding: 0 30px;
    margin-top: 15px;
    margin-bottom: 20px;
  }
}
@media screen and (min-width: 1025px) {
  .main-search {
    padding: 0 30px;
    margin-top: 30px;
    margin-bottom: 60px;
  }
}

.row {
  margin-left: -15px;
  margin-right: -15px;
}
.row:after,
.row:before {
  content: " ";
  display: table;
}
.row:after {
  clear: both;
}


.top-section:after,
.top-section:before {
  content: " ";
  display: table;
}
.top-section:after {
  clear: both;
}
@media screen and (max-width: 767px) {
  .top-section.top-section-mobile {
    display: none !important;
  }
}



.main-search .row {
  margin: 0;
}
@media screen and (max-width: 767px) {
  .main-search .row.row-mobile {
    padding-top: 30px;
  }
}
.main-search .row > div {
  padding: 15px 0;
  position: relative;
}
@media screen and (min-width: 768px) {
  .main-search .row > div {
    margin-bottom: 20px;
  }
  .main-search .row > div:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0d142a;
    opacity: 0.8;
    z-index: 0;
    border-radius: 10px;
  }
}
.main-search .job-counter {
  padding: 10px 15px 0;
  position: relative;
  margin: 0;
}
@media screen and (min-width: 768px) {
  .main-search .job-counter {
    margin-bottom: 10px;
    padding: 0 35px;
    top: -5px;
  }
}
@media screen and (max-width: 767px) {
  .main-search .job-counter.job-counter-mobile {
    display: none;
  }
}
@media screen and (min-width: 1025px) {
  .main-search .job-counter {
    margin-bottom: 20px;
    font-size: 1.25rem;
    font-weight: 700;
  }
}
.main-search .browse-jobs-container {
  margin-top: 0;
  margin-left: 0;
  padding: 0 2px 0 0;
  text-align: right;
}
@media screen and (max-width: 767px) {
  .main-search .browse-jobs-container {
    text-align: center;
    margin-left: 0;
    margin-top: 0;
  }
}
.main-search .browse-jobs-container a {
  color: #fff;
}
.main-search .browse-jobs-container a > i {
  margin-left: 5px;
}
@media screen and (max-width: 767px) {
  .main-search .browse-jobs-container-mobile {
    display: none !important;
  }
}


.container {
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
}
.container:after,
.container:before {
  content: " ";
  display: table;
}
.container:after {
  clear: both;
}


@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}
@media (min-width: 1025px) {
  .container {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1280px;
  }
}

@media screen and (min-width: 768px) {
  .horizontal-form .twitter-typeahead {
    margin-left: auto;
    margin-right: auto;
    width: 40%;
  }
}


@media screen and (min-width: 768px) {
  .keywords-container {
    padding-left: 25px;
  }
}

.form-submit,
.keywords-container,
.location-container {
  margin-bottom: 20px;
}


.form-submit .twitter-typeahead,
.form-submit button,
.form-submit input,
.keywords-container .twitter-typeahead,
.keywords-container button,
.keywords-container input,
.location-container .twitter-typeahead,
.location-container button,
.location-container input {
  width: 100%;
  max-width: 100% !important;
  border-radius: 4px;
}

@media screen and (min-width: 1025px) {
  .form-submit .twitter-typeahead,
  .form-submit button,
  .form-submit input,
  .keywords-container .twitter-typeahead,
  .keywords-container button,
  .keywords-container input,
  .location-container .twitter-typeahead,
  .location-container button,
  .location-container input {
    height: 50px;
  }
}
@media screen and (min-width: 768px) {
  .keywords-container,
  .location-container {
    padding-right: 0;
    margin-bottom: 0;
  }
}


.keywords-container label,
.location-container label {
  width: 100%;
  text-align: left;
  margin-bottom: 3px;
  color: #fff;
}
@media screen and (min-width: 768px) {
  .keywords-container label,
  .location-container label {
    font-size: 18px;
    font-weight: 400;
  }
}
@media screen and (max-width: 767px) {
  .keywords-container-mobile label,
  .location-container-mobile label {
    display: none;
  }
}
.keywords-container input,
.location-container input {
  padding-right: 45px;
}
@media screen and (min-width: 1025px) {
  .keywords-container input,
  .location-container input {
    padding-right: 55px;
  }
}


.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-sm-12,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-8,
.col-xs-12,
.col-xs-6 {
  position: relative;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
}

@media (min-width: 768px) {
  .col-sm-12,
  .col-sm-2,
  .col-sm-3,
  .col-sm-4,
  .col-sm-5,
  .col-sm-8 {
    float: left;
  }

  .col-sm-3 {
    width: 25%;
  }

  .col-sm-4 {
    width: 33.3333333333%;
  }

  .col-sm-5 {
    width: 41.6666666667%;
  }
}


@media (min-width: 1025px) {
  .col-md-2,
  .col-md-3,
  .col-md-4,
  .col-md-5,
  .col-md-6,
  .col-md-7,
  .col-md-8 {
    float: left;
  }

  .col-md-2 {
    width: 16.6666666667%;
  }
  .col-md-3 {
    width: 25%;
  }

  .col-md-4 {
    width: 33.3333333333%;
  }
  @media screen and (min-width: 768px) {
  .form-submit {
    padding-right: 25px;
  }
}
.form-submit,
.keywords-container,
.location-container {
  margin-bottom: 20px;
}
.form-submit .twitter-typeahead,
.form-submit button,
.form-submit input,
.keywords-container .twitter-typeahead,
.keywords-container button,
.keywords-container input,
.location-container .twitter-typeahead,
.location-container button,
.location-container input {
  width: 100%;
  max-width: 100% !important;
  border-radius: 4px;
}
@media screen and (min-width: 1025px) {
  .form-submit .twitter-typeahead,
  .form-submit button,
  .form-submit input,
  .keywords-container .twitter-typeahead,
  .keywords-container button,
  .keywords-container input,
  .location-container .twitter-typeahead,
  .location-container button,
  .location-container input {
    height: 50px;
  }
}


.form-submit {
  padding-top: 15px;
}
@media screen and (min-width: 768px) {
  .form-submit {
    padding-top: 23px;
    margin-bottom: 0;
  }
}
@media screen and (max-width: 767px) {
  .form-submit.form-submit-mobile {
    padding-top: 0;
  }
}


  .col-md-5 {
    width: 41.6666666667%;
  }
}


.icon-clean-input {
  width: 16px;
  height: 16px;
  background-position: -660px -1260px;
}

.icon-about-you,
.icon-alert-new-info,
.icon-app-logo,
.icon-app-store-logo,
.icon-arrow-black-right-small,
.icon-arrow-blue-down,
.icon-arrow-blue-right,
.icon-arrow-blue-up,
.icon-arrow-down-blue-10x6,
.icon-arrow-dropdown,
.icon-arrow-white-right,
.icon-bell-black,
.icon-book,
.icon-clean-input,
.icon-close-modal,
.icon-course-clock,
.icon-facebook-footer-logo,
.icon-google-play-store,
.icon-group,
.icon-recent,
.icon-success,
.icon-target-location,
.icon-twitter-footer-logo {
  background-size: 1320px 1320px;
  -webkit-background-size: 1320px 1320px;
  background-repeat: no-repeat;
  background-image: url(https://www.reed.co.uk/resources/images/reedstrap/icon-sprite-1633939505671.svg);
}

.icon {
  content: "";
  text-indent: -999em;
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  #main-search .inline-form .icon.icon-clean-input {
    top: 41px;
    right: 21px;
  }
}



.icon-clean-input,
.icon-target-location {
  border: 0;
  margin: 0;
  width: 22px !important;
  height: 22px !important;
  background-color: transparent;
}

.icon-clean-input {
  position: absolute;
}
@media screen and (max-width: 767px) {
  .icon-clean-input {
    display: none;
  }
}
@media screen and (min-width: 768px) {
  .icon-clean-input {
    right: 10px;
    top: 43px;
  }
}
@media screen and (min-width: 1025px) {
  .icon-clean-input {
    right: 15px;
    top: 47px;
  }
}
.is-hidden {
  display: none;
}


.icon-target-location {
  width: 22px;
  height: 22px;
  background-position: -1260px -720px;
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  #main-search .inline-form .icon.icon-target-location {
    top: 39px;
    right: 24px;
  }
}


.icon-clean-input,
.icon-target-location {
  border: 0;
  margin: 0;
  width: 22px;
  height: 22px;
  background-color: transparent;
}
.icon-target-location {
  position: absolute;
  right: 23px;
  top: 36px;
}
@media screen and (min-width: 768px) {
  .icon-target-location {
    right: 10px;
    top: 40px;
  }
}
@media screen and (min-width: 1025px) {
  .icon-target-location {
    right: 28px;
    top: 38px;
  }
}
@media screen and (max-width: 767px) {
  .icon-target-location-new {
    right: 23px;
    top: 11px;
  }
}


.col-xs-12,
.col-xs-6 {
  float: left;
}

.col-xs-12 {
  width: 100%;
}


.twitter-typeahead {
  display: block !important;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  height: 42px;
  margin: 0;
  background: #fff;
}

.twitter-typeahead > input.tt-hint,
.twitter-typeahead > input.tt-input {
  width: 100% !important;
}
.twitter-typeahead > input.tt-hint:focus,
.twitter-typeahead > input.tt-input:focus {
  transition: none;
}
.twitter-typeahead > .tt-menu {
  box-sizing: border-box;
  width: 100%;
  background: #fff;
  border: 2px solid #081351;
  margin: -3px 0 0;
  border-radius: 0 0 4px 4px;
}
.twitter-typeahead .tt-suggestion {
  height: 42px;
  padding: 0 15px;
  border-top: 1px solid #c8c8c8;
}
.twitter-typeahead .tt-suggestion.tt-cursor {
  background: #6262f5;
}
.twitter-typeahead .tt-suggestion > p {
  margin: 0;
  line-height: 42px;
}
.twitter-typeahead .tt-menu {
  border: 2px solid #081351;
  border-radius: 0 0 4px 4px;
  background: #f3f3fe;
  border-top: none;
}
.tt-menu .tt-suggestions,
.twitter-typeahead .tt-menu .tt-suggestions {
  padding: 0;
}
.tt-menu .tt-suggestion,
.twitter-typeahead .tt-menu .tt-suggestion {
  text-align: left;
  background: #fff;
  color: #0f151a;
  height: auto;
  padding-top: 10px;
  padding-bottom: 10px;
  position: relative;
}
.tt-menu .tt-suggestion[data-type="link"],
.twitter-typeahead .tt-menu .tt-suggestion[data-type="link"] {
  box-sizing: border-box;
  padding: 0;
}

.tt-menu .tt-suggestion[data-type="link"] > span,
.twitter-typeahead
  .tt-menu
  .tt-suggestion[data-type="link"]
  > span {
  display: block;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: 10px 30px 10px 30px;
  color: #0f151a;
}
.tt-menu .tt-suggestion[data-type="link"] .tt-arrow-right,
.twitter-typeahead
  .tt-menu
  .tt-suggestion[data-type="link"]
  .tt-arrow-right {
  content: "";
  text-indent: -999em;
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
  width: 7px;
  height: 13px;
  background-position: -1200px -840px;
  position: absolute;
  right: 15px;
  top: 50%;
  margin-top: -7px;
}


.tt-menu .tt-suggestion[data-type="link"] .tt-arrow-right,
.svg
  .twitter-typeahead
  .tt-menu
  .tt-suggestion[data-type="link"]
  .tt-arrow-right {
  background-size: 1320px 1320px;
  -webkit-background-size: 1320px 1320px;
  background-repeat: no-repeat;
  background-image: url(https://www.reed.co.uk/resources/images/reedstrap/icon-sprite-1633939505671.svg);
}
.tt-menu .tt-suggestion.tt-cursor,
.tt-menu .tt-suggestion:hover,
.twitter-typeahead .tt-menu .tt-suggestion.tt-cursor,
.twitter-typeahead .tt-menu .tt-suggestion:hover {
  background: #1e1ef0;
  color: #fff;
  cursor: pointer;
}
.tt-menu .tt-suggestion.tt-cursor .tt-arrow-right,
.tt-menu .tt-suggestion:hover .tt-arrow-right,
.twitter-typeahead
  .tt-menu
  .tt-suggestion.tt-cursor
  .tt-arrow-right,
.twitter-typeahead .tt-menu .tt-suggestion:hover .tt-arrow-right {
  width: 8px;
  height: 14px;
  background-position: -1140px -1020px;
}
.tt-menu .tt-suggestion.tt-cursor .tt-arrow-right,
.tt-menu .tt-suggestion:hover .tt-arrow-right,
.svg
  .twitter-typeahead
  .tt-menu
  .tt-suggestion.tt-cursor
  .tt-arrow-right,
.svg
  .twitter-typeahead
  .tt-menu
  .tt-suggestion:hover
  .tt-arrow-right {
  background-size: 1320px 1320px;
  -webkit-background-size: 1320px 1320px;
  background-repeat: no-repeat;
  background-image: url(https://www.reed.co.uk/resources/images/reedstrap/icon-sprite-1633939505671.svg);
}


.tt-menu .tt-suggestion.tt-cursor > span,
.tt-menu .tt-suggestion:hover > span,
.twitter-typeahead .tt-menu .tt-suggestion.tt-cursor > span,
.twitter-typeahead .tt-menu .tt-suggestion:hover > span {
  color: #fff;
}
.tt-menu .tt-suggestion.tt-cursor .tt-arrow-right,
.tt-menu .tt-suggestion:hover .tt-arrow-right,
.twitter-typeahead
  .tt-menu
  .tt-suggestion.tt-cursor
  .tt-arrow-right,
.twitter-typeahead .tt-menu .tt-suggestion:hover .tt-arrow-right {
  width: 8px;
  height: 14px;
  background-position: -1140px -1020px;
}
.tt-menu .tt-suggestion.tt-cursor .tt-arrow-right,
.tt-menu .tt-suggestion:hover .tt-arrow-right,
.svg
  .twitter-typeahead
  .tt-menu
  .tt-suggestion.tt-cursor
  .tt-arrow-right,
.svg
  .twitter-typeahead
  .tt-menu
  .tt-suggestion:hover
  .tt-arrow-right {
  background-size: 1320px 1320px;
  -webkit-background-size: 1320px 1320px;
  background-repeat: no-repeat;
  background-image: url(https://www.reed.co.uk/resources/images/reedstrap/icon-sprite-1633939505671.svg);
}
.tt-menu .tt-dataset:last-child .tt-suggestion:last-child,
.tt-menu
  div[class^="tt-dataset-"]:last-child
  .tt-suggestion:last-child,
.twitter-typeahead
  .tt-menu
  .tt-dataset:last-child
  .tt-suggestion:last-child,
.twitter-typeahead
  .tt-menu
  div[class^="tt-dataset-"]:last-child
  .tt-suggestion:last-child {
  border-radius: 0 0 4px 4px;
}
.tt-menu .tt-dataset,
.tt-menu div[class^="tt-dataset-"],
.twitter-typeahead .tt-menu .tt-dataset,
.twitter-typeahead .tt-menu div[class^="tt-dataset-"] {
  margin: 0;
}
.tt-menu .group-name,
.twitter-typeahead .tt-menu .group-name {
  display: none;
  color: #081351;
  padding: 7.5px 15px;
  margin: 0;
  border-top: 1px solid #c8c8c8;
  text-align: left;
}
@media screen and (min-width: 768px) {
  .tt-menu .group-name,
  .twitter-typeahead .tt-menu .group-name {
    display: block;
  }
  .tt-menu .group-name + .tt-suggestions .tt-suggestion,
  .twitter-typeahead
    .tt-menu
    .group-name
    + .tt-suggestions
    .tt-suggestion {
    padding-left: 48px;
  }
  .tt-menu
    .group-name
    + .tt-suggestions
    .tt-suggestion[data-type="link"],
  .twitter-typeahead
    .tt-menu
    .group-name
    + .tt-suggestions
    .tt-suggestion[data-type="link"] {
    padding-left: 0;
  }
  .tt-menu
    .group-name
    + .tt-suggestions
    .tt-suggestion[data-type="link"]
    > span,
  .twitter-typeahead
    .tt-menu
    .group-name
    + .tt-suggestions
    .tt-suggestion[data-type="link"]
    > span {
    padding-left: 48px;
  }
}
.tt-menu .group-name.group-recent-searches:before,
.twitter-typeahead
  .tt-menu
  .group-name.group-recent-searches:before {
  content: "";
  text-indent: -999em;
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
  margin-right: 15px;
}
.tt-menu .group-name.group-recent-searches:before,
.twitter-typeahead
  .tt-menu
  .group-name.group-recent-searches:before {
  width: 18px;
  height: 18px;
  background-position: -120px -1200px;
}
.tt-menu .group-name.group-recent-searches:before,
.svg
  .twitter-typeahead
  .tt-menu
  .group-name.group-recent-searches:before {
  background-size: 1320px 1320px;
  -webkit-background-size: 1320px 1320px;
  background-repeat: no-repeat;
  background-image: url(https://www.reed.co.uk/resources/images/reedstrap/icon-sprite-1633939505671.svg);
}
.tt-menu .tt-dataset:first-child .group-name,
.tt-menu div[class^="tt-dataset-"]:first-child .group-name,
.twitter-typeahead .tt-menu .tt-dataset:first-child .group-name,
.twitter-typeahead
  .tt-menu
  div[class^="tt-dataset-"]:first-child
  .group-name {
  border-top: 1px solid #c8c8c8;
}
.tt-menu .group-name + .tt-suggestions .tt-suggestion:first-child,
.twitter-typeahead
  .tt-menu
  .group-name
  + .tt-suggestions
  .tt-suggestion:first-child {
  border-top: 1px solid #c8c8c8;
}

.form-control {
  display: block;
  width: 100%;
  height: 44px;
  padding: 8px 12px;
  font-size: 16px;
  line-height: 1.5;
  color: #0f151a;
  background-color: #fff;
  background-image: none;
  border: 1px solid #0f151a;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  -webkit-transition: border-color ease-in-out 0.15s,
    box-shadow ease-in-out 0.15s;
  -o-transition: border-color ease-in-out 0.15s,
    box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s,
    box-shadow ease-in-out 0.15s;
}
.form-control:focus {
  border-color: #081351;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(8, 19, 81, 0.6);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(8, 19, 81, 0.6);
}
.form-control::-moz-placeholder {
  color: #999;
  opacity: 1;
}
.form-control:-ms-input-placeholder {
  color: #999;
}
.form-control::-webkit-input-placeholder {
  color: #999;
}
.form-control::-ms-expand {
  border: 0;
  background-color: transparent;
}
.form-control[disabled],
.form-control[readonly],
fieldset[disabled] .form-control {
  background-color: #f8f8f8;
  opacity: 1;
}
.form-control[disabled],
fieldset[disabled] .form-control {
  cursor: not-allowed;
}
textarea.form-control {
  height: auto;
}

input[type="search"] {
  -webkit-appearance: none;
}
@media screen and (-webkit-min-device-pixel-ratio: 0) {
  input[type="date"].form-control,
  input[type="datetime-local"].form-control,
  input[type="month"].form-control,
  input[type="time"].form-control {
    line-height: 44px;
  }
}

.form-control {
  padding: 10px 15px;
  border-width: 1px;
  border-style: solid;
  border-color: #0f151a;
  transition: all 0.2s ease-in;
}
.form-control:focus {
  border-color: #081351;
  outline: 0;
  border-width: 2px;
  transition: all 0.2s ease-in;
}


.input-validation-error.form-control {
  border: 2px solid #e32424;
}

@media (-webkit-min-device-pixel-ratio: 0) {
  select,
  select.form-control {
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDAgNDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDQwIDQwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48ZyBpZD0iWE1MSURfNDQwXyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCA1MCkiPjxnIGlkPSJYTUxJRF80NDFfIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDI0MDApIj48cGF0aCBpZD0iWE1MSURfNDQyXyIgZmlsbD0iIzBGMTUxQSIgZD0iTTEzLjc3OS0yNDMxLjg1OGMtMC4xODYtMC4xNzMtMC4yNzktMC40MzItMC4yNzktMC42OTFjMC0wLjUxOSwwLjQ2NC0wLjk1MSwxLjExNC0wLjk1MWMwLjM3MSwwLDAuNjUsMC4xNzMsMC44MzYsMC4zNDZsNC41NSw0LjIzNGw0LjU1LTQuMjM0YzAuMTg2LTAuMTczLDAuNDY0LTAuMzQ2LDAuODM2LTAuMzQ2YzAuNjUsMCwxLjExNCwwLjQzMiwxLjExNCwwLjk1MWMwLDAuMjU5LTAuMDkzLDAuNTE5LTAuMjc5LDAuNjkxbC01LjM4Niw1LjAxMmMtMC4xODUsMC4xNzMtMC40NjQsMC4zNDYtMC44MzUsMC4zNDZjLTAuMzcxLDAtMC42NS0wLjE3My0wLjgzNi0wLjM0NkwxMy43NzktMjQzMS44NTh6Ii8+PC9nPjwvZz48L3N2Zz4=);
    color: #0f151a;
  }
  select,
  select.form-control {
    -webkit-appearance: none;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAMFBMVEVJkMdKkcdNkshTlspUl8pXmctgns5yqdS+1+vE2+3H3e7I3e7Y5/Pe6/Xf6/X///+LWWysAAAAYElEQVR42u3SvQ7AIAhGUUTxX3n/t5WmcXGgnZoOMN3hLF8C8MszaPBzmELb2UJSIAHWuyoCKbB7wHJFQfD9gKd0mTk7cfqYQSLF0XhaPUWKm+rqLbdTocgYp32PwX/DBf+2W30qeSjeAAAAAElFTkSuQmCC);
    background-repeat: no-repeat;
    background-position: right center;
    padding-right: 40px;
    cursor: pointer;
  }
  select:disabled {
    background: #f8f8f8;
  }
}
.form-control:focus,
textarea:focus {
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(0, 0, 0, 0.175);
}
.form-control {
  box-sizing: border-box;
  height: 42px;
}
select.form-control {
  padding-top: 8px;
  padding-bottom: 8px;
}
select.form-control:disabled {
  background-repeat: no-repeat;
  background-position: right center;
}

.desktop-content {
  display: block;
  text-align: center;
}
@media screen and (max-width: 767px) {
  .desktop-content {
    display: none;
  }
}

.btn {
  display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: 8px 12px;
    font-size: 16px;
    line-height: 1.5;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;



}


.btn-primary {
    color: #fff;
    background-color: #cf04a9;
    border-color: transparent;
}

.btn {
  font-size: 16px;
    font-family: "Red Hat Text",sans-serif;
    font-weight: 500;
    background: #fff;
    color: #0f151a;
    transition: background-color .3s ease-in;
    border: 1px solid transparent;
    height: 2.625rem;
    box-sizing: border-box;
    margin: 0 auto 20px;
    display: block;
    width: 100%;
    max-width: 320px;
}


.btn-primary {
    color: #fff;
    background-color: #cf04a9;
    border-color: transparent;
    transition: background-color .3s ease-in;
    font-weight: 500;
    border: 0;
}
@media screen and (min-width: 768px)
{
   .keywords-container, .location-container {
    padding-right: 0;
    margin-bottom: 0;
}
}

.mobile-content {
  display: none;
  text-align: center;
}
@media screen and (max-width: 767px) {
  .mobile-content {
    display: block;
  }
}


@media screen and (max-width: 767px) {
  .recent-searches-new {
    display: none !important;
  }
}

@media screen and (max-width: 767px) {
  .recent-searches-new {
    display: none !important;
  }
}

.text-left {
  text-align: left;
}


@media (min-width: 1025px){


  .col-md-2 {
    width: 16.6666666667%;
}


}

@media screen and (min-width: 768px){

.keywords-container {
  padding-left: 25px;
}
}


.icon-arrow-white-right {
  width: 8px;
  height: 14px;
  background-position: -1140px -1020px;
}


.recruiter-tab {
  display: none;
  position: absolute;
  top: 30px;
  right: -225px;
  width: 267px;
  transition: right 0.3s ease;
}
@media screen and (min-width: 768px) {
  .recruiter-tab {
    display: block;
  }
}
@media screen and (min-width: 1025px) {
  .recruiter-tab {
    display: block;
    top: 100px;
  }
}
.recruiter-tab.open {
  right: 0;
  transition: right 0.3s ease;
}
.recruiter-tab > header {
  width: 42px;
  height: 138px;
  text-align: center;
  background: #081351;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  position: relative;
  display: block;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  float: left;
  cursor: pointer;
}
.recruiter-tab > header .text {
  display: inline-block;
  position: relative;
  width: 42px;
  height: 138px;
  vertical-align: middle;
  overflow: hidden;
}
.recruiter-tab > header > span {
  text-indent: -999999px;
  position: relative;
  display: block;
}
.recruiter-tab .container {
  display: block;
  box-sizing: border-box;
  width: 225px;
  background: #fff;
  color: #0f151a;
  border-bottom-left-radius: 4px;
  margin: 0;
  padding: 30px 15px 0;
  float: left;
}
.recruiter-tab .svg-arrow-opened {
  display: none;
}
.recruiter-tab.open .svg-arrow-opened {
  display: block;
}
.recruiter-tab.open .svg-arrow-closed {
  display: none;
}

a.btn {
    text-decoration: none;
}

.btn-secondary {
    color: #081351;
    background-color: #fff;
    border-color: #081351;
    transition: background-color .3s ease-in;
    font-weight: 500;
    border: 2px solid #081351;
}

`;
