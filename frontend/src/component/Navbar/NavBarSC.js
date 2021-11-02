import styled from "styled-components";

export const NavbarWrapper = styled.header`
  * {
    font-family: "Red Hat Text", sans-serif;
  }
  a {
    color: #1e1ef0;
    font-weight: 500;
    -webkit-text-decoration: none;
    text-decoration: none;
    display: inline-block;
  }
  &:after,
  &:before {
    content: " ";
    display: table;
  }
  .container {
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  #menu ul li.tld {
    margin: 0;
  }
  #menu ul li.tld a {
    border-left: solid 5px transparent;
    text-decoration: none;
  }
  #menu ul li.tld a:hover {
    background: #212b63;
  }
  #menu ul li.tld a:after {
    display: block;
    width: 100%;
    height: 1px;
    content: "";
    border-bottom: 1px solid #535a86;
  }
  #menu ul li.tld.jobs a {
    border-left-color: #ff00cd;
  }
  .signedin #menu ul li.tld.career-advice a:after {
    border-bottom: none;
  }
  #menu ul li.tld.recruiter a {
    font-weight: 400;
    margin-top: 15px;
  }
  #menu ul li.tld.recruiter a:after {
    border-bottom: none;
  }

  & .header-inner {
    position: relative;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    max-height: 60px;
  }
  & .header-inner:after,
  & .header-inner:before {
    content: " ";
    display: table;
  }
  & .header-inner:after {
    clear: both;
  }

  & .header-inner {
    position: relative;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
  }
  & .header-inner:after,
  & .header-inner:before {
    content: " ";
    display: table;
  }
  & .header-inner:after {
    clear: both;
  }

  & .menu-button {
    display: block;
    padding: 0;
    width: 50px;
    height: 50px;
  }

  & .menu-button span {
    height: 2px;
    width: 16px;
    background: #081351;
    position: absolute;
    display: block;
    left: 18px;
    top: 24px;
    text-indent: -999em;
  }
  & .menu-button span:before {
    height: 2px;
    width: 16px;
    background: #081351;
    position: absolute;
    display: block;
    content: "";
    left: 0;
    top: -4px;
  }
  & .menu-button span:after {
    height: 2px;
    width: 16px;
    background: #081351;
    position: absolute;
    display: block;
    content: "";
    top: 4px;
    left: 0;
  }

  & .header-block-link {
    display: block;
    padding: 0 8px;
    height: 50px;
    line-height: 50px;
    vertical-align: middle;
    float: left;
    color: #0f151a;
  }

  .header-block-link > .courses-promotion {
    font-size: 12px;
    letter-spacing: 0.3px;
    text-align: center;
    color: #fff;
    border-radius: 2px;
    margin-left: 5px;
    background-color: #e32424;
    padding: 1px 6px 0 6px;
  }

  & .reed-logo {
    padding: 0 15px 0 7.5px;
  }
  & .reed-logo span {
    /* vertical-align: middle;
    text-indent: -999em;
    content: "";
    text-indent: -999em;
    display: inline-block;
    vertical-align: middle;
    overflow: hidden;
    width: 116px;
    height: 30px;
    background-position: -390px -180px; */
  }
  & .reed-logo span {
    /* background-size: 100px 100px;
    -webkit-background-size: 1320px 1320px;
    background-repeat: no-repeat;
    /* background-image: url(/images/icon-sprite-1633939505671.svg); */
    /* background-color: red; */
    background-image: url(/images/logo.jpg);
  }

  & ul.main-navigation {
    list-style: none;
    margin: 0;
    padding: 0;
    float: left;
    height: 50px;
  }

  & ul.main-navigation {
    height: 60px;
  }

  & ul.main-navigation > li {
    position: relative;
    transition: background-color 0.2s ease-in;
  }

  & ul.main-navigation > li.active:before {
    content: "";
    position: absolute;
    width: 100%;
    border-bottom: 4px solid #ff00cd;
    bottom: 0;
    margin: 0 auto;
    display: block;
  }
  & ul.main-navigation > li:hover {
    transition: background-color 0.2s ease-in;
    background: #f3f3fe;
  }
  & ul.main-navigation > li a {
    border-bottom: solid 1px #c8c8c8;
  }
  & ul.main-navigation .recruiter:before {
    content: "";
    width: 1px;
    height: 60%;
    background-color: #c8c8c8;
    top: 20%;
    left: 0;
    position: absolute;
  }

  & ul.main-navigation .recruiter a {
    font-weight: 400;
  }
  & ul.main-navigation .recruiter b {
    font-weight: 500;
  }

  & ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  & ul.main-navigation {
    list-style: none;
    margin: 0;
    padding: 0;
    float: left;
    height: 50px;
  }

  & .right-container {
    position: relative;
    right: 0;
  }

  & .user-navigation {
    margin: 0;
    padding: 0;
    list-style: none;
    float: right;
  }
  & .user-navigation > li {
    float: left;
  }
  @media screen and (min-width: 1200px) {
    & .user-navigation > li {
      margin-right: 30px;
    }
    & .user-navigation > li:last-of-type {
      margin-right: 0;
    }
  }
  & .user-navigation > li.signed-in-user {
    position: relative;
  }
  & .user-navigation > li {
    transition: background-color 0.2s ease-in;
  }

  & .signed-out-user {
    padding-top: 12px;
    margin-right: 10px;
  }
  @media screen and (max-width: 767px) {
    & .signed-out-user {
      display: none;
    }
  }
  @media screen and (min-width: 768px) {
    & .signed-out-user {
      padding-top: 7px;
    }
  }
  @media screen and (min-width: 1025px) {
    & .signed-out-user {
      padding-top: 12px;
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

  .btn.active.focus,
  .btn.active:focus,
  .btn.focus,
  .btn:active.focus,
  .btn:active:focus,
  .btn:focus {
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px;
  }
  .btn.focus,
  .btn:focus,
  .btn:hover {
    color: #333;
    text-decoration: none;
  }
  .btn.active,
  .btn:active {
    outline: 0;
    background-image: none;
    -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  }
  .btn.disabled,
  .btn[disabled],
  fieldset[disabled] .btn {
    cursor: not-allowed;
    opacity: 0.65;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  a.btn.disabled,
  fieldset[disabled] a.btn {
    pointer-events: none;
  }
  .btn-primary {
    color: #fff;
    background-color: #cf04a9;
    border-color: transparent;
  }
  .btn-primary.focus,
  .btn-primary:focus {
    color: #fff;
    background-color: #9d0380;
    border-color: transparent;
  }
  .btn-primary:hover {
    color: #fff;
    background-color: #9d0380;
    border-color: transparent;
  }
  .btn-primary.active,
  .btn-primary:active {
    color: #fff;
    background-color: #9d0380;
    border-color: transparent;
  }
  .btn-primary.active.focus,
  .btn-primary.active:focus,
  .btn-primary.active:hover,
  .btn-primary:active.focus,
  .btn-primary:active:focus,
  .btn-primary:active:hover {
    color: #fff;
    background-color: #7a0264;
    border-color: transparent;
  }
  .btn-primary.active,
  .btn-primary:active {
    background-image: none;
  }
  .btn-primary.disabled.focus,
  .btn-primary.disabled:focus,
  .btn-primary.disabled:hover,
  .btn-primary[disabled].focus,
  .btn-primary[disabled]:focus,
  .btn-primary[disabled]:hover,
  fieldset[disabled] .btn-primary.focus,
  fieldset[disabled] .btn-primary:focus,
  fieldset[disabled] .btn-primary:hover {
    background-color: #cf04a9;
    border-color: transparent;
  }
  .btn-link {
    color: #1e1ef0;
    font-weight: 400;
    border-radius: 0;
  }
  .btn-link,
  .btn-link.active,
  .btn-link:active,
  .btn-link[disabled],
  fieldset[disabled] .btn-link {
    background-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .btn-link,
  .btn-link:active,
  .btn-link:focus,
  .btn-link:hover {
    border-color: transparent;
  }
  .btn-link:focus,
  .btn-link:hover {
    color: #181a9a;
    text-decoration: underline;
    background-color: transparent;
  }
  .btn-link[disabled]:focus,
  .btn-link[disabled]:hover,
  fieldset[disabled] .btn-link:focus,
  fieldset[disabled] .btn-link:hover {
    color: #777;
    text-decoration: none;
  }
  .btn {
    font-size: 16px;
    font-family: "Red Hat Text", sans-serif;
    font-weight: 500;
    background: #fff;
    color: #0f151a;
    transition: background-color 0.3s ease-in;
    border: 1px solid transparent;
    height: 2.625rem;
    box-sizing: border-box;
    margin: 0 auto 20px;
    display: block;
    width: 100%;
    max-width: 320px;
  }
  .btn:active,
  .btn:hover {
    color: #0f151a;
    transition: background-color 0.3s ease-in;
  }
  .href.btn,
  a.btn {
    text-decoration: none;
  }
  .btn-primary {
    color: #fff;
    background-color: #cf04a9;
    border-color: transparent;
    transition: background-color 0.3s ease-in;
    font-weight: 500;
    border: 0;
  }
  .btn-primary.focus,
  .btn-primary:focus {
    color: #fff;
    background-color: #9f0885;
    border-color: #9f0885;
    transition: background-color 0.3s ease-in;
  }
  .btn-primary:hover {
    color: #fff;
    background-color: #9f0885;
    border-color: #9f0885;
    transition: background-color 0.3s ease-in;
  }
  .btn-primary.active,
  .btn-primary:active {
    color: #fff;
    background-color: #9f0885;
    border-color: #9f0885;
    transition: background-color 0.3s ease-in;
  }
  .btn-primary.active.focus,
  .btn-primary.active:focus,
  .btn-primary.active:hover,
  .btn-primary:active.focus,
  .btn-primary:active:focus,
  .btn-primary:active:hover {
    color: #fff;
    background-color: #9f0885;
    border-color: #9f0885;
  }
  .btn-primary.active,
  .btn-primary:active {
    background-image: none;
  }
  .btn-primary.disabled,
  .btn-primary.disabled.active,
  .btn-primary.disabled.focus,
  .btn-primary.disabled:active,
  .btn-primary.disabled:focus,
  .btn-primary.disabled:hover,
  .btn-primary[disabled],
  .btn-primary[disabled].active,
  .btn-primary[disabled].focus,
  .btn-primary[disabled]:active,
  .btn-primary[disabled]:focus,
  .btn-primary[disabled]:hover,
  fieldset[disabled] .btn-primary,
  fieldset[disabled] .btn-primary.active,
  fieldset[disabled] .btn-primary.focus,
  fieldset[disabled] .btn-primary:active,
  fieldset[disabled] .btn-primary:focus,
  fieldset[disabled] .btn-primary:hover {
    color: #fff;
    background-color: #f8f8f8;
    border-color: #f8f8f8;
  }
  .btn-secondary {
    color: #081351;
    background-color: #fff;
    border-color: #081351;
    transition: background-color 0.3s ease-in;
    font-weight: 500;
    border: 2px solid #081351;
  }
  .btn-secondary.focus,
  .btn-secondary:focus {
    color: #081351;
    background-color: #e9e9fe;
    border-color: #081351;
    transition: background-color 0.3s ease-in;
  }
  .btn-secondary:hover {
    color: #081351;
    background-color: #e9e9fe;
    border-color: #081351;
    transition: background-color 0.3s ease-in;
  }
  .btn-secondary.active,
  .btn-secondary:active {
    color: #081351;
    background-color: #e9e9fe;
    border-color: #081351;
    transition: background-color 0.3s ease-in;
  }
  .btn-secondary.active.focus,
  .btn-secondary.active:focus,
  .btn-secondary.active:hover,
  .btn-secondary:active.focus,
  .btn-secondary:active:focus,
  .btn-secondary:active:hover {
    color: #081351;
    background-color: #e9e9fe;
    border-color: #081351;
  }
  .btn-secondary.active,
  .btn-secondary:active {
    background-image: none;
  }
  .btn-secondary.disabled,
  .btn-secondary.disabled.active,
  .btn-secondary.disabled.focus,
  .btn-secondary.disabled:active,
  .btn-secondary.disabled:focus,
  .btn-secondary.disabled:hover,
  .btn-secondary[disabled],
  .btn-secondary[disabled].active,
  .btn-secondary[disabled].focus,
  .btn-secondary[disabled]:active,
  .btn-secondary[disabled]:focus,
  .btn-secondary[disabled]:hover,
  fieldset[disabled] .btn-secondary,
  fieldset[disabled] .btn-secondary.active,
  fieldset[disabled] .btn-secondary.focus,
  fieldset[disabled] .btn-secondary:active,
  fieldset[disabled] .btn-secondary:focus,
  fieldset[disabled] .btn-secondary:hover {
    color: #fff;
    background-color: #f8f8f8;
    border-color: #f8f8f8;
  }
  .btn-tertiary {
    color: #081351;
    background-color: transparent;
    border-color: transparent;
    transition: background-color 0.3s ease-in;
    font-weight: 500;
    border: 1px solid transparent;
  }
  .btn-tertiary.focus,
  .btn-tertiary:focus {
    color: #081351;
    background-color: transparent;
    border-color: transparent;
    transition: background-color 0.3s ease-in;
  }
  .btn-tertiary:hover {
    color: #081351;
    background-color: transparent;
    border-color: transparent;
    transition: background-color 0.3s ease-in;
  }
  .btn-tertiary.active,
  .btn-tertiary:active {
    color: #081351;
    background-color: transparent;
    border-color: transparent;
    transition: background-color 0.3s ease-in;
  }
  .btn-tertiary.active.focus,
  .btn-tertiary.active:focus,
  .btn-tertiary.active:hover,
  .btn-tertiary:active.focus,
  .btn-tertiary:active:focus,
  .btn-tertiary:active:hover {
    color: #081351;
    background-color: transparent;
    border-color: transparent;
  }
  .btn-tertiary.active,
  .btn-tertiary:active {
    background-image: none;
  }
  .btn-tertiary.disabled,
  .btn-tertiary.disabled.active,
  .btn-tertiary.disabled.focus,
  .btn-tertiary.disabled:active,
  .btn-tertiary.disabled:focus,
  .btn-tertiary.disabled:hover,
  .btn-tertiary[disabled],
  .btn-tertiary[disabled].active,
  .btn-tertiary[disabled].focus,
  .btn-tertiary[disabled]:active,
  .btn-tertiary[disabled]:focus,
  .btn-tertiary[disabled]:hover,
  fieldset[disabled] .btn-tertiary,
  fieldset[disabled] .btn-tertiary.active,
  fieldset[disabled] .btn-tertiary.focus,
  fieldset[disabled] .btn-tertiary:active,
  fieldset[disabled] .btn-tertiary:focus,
  fieldset[disabled] .btn-tertiary:hover {
    color: #fff;
    background-color: #f8f8f8;
    border-color: #f8f8f8;
  }
  .btn-tertiary:active,
  .btn-tertiary:hover {
    border: 1px solid transparent;
  }
  .btn-link {
    background-color: transparent;
    color: #1e1ef0;
    border: none;
    transition: color 0.2s ease-in;
    outline: 0 !important;
  }
  .btn-link:active,
  .btn-link:hover {
    color: #181a9a;
    transition: color 0.3s ease-in;
  }

  #main-search .btn-search {
    margin: 0 auto;
    max-width: none;
  }
  @media screen and (min-width: 768px) {
    #main-search .btn-search {
      margin: 0;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    #main-search .btn-search {
      margin-top: 27px;
      font-size: 14px;
    }
  }

  & .register-cv {
    height: 60%;
    line-height: 32px;
    width: 124px;
    padding: 0 12px;
  }

  & .saved-jobs.open,
  & .signed-in-user.open,
  & .signin-menu.open {
    transition: background-color 0.2s ease-in;
    background: #f3f3fe;
  }
  & .saved-jobs.open a,
  & .signed-in-user.open a,
  & .signin-menu.open a {
    border-bottom: solid 1px #c8c8c8;
  }
  @media screen and (min-width: 768px) {
    & .saved-jobs:hover,
    & .signed-in-user:hover,
    & .signin-menu:hover {
      transition: background-color 0.2s ease-in;
      background: #f3f3fe;
    }
    & .saved-jobs:hover a,
    & .signed-in-user:hover a,
    & .signin-menu:hover a {
      border-bottom: solid 1px #c8c8c8;
    }
  }

  & .saved-jobs.open,
  & .signed-in-user.open,
  & .signin-menu.open {
    transition: background-color 0.2s ease-in;
    background: #f3f3fe;
  }
  & .saved-jobs.open a,
  & .signed-in-user.open a,
  & .signin-menu.open a {
    border-bottom: solid 1px #c8c8c8;
  }
  @media screen and (min-width: 768px) {
    & .saved-jobs:hover,
    & .signed-in-user:hover,
    & .signin-menu:hover {
      transition: background-color 0.2s ease-in;
      background: #f3f3fe;
    }
    & .saved-jobs:hover a,
    & .signed-in-user:hover a,
    & .signin-menu:hover a {
      border-bottom: solid 1px #c8c8c8;
    }
  }
  & .signed-out-user {
    padding-top: 12px;
    margin-right: 10px;
  }
  @media screen and (max-width: 767px) {
    & .signed-out-user {
      display: none;
    }
  }
  @media screen and (min-width: 768px) {
    & .signed-out-user {
      padding-top: 7px;
    }
  }
  @media screen and (min-width: 1025px) {
    & .signed-out-user {
      padding-top: 12px;
    }
  }
  & .career-advice,
  & .courses,
  & .jobs,
  & .recruiter,
  & .register {
    display: none;
  }
  & .signed-in-user a {
    padding-right: 30px;
    padding-left: 15px;
  }
  @media screen and (min-width: 1025px) {
    & .signed-in-user a {
      padding-right: 15px;
    }
  }
  & .signed-in-user a span {
    display: none;
  }
  & .saved-jobs .text {
    display: none;
  }
  & .saved-jobs-subnav {
    display: block;
    position: absolute;
    z-index: 4;
    top: 50px;
    right: 0;
    width: 100%;
    max-height: 0;
    transition: max-height 0.5s;
    overflow: hidden;
    box-shadow: 0 1px 5px rgba(15, 21, 26, 0.2);
  }
  .saved-jobs-visible & .saved-jobs-subnav {
    max-height: 500px;
  }
  @media screen and (min-width: 768px) {
    & .saved-jobs-subnav {
      width: 410px;
      min-width: 300px;
    }
  }
  @media screen and (min-width: 1025px) {
    & .saved-jobs-subnav {
      top: 60px;
    }
  }

  & .sign-in {
    display: inline-block;
  }
  @media screen and (min-width: 768px) {
    & .jobs,
    & .register {
      display: inline-block;
    }
    & .signed-in-user a span {
      display: inline-block;
      vertical-align: top;
      margin-right: 15px;
    }
    & .saved-jobs .text {
      display: inline-block;
    }
  }

  .saved-jobs-visible & .saved-jobs > a {
    color: #0f151a;
  }
  & .saved-jobs > a {
    position: relative;
    padding-left: 25px;
  }
  @media screen and (min-width: 768px) {
    & .saved-jobs > a {
      padding-left: 38px;
    }
  }
  @media screen and (min-width: 1025px) {
    & .saved-jobs > a {
      padding-left: 40px;
    }
  }
  @media screen and (min-width: 768px) {
    .signedin & .saved-jobs > a:before {
      position: absolute;
      right: 0;
      top: 20%;
      content: "";
      height: 35px;
      border-left: 1px solid #c8c8c8;
    }
  }
  @media screen and (min-width: 1200px) {
    .signedin & .saved-jobs > a:before {
      right: -20px;
    }
  }
  & .saved-jobs .saved-jobs-count {
    position: absolute;
    top: 30px;
    left: 18px;
    width: 20px;
    height: 20px;
    color: #fff;
    background-color: #cf04a9;
    z-index: 99;
    border-radius: 4px;
    font-size: 12px;
    text-align: center;
    line-height: 20px;
  }
  @media screen and (max-width: 767px) {
    & .saved-jobs .saved-jobs-count {
      top: 25px;
      left: 20px;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    & .saved-jobs .saved-jobs-count {
      top: 28px;
      left: 20px;
    }
  }
  @media screen and (max-width: 767px) {
    & .saved-jobs .saved-jobs-text {
      display: none;
    }
  }
  & .saved-jobs .heart-hasjob,
  & .saved-jobs .heart-nojob,
  & .saved-jobs .outline-heart-grey {
    content: "";
    text-indent: -999em;
    display: inline-block;
    vertical-align: middle;
    overflow: hidden;
    position: absolute;
    top: 18px;
    left: 10px;
  }
  @media screen and (min-width: 768px) {
    & .saved-jobs .heart-hasjob,
    & .saved-jobs .heart-nojob,
    & .saved-jobs .outline-heart-grey {
      left: 12px;
      top: 19px;
    }
  }
  @media screen and (min-width: 1025px) {
    & .saved-jobs .heart-hasjob,
    & .saved-jobs .heart-nojob,
    & .saved-jobs .outline-heart-grey {
      top: 23px;
    }
  }
  & .saved-jobs .outline-heart-grey {
    width: 16px;
    height: 15px;
    background-position: -1080px -960px;
  }
  & .saved-jobs .outline-heart-grey {
    background-size: 1320px 1320px;
    -webkit-background-size: 1320px 1320px;
    background-repeat: no-repeat;
    background-image: url(/images/icon-sprite-1633939505671.svg);
  }
  & .saved-jobs .heart-hasjob {
    width: 20px;
    height: 20px;
    background-position: -300px -1080px;
  }
  & .saved-jobs .heart-hasjob {
    background-size: 1320px 1320px;
    -webkit-background-size: 1320px 1320px;
    background-repeat: no-repeat;
    background-image: url(/images/icon-sprite-1633939505671.svg);
  }
  @media screen and (min-width: 1025px) {
    & .saved-jobs .heart-hasjob {
      width: 16px;
      height: 15px;
      background-position: -360px -1080px;
    }
    & .saved-jobs .heart-hasjob {
      background-size: 1320px 1320px;
      -webkit-background-size: 1320px 1320px;
      background-repeat: no-repeat;
      background-image: url(/images/icon-sprite-1633939505671.svg);
    }
  }
  & .saved-jobs .heart-nojob {
    width: 20px;
    height: 20px;
    background-position: -420px -1080px;
  }
  & .saved-jobs .heart-nojob {
    background-size: 1320px 1320px;
    -webkit-background-size: 1320px 1320px;
    background-repeat: no-repeat;
    background-image: url(/images/icon-sprite-1633939505671.svg);
  }
  @media screen and (min-width: 1025px) {
    & .saved-jobs .heart-nojob {
      width: 16px;
      height: 15px;
      background-position: -480px -1080px;
    }
    & .saved-jobs .heart-nojob {
      background-size: 1320px 1320px;
      -webkit-background-size: 1320px 1320px;
      background-repeat: no-repeat;
      background-image: url(/images/icon-sprite-1633939505671.svg);
    }
  }
  & .saved-jobs.open .heart-hasjob {
    width: 20px;
    height: 20px;
    background-position: -180px -1080px;
  }
  & .saved-jobs.open .heart-hasjob {
    background-size: 1320px 1320px;
    -webkit-background-size: 1320px 1320px;
    background-repeat: no-repeat;
    background-image: url(/images/icon-sprite-1633939505671.svg);
  }
  @media screen and (min-width: 1025px) {
    & .saved-jobs.open .heart-hasjob {
      width: 16px;
      height: 15px;
      background-position: -240px -1080px;
    }
    & .saved-jobs.open .heart-hasjob {
      background-size: 1320px 1320px;
      -webkit-background-size: 1320px 1320px;
      background-repeat: no-repeat;
      background-image: url(/images/icon-sprite-1633939505671.svg);
    }
  }
  & .saved-jobs.open .heart-nojob {
    width: 20px;
    height: 20px;
    background-position: -1080px -900px;
  }
  & .saved-jobs.open .heart-nojob {
    background-size: 1320px 1320px;
    -webkit-background-size: 1320px 1320px;
    background-repeat: no-repeat;
    background-image: url(/images/icon-sprite-1633939505671.svg);
  }
  @media screen and (min-width: 1025px) {
    & .saved-jobs.open .heart-nojob {
      width: 16px;
      height: 15px;
      background-position: -1080px -960px;
    }
    & .saved-jobs.open .heart-nojob {
      background-size: 1320px 1320px;
      -webkit-background-size: 1320px 1320px;
      background-repeat: no-repeat;
      background-image: url(/images/icon-sprite-1633939505671.svg);
    }

    & .courses,
    & .career-advice {
      display: inline-block;
    }
    & .header-block-link {
      height: 60px;
      line-height: 60px;
    }
  }
  & .saved-jobs-subnav {
    background: #fff;
    padding: 0 15px;
    box-sizing: border-box;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  & .saved-jobs-subnav ul {
    margin: 0 -15px;
    padding: 0;
    list-style: none;
    background: #fff;
  }
  & .saved-jobs-subnav ul li {
    border-bottom: 1px solid #c8c8c8;
  }
  & .saved-jobs-subnav ul li a {
    padding: 15px;
    color: #0f151a;
    font-weight: 500;
    display: block;
    position: relative;
  }
  @media screen and (min-width: 1025px) {
    & .saved-jobs-subnav ul li a:hover {
      background: #f3f3fe;
    }
  }
  & .saved-jobs-subnav ul li a .job-title {
    display: block;
  }
  & .saved-jobs-subnav ul li a .draft-label {
    font-size: 12px;
    display: none;
  }
  & .saved-jobs-subnav ul li a.has-draft {
    line-height: 1.25;
  }
  & .saved-jobs-subnav ul li a.has-draft .draft-label {
    display: inline-block;
  }
  & .saved-jobs-subnav .no-saved-jobs {
    display: block;
    text-align: center;
    margin: 7.5px 0;
  }
  & .saved-jobs-subnav .no-saved-jobs span {
    color: #081351;
  }
  & .saved-jobs-subnav .saved-job-actions {
    margin: 0 -15px;
  }
  & .saved-jobs-subnav .saved-job-actions:after,
  & .saved-jobs-subnav .saved-job-actions:before {
    content: " ";
    display: table;
  }
  & .saved-jobs-subnav .saved-job-actions:after {
    clear: both;
  }
  & .saved-jobs-subnav .saved-job-actions a {
    float: left;
    width: 50%;
    box-sizing: border-box;
    padding: 10px 15px 9px;
    position: relative;
    color: #0f151a;
  }
  & .saved-jobs-subnav .saved-job-actions a.view-saved-jobs {
    background: #f8f8f8;
    padding: 15px;
    text-align: center;
    width: 100%;
  }

  .recruiter:before {
    content: "";
    width: 1px;
    height: 60%;
    background-color: #c8c8c8;
    top: 20%;
    left: 0;
    position: absolute;
  }
  @media screen and (min-width: 1025px) {
    & .reed-logo {
      padding: 0 15px;
    }
  }
  @media screen and (min-width: 1025px) {
    & ul.main-navigation {
      height: 60px;
    }
    & .menu-button {
      display: none;
    }
    & .header-background {
      position: absolute;
      width: 100%;
      height: 60px;
    }
    & .menu-button {
      display: none;
    }
    & .menu-button {
      height: 60px;
      width: 60px;
    }
    & .header-block-link {
      height: 60px;
      line-height: 60px;
    }

    & .recruiter {
      display: inline-block;
    }
  }

  @media screen and (min-width: 1200px) {
    & .reed-logo {
      margin-right: 47.5px;
    }
    & ul.main-navigation > li:last-of-type {
      margin-left: 21px;
      margin-right: 0;
    }
    & ul.main-navigation > li {
      margin-right: 21px;
    }

    & ul.main-navigation .recruiter:before {
      left: -22px;
    }
  }
`;
