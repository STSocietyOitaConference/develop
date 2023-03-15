import React from "react";
import Typography from "@mui/material/Typography";

import { format, parse } from "date-fns";

function createInfo(inputDate: any, info: any) {
  const formatday = format(
    parse(inputDate, "yyyyMMdd", new Date()),
    "yyyy年.MM.dd"
  );
  return formatday + "：" + info;
}
const informations = [
  createInfo(20230312, "コーラックを飲みました。今日も快便です。"),
  createInfo(20230311, "便秘になりました。"),
  createInfo(20230310, "痔の手術しました。今日も快便です。"),
  createInfo(20230309, "痔になりました。お尻が痛みます。"),
  createInfo(20231231, "今日も快便です"),
];
function WhatNew() {
  return (
    <div className="WhatNew">
      <Typography style={{ color: "red" }}>新着情報</Typography>
      <div>
        {informations.map((item, index) => {
          return <Typography key={index}>{item}</Typography>;
        })}
      </div>
    </div>
  );
}

export default WhatNew;
