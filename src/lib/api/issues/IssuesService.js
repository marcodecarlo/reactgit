import axios from "axios";
import globalvariables from "../../../globalVariables";

const IssuesService = {

  getAllIssuesData : () => {
    return axios.get(
      `${globalvariables.baseurl}repos/${globalvariables.username}/${globalvariables.repo}/issues`,
      { timeout: 10000 }
    );
  },

  getIssueById : (id) => {
    return axios.get(
      `${globalvariables.baseurl}repos/${globalvariables.username}/${globalvariables.repo}/issues/${id}`
    );
  },

  getAllCommentsData : (id) => {
    return axios.get(
      `${globalvariables.baseurl}repos/${globalvariables.username}/${globalvariables.repo}/issues/${id}/comments`
    );
  },

  saveIssue : async(issue) => {
    debugger;
    if (!issue.number) {
      return axios.post(
        `${globalvariables.baseurl}repos/${globalvariables.username}/${globalvariables.repo}/issues`,
        issue,{
          headers: {
            'Authorization': `${globalvariables.token}`
          }
        }
      );
    } else {
      return await axios.post(
        `${globalvariables.baseurl}repos/${globalvariables.username}/${globalvariables.repo}/issues/${issue.number}`,
        issue,{
          headers: {
            'Authorization': `${globalvariables.token}`
          }
        }
      );
    }
  }

}

export default IssuesService;
