import { Grid, ListItemText, CardMedia } from "@mui/material";
import PosterImage1 from "../assets/poster/sample_640x480.png";
import PosterImage2 from "../assets/poster/sample2.jpg";
import { Box } from "@mui/system";

function Title() {
  return (
    <Box>
      <Grid
        id="item_0"
        className="Title"
        container
        textAlign="center"
        alignItems="center"
        flexDirection={"column"}
        mb={12}
      >
        <Grid item className="animate__animated animate__fadeIn">
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
        <Grid
          item
          className="animate__animated animate__fadeIn animate__delay-1s"
          mb={6}
        >
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
        <Grid className="animate__animated animate__fadeIn animate__delay-2s">
          <CardMedia
            component="img"
            image={PosterImage2}
            title={"学会ポスター"}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Title;
