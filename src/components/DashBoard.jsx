import React from "react";
import "../css/DashBoard.css";
import { UilPlus, UilEllipsisH, UilUserCircle } from "@iconscout/react-unicons";
import Card from "./Card.jsx"
import backlog from "../media/img1.png";
import cancelled from "../media/img2.png";
import done from "../media/img3.png";
import high from "../media/img4.png";
import inProgress from "../media/img5.png";
import low from "../media/img6.png";
import medium from "../media/img7.png";
import noPriority from "../media/img8.png";
import todo from "../media/img9.png";
import urgent from "../media/img10.png";

function DashBoard({ groups, orders, data}) {
  const array1 = [
    {
      id: 0,
      name: "No priority",
      icon: noPriority,
    },
    {
      id: 1,
      name: "Low",
      icon: low,
    },
    {
        id: 2,
        name: "Medium",
        icon: medium,
    },
    {
        id: 3,
        name: "High",
        icon: high,
    },
    {
      id: 4,
      name: "Urgent",
      icon: urgent,
    },
  ];

  const array2 = [
    {
      id: 1,
      name: "Backlog",
      icon: backlog,
    },
    {
      id: 2,
      name: "Todo",
      icon: todo,
    },
    {
      id: 3,
      name: "In progress",
      icon: inProgress,
    },
    {
      id: 4,
      name: "Done",
      icon: done,
    },
    {
      id: 5,
      name: "Cancelled",
      icon: cancelled,
    },
  ];

  var orderData;
    if (orders === "title") {
        orderData = [...data.tickets].sort((a, b) => (a.title > b.title ? 1 : -1));
    } else {
        orderData = [...data.tickets].sort((a, b) => b.priority - a.priority);
    }

  const groupedData = orderData.reduce((grouped, ele) => {
    if (!grouped[ele[groups]]) grouped[ele[groups]] = [];
    grouped[ele[groups]].push(ele);
    return grouped;
  }, {});

  console.log(groupedData)
  if (groups === "priority") {
    return (
      <div className="screen">
        <div className="screen-one">
          {array1.map((ele) => (
            <div key={ele.id} className="Queue">
            <div className="topdiv">
              <div>
                <img
                  src={ele.icon}
                  alt="topdiv-point"
                  className="topdiv-point"
                />
                {ele.name}
                {groupedData[ele.id] ? <span>{groupedData[ele.id].length}</span> : <span>0</span>}
              </div>
              <div>
                <UilPlus />
                <UilEllipsisH />
              </div>
            </div>
            <div className="d-box">
              {groupedData[ele.id]
                ? groupedData[ele.id].map((element) => (
                    <Card
                      key={element.id}
                      users={data.users}
                      card={element}
                      groups={groups}
                    />
                  ))
                : null}
            </div>
          </div>
          ))}
        </div>
      </div>
    );
  } else if (groups === "status") {
    return (
        <div className="screen">
          <div className="screen-one">
            {array2.map((ele) => (
              <div key={ele.id} className="Queue">
              <div className="topdiv">
                <div>
                  <img
                    src={ele.icon}
                    alt="topdiv-point"
                    className="topdiv-point"
                  />
                  {ele.name}
                  {groupedData[ele.name] ? <span>{groupedData[ele.name].length}</span> : <span>0</span>}
                </div>
                <div>
                  <UilPlus />
                  <UilEllipsisH />
                </div>
              </div>
              <div className="d-box">
                {groupedData[ele.name]
                  ? groupedData[ele.name].map((element) => (
                      <Card
                        key={element.id}
                        users={data.users}
                        card={element}
                        groups={groups}
                      />
                    ))
                  : null}
              </div>
            </div>
            ))}
          </div>
        </div>
      );
  } else {


    return (
      <div className="screen">
        <div className="screen-one">
          {data.users.map((ele) => (
            <div className="Queue" key={ele.id}>
        <div className="topdiv">
          <div>
            <div
              className="user-pointer"
            >
              <UilUserCircle/>
              <div style={{ backgroundColor: (ele.available)?"orange":"grey" }}></div>
            </div>
            {ele.name}
            {groupedData[ele.id] ? <span>{groupedData[ele.id].length}</span> : <span>0</span>}
          </div>
          <div>
            <UilPlus />
            <UilEllipsisH />
          </div>
        </div>
        <div className="d-box">
          {groupedData[ele.id]
            ? groupedData[ele.id].map((element) => (
                <Card
                  key={element.id}
                  card={element}
                  groups={groups}
                />
              ))
            : null}
        </div>
      </div>
          ))}
        </div>
      </div>
    );
  }
}

export default DashBoard;
