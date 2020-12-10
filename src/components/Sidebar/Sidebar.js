import React, { Component } from "react";
import "./Sidebar.css";

export default class Sidebar extends Component {
  render() {
    return (
      <>
        <div className="space-y-0 divide-y divide-light-gray-300 w-1/2 ml-auto">
          {this.props.issue.assignees?.length > 0 ? (
            <>
              <div className="block text-right">
                <p className="text-sm italic font-medium tracking-wide">
                  Assignees
                </p>
              </div>

              {this.props.issue.assignees.map((assigne) => (
                <div className="block text-right" key={assigne.id}>
                  <p className="text-sm font-base tracking-wide">
                    {assigne.login}
                  </p>
                </div>
              ))}

              {this.props.issue.labels.length > 0 && (
                <>
                  <div className="block text-right pt-5">
                    <p className="text-sm italic font-medium tracking-wide">
                      Labels
                    </p>
                  </div>
                  {this.props.issue.labels.map((label) => (
                    <div className="block text-right" key={label.id}>
                      <p className="text-sm font-base tracking-wide">
                        {label.name}
                      </p>
                    </div>
                  ))}
                </>
              )}


            </>
          ) : (
            <div className="block text-right">
              <p>Non è stata assegnata</p>
            </div>
          )}
        </div>
      </>
    );
  }
}
