import React from "react";
import { Typography, CardMedia, Grid, Link, Box } from "@mui/material";
import SampleImage1 from "../assets/advertisement/sample1.jpg";
function Advertisement() {
  const myStyleBox = {
    width: { sm: 200, md: 200 },
  };
  const adList = [
    {
      name: "うまるちゃん",
      image: SampleImage1,
      url: "http://banner.keizine.net/archives/7760/",
    },
    {
      name: "うまるちゃん",
      image: SampleImage1,
      url: "http://banner.keizine.net/archives/7760/",
    },
    {
      name: "うまるちゃん",
      image: SampleImage1,
      url: "http://banner.keizine.net/archives/7760/",
    },
    {
      name: "うまるちゃん",
      image: SampleImage1,
      url: "http://banner.keizine.net/archives/7760/",
    },
    {
      name: "うまるちゃん",
      image: SampleImage1,
      url: "http://banner.keizine.net/archives/7760/",
    },
    {
      name: "うまるちゃん",
      image: SampleImage1,
      url: "http://banner.keizine.net/archives/7760/",
    },
  ];
  return (
    <Grid
      id="item_10"
      className="Advertisement"
      style={{ maxHeight: "90vh" }}
      container
      flexDirection={"column"}
      alignItems="center"
      spacing={{ xs: 4, sm: 8, md: 4 }}
    >
      <Grid item>
        <Typography variant="h4" mb={3}>
          広告
        </Typography>
      </Grid>
      <Grid
        item
        container
        flexDirection={"row"}
        spacing={{ xs: 4, sm: 8, md: 12 }}
        justifyContent="space-around"
        alignItems="center"
        xs={4}
        sm={6}
        md={6}
      >
        {adList.map((_item, _index) => (
          <Grid item xs={4} md={3} key={_index}>
            <Link href={_item.url}>
              <CardMedia
                component="img"
                image={_item.image}
                title={"広告" + _index}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default Advertisement;
