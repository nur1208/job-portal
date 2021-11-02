import { NavbarWrapper } from "./NavBarSC";
import { Link } from "react-router-dom";
import isAuth, { userType } from "../../lib/isAuth";
import { renderNavbarItems, useGetNavbarItems } from "./navbarUtil";
export const NavBar = () => {
  const recruiterNavbarItems = useGetNavbarItems("recruiterNavbarItems");

  const applicantNavbarItems = useGetNavbarItems("applicantNavbarItems");
  return (
    // <header id="site-header" role="banner" class="signed-out">
    <NavbarWrapper id="site-header">
      <div class="header-background"></div>
      <div class="header-inner">
        <a
          href="#menu"
          class="menu-button header-block-link"
          data-bind="click: toggleSideMenu"
        >
          <span>Toggle menu</span>
        </a>

        {/* <Link
          to="/home"
          title="Job.co.uk"
          class="reed-logo globalReedLogo header-block-link"
        > */}
        {/* <span>Job portal</span> */}

        <Link
          to="/"
          data-bind="attr: { href: signInUrl }"
          class="sign-in gtmGlobalResponsiveSignIn header-block-link"
        >
          Job Portal
        </Link>
        {/* </Link> */}

        <ul class="main-navigation">
          {isAuth() ? (
            userType() === "recruiter" ? (
              // <>
              //   <li class="jobs tld active">
              //     <Link
              //       to="/"
              //       title="Jobs"
              //       class="gtmHeaderNav header-block-link"
              //     >
              //       Jobs
              //     </Link>
              //   </li>
              //   <li class="jobs tld">
              //     <Link
              //       to="/addjob"
              //       title="Jobs"
              //       class="gtmHeaderNav header-block-link"
              //     >
              //       Add Jobs
              //     </Link>
              //   </li>
              //   <li class="jobs tld">
              //     <Link
              //       to="/myjobs"
              //       title="Jobs"
              //       class="gtmHeaderNav header-block-link"
              //     >
              //       My Jobs
              //     </Link>
              //   </li>

              //   <li class="jobs tld">
              //     <Link
              //       to="/employees"
              //       title="Jobs"
              //       class="gtmHeaderNav header-block-link"
              //     >
              //       Employees
              //     </Link>
              //   </li>

              //   <li class="jobs tld">
              //     <Link
              //       to="/chat"
              //       title="Jobs"
              //       class="gtmHeaderNav header-block-link"
              //     >
              //       Chats
              //     </Link>
              //   </li>
              // </>
              renderNavbarItems(recruiterNavbarItems)
            ) : (
              renderNavbarItems(applicantNavbarItems)
            )
          ) : (
            <>
              <li class="jobs tld active">
                <Link
                  to="/"
                  title="Jobs"
                  class="gtmHeaderNav header-block-link"
                >
                  Jobs
                </Link>
              </li>
            </>
          )}
          {!isAuth() && (
            <li class="recruiter ltd">
              <Link
                to="/signup"
                title="Recruiter"
                class="gtmHeaderNav header-block-link recruiter-link"
              >
                Recruiting? <b>Post a job</b>
              </Link>
            </li>
          )}
        </ul>

        <div class="right-container">
          <ul class="user-navigation">
            {isAuth() ? (
              <>
                <li class="signed-out-user">
                  <Link
                    to="/profile"
                    class="register-cv gtmGlobalRegister btn btn-secondary"
                  >
                    Profile
                  </Link>
                </li>
                <li class="signin-menu">
                  <Link
                    to="/logout"
                    data-bind="attr: { href: signInUrl }"
                    class="sign-in gtmGlobalResponsiveSignIn header-block-link"
                  >
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li class="signed-out-user">
                  <Link
                    to="/signup"
                    class="register-cv gtmGlobalRegister btn btn-secondary"
                  >
                    Register
                  </Link>
                </li>
                <li class="signin-menu">
                  <Link
                    to="/login"
                    data-bind="attr: { href: signInUrl }"
                    class="sign-in gtmGlobalResponsiveSignIn header-block-link"
                  >
                    Sign in
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </NavbarWrapper>

    // </header>
  );
};
