import React, { useEffect, useState } from "react";
import "./Response.css";
import { getResponse } from "../api/Response";

function Response({ typebotId, selectedbtn }) {
  const [result, setResult] = useState([]);

  useEffect(() => {
    const fetchresp = async () => {
      try {
        const respons = await getResponse(typebotId);
        setResult(respons.data);
        console.log(respons);
      } catch (error) {
        console.error("Failed to fetch response:", error);
      }
    };
    fetchresp();
  }, [typebotId]);

  return (
    <div className="response">
      <div className="analytics">
        <div>
          <div>Views</div>
          <div>7</div>
        </div>
        <div>
          <div>Starts</div>
          <div> 7</div>
        </div>
        <div>
          <div>Completion Rate</div>
          <div>33%</div>
        </div>
      </div>
      <div>
        <table border="1" cellPadding="20">
          <thead>
            <tr>
              <th></th>
              <th>Submitted at</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              {Array.isArray(result) && result.map((res, index) => (
                <td key={index}>
                  {res.response}
                </td>
              ))}
            
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* {Array.isArray(result) && result.length > 0 ? (
        <>
          <div className="analytics">
            <div>
              <div>Views</div>
              <div>7</div>
            </div>
            <div>
              <div>Starts</div>
              <div> 7</div>
            </div>
            <div>
              <div>Completion Rate</div>
              <div>33%</div>
            </div>
          </div>
          <div>
            <table border="1" cellPadding="20">
              <thead>
                <tr>
                  <th></th>
                  <th>Submitted at</th>
                  {keys.map((key, index) => (
                    <th key={key}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td></td>
                  {values.map((value, index) => (
                    <td key={index}>{value}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <div className="noresult">No Response yet collected</div>
      )} */}
    </div>
  );
}

export default Response;
