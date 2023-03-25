import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { init, send } from "@emailjs/browser";
import { Grid, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";

const myStyleText = {
  "& .MuiInputBase-input": {
    color: "#6f5b41", // 入力文字の色
  },
  width: { sm: 200, md: 500 },
};
const myStyleBox = {
  width: { sm: 200, md: 500 },
};
const myStyleButtonSmall = {
  "&:hover": {
    backgroundColor: "#fbae49",
  },
  display: { xs: "block", sm: "none" },
};
const myStyleButtonLarge = {
  "&:hover": {
    backgroundColor: "#fbae49",
  },
  display: { xs: "none", sm: "block" },
};

function Inquiry() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [emailErrorName, setEmailErrorName] = React.useState("");
  const [emailErrorAddress, setEmailErrorAddress] = React.useState("");
  const [emailErrorContent, setEmailErrorContent] = React.useState("");
  return (
    <Box id="item_9" className="Inquiry" style={{ height: "70vh" }}>
      <form onSubmit={(e) => onSubmit(e)}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item mb={7}>
            <Typography variant="h4">お問い合わせ</Typography>
          </Grid>
          <Grid item xs={6} md={6} mb={3}>
            <TextField
              id="name"
              label="お名前"
              variant="outlined"
              size="small"
              error={!!emailErrorName}
              helperText={emailErrorName}
              onChange={(e) => setName(e.target.value)}
              color="secondary"
              sx={myStyleText}
            />
          </Grid>
          <Grid item xs={6} md={6} mb={3}>
            <TextField
              id="email"
              label="メールアドレス"
              variant="outlined"
              size="small"
              error={!!emailErrorAddress}
              helperText={emailErrorAddress}
              onChange={(e) => setEmail(e.target.value)}
              color="secondary"
              sx={myStyleText}
            />
          </Grid>
          <Grid item xs={6} md={6} mb={3}>
            <TextField
              id="content"
              label="お問い合わせ内容"
              multiline
              variant="outlined"
              error={!!emailErrorContent}
              helperText={emailErrorContent}
              onChange={(e) => setContent(e.target.value)}
              color="secondary"
              sx={myStyleText}
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <Box
              sx={myStyleBox}
              display="flex"
              alignItems="flex-end"
              justifyContent="flex-end"
            >
              <Button
                type="submit"
                variant="contained"
                size="small"
                sx={myStyleButtonSmall}
              >
                送信
              </Button>
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={myStyleButtonLarge}
              >
                送信
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
const onSubmit = async (props: any) => {
  props.preventDefault();

  // 必要なIDをそれぞれ環境変数から取得
  const userID = process.env.REACT_APP_PUBLICKEY || "";
  const serviceID = process.env.REACT_APP_SERVICE_ID || "";
  const templateID = process.env.REACT_APP_TEMPLATE_ID || "";
  // emailJS初期化
  console.log("aaa");
  init(userID);

  // emailJS送信データを定義
  const params = {
    formName: props.name,
    email: props.email,
    content: props.content,
  };

  // emailJS送信
  try {
    // if (!props.name) {
    //   props.setEmailErrorName("お名前を入力してください");
    // } else if (!props.email) {
    //   props.setEmailErrorAddress("メールアドレスを入力してください");
    // } else if (!props.content) {
    //   props.setEmailErrorContent("お問い合わせ内容を入力してください");
    // } else {}
    await send(serviceID, templateID, params, userID);
    alert("送信成功");
  } catch (error) {
    // 送信失敗したらalertで表示
    alert(error);
  }
};

export default Inquiry;
