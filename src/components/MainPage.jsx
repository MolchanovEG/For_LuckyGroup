import "./MainPage.css";
import MainText from "./MainText";
import CountryBalls from "./CountryBalls";

const MainPage = () => {
  return (
    <div className="transfer">
      <div className="transfer__container">
        <div className="transfer__wrapper">
          <ul className="transfer__items">
            <MainText />
            <CountryBalls />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
