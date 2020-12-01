import axios from 'axios';

class IssuesService {
    state = {
        BaseUrl: "https://api.github.com/",
    }

    getAllIssuesData = () => {
        return axios.get(`${this.state.BaseUrl}repos/marcodecarlo/reactgit/issues`);
    }

}

export default new IssuesService()