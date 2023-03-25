import React from "react";
import YouTube from "react-youtube";
import { Grid, Typography, Link } from "@mui/material";

function IntroVideo() {
  return (
    <div className="IntroVideo" id="item_1">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Grid item>
          <Typography variant="h4" mb={3}>
            紹介ビデオ
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            display: { xs: "none", sm: "block" },
          }}
        >
          <YouTube videoId="lTRiuFIWV54" />
        </Grid>
        <Grid
          item
          sx={{
            display: { xs: "block", sm: "none" },
          }}
        >
          <Link>こちらをクリック</Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default IntroVideo;
