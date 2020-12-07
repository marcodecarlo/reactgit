import React, { Component } from "react";
import IssuesService from "../lib/api/issues/IssuesService.js";
import IssuesDetails from "../components/Issue/IssueDetails.js";
import Spinner from "../components/common/Spinner";

class IssuesListPage extends Component {
  state = {
    issuesList: [],
    loading: false,
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
      issuesList: this.state.issuesList.concat(response.data),
      loading: true,
    });
    console.log(this.state.issues);
    console.log(this.state.loading);
  };

  handleError = (error) => {
    console.log("response error");
    console.log(error);

    this.setState({
      errWebApi: true,
      loading: true,
    });
  };

  render() {
    return (
      <>
        {!this.state.loading ? (
          <Spinner />
        ) : (
          <div className="flex flex-row-reverse">
            {this.state.issuesList.map((issue) => (
              <div className="xl:w-1/3 md:w-1/2 p-4" key={issue.id}>
                <IssuesDetails issueDetails={issue} />
              </div>
            ))}
          </div>
        )}
      </>
    );
  }
}

export default IssuesListPage;
