import React from "react";
import styled from "styled-components";
import arrowUp from "../statics/img/arrow-up.png";
import arrowDown from "../statics/img/arrow-down.png";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

export default function WeatherItem({ weather }) {
  return (
    <Container>
      <div className="container-temperature">
        <p className="temperature">{`${Math.round(weather.main.temp)}°C`}</p>
        <div className="flex">
          <span className="center">
            <Arrow src={arrowUp} />
            {parseInt(weather.main.temp_max)}°C
          </span>
          <span className="center">
            <Arrow src={arrowDown} />
            {parseInt(weather.main.temp_min)}°C
          </span>
        </div>
      </div>
      <div className="date-container">
        <p className="date">{`${dayjs(weather.dt_txt).format(
          "DD/MM/YYYY"
        )} às ${dayjs(weather.dt_txt).format("HH:MM")}`}</p>
      </div>
      <ul>
        {weather.weather.map((e, i) => (
          <li key={i}>
            <ImageWeather
              src={`http://openweathermap.org/img/wn/${e.icon}@2x.png`}
            />
            <p>{e.description}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  background: #fff;
  padding: 20px;
  width: 100%;
  margin-bottom: 20px;
  box-shadow: 0 5px 9px 0 rgba(0, 0, 0, 0.19);

  .container-temperature {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;

    .temperature {
      font-weight: bold;
      font-size: 30px;
    }

    .flex {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  .date-container {
    width: 100%;
    .date {
      width: 100%;
      margin: 20px 0;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    width: 100%;
    li {
      width: 100%;
      p {
        width: 100%;
      }
    }
  }
`;

const Arrow = styled.img`
  height: 20px;
  width: 20px;
`;

const ImageWeather = styled.img`
  height: 70px;
  width: 70px;
`;
