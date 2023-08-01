import { FC } from "react";
import { Snackbar } from "@mui/material";
import { Alert } from "@mui/material";

interface CustomMuiToastProps {
  errorDis: boolean;
  errorCon: string;
}

const CustomMuiToast: FC<CustomMuiToastProps> = ({ errorCon, errorDis }) => {
  return (
    <Snackbar open={errorDis}>
      <Alert severity="error">Error: {errorCon}</Alert>
    </Snackbar>
  );
};

export default CustomMuiToast;
