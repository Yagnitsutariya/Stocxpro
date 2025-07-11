import React from "react";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";

const Orders = () => {
  const [Allorder , setAllorder ] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/order").then((res)=>{
      setAllorder(res.data)
    });
  },[])

  return (
    <div className="orders">
      <h3 className="title">Orders ({Allorder.length})</h3>
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {Allorder.map((order, idx) => (
              <tr key={idx}>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>{order.price}</td>
                <td>{order.type}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="no-orders">
        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Orders;
