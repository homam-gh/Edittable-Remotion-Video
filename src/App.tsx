import { Player, PlayerRef } from "@remotion/player";
import { useRef } from "react";
import Video from "./components/Video";
import Container from "@mui/material/Container";
import { Grid, Paper } from "@mui/material";
import Header from "./components/Header";

const App = () => {
  const playerRef = useRef<PlayerRef>(null);

  const pauseVid = () => {
    playerRef.current?.pause();
  };

  const playVid = () => {
    playerRef.current?.play();
  };

  return (
    <>
      <Header />
      <Container>
        <Grid container justifyContent="center">
          <Grid item>
            <Paper>
              <Player
                component={Video}
                compositionWidth={900}
                compositionHeight={600}
                durationInFrames={1000}
                fps={60}
                ref={playerRef}
                controls
                loop
                clickToPlay={false}
                spaceKeyToPlayOrPause={false}
                inputProps={{ playVid, pauseVid }}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default App;
