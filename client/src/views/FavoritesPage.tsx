import { Container, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { API } from "../App";
import { fakeFavRes } from "../util/fakeResponse";
import CityCard from "../components/CityCard";

const FavoritesPage = () => {
  const [favWeatherInfo, setFavWeatherInfo] = useState<any[]>([]);

  const handleGetWeatherForFav = () => {
    let keysArr = Object.keys(sessionStorage);
    let valuesArr = Object.values(sessionStorage);
    keysArr = keysArr.filter((key) => {
      if (/^\d+$/.test(key)) {
        return key;
      }
    });

    let finalArr: any[] = [];
    keysArr.forEach((key, idx) => {
      if (/^\d+$/.test(key)) {
        finalArr.push({ key: key, cityName: valuesArr[idx] });
      }
    });

    console.log(finalArr);

    let promiseArray = finalArr.map((element) =>
      axios.get(
        `${API}/currentconditions/v1/${element.key}?apikey=%093vMphpay81AU2hjh6QZXGlketl9M62WJ`
      )
    );
    Promise.all(promiseArray)
      .then((results) => {
        const finalResults = results.map((el, idx) => {
          return { info: el.data[0], cityName: finalArr[idx].cityName };
        });
        console.log(finalResults);
        setFavWeatherInfo(finalResults);
      })
      .catch(console.log);
  };

  useEffect(() => {
    // console.log(Object.keys(sessionStorage));
    // handleGetWeatherForFav()
    setFavWeatherInfo(fakeFavRes);
  }, []);
  return (
    <Container>
      <Header />
      <Typography mt={12} variant="h4">
        My favorite Cities
      </Typography>
      <Stack mt={4} direction={"row"} gap={8}>
        {favWeatherInfo.length > 0 ? (
          favWeatherInfo.map((cityInfo) => {
            return <CityCard key={cityInfo.cityName} cityInfo={cityInfo}/>;
          })
        ) : (
          <p>Nothing</p>
        )}
      </Stack>
    </Container>
  );
};

export default FavoritesPage;
