import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Loading from "../components/Loading";
import WeatherItem from "../components/WeatherItem";
import GeoService from "../services/GeoLocationService";
import WeatherService from "../services/WeatherService";

export default function Home() {
  const [city, setCity] = useState("");
  const [inputVal, setInputVal] = useState("");
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {
    state: { latitude, longitude },
  } = useLocation();

  useEffect(() => {
    const getLocationAndWeather = async () => {
      try {
        setIsLoading(true);
        const city = await new GeoService().getCity(latitude, longitude);
        const result = await new WeatherService().getWheather(city);
        setCity(result.city.name);
        setItems(result.list);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getLocationAndWeather();
  }, [latitude, longitude]);

  const handleSearchCity = async () => {
    try {
      setIsLoading(true);
      const result = await new WeatherService().getWheather(inputVal);
      setCity(result.city.name);
      setItems(result.list);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  console.log("inputVal", inputVal);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Container>
      <ContainerItems>
        <Header>
          <ContainerSearch>
            <InputSearch
              placeholder="Cidade"
              type="text"
              onChange={({ target }) => setInputVal(target.value)}
            />
            <ButtonSearch disabled={!inputVal} onClick={handleSearchCity}>
              Buscar
            </ButtonSearch>
          </ContainerSearch>
          <Title>{city}</Title>
        </Header>
        {items.map((item, index) => (
          <WeatherItem key={index} weather={item} />
        ))}
      </ContainerItems>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 20px;
`;

const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

const Header = styled.div`
  width: 100%;
  margin-top: 40px;
`;
const Title = styled.h1`
  width: 100%;
  margin-bottom: 20px;
`;
const ContainerSearch = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-column-gap: 20px;
  width: 100%;
  margin-bottom: 20px;

  input,
  button {
    padding: 10px;
    border-radius: 20px;
    box-shadow: 0 5px 9px 0 rgba(0, 0, 0, 0.19);
    border: none;
    cursor: pointer;
    outline: none;
  }
`;
const InputSearch = styled.input`
  width: 100%;
`;
const ButtonSearch = styled.button`
  width: 100%;
`;
