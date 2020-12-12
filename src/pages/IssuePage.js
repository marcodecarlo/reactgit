import React, { Component } from "react";
import Spinner from "../components/Spinner";
import IssuesService from "../lib/api/issues/IssuesService.js";
import Issue from "../components/Issue/Issue.js";
import Sidebar from "../components/Sidebar/Sidebar.js";
import "./IssuePage.css";
class IssuePage extends Component {
  state = {
    issue:[],
    loading: false,
    errWebApi: false,
    errMsg: "",
  };

  componentDidMount() {
    let idIssue = this.props.match.params.id;
    if (idIssue !== -1 && idIssue !== undefined) {
      this.findIssue(idIssue);
    }else{
      this.setState({
        issue:[
          {number:-1}
        ],
        loading: true
      })
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
          <div className="grid grid-rows-2 grid-flow-col gap-4">
            <div className="row-span-3 col-span-3 issue-content">
              <Issue issue={this.state.issue[0]} />
            </div>
            <div className="row-span-2">
              <Sidebar issue={this.state.issue[0]}/>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default IssuePage;
