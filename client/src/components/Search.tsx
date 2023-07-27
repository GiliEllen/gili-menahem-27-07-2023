import React, { useEffect, useState } from "react";
import { Autocomplete, Box, Container, Paper, TextField } from "@mui/material";
import { locationsRes } from "../util/fakeResponse";

const Search = () => {
  const [locations, setLocations] = useState<LocationType[]>(locationsRes);
  const [location, setLocation] = useState<string>("");

  const search = () => {
    try {
        
    } catch (error) {
        
    }
  }

  useEffect(() => {
    console.log(locations);
  }, []);


  return (
    <Container sx={{ mt: 10 }}>
      <form>
        <Autocomplete
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
                key={`${option.LocalizedName}-${option.AdministrativeArea.ID}-${option.Country.ID}`}
                component="li"
                // sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                {...props}
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
