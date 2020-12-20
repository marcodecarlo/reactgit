import React, { useEffect, useState, useContext } from "react";
import IssuesService from "../lib/api/issues/IssuesService.js";
import IssuesDetails from "../components/Issue/IssueDetails.js";
import Spinner from "../components/Spinner";

const IssuesListPage = () => {
  const { issuesList, getAllIssuesData } = IssuesService();
  const { loading } = IssuesService();
  const { error } = IssuesService();

  useEffect(() => {
    getAllIssuesData();
  }, []);

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {issuesList.map((issue) => (
          <div className="max-h-72" key={issue.id}>
            <IssuesDetails issueDetails={issue} />
          </div>
        ))}
      </div>
    </>
  );
};

export default IssuesListPage;
