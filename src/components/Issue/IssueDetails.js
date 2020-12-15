import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import "./IssueDetails.css";
import Moment from "moment";

export default class IssuesDetails extends Component {
  render() {
    let dateDMY = Moment(this.props.issueDetails?.created_at).format("DD-MM-YYYY");
    return (
      <div
        className="border border-gray-300 p-6 rounded-lg h-full content-between flex flex-wrap"
        key={this.props.issueDetails.id}
      >
        <div className="flex space-x-4 w-full justify-between">
          <div
            className={
              " w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 " +
              (this.props.issueDetails.labels[0]?.name || '').replace(/ /g, "_")
            }
          >
            {this.props.issueDetails.number}
          </div>
          <h2 className="flex-2 title-card ml-2">{this.props.issueDetails.title}</h2>
          <span className="flex-1 ml-auto text-right">
            <span className="count-icon">
              <FontAwesomeIcon icon={faComment} size="lg" />
              <span className="count">{this.props.issueDetails.comments}</span>
            </span>
          </span>
        </div>
        <div className="flex w-full">
          <p className="text-anteprima">{this.props.issueDetails.body}</p>
        </div>
        <div className="flex w-full justify-end">
          <a
            className="border border-green-500 text-green-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none focus:outline-none focus:shadow-outline hover:border-green-600 hover:text-green-600"
            href={
              "issues/" +
              this.props.issueDetails.number
            }
          >
            Apri
          </a>
        </div>

        <div className="text-center mt-4 leading-none flex justify-between w-full">
          <span className="text-xs italic font-light tracking-wide text-gray-300">
            Creata da : {this.props.issueDetails.user?.login} il {dateDMY}
          </span>
        </div>
      </div>
    );
  }
}
