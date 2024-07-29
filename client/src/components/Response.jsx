import React, {useEffect, useState} from "react";
import "./Response.css";
import {getResponse} from "../api/Response";

function Response({typebotId, setTypebotId}) {
  const data = {
    Button: "hello",
    Rating: 2,
    Date: "2024-07-11",
    Phone: "qq",
    Email: "qqq",
    Text: "qq",
    Number: "11",
  };

  const [resp,setresp] = useState(true);

  useEffect(() =>{
    const fetchresp = async()=>{
        const respons = await getResponse(typebotId);
        console.log(respons);
        if (respons.length === 0){
            setresp(false);
        };
        
    }
    fetchresp();
  },[])



  const keys = Object.keys(data);
  const values = Object.values(data);
  return (
    <>
      <div className="response">
        {resp ? (<><div className="analytics">
            <div>
                <div>Views</div>
                <div></div>
            </div>
            <div>
                <div>Starts</div>
                <div></div>
            </div>
            <div>
                <div>Completion Rate</div>
                <div></div>
            </div>
        </div>
        <div>
          <table border="1" cellPadding="20">
            <thead>
              <tr>
                <th></th> {/* Empty corner cell */}
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
                  <React.Fragment key={index}>
                    
                    <td>{value}</td>
                  </React.Fragment>
                ))}
              </tr>
            </tbody>
          </table>
        </div></>)
        : ''};
      </div>
    </>
  );
};

export default Response;
