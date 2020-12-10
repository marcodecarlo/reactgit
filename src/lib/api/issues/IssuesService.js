import axios from "axios";

class IssuesService {
  state = {
    BaseUrl: "https://api.github.com/",
  };


  getAllIssuesData = () => {
    return axios.get(
      `${this.state.BaseUrl}repos/marcodecarlo/reactgit/issues`,
      { timeout: 10000 }
    );
  };

  getIssueById = (id) => {
    return axios.get(
      `${this.state.BaseUrl}repos/marcodecarlo/reactgit/issues/${id}`
    );
  };
  getAllCommentsData = (id) => {
    return axios.get(
      `${this.state.BaseUrl}repos/marcodecarlo/reactgit/issues/${id}/comments`
    );
  };

  saveIssue = (issue) =>{
    debugger;
    return axios.post(
      `${this.state.BaseUrl}repos/marcodecarlo/reactgit/issues/${issue.number}`, issue
    );
  }
}

export default new IssuesService();
