import React from "react";
import "../css/Card.css";
import { UilUserCircle } from '@iconscout/react-unicons'
import feature from "../media/img11.png";

function Card({ users, card, groups, extra }) {

  if (groups === "priority") {
    const user = users.find((user) => user.id === card.userId);

    var available;

    if (user.available) {
      available = "#e1bd09";
    } else {
      available = "grey";
    }

    return (
      <div className="Face">
        <div className="Box">
          <div className="one">
            {card.id}
            <div style={{ backgroundColor: user.color }}>
              <UilUserCircle/>
              <div style={{ backgroundColor: available }}></div>
            </div>
          </div>
          <div className="two">
            {card.title}
          </div>
          <div className="three" key={card.id} style={{ width: "50%" }}>
            <img src={feature} alt="" />
            {card.tag}
          </div>
        </div>
      </div>
    );
  } else if (groups === "status") {
    const user = users.find((user) => user.id === card.userId);

    var available;

    if (user.available) {
      available = "#e1bd09";
    } else {
      available = "grey";
    }

    return (
      <div className="Face">
        <div className="Box">
          <div className="one">
            {card.id}
            <div style={{ backgroundColor: user.color }}>
              <UilUserCircle/>
              <div style={{ backgroundColor: available }}></div>
            </div>
          </div>
          <div className="two">
            {card.title}
          </div>
          <div className="three" key={card.id} style={{ width: "50%" }}>
            <img src={feature} alt="" />
            {card.tag}
          </div>
        </div>
      </div>
    );
  }else {
    return (
      <div className="Face">
        <div className="Box">
          <div className="one">{card.id}</div>
          <div className="two">
            {card.title}
          </div>
            <div className="three" style={{width: "60%"}}>
              <img src={feature} alt="" />
              {card.tag}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
