/* eslint-disable react/no-unknown-property */
/* eslint-disable react-hooks/exhaustive-deps */
import "./MainText.css";
import { useEffect, useState } from "react";
import axios from "axios";

import search from "../image/search.png";
import user1 from "../image/Ellipse_1.png";
import user2 from "../image/Ellipse_2.png";
import user3 from "../image/Ellipse_3.png";
import cirlce from "../image/Ellipse_4.png";

const MainText = () => {
  const [appState, setAppState] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      const apiUrl = "https://baconipsum.com/api/?type=lucky";
      await axios
        .get(apiUrl)
        .then((resp) => {
          setAppState(resp.data);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    fetchCategories();
  }, []);

  const text = () => {
    if (appState) return appState[0].substr(0, 100) + "...";
    return "Loading...";
  };

  return (
    <li className="transfer__item text">
      <div className="transfer__item__info">
        <div className="transfer__item__text">
          <div className="heading">
            <h1>
              Now Buy Your
              <br /> PIN or <span className="top-up">Top Up</span>
              <br /> <span className="bank">With Bank Transfer</span>
            </h1>
          </div>
          <div className="description">{text()}</div>
          <button className="btn get-started">Get started</button>
          <div className="search-panel">
            <form className="search">
              <input
                type="text"
                maxLength={12}
                minLength={4}
                onKeyDown={(e) => {
                  if (
                    ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"].indexOf(
                      e.key
                    ) !== -1
                  ) {
                    e.preventDefault();
                  }
                }}
                placeholder="Where do you want to call?"
              />
              <button type="submit">
                <img src={search} alt="Search button" />
              </button>
            </form>
          </div>
          <div className="users">
            <div className="users-img">
              <img className="user" src={cirlce} alt="Circle plus" />
              <img className="user" src={user3} alt="User 3" />
              <img className="user" src={user2} alt="User 2" />
              <img className="user" src={user1} alt="User 1" />
            </div>
            <div className="users-text">
              45k+ Regular User. <span>View Price Plan</span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default MainText;
