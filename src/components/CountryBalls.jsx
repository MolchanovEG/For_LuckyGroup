import { useEffect } from "react";
import image from "../image/woman.png";
import "./CountryBalls.css";
import Britain from "../image/britain.png";
import Italy from "../image/italy.png";
import India_big from "../image/india_big.png";
import India_small from "../image/india_small.png";

const CountryBalls = () => {
  useEffect(() => {
    const animation = () => {
      setTimeout(() => {
        let icons = document.querySelectorAll(".icon-ball");
        let angle = 0;
        let radius = 200;
        let delay = 0.4;

        for (let i = 0; i < icons.length; i++) {
          let x = Math.cos(angle) * radius - icons[i].offsetWidth / 2;
          let y = Math.sin(angle) * radius - icons[i].offsetHeight / 2;

          icons[i].style.opacity = 1;
          icons[i].style.transform = "translate(" + x + "px, " + y + "px)";
          icons[i].style.transitionDelay = delay * i + "s";

          angle += Math.PI / (icons.length / 2);
        }

        let orbit = document.querySelector(".orbit");
        orbit.style.animation = "rotate 3s infinite linear";
      }, 3000);
    };

    animation();
  }, []);

  return (
    <li className="transfer__item pic">
      <figure className="transfer__item__pic-wrap">
        <div className="container__img-balls">
          <div className="orbit">
            <img src={India_small} className="icon-ball" alt="India_small" />
            <img src={Britain} className="icon-ball" alt="India_small" />
            <img src={Italy} className="icon-ball" alt="India_small" />
            <img src={India_big} className="icon-ball" alt="India_big" />
            <img src={India_small} className="icon-ball" alt="India_small" />
          </div>
        </div>
        <img className="transfer__item__img" alt="Woman image" src={image} />
      </figure>
    </li>
  );
};

export default CountryBalls;
