import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import './IssueDetails.css';
import Moment from 'moment';



export default class  IssuesDetails extends Component {

    render() {
        let dateDMY = Moment(this.props.issue?.created_at).format('DD-MM-YYYY');
    return(
        <div className="border border-gray-300 p-6 rounded-lg h-full content-between flex flex-wrap" key={this.props.issue.id}>
            <div className={"w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 "+(this.props.issue.labels[0]?.name).replace(/ /g,"_")}>
                {this.props.issue.number}
            </div>
            <h2 className="text-lg  font-medium title-font ml-2">
                {this.props.issue.title}
            </h2>
            <p className="leading-relaxed text-base">
                {this.props.issue.body}
            </p>
   
            <div className="text-center mt-4 leading-none flex justify-between w-full">
              <span className=" mr-3 inline-flex items-center leading-none text-sm  py-1 ">
              <span className="count-icon">
              <FontAwesomeIcon icon={faComment} size="lg"/>
              <span className="count">{this.props.issue.comments}</span>
              </span>
              </span>
              <span className=" inline-flex items-center leading-none text-sm">
                 Creata da : {this.props.issue.user?.login} il {dateDMY}
              </span>
            </div>
        </div>

        
    );
    }
};
