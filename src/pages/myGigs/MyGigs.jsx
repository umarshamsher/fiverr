import React from "react";
import { Link } from "react-router-dom";
import "./MyGigs.scss";
const MyGig = () => {
  return (
    <div className="myGigs">
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          <Link to="/add">
            <button>Add New Gig</button>
          </Link>
        </div>

        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>54</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <img className="img" src="/images/man.png" alt="" />
            </td>
            <td>nice one</td>
            <td>123</td>
            <td>54</td>
            <td>
              <img className="delete" src="/images/delete.png" alt="" />
            </td>
          </tr>

          <tr>
            <td>
              <img className="img" src="/images/man.png" alt="" />
            </td>
            <td>nice one</td>
            <td>123</td>
            <td>54</td>
            <td>
              <img className="delete" src="/images/delete.png" alt="" />
            </td>
          </tr>

          <tr>
            <td>
              <img className="img" src="/images/man.png" alt="" />
            </td>
            <td>nice one</td>
            <td>123</td>
            <td>54</td>
            <td>
              <img className="delete" src="/images/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="img" src="/images/man.png" alt="" />
            </td>
            <td>nice one</td>
            <td>123</td>
            <td>54</td>
            <td>
              <img className="delete" src="/images/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="img" src="/images/man.png" alt="" />
            </td>
            <td>nice one</td>
            <td>123</td>
            <td>54</td>
            <td>
              <img className="delete" src="/images/delete.png" alt="" />
            </td>
          </tr>

         
        
        </table>
      </div>
    </div>
  );
};

export default MyGig;
