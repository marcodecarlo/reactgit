import React, { Component } from "react";
import Moment from "moment";

export default class Issue extends Component {


    render() {
        let dateDMY = Moment(this.props.issue?.created_at).format("DD-MM-YYYY");
        return (
            <div className="flex flex-col rounded-md border-2 border-gray-300" key={this.props.issue.id}>
                <div>
                    <h1>
                        {this.props.issue}
                    </h1>
                    <p>
                        Creata da : {this.props.issue.user?.login} il {dateDMY}
                    </p>
                </div>
                <div>
                {this.props.issue.body}
                </div>
                <div>3</div>
          </div>
        );
      }
}