import { AppBar, MenuItem, styled, Toolbar } from "@mui/material";

const NavBar = () => {
  const StyledToolBar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-evenly",
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
  }));
  return (
    <>
      <AppBar position="relative">
        <StyledToolBar>
          <MenuItem>About</MenuItem>
          <MenuItem>Skills</MenuItem>
          <MenuItem>Projects</MenuItem>
        </StyledToolBar>
      </AppBar>
    </>
  );
};

export default NavBar;
