import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { init, send } from "@emailjs/browser";
import { Grid, TextField, Button } from "@mui/material";

function Inquiry() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  return (
    <div id="item_8" className="Inquiry" style={{ textAlign: "center" }}>
      <Grid container direction="column" justifyContent="center">
        <Grid item>
          <Typography variant="h4">問い合わせ</Typography>
        </Grid>
        <form onSubmit={(e) => onSubmit(e)}>
          <Grid item>
            <TextField
              id="name"
              label="お名前"
              variant="outlined"
              size="small"
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              id="email"
              label="メールアドレス"
              variant="outlined"
              size="small"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid>
            <TextField
              id="content"
              label="お問い合わせ内容"
              multiline
              variant="outlined"
              size="medium"
              onChange={(e) => setContent(e.target.value)}
            />
          </Grid>

          <Button type="submit" variant="contained" size="large">
            送信
          </Button>
        </form>
      </Grid>
    </div>
  );
}
const onSubmit = async (props: any) => {
  // 必要なIDをそれぞれ環境変数から取得
  const userID = process.env.REACT_APP_PUBLICKEY || "";
  const serviceID = process.env.REACT_APP_SERVICE_ID || "";
  const templateID = process.env.REACT_APP_TEMPLATE_ID || "";
  // emailJS初期化
  console.log("aaa");
  init(userID);

  // emailJS送信データを定義
  const params = {
    from_name: props.name,
    email: props.email,
    content: props.content,
  };

  // emailJS送信
  try {
    await send(serviceID, templateID, params, userID);
    alert("送信成功");
  } catch (error) {
    // 送信失敗したらalertで表示
    alert(error);
  }
};
export default Inquiry;
