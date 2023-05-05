import * as React from "react";
import { Typography } from "@mui/material";
interface IAppProps {}

const Header: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div className="main">
      <div className="boxheader">
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <p style={{ fontSize: "28px", fontWeight: 600, color: "green" }}>
              Be My Guest
            </p>
            <img
              src="avater.jpeg"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                border: "solid",

                objectFit: "contain",
              }}
            />
          </div>

          <p
            style={{
              fontSize: "28px",
              fontWeight: "10px",
              marginTop: "-20px",
              color: "black",
            }}
          >
            Host Rental in Warri,Delta State
          </p>
        </div>
        <h3>{"Book Now >"}</h3>
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
