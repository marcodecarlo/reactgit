import React, { Component } from "react";
import Spinner from "../components/common/Spinner";
import IssuesService from "../lib/api/issues/IssuesService.js";
import Issue from "../components/Issue/Issue.js";

class IssuePage extends Component {
  state = {
    issue: [],
    loading: false,
    errWebApi: false,
    errMsg: "",
  };

  componentDidMount() {
    let idIssue = this.props.match.params.id;
    console.log("componentDidMount");
    console.log(idIssue);

    if (idIssue !== "-1") {
      this.findIssue(idIssue);
    }
  }

  findIssue = (idIssue) => {
    IssuesService.getIssueById(idIssue)
      .then((response) => this.handleResponse(response))
      .catch((error) => this.handleError(error));
  };

  handleResponse = (response) => {
    console.log("response");
    console.log(response.data);

    this.setState({
      issue: this.state.issue.concat(response.data),
      loading: true,
    });
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
           
          <div className="grid grid-rows-2 grid-flow-col gap-4" key={this.state.issue.id}>
              <div className="row-span-3 col-span-3">
                  <Issue issue={this.state.issue}/>
              </div>
              <div className="row-span-2">
                    Sidebar
              </div>
          </div>
        )}
      </>
    );
  }
}

export default IssuePage;
