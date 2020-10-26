import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCloud,
    faBolt,
    faCloudRain,
    faCloudShowersHeavy,
    faSnowflake,
    faSun,
    faSmog,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import device from "./Device";
import ResultFadeIn from "./ResultFadeIn";
import BigLabel from "./BigLabel";
import SmallLabel from "./SmallLabel";
import Text from "./Text";
import "animate.css/animate.min.css";

//Set style for website
const Results = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    opacity: 0;
    visibility: hidden;
    position: relative;
    top: 20px;
    animation: ${ResultFadeIn} 0.5s 1.4s forwards;
`;

const LocationWrapper = styled.div`
    flex-basis: 100%;
    text-align: center;
`;

const CurrentWeatherWrapper = styled.div`
    flex-basis: 100%;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: auto 1fr;
    margin: 20px 0;
    grid-gap: 30px;
    @media ${device.mobileL} {
        flex-basis: 50%;
        padding-right: 10px;
    }
    @media ${device.tablet} {
        grid-template-columns: 1fr 1fr;
        padding-right: 20px;
    }
`;

const WeatherIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 70px;
    color: #ffffff;
    @media ${device.tablet} {
        font-size: 100px;
        justify-content: flex-end;
    }
    @media ${device.laptop} {
        font-size: 80px;
    }
    @media ${device.laptopL} {
        font-size: 80px;
    }
`;

const TemperatureWrapper = styled.div``;

const Temperature = styled.h3`
    display: block;
    font-size: 50px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.9);
    @media ${device.tablet} {
        font-size: 70px;
    }
    @media ${device.laptop} {
        font-size: 70px;
    }
    @media ${device.laptopL} {
        font-size: 70px;
    }
`;

const WeatherDetailsWrapper = styled.div`
    flex-basis: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 10px 10px;
    margin: 20px 0;
    background-color: rgba(0, 0, 0, 0.9);
    border-radius: 10px;
    align-self: flex-start;
    @media ${device.mobileL} {
        flex-basis: 50%;
    }
    
`;

const WeatherDetail = styled.div`
    flex-basis: calc(100% / 3);
    padding: 10px;
    transition:all .2s ease-out; 
    &:hover{
        background-color:#ffffff20;
    }
    @media ${device.laptop} {
        padding: 20px 10px;
    }

`;


const Result = ({ weather }) => {
    const {
        city,
        country,
        date,
        description,
        main,
        temp,
        sunset,
        sunrise,
        humidity,
        wind,
        highestTemp,
        lowestTemp,
    } = weather;


    //Set weather icon in main
    let weatherIcon = null;
    switch (main) {
        case "Thunderstorm":
            weatherIcon = <FontAwesomeIcon icon={faBolt} />;
            break;
        case "Drizzle":
            weatherIcon = <FontAwesomeIcon icon={faCloudRain} />;
            break;
        case "Rain":
            weatherIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} />;
            break;
        case "Snow":
            weatherIcon = <FontAwesomeIcon icon={faSnowflake} />;
            break;
        case "Clear":
            weatherIcon = <FontAwesomeIcon icon={faSun} />;
            break;
        case "Clouds":
            weatherIcon = <FontAwesomeIcon icon={faCloud} />;
            break;
        default:
            weatherIcon = <FontAwesomeIcon icon={faSmog} />;
    }

    return (
        <Results>
            <LocationWrapper>
                <BigLabel className="text-center">
                {city}, {country}
                </BigLabel>
                <SmallLabel weight="400" className="text-center">
                    {date}
                </SmallLabel>
            </LocationWrapper>
            <CurrentWeatherWrapper>
                <WeatherIcon>{weatherIcon}</WeatherIcon>
                <TemperatureWrapper>
                    <Temperature>{Math.floor(temp - 273.15)}&#176;</Temperature>
                    <SmallLabel weight="400" firstToUpperCase>
                        {description}
                    </SmallLabel>
                </TemperatureWrapper>
            </CurrentWeatherWrapper>
            <WeatherDetailsWrapper>
                <WeatherDetail>
                    <SmallLabel align="center" weight="400">
                        {Math.floor(highestTemp - 273.15)}&#176;
                    </SmallLabel>
                    <Text align="center">Cao nhất</Text>
                </WeatherDetail>
                <WeatherDetail>
                    <SmallLabel align="center" weight="400">
                        {wind}mph
                    </SmallLabel>
                    <Text align="center">Gió</Text>
                </WeatherDetail>
                <WeatherDetail>
                    <SmallLabel align="center" weight="400">
                        {sunrise}
                    </SmallLabel>
                    <Text align="center">MT mọc</Text>
                </WeatherDetail>
                <WeatherDetail>
                    <SmallLabel align="center" weight="400">
                        {Math.floor(lowestTemp - 273.15)}&#176;
                    </SmallLabel>
                    <Text align="center">Thấp nhất</Text>
                </WeatherDetail>
                <WeatherDetail>
                    <SmallLabel align="center" weight="400">
                        {humidity}%
                    </SmallLabel>
                    <Text align="center">Mưa</Text>
                </WeatherDetail>
                <WeatherDetail>
                    <SmallLabel align="center" weight="400">
                        {sunset}
                    </SmallLabel>
                    <Text align="center">MT lặn</Text>
                </WeatherDetail>
            </WeatherDetailsWrapper>
        </Results>
    );
};

Result.propTypes = {
    weather: PropTypes.shape({
        city: PropTypes.string,
        country: PropTypes.string,
        date: PropTypes.string,
        description: PropTypes.string,
        main: PropTypes.string,
        temp: PropTypes.number,
        sunrise: PropTypes.string,
        sunset: PropTypes.string,
        humidity: PropTypes.number,
        wind: PropTypes.number,
        highestTemp: PropTypes.number,
        lowestTemp: PropTypes.number,
    }).isRequired,
};

export default Result;
