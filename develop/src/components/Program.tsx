import React from "react";
import { ListItemText, Link, Typography, Button, Grid } from "@mui/material";

function Program() {
  return (
    <div
      id="item_4"
      className="AbstractRegistration"
      style={{ height: "40vh" }}
    >
      <Grid
        container
        flexDirection="column"
        textAlign="center"
        alignItems="center"
        sx={{ mx: "auto" }}
      >
        <Grid item mb={"4vh"}>
          <ListItemText
            primary="プログラム"
            primaryTypographyProps={{
              variant: "h4",
            }}
            secondary="大会の概要およびプログラムを下記からダウンロードできます。"
            secondaryTypographyProps={{
              variant: "h6",
              color: "secondary",
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

export default Program;
