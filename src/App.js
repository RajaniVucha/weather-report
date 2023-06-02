import React, { Component } from "react";
import Input from "./components/input";
import SearchResults from "./components/SearchResults";
import SetUnits from "./components/SetUnits";
import WeatherReport from "./components/WeatherReport";

class App extends Component {
  state = {
    city: "Hyderabad",
    results: {
      id: "",
      City: "",
    },
  };

  handleCity = (val) => {
    alert(val);
    this.setState({
      city: val,
    });
  };
  componentDidMount = () => this.fetchSearch(this.state.city);
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.city !== this.state.city) {
      this.fetchSearch(this.state.city);
    }
  };
  fetchSearch = async (val) => {
    let { city, results } = this.state;

    try {
      console.log(`https://api.weatherserver.com/weather/cities/?city=${city}`);
      const { results } = await fetch(
        `https://api.weatherserver.com/weather/cities/?city=${city}`
      );
    } catch (error) {
      return new Promise((resolve) => resolve(error));
    }
    // alert("hi");
    this.setState({ results });
    console.log(this.state.results);
  };
  render() {
    return (
      <div className="weather-app">
        <h1>WeatherWatch</h1>
        <span className="input-box">
          <Input
            keycity={this.state.city}
            handleCity={(val) => this.handleCity(val)}
          />
        </span>
        <SetUnits />
        <div className="search-results">
          <SearchResults search={this.state.results} />
        </div>
        <WeatherReport />
      </div>
    );
  }
}

export default App;
