import React, { useState, useEffect } from "react";
import axios from "axios";

const Audit = ({unclicked}) => {
  const [auditType, setAuditTpe] = useState([]);
  useEffect(() => {
    axios
      .get("http://88.198.119.158:8080/operation-audit/types/2/items", {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((res) => {
        setAuditTpe(res.data);
      });
  }, []);
  const allAuditType = auditType.map((audItem) => {
    return (
      <div id={audItem.id} className="Auditable">
        <h3 className="aud">{audItem.name}</h3>
      </div>
    );
  });
  return (
    <div>
      <div className="nav">
        <h1 className="auditable"> Auditable Items </h1>
        <button onClick={unclicked} className="back" > Back </button>
      </div>
      {allAuditType}
    </div>
  );
};
export default Audit;
