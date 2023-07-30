import {
  Toolbar,
  Drawer,
  IconButton,
  Link,
  AppBar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItem,
  ToggleButtonGroup,
  ToggleButton,
  Paper,
  Typography,
  Stack,
  Box,
} from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink as RouterLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setUnit, unitSelector } from "../features/unit/unitSlice";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { modeSelector, setMode } from "../features/mode/modeSlice";

const headersData = [
  {
    label: "Weather",
    href: "/",
    icon: <HomeIcon />,
  },
  {
    label: "Favorites",
    href: "/favorites",
    icon: <FavoriteIcon />,
  },
];

const Header = () => {
  const [mobileView, setMobileView] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [displaySettings, setDisplaySettings] = useState(false);

  const unit = useAppSelector(unitSelector);
  const mode = useAppSelector(modeSelector);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setMobileView(true)
        : setMobileView(false);
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const handleClickSettings = () => {
    setDisplaySettings(!displaySettings);
  };

  const settingsPrefernce = () => {
    return (
      <Stack spacing={2}>
        <Box>
          <Typography mt={2}>Unit:</Typography>
          <ToggleButtonGroup
            value={unit}
            onChange={(ev: any) => {
              dispatch(setUnit(ev.target.value));
            }}
          >
            <ToggleButton disabled={unit === "C" ? true : false} value={"C"}>
              C
            </ToggleButton>
            <ToggleButton disabled={unit === "F" ? true : false} value={"F"}>
              F
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Box>
          <Typography>Mode:</Typography>
          <ToggleButtonGroup
            value={mode}
            onChange={(ev: any) => {
              dispatch(setMode(ev.target.value));
            }}
          >
            <ToggleButton
              disabled={mode === "dark" ? true : false}
              value={"dark"}
            >
              <DarkModeIcon />
            </ToggleButton>
            <ToggleButton
              disabled={mode === "light" ? true : false}
              value={"light"}
            >
              <LightModeIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Stack>
    );
  };

  const displayDesktop = () => {
    return (
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <div>{getMenuButtons()}</div>
        <IconButton onClick={handleClickSettings}>
          <SettingsIcon />
        </IconButton>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () => setDrawerOpen(true);
    const handleDrawerClose = () => setDrawerOpen(false);

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div>{getDrawerChoices()}</div>
          <ListItem>
            <ListItemButton onClick={handleClickSettings}>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary={"Settings"} />
            </ListItemButton>
          </ListItem>
          {displaySettings ? (
            <ListItem>
              <ListItemText primary={"My Prefernces"} />
              {settingsPrefernce()}
            </ListItem>
          ) : null}
        </Drawer>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ icon, label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <ListItem>
            <ListItemButton>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        </Link>
      );
    });
  };

  const getMenuButtons = () => {
    return headersData.map(({ icon, label, href }) => {
      return (
        <RouterLink
          key={label}
          to={href}
          className={({ isActive }) => {
            return isActive ? "active" : "";
          }}
        >
          <IconButton>{icon}</IconButton>
        </RouterLink>
      );
    });
  };

  return (
    <Box>
      <AppBar sx={{bgcolor: mode === "light" ? "#ffffff" : "inherit"}}>{mobileView ? displayMobile() : displayDesktop()}</AppBar>

      {!mobileView && displaySettings ? (
        <Paper
          sx={{
            position: "absolute",
            minHeight: "25vh",
            top: "56px",
            right: 0,
            zIndex: 2,
            padding: 2,
          }}
        >
          <Typography mt={2} variant="h5">
            My Preferences:
          </Typography>
          {settingsPrefernce()}
        </Paper>
      ) : null}
    </Box>
  );
};

export default Header;
