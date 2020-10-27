import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import SearchCity from "./components/SearchCity";
import Result from "./components/Result";
import NotFound from "./components/NotFound";
import "animate.css/animate.min.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ListCountry from "./components/ListCountry";
import ListCity from "./components/ListCity";
import WeatherMap from "./components/WeatherMap";
import ListKey from "./components/ListKey";

const list_city = ListCity;
// style
const WeatherWrapper = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  height: calc(100vh - 64px);
  width: 100%;
  position: relative;
`;

const WeatherDetailMap = styled.div`
  margin-top: 30px;
  padding: 30px 0px;
  width: 100%;
`;

// main
const APIkey = ListKey;

const months = [
  "Tháng 1",
  "Tháng 2",
  "Tháng 3",
  "Tháng 4",
  "Tháng 5",
  "Tháng 6",
  "Tháng 7",
  "Tháng 8",
  "Tháng 9",
  "Tháng 10",
  "Tháng 11",
  "Tháng 12",
];

const days = [
  "Chủ nhật",
  "Thứ hai",
  "Thứ ba",
  "Thứ tư",
  "Thứ 5",
  "Thứ 6",
  "Thứ 7",
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchCity = this.handleSearchCity.bind(this);
    this.handleGetLocation = this.handleGetLocation.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.success = this.success.bind(this);
    this.state = {
      value: "",
      weatherInfo: null,
      error: false,
      arr: [],
      lat: 0,
      lon: 0,
    };
  }

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  componentDidMount() {
    list_city.forEach((item) => {
      const weather = `https://api.openweathermap.org/data/2.5/weather?q=${item.name}&APPID=${APIkey}`;
      Promise.all([fetch(weather)])
        .then(([res1]) => {
          if (res1.ok) {
            return Promise.all([res1.json()]);
          }
          throw Error(res1.statusText);
        })
        .then(([data1]) => {
          const currentDate = new Date();
          const date = `${
            days[currentDate.getDay()]
          }, Ngày ${currentDate.getDate()}, ${
            months[currentDate.getMonth()]
          }, Năm ${currentDate.getFullYear()}`;
          const sunset = new Date(data1.sys.sunset * 1000)
            .toLocaleTimeString()
            .slice(0, 4);
          const sunrise = new Date(data1.sys.sunrise * 1000)
            .toLocaleTimeString()
            .slice(0, 4);
          const weatherInfo = {
            city: data1.name,
            lat: data1.coord.lat,
            lon: data1.coord.lon,
            country: data1.sys.country,
            date,
            description: data1.weather[0].description,
            main: data1.weather[0].main,
            temp: data1.main.temp,
            highestTemp: data1.main.temp_max,
            lowestTemp: data1.main.temp_min,
            sunrise,
            sunset,
            clouds: data1.clouds.all,
            humidity: data1.main.humidity,
            wind: data1.wind.speed,
          };

          this.setState((prevState) => ({
            arr: [...prevState.arr, weatherInfo],
            error: false,
          }));
        })
        .catch((error) => {
          this.setState({
            weatherInfo: null,
          });
        });
    });
  }

  handleSearchCity = (e) => {
    if (e) e.preventDefault();
    const { value } = this.state;
    const weather = `https://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=${APIkey}`;
    Promise.all([fetch(weather)])
      .then(([res1]) => {
        if (res1.ok) {
          return Promise.all([res1.json()]);
        }
        throw Error(res1.statusText);
      })
      .then(([data1]) => {
        const currentDate = new Date();
        const date = `${
          days[currentDate.getDay()]
        }, Ngày ${currentDate.getDate()}, ${
          months[currentDate.getMonth()]
        }, Năm ${currentDate.getFullYear()}`;
        const sunset = new Date(data1.sys.sunset * 1000)
          .toLocaleTimeString()
          .slice(0, 4);
        const sunrise = new Date(data1.sys.sunrise * 1000)
          .toLocaleTimeString()
          .slice(0, 4);
        const weatherInfo = {
          city: data1.name,
          country: data1.sys.country,
          lat: data1.coord.lat,
          lon: data1.coord.lon,
          date,
          description: data1.weather[0].description,
          main: data1.weather[0].main,
          temp: data1.main.temp,
          highestTemp: data1.main.temp_max,
          lowestTemp: data1.main.temp_min,
          sunrise,
          sunset,
          clouds: data1.clouds.all,
          humidity: data1.main.humidity,
          wind: data1.wind.speed,
        };
        const cityExist = this.state.arr.find(
          (element) => element.city === weatherInfo.city
        );
        if (cityExist === undefined) {
          this.setState((prevState) => ({
            arr: [...prevState.arr, weatherInfo],
          }));
        }
        this.setState({
          weatherInfo,
          error: false,
        });
      })
      .then(() => {})
      .catch((error) => {
        this.setState({
          error: true,
          weatherInfo: null,
        });
      });
  };

  getLocalData = (city, array) => {
    const data = array.find((dt) => dt.city === city);
    this.setState({
      weatherInfo: data,
      error: false,
    });
  };

  onCityChange = (city) => {
    this.setState({ ...this.state, value: city }, () => {
      this.handleSearchCity();
    });
  };

  success(position) {
    let latLocation = 0;
    let lonLocation = 0;
    latLocation = position.coords.latitude.toFixed(2) - 0.1;
    lonLocation = position.coords.longitude.toFixed(2) - 0.1;
    console.log(latLocation + ", " + lonLocation);
    this.setState({
      lat: latLocation,
      lon: lonLocation,
    });
  }

  handleGetLocation() {
    let weatherInfo;

    //Get your location
    let error = () => {
      console.log("Error");
    };
    navigator.geolocation.getCurrentPosition(this.success, error);

    //Get weather datas in your location
    const api = `http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=${APIkey}`;
    Promise.all([fetch(api)])
      .then(([res1]) => {
        if (res1.ok) {
          return Promise.all([res1.json()]);
        }
        throw Error(res1.statusText);
      })
      .then(([data1]) => {
        const currentDate = new Date();
        const date = `${
          days[currentDate.getDay()]
        }, Ngày ${currentDate.getDate()}, ${
          months[currentDate.getMonth()]
        }, Năm ${currentDate.getFullYear()}`;
        const sunset = new Date(data1.sys.sunset * 1000)
          .toLocaleTimeString()
          .slice(0, 4);
        const sunrise = new Date(data1.sys.sunrise * 1000)
          .toLocaleTimeString()
          .slice(0, 4);
        console.log(data1);
        weatherInfo = {
          city: data1.name,
          country: data1.sys.country,
          lat: data1.coord.lat,
          lon: data1.coord.lon,
          date,
          description: data1.weather[0].description,
          main: data1.weather[0].main,
          temp: data1.main.temp,
          highestTemp: data1.main.temp_max,
          lowestTemp: data1.main.temp_min,
          sunrise,
          sunset,
          clouds: data1.clouds.all,
          humidity: data1.main.humidity,
          wind: data1.wind.speed,
        };
        this.setState({
          weatherInfo,
          error: false,
        });
      })
      .catch((error) => {
        this.setState({
          weatherInfo: null,
        });
      });
  }

  render() {
    const { value, weatherInfo, error } = this.state;
    return (
      <React.Fragment>
        <WeatherWrapper>
          <Header />
          <div className="container">
            <SearchCity
              handleGetLocation={this.handleGetLocation}
              value={value}
              showResult={(weatherInfo || error) && true}
              change={this.handleInputChange}
              submit={this.handleSearchCity}
            />
            <div className="row justify-content-center">
              <div className="col-12 col-lg-5 col-md-9 col-xs-10">
                <ListCountry
                  list={this.state.arr}
                  getLocalData={this.getLocalData}
                />
              </div>
              <div className="col-12 col-lg-7 col-md-12">
                {weatherInfo && <Result weather={weatherInfo} />}
                {error && <NotFound error={error} />}
              </div>
            </div>
            {weatherInfo && (
              <WeatherDetailMap>
                <WeatherMap
                  lat={this.state.weatherInfo.lat}
                  lon={this.state.weatherInfo.lon}
                />
              </WeatherDetailMap>
            )}
          </div>
          <Footer />
        </WeatherWrapper>
      </React.Fragment>
    );
  }
}
