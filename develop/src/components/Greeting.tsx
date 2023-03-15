import { Typography } from "@mui/material";
import React from "react";

function Greeting() {
  return (
    <div id="item_1" className="Greeting">
      <Typography variant="h4" style={{ textAlign: "center" }}>
        会長挨拶
        <br />
      </Typography>
      <Typography style={{ textAlign: "right" }}>
        <br />
        第10回日本言語聴覚士協会九州地区学術集会福岡大会
      </Typography>
      <Typography style={{ textAlign: "right" }}>大会長　佐藤文保</Typography>
      <Typography style={{ textAlign: "right" }}>
        （独立行政法人　国立病院機構　福岡東医療センター）
        <br />
        <br />
        <br />
      </Typography>
      <Typography>
        <br />
        中級コースでは、最新のトピックスやガイドライン等もおりまぜながら講義を展開いただき、さらにレベルアップをめざすことができるような専門的知見に触れる講義としています。
        日常感じる疑問や不安に応えることができるよう、実践に即した内容を取り扱います。
        本学会の強みである多職種で協力した講義構成とし、チーム医療の視点を強化することで、現場での効果的な実践に即時的につながる学びの時間を提供します。
        自己研鑽ならびにスタッフ教育にご活用ください。
        ※効果的な学習のために「ICUセミナー（初級）」の受講からお勧めします。
      </Typography>
    </div>
  );
}

export default Greeting;
