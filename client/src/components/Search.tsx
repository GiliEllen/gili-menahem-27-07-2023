import React, { useEffect, useRef, useState } from "react";
import { Autocomplete, Box, Container, Paper, TextField } from "@mui/material";
import { fakeResTelAvivInfo, locationsRes } from "../util/fakeResponse";
import axios from "axios";
import { API } from "../App";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setWeather } from "../features/weather/weatherSlice";
import { LocationType } from "../Types/types";
import { setLocationSelector } from "../features/location/locationSlice";

const Search = () => {
  const [locations, setLocations] = useState<LocationType[]>(locationsRes);
  const [location, setLocation] = useState<string>("");
  const [locationKey, setLocationKey] = useState("");

  const dispatch = useAppDispatch();

  const search = async () => {
    try {
      const { data } = await axios.get(
        `${API}/locations/v1/cities/autocomplete?apikey=%093vMphpay81AU2hjh6QZXGlketl9M62WJ&q=${location}&language=en-us`
      );
      console.log(data);
      if (data) {
        setLocations(data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const searchWeather = async (locationKeyinfo:string) => {
    try {
      const { data } = await axios.get(
        `${API}/locations/v1/cities/currentconditions/v1/${locationKey}?apikey=%093vMphpay81AU2hjh6QZXGlketl9M62WJ`
      );
      console.log(data);

      dispatch(setWeather(data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    dispatch(setWeather(fakeResTelAvivInfo[0]));
  }, []);
  useEffect(() => {
    // searchWeather(215854)
  }, []);

  // useEffect(() => {
  //   search();
  // }, [location]);

  return (
    <Container >
      <form>
        <Autocomplete
          blurOnSelect
          disablePortal
          id="location-auto-complete"
          options={locations}
          sx={{ width: 300 }}
          getOptionLabel={(option) => {
            return option.LocalizedName;
          }}
          renderOption={(props, option) => {
            return (
              <Box
                component="li"
                {...props}
                onClick={(ev) => {
                  props.onClick!(ev);
                  setLocation(option.LocalizedName);
                  dispatch(setLocationSelector(option))
                  setLocationKey(option.Key);
                }}
              >
                {option.LocalizedName}
              </Box>
            );
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Location"
              value={location}
              onInput={(ev: any) => {
                setLocation(ev.target.value);
              }}
            />
          )}
        />
      </form>
      {location}
    </Container>
  );
};

export default Search;

