import React from "react";
import Moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import PropTypes from "prop-types";

const FormIssue = ({ onSubmit, onChange, onClick, issue, clickEdit }) => {
  let dateDMY = (issue.created_at) ? Moment(issue.created_at).format("DD-MM-YYYY") : Moment().format("DD-MM-YYYY");
  return (
    <form onSubmit={onSubmit}>
      <input type="hidden" value={issue?.number || '-1'} name="number" id="number" />
      <input type="hidden" value={issue.user?.login || ''} name="user.login" id="login" />
      <input type="hidden" value={dateDMY || ''} name="created_at" id="created_at" />
      <div className="flex">
        <div className="flex-auto">
          <h1 className="m-0">
            <input
              type="text"
              name="title"
              id="title"
              className="p-0 title w-full"
              placeholder="Titolo"
              value={issue.title || ''}
              disabled={!clickEdit}
              onChange={onChange}
            />
          </h1>
          <p className="m-0 text-sub pb-2">
            Creata da : {issue.user?.login || ''} il {dateDMY}
          </p>
        </div>
        <div className="flex-none text-right">
          {issue.number && <FontAwesomeIcon
            icon={faEdit}
            size="lg"
            className="ml-auto"
            onClick={onClick}
            style={{ color: "orange" }}
          />}
        </div>
      </div>
      <div className="flex">
        <textarea
          row="3"
          type="text"
          name="body"
          id="body"
          className="w-full h-full"
          placeholder="Testo"
          disabled={!clickEdit}
          value={issue.body || ''}
          onChange={onChange}
        />
      </div>
      {clickEdit && (
        <div className="flex">
          <button type="submit" className="btn-success ">
            Salva
          </button>
        </div>
      )}
    </form>
  );
};

FormIssue.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  issue: PropTypes.object.isRequired,
  clickEdit: PropTypes.bool.isRequired,
};

export default FormIssue;
