import Search from "../components/Search";
import WeatherMain from "../components/WeatherMain";
import { Alert, Container, Snackbar } from "@mui/material";
import WeatherNext from "../components/WeatherNext";
import { motion } from "framer-motion";
import { fadeIn } from "./../assets/animations/framer-motion/animation";

const WeatherPage = () => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0, 1)}
      initial="hidden"
      animate="visible"
    >
      <Container>
        <Container sx={{ mt: 10, mb: 2 }}>
          <Search />
        </Container>
        <WeatherMain />
        <WeatherNext />
      </Container>

    </motion.div>
  );
};

export default WeatherPage;
