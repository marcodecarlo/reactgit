import React, { Component } from "react";
import Moment from "moment";
import IssuesService from "../../lib/api/issues/IssuesService";
import "./Issue.css";

export default class Issue extends Component {
  state = {
    comments: [],
  };

  componentDidMount() {
    let idIssue = this.props.issue.number;
    if (idIssue !== "-1") {
      this.findAllComments(idIssue);
    }
  }

  findAllComments = (idIssue) => {
    IssuesService.getAllCommentsData(idIssue)
      .then((response) => this.handleResponse(response))
      .catch((error) => this.handleError(error));
  };

  handleResponse = (response) => {
    console.log("response");
    this.setState({
      comments: this.state.comments.concat(response.data),
    });
    console.log(this.state.comments);
  };

  handleError = (error) => {
    console.log("response error");
    console.log(error);

    this.setState({
      errWebApi: true,
    });
  };

  render() {
    let dateDMY = Moment(this.props.issue?.created_at).format("DD-MM-YYYY");
    return (
      <>
        <div className="flex flex-col rounded-md border-2 border-gray-300 p-3 h-48 divide-y divide-light-gray-400 bg-white">
          <div>
            <h1 className="title m-0">{this.props.issue.title}</h1>
            <p className="m-0 text-sub pb-2">
              Creata da : {this.props.issue.user?.login} il {dateDMY}
            </p>
          </div>
          <div className="h-full">
            <p className="py-3">{this.props.issue.body}</p>
          </div>
        </div>
        {this.state.comments.map((commet) => (
          <div className="flex flex-col w-5/6 ml-auto rounded-md border-2 border-gray-300 p-3 my-3 bg-white">
            <div className="space-y-2 divide-y divide-light-gray-400">
              <span className="block">
                <p className="text-sm italic font-medium tracking-wide">{commet.user.login} il</p>
              </span>
              <span className="block pt-4">
                <p className="text-base tracking-wide"> {commet.body}</p>
              </span>
            </div>
          </div>
        ))}
      </>
    );
  }
}
