import React, { useEffect, useState } from "react";
import IssuesService from "../lib/api/issues/IssuesService.js";
import IssuesDetails from "../components/Issue/IssueDetails.js";
import Spinner from "../components/Spinner";

const IssuesListPage = () => {
  const [issuesList, setIssuesList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errWebApi, setErrWebApi] = useState(false);

  useEffect(() => {
    findAllIssues();
  }, []);

  const findAllIssues = () => {
    IssuesService.getAllIssuesData()
      .then((response) => handleResponse(response))
      .catch((error) => handleError(error));
  };

  const handleResponse = (response) => {
    console.log("response");
    setIssuesList(response.data);
    setLoading({
      loading: true,
    });
  };

  const handleError = (error) => {
    console.log("response error");
    console.log(error);

    setErrWebApi({
      errWebApi: true,
    });
    setLoading({
      loading: true,
    });
  };

  if (!loading)
    return (
      <>
        <Spinner />
      </>
    );

  if (errWebApi)
    return (
      <>
        <p>Errore!</p>
      </>
    );

  return (
    <>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        {issuesList.map((issue) => (
          <div className="max-h-72"  key={issue.id}>
            <IssuesDetails issueDetails={issue} />
          </div>
        ))}
      </div>
    </>
  );
};

export default IssuesListPage;
