import Typography from "@mui/material/Typography";
import React from "react";

function Summary() {
  return (
    <div id="item_2" className="Summary">
      <Typography variant="h4" style={{ textAlign: "center" }}>
        概要
      </Typography>
      <Typography>
        ・市民講座
        <br />
        　　「最近、聞き漏らすことがないですか？聞こえについてお話しします。」
      </Typography>
      <Typography>
        ・シンポジウム➀
        <br />
        　　「特別支援教育」
      </Typography>
      <Typography>
        ・シンポジウム⓶
        <br />
        　　「失語症者向け意思疎通支援者養成事業の推進に向けて」
      </Typography>
      <Typography>
        ・Web教育講演
        <br />
        　　「高次脳機能障害者の自動車運転」
      </Typography>
      <Typography>
        ・Web教育講演
        <br />
        　　「子どもの口腔機能を診るポイント～歯科の立場から～」
      </Typography>
      <Typography>
        ・一般演題・ポスター発表・共催セミナー　他
        <br />
        生涯学習プログラム専門講座も同日開催
      </Typography>
    </div>
  );
}

export default Summary;
