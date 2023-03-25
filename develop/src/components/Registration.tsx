import React from "react";
import { Typography, ListItemText, Button, Link, Grid } from "@mui/material";

function Registration() {
  return (
    <div id="item_6" className="Registration" style={{ height: "40vh" }}>
      <Grid
        container
        flexDirection="column"
        textAlign="center"
        alignItems="center"
        sx={{ mx: "auto" }}
      >
        <Grid item mb={"4vh"}>
          <ListItemText
            primary="参加登録"
            primaryTypographyProps={{
              variant: "h4",
            }}
            secondary="案内のダウンロードと、大会の参加登録ができます。"
            secondaryTypographyProps={{
              color: "secondary",
              variant: "h6",
            }}
          />
        </Grid>
        <Grid
          item
          mb={"8vh"}
          container
          direction={"column"}
          alignItems="canter" //左寄せよせの場合はflex-start
        >
          <Typography variant="h6" color="secondary">
            演題登録期間：2023/2/10 ～2023/3/10
          </Typography>
        </Grid>
        <Grid item>
          <Grid container>
            <Grid item mr={"5vw"}>
              <Button variant="contained" size="large">
                <Link href="src\dawnload\img.png" download="img.png">
                  <Typography style={{ color: "white" }}>
                    ダウンロード
                  </Typography>
                </Link>
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" size="large">
                <Link href="src\dawnload\img.png" download="img.png">
                  <Typography style={{ color: "white" }}>
                    登録フォーム
                  </Typography>
                </Link>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Registration;
