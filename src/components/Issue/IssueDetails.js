import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import "./IssueDetails.css";
import Moment from "moment";

export default class IssuesDetails extends Component {
  render() {
    let dateDMY = Moment(this.props.issue?.created_at).format("DD-MM-YYYY");
    return (
      <div
        className="border border-gray-300 p-6 rounded-lg h-full content-between flex flex-wrap"
        key={this.props.issue.id}
      >
        <div class="flex space-x-4 w-full justify-between">
        <div
          className={
            " w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 " +
            (this.props.issue.labels[0]?.name).replace(/ /g, "_")
          }
        >
          {this.props.issue.number}
        </div>
        <h2 className="flex-2 title-card ml-2">
          {this.props.issue.title}
        </h2>
        <span className="flex-1 ml-auto text-right">
            <span className="count-icon">
              <FontAwesomeIcon icon={faComment} size="lg" />
              <span className="count">{this.props.issue.comments}</span>
            </span>
          </span>
        </div>
        <p className="text-anteprima">{this.props.issue.body}</p>

        <div className="text-center mt-4 leading-none flex justify-between w-full">
          <span className=" inline-flex items-center leading-none text-sm">
            Creata da : {this.props.issue.user?.login} il {dateDMY}
          </span>
        </div>
      </div>
    );
  }
}
