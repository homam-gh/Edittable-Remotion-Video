import { AppBar, Container, Grid, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static" sx={{ marginBottom: 6, padding: 2 }}>
      <Container maxWidth="lg">
        <Grid container justifyContent="center">
          <Grid item>
            <Typography variant="h4" component="h4">
              Video inline Editting Test
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
};

export default Header;
