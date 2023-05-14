import React from "react";
import "./Orders.scss";
const Orders = () => {

   const currentUser = {
    id : 1,
    username : "Umar",
    isSeller :true,
   };
  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
         
        </div>

        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isSeller? "Buyer" : "Seller"}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img className="img" src="/images/man.png" alt="" />
            </td>
            <td>nice one</td>
            <td>123</td>
            <td>54</td>
            <td>
              <img className="delete" src="/images/message.png" alt="" />
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
              <img className="delete" src="/images/message.png" alt="" />
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
              <img className="delete" src="/images/message.png" alt="" />
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
              <img className="delete" src="/images/message.png" alt="" />
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
              <img className="delete" src="/images/message.png" alt="" />
            </td>
          </tr>

         
        
        </table>
      </div>
    </div>
  );
};

export default Orders;
