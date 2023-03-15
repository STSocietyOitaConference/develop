import React from "react";
import { ListItemText } from "@mui/material";

function Title() {
  return (
    <div className="Title">
      <ListItemText
        primary="第12回日本言語聴覚士協会 九州地区学術集会 大分大会"
        primaryTypographyProps={{
          color: "#222222",
          variant: "h4",
          fontWeight: "bold",
          textAlign: "center",
        }}
        secondary="2022年1月29日〜30日"
        secondaryTypographyProps={{
          color: "red",
          variant: "h6",
          textAlign: "center",
        }}
      />
      <ListItemText
        primary="つむぐ"
        primaryTypographyProps={{
          color: "#222222",
          variant: "h3",
          fontWeight: "bold",
          textAlign: "center",
        }}
        secondary="〜言語聴覚士としての責務〜"
        secondaryTypographyProps={{
          color: "#22222",
          variant: "h6",
          textAlign: "center",
        }}
      />
    </div>
  );
}

export default Title;
