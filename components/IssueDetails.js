import React, { Component } from "react";
import Moment from 'moment';

export default class  IssuesDetails extends Component {

    render() {
        let dateDMY = Moment(this.props.issue?.created_at).format('DD-MM-YYYY');
    return(
        <>
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                {this.props.issue.state}
            </div>
            <h2 className="text-lg  font-medium title-font mb-2">
                {this.props.issue.title}
            </h2>
            <p className="leading-relaxed text-base">
                {this.props.issue.body}
            </p>

            <div className="text-center mt-2 leading-none flex justify-between w-full">
              <span className=" mr-3 inline-flex items-center leading-none text-sm  py-1 "></span>
              <span className=" inline-flex items-center leading-none text-sm">
                 Creata da : {this.props.issue.user?.login} il {dateDMY}
              </span>
            </div>
        </>
    );
    }
};
