import React from "react";
import { Link } from "react-router-dom";
import "./Messages.scss";
const Messages = () => {

   const currentUser = {
    id : 1,
    username : "Umar",
    isSeller :true,
   };
  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
         
        </div>

        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className="active">
            <td >
              Umar
            </td>
            <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus ea incidunt ipsum possimus.</td>
            <td>10/02/2022</td>
            <td>
            <Link to="/message/123">
              <button>Mark as read</button>
              </Link>
              </td>
          </tr>

          <tr className="active">
            <td>
              Umar
            </td>
            <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus ea incidunt ipsum possimus.</td>
            <td>
              10/02/2022    
            </td>
            <td>
            <Link to="/message/123">
              <button>Mark as read</button>
              </Link>
              </td>

          </tr>

          <tr>
            <td>
              Umar
            </td>
            <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus ea incidunt ipsum possimus.</td>
            <td>
              10/02/2022
            </td>
            
          </tr>
          <tr>
            <td>
              Umar
            </td>
            <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus ea incidunt ipsum possimus.</td>
            <td>
              10/02/2022  
            </td>
            
          </tr>
          <tr>
            <td>
              Umar
            </td>
            <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus ea incidunt ipsum possimus.</td>
            <td>
              10/02/2022 
            </td>
            

          </tr>

         
        
        </table>
      </div>
    </div>
  );
};

export default Messages;
