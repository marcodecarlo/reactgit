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
}

export default new IssuesService();
