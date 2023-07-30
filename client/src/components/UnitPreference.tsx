import { Container } from "@mui/material";
import CustomSwitch from "./CustomSwitch";
import { useAppDispatch } from "../app/hooks";
import { setUnit } from "../features/unit/unitSlice";

const UnitPreference = () => {
  const dispatch = useAppDispatch()
  const handleSetUnitPreverence = (ev:any) => {
    if(ev.target.checked) {
      dispatch(setUnit("C"))
    } else {
      dispatch(setUnit("F"))
    }
    
  }
  return (
    <Container>
      <CustomSwitch
        leftLabel="F"
        rightLabel="C"
        onClick={handleSetUnitPreverence}
      />
    </Container>
  );
};

export default UnitPreference;
