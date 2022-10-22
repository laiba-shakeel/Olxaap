import React from "react";
import { AppBar, Toolbar, Typography, InputBase } from "@mui/material";
import { styled } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import Add from "@mui/icons-material/Add";

const Navbar = () => {
  const StyledImage = styled("img")({
    height: "60px",
    width: "80px",
  });
  const SearchOne = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "10px 45px",
    border: "2px solid black",
    borderRadius: theme.shape.borderRadius,
    width: "100%",
    height: "100%",
    margin: '5px'
  }));
  const LoginButton = styled("button")(({ theme }) => ({
    border: "none",
    color: "blue",
    height: "45px",
    // width: '20vw',
    marginTop: "5px",
    marginLeft: "10px",
    fontSize: "22px",
    fontWeight: "bold",
    backgroundColor: "transparent",
    borderBottom: "2px solid black",
  }));

  const SellButton = styled("button")(({ theme }) => ({
    border: "2px solid black",
    color: "white",
    height: "45px",
    width: '25vw',
    marginTop: "7px",
    marginLeft: "10px",
    fontSize: "22px",
    fontWeight: "bold",
    backgroundColor: "black",
    // borderBottom: "2px solid black",
    borderRadius: '5px'
  }));
  return (
    <>
    <div
      sx={{ justifyContent: "center", display: "flex" }}>
      <AppBar sx={{ backgroundColor: "transparent" , position: 'relative'}}>
        <Toolbar
          sx={{
            justifyContent: "center",
            alignItems: "center",
           
          }}>
          <Typography variant="h6" sx={{ display: "flex" }}>
            <StyledImage
              src="/images/olx-logo-vector.png"
              alt=""
              className="logo"
              sx={{
                padding: "7px",
              }}
            />
            <SearchOne>
              <SearchIcon sx={{ color: "black" }} />
              <InputBase placeholder="Search..."></InputBase>{" "}
            </SearchOne>
            <SearchOne>
              <SearchIcon sx={{ color: "black" }} />
              <InputBase placeholder="Search..."></InputBase>{" "}
            </SearchOne>
            <LoginButton variant="outlined">Login</LoginButton>
            <SellButton variant="outlined">
            <Add/> Sell
              </SellButton>
          </Typography>
        </Toolbar>
      </AppBar>
 
    </div>
       </>
  );
};

export default Navbar;
