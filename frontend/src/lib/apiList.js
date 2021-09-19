export const server = "http://localhost:5050";

const apiList = {
  login: `${server}/api/v1/users/login`,
  signup: `${server}/api/v1/users/signup`,
  uploadResume: `${server}/upload/resume`,
  uploadProfileImage: `${server}/upload/profile`,
  jobs: `${server}/api/v1/jobs`,
  // TODO fix this make it (/api/v1/applications) only
  applications: `${server}/api/v1/jobs/applications`,
  rating: `${server}/api/v1/ratings`,
  user: `${server}/api/v1/users`,
  applicants: `${server}/api/v1/users/applicants`,
};

export default apiList;
