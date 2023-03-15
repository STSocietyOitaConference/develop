import React from "react";
import { Typography, ListItemText, Button, Link } from "@mui/material";

function Registration() {
  return (
    <div id="item_5" className="Registration" style={{ textAlign: "center" }}>
      <Typography variant="h4" style={{ textAlign: "center" }}></Typography>
      <Typography></Typography>
      <ListItemText
        primary="参加登録"
        primaryTypographyProps={{
          color: "#222222",
          variant: "h4",
          textAlign: "center",
        }}
        secondary="大会の概要およびプログラムを下記からダウンロードできます。"
        secondaryTypographyProps={{
          color: "red",
          variant: "h6",
          textAlign: "center",
        }}
      />
      <Button variant="contained" size="large">
        <Link href="src\dawnload\img.png" download="img.png">
          <Typography style={{ color: "white" }}>
            サンプルCSVダウンロード
          </Typography>
        </Link>
      </Button>
    </div>
  );
}

export default Registration;
