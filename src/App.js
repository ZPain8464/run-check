import "./App.css";
import React from "react";
import Config from "./Config/config";

export default class App extends React.Component {
  getWeather = () => {
    fetch(`${Config.weather_URL}?key=${Config.API_Key}&q=Wilmington`)
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  render() {
    return (
      <>
        <div>hello world!</div>
        <div>
          <button onClick={this.getWeather}>Get your weather</button>
        </div>
      </>
    );
  }
}
