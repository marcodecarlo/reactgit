import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import Spinner from "../components/Spinner";
import IssuesService from "../lib/api/issues/IssuesService.js";
import Issue from "../components/Issue/Issue.js";
import Sidebar from "../components/Sidebar/Sidebar.js";
import "./IssuePage.css";
const IssuePage = () => {
  const { issue, getIssueById } = IssuesService();
  const { loading } = IssuesService();
  const { error } = IssuesService();
  const { id } = useParams();

  useEffect(() => {
    if (id !== -1 && id !== undefined) {
      findIssue(id);
    }
  }, []);

  const findIssue = (id) => {
    getIssueById(id);
  };

  if (loading)
    return (
      <>
        <Spinner />
      </>
    );

  if (error)
    return (
      <>
        <p>Errore!</p>
      </>
    );

  return (
    <>
      <div className="grid grid-rows-2 grid-flow-col gap-4">
        <div className="row-span-3 col-span-3 issue-content">
          <Issue issue={issue} />
        </div>
        <div className="row-span-2">
          <Sidebar issue={issue} />
        </div>
      </div>
    </>
  );
};

export default IssuePage;
