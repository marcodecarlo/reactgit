import React, { useEffect, useState } from "react";
import Moment from "moment";
import IssuesService from "../../lib/api/issues/IssuesService";
import "./Issue.css";
import FormIssue from "../FormIssue";
import globalvariables from "../../globalVariables";

const Issue = ({issue}) => {
  const { comments, getAllCommentsData, saveIssue } = IssuesService();
  const { loading } = IssuesService();
  const { error } = IssuesService();
  const [clickEdit, setClickEdit] = useState(false);
  const [newissue, setNewissue] = useState(issue);

  useEffect(() => {
    setNewissue(issue);
    let idIssue = issue.number;
    if (idIssue !== -1 && idIssue !== undefined) {
      findAllComments(idIssue);
      setClickEdit(
        false
      );
    } else {
      setClickEdit(
        true
      );
    }
  },[issue]);

  const findAllComments = (idIssue) => {
    getAllCommentsData(idIssue);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewissue({
        ...newissue,
        [name]: value,
    });
  }

  const handleEdit = () => {
    setClickEdit(!clickEdit);
  };

  const salva = (event) => {
    const { name, value } = event.target;
    setNewissue({
      issue: {
        [name]: value,
      },
    });
debugger;

    saveIssue(newissue);
  };

  return (
    <>
      <div className="flex flex-col rounded-md border-2 border-gray-300 p-3 h-48 divide-y divide-light-gray-400 bg-white">
        <FormIssue
          onSubmit={salva}
          onChange={handleChange}
          onClick={handleEdit}
          issue={newissue}
          clickEdit={clickEdit}
        />
      </div>
      {comments?.length > 0 ? (
       comments.map((commet) => {
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
};

export default Issue;
