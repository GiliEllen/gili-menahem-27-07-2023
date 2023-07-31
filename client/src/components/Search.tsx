import { useEffect, useState } from "react";
import { Autocomplete, Box, Paper, TextField } from "@mui/material";
import { fakeResTelAvivInfo } from "../util/fakeResponse";
import axios from "axios";
import { API } from "../App";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setWeather } from "../features/weather/weatherSlice";
import { LocationType } from "../Types/types";
import {
  locationSelector,
  setLocationSelector,
} from "../features/location/locationSlice";
import { modeSelector } from "../features/mode/modeSlice";

const Search = () => {
  const [locations, setLocations] = useState<LocationType[]>([]);
  const [location, setLocation] = useState<string>("");
  const [locationKey, setLocationKey] = useState("");

  const locationGlobal = useAppSelector(locationSelector);
  const mode = useAppSelector(modeSelector)

  const dispatch = useAppDispatch();

  const search = async () => {
    try {
      const { data } = await axios.get(
        `${API}/locations/v1/cities/autocomplete?apikey=%093vMphpay81AU2hjh6QZXGlketl9M62WJ&q=${location}&language=en-us`
      );
      if (data) {
        setLocations(data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const searchWeather = async (locationKeyinfo: string) => {
    try {
      const { data } = await axios.get(
        `${API}/currentconditions/v1/${locationKey}?apikey=%093vMphpay81AU2hjh6QZXGlketl9M62WJ`
      );

      dispatch(setWeather(data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    dispatch(setWeather(fakeResTelAvivInfo[0]));
  }, []);

  // useEffect(() => {
  //   search();
  // }, [location]);

  // useEffect(() => {
  //   if(locationGlobal && locationGlobal.value){
  //     searchWeather(locationGlobal.value.Key);
  //   }
  // }, [locationGlobal]);

  return (
    <Paper sx={{ padding: 2 }}>
      <form style={{ width: "100%" }}>
        <Autocomplete
          blurOnSelect
          disablePortal
          id="location-auto-complete"
          options={locations}
          sx={{ width: "100%" }}
          getOptionLabel={(option) => {
            return option.LocalizedName;
          }}
          renderOption={(props, option) => {
            return (
              <Box
                key={option.LocalizedName}
                component="li"
                {...props}
                onClick={(ev) => {
                  props.onClick!(ev);
                  setLocation(option.LocalizedName);
                  dispatch(setLocationSelector(option));
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
              variant="filled"
              label="Location"
              value={location}
              onChange={(ev: any) => {
                const { value } = ev.target;
                const re = /^[A-Za-z]+$/;
                if (value !== "" && !re.test(value)) {
                  alert("please write onlt in english");
                  setLocation("");
                } else {
                  setLocation(value);
                }
              }}
              sx={{"&.MuiTextField-root": mode === "light" ? {
                backgroundColor: "rgb(232, 244, 255)"
              } : {
                backgroundColor: "rgb(52, 69, 91)"
              }}}
            />
          )}
        />
      </form>
    </Paper>
  );
};

export default Search;
