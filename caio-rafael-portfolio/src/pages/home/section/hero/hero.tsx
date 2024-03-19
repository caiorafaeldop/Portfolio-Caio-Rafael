import { styled, Grid, Container, Typography } from "@mui/material";
import Avatar from "../../../../assets/images/eu.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import theme from "../../../../theme";
import StyledButton from "../../../../components/StyledButton/StyledButton";

const Hero = () => {
  const StyledHero = styled("div")(() => ({
    backgroundColor: theme.palette.secondary.main,
    height: "100%vh",
    display: "flex",
    alignItems: "center",
  }));
  const StyledImg = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%",
  }));

  return (
    <>
      Hero
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <StyledImg src={Avatar} />
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography color="primary" variant="h1" textAlign="center">
                Caio Rafael
              </Typography>
              <Typography color="primary" variant="h2" textAlign="center">
                Desenvolvimento Web
              </Typography>
              <Grid
                container
                display="flex"
                justifyContent="center"
                spacing={3}
              >
                <Grid
                  item
                  xs={12}
                  md={6}
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButton>
                    <EmailIcon />
                    <Typography>Contact me</Typography>
                  </StyledButton>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButton>
                    <DownloadIcon />
                    <Typography>Download CV</Typography>
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
