import * as React from "react";
import { Typography } from "@mui/material";
interface IAppProps {}

const Header: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div className="main">
      <div className="boxheader">
        <div>
          <Typography
            sx={{ fontSize: "28px", fontWeight: 600, color: "green" }}
          >
            Be My Guest
          </Typography>
          <Typography
            sx={{
              fontSize: "28px",
              fontWeight: "10px",
              marginTop: "-10px",
              color: "black",
            }}
          >
            Host Rental in Warri,Delta State
          </Typography>
        </div>
        <div>{"Book Now >"}</div>
      </div>
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
