import * as React from "react";
import { Typography } from "@mui/material";
interface IAppProps {}

const Header: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div className="main">
      <Typography>Be My Guest</Typography>
      <Typography>Host Rental in Warri,Delta State</Typography>
      <div>
        <div className="heads">
          <div>Home</div>
          <div>About</div>
          <div>Contact Me</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
