import React, { useEffect, useState } from "react";
import "./Response.css";
import { getResponse } from "../api/Response";
import {getView} from '../api/Views';

function Response({ typebotId, selectedbtn }) {
  const [result, setResult] = useState([]);
  const [start, setStart] = useState('');
  const [view, setView] = useState(0);
  const [pageId, setPageId] = useState('');

  useEffect(() => {
    const fetchresp = async () => {
      try {
        const respons = await getResponse(typebotId);
        setResult(respons.data);
        console.log(respons.data);
        
      } catch (error) {
        console.error("Failed to fetch response:", error);
      }
    };
    fetchresp();
   
  }, [typebotId]);

  useEffect(()=>{

    setPageId(typebotId);

    const fetchView = async() => {
      try {
        const views1 = await getView(typebotId);
        setView(views1.data.views);
      } catch (error) {
        console.error("Failed to fetch view:", error);
      }
    };
    const fetchresp = async () => {
      try {
        const respons = await getResponse(typebotId);
        setResult(respons.data);
        console.log(respons.data);
        setStart(respons.data.length);
        
      } catch (error) {
        console.error("Failed to fetch response:", error);
      }
    };
    fetchView();
    fetchresp();
    
    console.log(pageId, "pageId");
  },[])


  const formatDate = (isoDateString) => {
  const date = new Date(isoDateString);

  const optionsDate = {
    month: 'long',
    day: 'numeric',
  };
  const optionsTime = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  };

  const formattedDate = new Intl.DateTimeFormat('en-US', optionsDate).format(date);
  const formattedTime = new Intl.DateTimeFormat('en-US', optionsTime).format(date);

  return `${formattedDate}, ${formattedTime}`;
};

function calculateLength(result) {
  let resu = 0; // Initialize resu outside of the loop
  for (let i = 0; i < result.length; i++) {
    if (result[i].response.length > 0) {
      resu += Object.keys(result[i].response[0]).length; // Add the length of keys in the first object of response array
    }
  }
  return resu; // Return the result after the loop
}

const calculateCompletionRate = (result) => {
  const selectedinp = selectedbtn.filter(item=>item.type === 'inputs')
  const totallength = (result.length)*(selectedinp.length);
  console.log(totallength);
  const completedLength = calculateLength(result);
  console.log(completedLength);

  return Math.round((completedLength / totallength) * 100);
}


  return (
    <div className="response">
      
      {Array.isArray(result) && result.length > 0 ? (
        <>
        <div className="analytics">
        <div>
          <div>Views</div>
          <div>{view}</div>
        </div>
        <div>
          <div>Starts</div>
          <div>{start}</div>
        </div>
        <div>
          <div>Completion Rate</div>
          <div>{calculateCompletionRate(result)}%</div>
        </div>
      </div>
      <div>
        <table border="1" cellPadding="20">
          <thead>
            <tr>
              <th></th>
              <th>Submitted at</th>
              {selectedbtn.map((btn, index) =>
                btn.type === 'inputs' ? (
                  <th key={index}>{`Input ${btn.name}`}</th>
                ) : null
              )}
            </tr>
          </thead>
          <tbody>
            {Array.isArray(result) && result.map((res, resIndex) => (
              <tr key={resIndex}>
                <td>{resIndex + 1}</td>
                <td>{formatDate(res.createdAt)}</td>
                {selectedbtn.map((btn, btnIndex) =>
                  btn.type === 'inputs' ? (
                    <td key={btnIndex}>
                      {res.response[0][btn.name] || ''}
                    </td>
                  ) : null
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </>
      ) : (
        <div className="noresult">No Response yet collected</div>
      )}
    </div>
  );
}

export default Response;
