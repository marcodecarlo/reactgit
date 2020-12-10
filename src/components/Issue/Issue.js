import React, { Component } from "react";
import Moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import IssuesService from "../../lib/api/issues/IssuesService";
import "./Issue.css";
import FormIssue from "../FormIssue";

export default class Issue extends Component {
  state = {
    comments: [],
    issue: {
      number: this.props.issue.number,
      title: this.props.issue.title,
      body: this.props.issue.body,
    },
    clickEdit: false,
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

  saveIssue = (issue) => {
    IssuesService.saveIssue(issue)
      .then((response) => this.handleResponseIssue(response))
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

  handleResponseIssue = (response) => {
    console.log("response issue");
    this.setState({
      issue: this.state.issue.concat(response.data),
    });
    console.log(this.state.issue);
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      issue: {
        ...this.state.issue,
        [name]: value,
      },
    });
    console.log("veramente");
    console.log(this.state.issue);
  };

  handleEdit = () => {
    this.setState({
      clickEdit: !this.state.clickEdit,
    });
  };

  salva = (event) => {
    let idIssue = this.props.issue.number;
    if (idIssue !== "-1") {
      const { name, value } = event.target;
      this.setState({
        issue: {
          [name]: value,
        },
      });

      console.log("anca");
      console.log(this.state.issue);
      this.saveIssue(this.state.issue);
    }
  };

  render() {
    return (
      <>
        <div className="flex flex-col rounded-md border-2 border-gray-300 p-3 h-48 divide-y divide-light-gray-400 bg-white">
          <FormIssue
            onSubmit={this.salva}
            onChange={this.handleChange}
            onClick={this.handleEdit}
            issue={this.state.issue}
            clickEdit={this.state.clickEdit}
          />
        </div>
        {this.state.comments.length > 0 ? (
          this.state.comments.map((commet) => {
            let dateCommentDMY = Moment(commet.created_at).format("DD-MM-YYYY");
            return (
              <div
                className="flex flex-col w-5/6 ml-auto rounded-md border-2 border-gray-300 p-3 my-3 bg-white"
                key={commet.id}
              >
                <div className="space-y-2 divide-y divide-light-gray-400">
                  <span className="block">
                    <p className="text-sm italic font-medium tracking-wide">
                      {commet.user.login} il {dateCommentDMY}
                    </p>
                  </span>
                  <span className="block pt-4">
                    <p className="text-base tracking-wide"> {commet.body}</p>
                  </span>
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex flex-col w-5/6 ml-auto rounded-md border-2 border-gray-300 p-3 my-3 bg-white">
            <div className="space-y-1 divide-y divide-light-gray-400">
              <span className="block">
                <p className="text-sm italic font-medium tracking-wide">
                  Non sono presenti commenti
                </p>
              </span>
            </div>
          </div>
        )}
      </>
    );
  }
}
