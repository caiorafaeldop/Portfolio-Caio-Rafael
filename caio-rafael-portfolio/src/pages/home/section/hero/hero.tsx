import { styled } from "@mui/material";
import Avatar from "../../../../assets/images/eu.jpg";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";

const Hero = () => {
  const StyledHero = styled("div")(() => ({
    backgroundColor: "#1B2432",
    height: "100%vh",
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
              <Grid container display="flex" justifyContent="center">
                <Grid
                  item
                  xs={12}
                  md={6}
                  display="flex"
                  justifyContent="center"
                >
                  <Button>
                    <EmailIcon />
                    Contact me
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  display="flex"
                  justifyContent="center"
                >
                  <Button>
                    <DownloadIcon />
                    Download CV
                  </Button>
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
