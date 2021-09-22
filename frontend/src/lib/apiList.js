export const server = "http://localhost:5050";
export const CHAT_HOST = "https://api.chatengine.io";
// this is suppose to be secret not public in github 🤣
export const CHAT_PRIVATE_KEY =
  "5d4bf609-a53a-460a-ab9c-38564c321ee0";
export const CHAT_PROJECT_ID =
  "ecbad9cf-4c26-440d-92df-76157aae1933";
const apiList = {
  login: `${server}/api/v1/users/login`,
  signup: `${server}/api/v1/users/signup`,
  uploadResume: `${server}/api/v1/users/uploadResume`,
  uploadProfileImage: `${server}/api/v1/users/uploadProfileImage`,
  jobs: `${server}/api/v1/jobs`,
  // TODO fix this make it (/api/v1/applications) only
  applications: `${server}/api/v1/jobs/applications`,
  rating: `${server}/api/v1/ratings`,
  user: `${server}/api/v1/users`,
  applicants: `${server}/api/v1/users/applicants`,
};

export default apiList;
