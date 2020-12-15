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
    debugger;
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
    debugger;
  };

  if (!loading)
    return (
      <>
        <Spinner />
      </>
    );

  return (
    <>
      <div className="flex flex-row-reverse">
        {issuesList.map((issue) => (
          <div className="xl:w-1/3 md:w-1/2 p-4" key={issue.id}>
            <IssuesDetails issueDetails={issue} />
          </div>
        ))}
      </div>
    </>
  );
};

export default IssuesListPage;
