import { Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useInView } from "react-intersection-observer";
import "animate.css";

function Summary() {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: "-50px", // ref要素が現れてから50px過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });
  return (
    <Box id="item_3" className="Summary" ref={ref}>
      {inView && (
        <Grid
          container
          className="animate__animated animate__fadeInUp"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{ mx: "auto" }}
          mb={6}
        >
          <Grid item mb={3}>
            <Typography variant="h4" mb={3}>
              概要
            </Typography>
          </Grid>
          <Grid
            item
            container
            direction={"column"}
            alignItems="flex-start"
            md={8}
          >
            <Typography color="secondary">
              ・市民講座
              <br />
              　　「最近、聞き漏らすことがないですか？聞こえについてお話しします。」
            </Typography>

            <Typography color="secondary">
              ・シンポジウム➀
              <br />
              　　「特別支援教育」
            </Typography>

            <Typography color="secondary">
              ・シンポジウム⓶
              <br />
              　　「失語症者向け意思疎通支援者養成事業の推進に向けて」
            </Typography>

            <Typography color="secondary">
              ・Web教育講演
              <br />
              　　「高次脳機能障害者の自動車運転」
            </Typography>

            <Typography color="secondary">
              ・Web教育講演
              <br />
              　　「子どもの口腔機能を診るポイント～歯科の立場から～」
            </Typography>

            <Typography color="secondary">
              ・一般演題・ポスター発表・共催セミナー　他
              <br />
              生涯学習プログラム専門講座も同日開催
            </Typography>
          </Grid>
        </Grid>
      )}
    </Box>
  );
}

export default Summary;
