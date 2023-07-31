import { Alert, Container, Snackbar, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../App";
import { fakeFavRes } from "../util/fakeResponse";
import CityCard from "../components/CityCard";
import { useAppSelector } from "../app/hooks";
import { viewPortSelector } from "../features/viewport/viewportSlice";
import { motion } from "framer-motion";
import { fadeIn } from "../assets/animations/framer-motion/animation";

const FavoritesPage = () => {
  const [favWeatherInfo, setFavWeatherInfo] = useState<any[]>([]);
  const view = useAppSelector(viewPortSelector);

  const [errorDis, setErrorDis] = useState<boolean>(false);
  const [errorCon, setErrorCon] = useState<string>("");

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
      } else {
        return;
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
          return {
            info: el.data[0],
            cityName: finalArr[idx].cityName,
            cityKey: keysArr[idx],
          };
        });
        console.log(finalResults);
        setFavWeatherInfo(finalResults);
      })
      .catch((error) => {
        setErrorDis(true)
        setErrorCon(`${error.response.data.Code} ${error.response.data.Message}`)
        setTimeout(() => {
          setErrorCon("")
          setErrorDis(false)
        }, 3000)
      });
  };

  useEffect(() => {
    // handleGetWeatherForFav();
    setFavWeatherInfo(fakeFavRes);
  }, []);

  return (
    <motion.div
      variants={fadeIn("right", "spring", 0, 1)}
      initial="hidden"
      animate="visible"
    >
      <Container>
        <Typography mt={12} variant="h4">
          My favorite Cities
        </Typography>
        <Stack mt={4} direction={view ? "column" : "row"} gap={8}>
          {favWeatherInfo.length > 0 ? (
            favWeatherInfo.map((cityInfo) => {
              return <CityCard key={cityInfo.cityName} cityInfo={cityInfo} />;
            })
          ) : (
            <p>Nothing</p>
          )}
        </Stack>
      </Container>
      <Snackbar open={errorDis}>
        <Alert severity="error">Error: {errorCon}</Alert>
      </Snackbar>
    </motion.div>
  );
};

export default FavoritesPage;
