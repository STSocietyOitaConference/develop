import { Grid, ListItemText, CardMedia } from "@mui/material";
import PosterImage from "../assets/poster/sample_640x480.png";

function Title() {
  return (
    <Grid
      id="item_0"
      className="Title"
      style={{ height: "100vh" }}
      container
      textAlign="center"
      alignItems="center"
      flexDirection={"column"}
    >
      <Grid item>
        <ListItemText
          primary="第12回日本言語聴覚士協会 九州地区学術集会 大分大会"
          primaryTypographyProps={{
            variant: "h4",
            fontWeight: "bold",
            textAlign: "center",
          }}
          secondary="2022年1月29日〜30日"
          secondaryTypographyProps={{
            variant: "h6",
            textAlign: "center",
            color: "secondary",
          }}
        />
      </Grid>
      <Grid item>
        <ListItemText
          primary="つむぐ"
          primaryTypographyProps={{
            variant: "h3",
            fontWeight: "bold",
            textAlign: "center",
          }}
          secondary="〜サブタイトル〜"
          secondaryTypographyProps={{
            variant: "h6",
            textAlign: "center",
            color: "secondary",
          }}
        />
      </Grid>
      <Grid>
        <CardMedia
          component="img"
          image={PosterImage}
          title={"学会ポスター"}
          style={{ height: "50vh" }}
        />
      </Grid>
    </Grid>
  );
}

export default Title;
