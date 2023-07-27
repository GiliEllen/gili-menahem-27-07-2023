import React, { useEffect, useRef, useState } from "react";
import { Autocomplete, Box, Container, Paper, TextField } from "@mui/material";
import { locationsRes } from "../util/fakeResponse";
import axios from "axios";
import { API } from "../App";

const Search = () => {
  const [locations, setLocations] = useState<LocationType[]>(locationsRes);
  const [location, setLocation] = useState<string>("");
  const [displayedLocation, setDisplayedLocation] = useState("");

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

  useEffect(() => {
    // console.log(locations);
  }, []);

  //   useEffect(() => {
  //     search();
  //   }, [location]);

  return (
    <Container sx={{ mt: 10 }}>
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
            console.log("props");
            console.log(props);
            return (
              <Box
                component="li"
                {...props}
                onClick={(ev) => {
                  props.onClick!(ev);
                  setLocation(option.LocalizedName);
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

interface LocationType {
  AdministrativeArea: {
    ID: string;
    LocalizedName: string;
  };
  Country: {
    ID: string;
    LocalizedName: string;
  };
  Key: string;
  LocalizedName: string;
  Rank: number;
  Type: string;
  Version: number;
}
