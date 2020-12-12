import axios from "axios";
import globalvariables from "../../../globalVariables";

const IssuesService = {

  getAllIssuesData : () => {
    return axios.get(
      `${globalvariables.baseUrl}repos/${globalvariables.username}/${globalvariables.repo}/issues`,
      { timeout: 10000 }
    );
  },

  getIssueById : (id) => {
    return axios.get(
      `${globalvariables.baseUrl}repos/${globalvariables.username}/${globalvariables.repo}/issues/${id}`
    );
  },

  getAllCommentsData : (id) => {
    return axios.get(
      `${globalvariables.baseUrl}repos/${globalvariables.username}/${globalvariables.repo}/issues/${id}/comments`
    );
  },

  saveIssue : (issue) => {
    if (issue === -1) {
      return axios.post(
        `${globalvariables.baseUrl}repos/${globalvariables.username}/${globalvariables.repo}/issues`,
        issue
      );
    } else {
      return axios.post(
        `${globalvariables.baseUrl}repos/${globalvariables.username}/${globalvariables.repo}/issues/${issue.number}`,
        issue
      );
    }
  }

}

export default IssuesService;
