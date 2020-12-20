import React, { useContext, useState } from "react";
import axios from "axios";
import globalvariables from "../../../globalVariables";
import { ConfigContext } from "../../../App";

const IssuesService = () => {
  const [issuesList, setIssuesList] = useState([]);
  const [issue, setIssue] = useState([{ number: -1, owner: 'marcodecarlo', repo: 'reactgit' }]);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const utente = useContext(ConfigContext);

  const getAllIssuesData = async () => {
    try {
      setLoading(true);
      const {
        data,
      } = await axios.get(
        `${globalvariables.baseurl}repos/${utente.username}/${utente.repo}/issues?access_token=${globalvariables.token}`,
        { timeout: 10000 }
      );
      setIssuesList(data);
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  };

  const getIssueById = async (id) => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${globalvariables.baseurl}repos/${utente.username}/${utente.repo}/issues/${id}?access_token=${globalvariables.token}`
      );
      setIssue(data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  const getAllCommentsData = async (id) => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${globalvariables.baseurl}repos/${utente.username}/${utente.repo}/issues/${id}/comments?access_token=${globalvariables.token}`
      );
      setComments(data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  const saveIssue = async (issue) => {
    debugger;
    try {
      setLoading(true);
      if (!issue.number) {
        const { data } = await axios.post(
          `${globalvariables.baseurl}repos/${utente.username}/${utente.repo}/issues?access_token=${globalvariables.token}`,
          issue,
          {
            headers: {
              Authorization: `${globalvariables.token}`,
            },
          }
        );
        setIssue(data);
      } else {
        const { data } = await axios.post(
          `${globalvariables.baseurl}repos/${utente.username}/${utente.repo}/issues/${issue.number}?access_token=${globalvariables.token}`,
          issue,
          {
            headers: {
              Authorization: `${globalvariables.token}`,
            },
          }
        );
        setIssue(data);
      }
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return {
    issuesList,
    issue,
    comments,
    loading,
    error,
    getAllIssuesData,
    getIssueById,
    getAllCommentsData,
    saveIssue,
    setIssue
  };
};

export default IssuesService;
