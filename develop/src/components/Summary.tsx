import { Typography, Grid } from "@mui/material";
import React from "react";

function Summary() {
  return (
    <div id="item_3" className="Summary" /*style={{ height: "40vh" }}*/>
      <Grid
        container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{ mx: "auto" }}
      >
        <Grid item mb={3} xs={12} md={6}>
          <Typography variant="h4" mb={3}>
            概要
          </Typography>
        </Grid>
        <Grid
          item
          container
          direction={"column"}
          alignItems="flex-start"
          xs={12}
          md={6}
        >
          <Typography color="secondary">
            ・市民講座
            <br />
            　　「最近、聞き漏らすことがないですか？聞こえについてお話しします。」
          </Typography>
        </Grid>
        <Grid
          item
          container
          direction={"column"}
          alignItems="flex-start"
          xs={12}
          md={6}
        >
          <Typography color="secondary">
            ・シンポジウム➀
            <br />
            　　「特別支援教育」
          </Typography>
        </Grid>
        <Grid
          item
          container
          direction={"column"}
          alignItems="flex-start"
          xs={12}
          md={6}
        >
          <Typography color="secondary">
            ・シンポジウム⓶
            <br />
            　　「失語症者向け意思疎通支援者養成事業の推進に向けて」
          </Typography>
        </Grid>
        <Grid
          item
          container
          direction={"column"}
          alignItems="flex-start"
          xs={12}
          md={6}
        >
          <Typography color="secondary">
            ・Web教育講演
            <br />
            　　「高次脳機能障害者の自動車運転」
          </Typography>
        </Grid>
        <Grid
          item
          container
          direction={"column"}
          alignItems="flex-start"
          xs={12}
          md={6}
        >
          <Typography color="secondary">
            ・Web教育講演
            <br />
            　　「子どもの口腔機能を診るポイント～歯科の立場から～」
          </Typography>
        </Grid>
        <Grid
          item
          container
          direction={"column"}
          alignItems="flex-start"
          xs={12}
          md={6}
        >
          <Typography color="secondary">
            ・一般演題・ポスター発表・共催セミナー　他
            <br />
            生涯学習プログラム専門講座も同日開催
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Summary;
