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
  const StyledImg = styled("img")(({ theme }) => ({
    width: "80%",
    borderRadius: "50%",
    border: `3px solid ${theme.palette.primary.dark}`,
    alignItems: "center",
  }));

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <StyledImg src={Avatar} />
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography
                color="primary"
                variant="h1"
                textAlign="center"
                pb={2}
              >
                Caio Rafael
              </Typography>
              <Typography
                color="primary"
                variant="h2"
                textAlign="center"
                pb={2}
              >
                Portfolio Web
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
                  pt={3}
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
                  pt={3}
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
