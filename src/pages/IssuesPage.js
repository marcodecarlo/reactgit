import React, { Component } from "react";
import IssuesService from "../services/api/issues/IssuesService.js";
import IssuesDetails from "../components/Issue/IssueDetails.js";

class IssuesPage extends Component {
  state = {
    issues: [],

    errWebApi: false,
    errMsg: "",
  };
  componentDidMount() {
    this.findAllIssues();
  }

  findAllIssues = () => {
    IssuesService.getAllIssuesData()
      .then((response) => this.handleResponse(response))
      .catch((error) => this.handleError(error));
  };

  handleResponse = (response) => {
    console.log("response");
    this.setState({
      issues: this.state.issues.concat(response.data),
    });
    console.log(this.state.issues);
  };

  handleError = (error) => {
    console.log("response error");
    console.log(error);

    this.setState({
      errMsg: error.response.data.message,
      errWebApi: true,
    });
  };

  render() {
    return (
      <div className="flex flex-wrap -m-4">
        {this.state.issues.map((issue) => (
          <div className="xl:w-1/3 md:w-1/2 p-4" key={issue.id}>
            <IssuesDetails issue={issue} />
          </div>
        ))}
      </div>
    );
  }
}

export default IssuesPage;
