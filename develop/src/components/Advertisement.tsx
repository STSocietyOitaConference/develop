import React from "react";
import { Typography, CardMedia, Grid, Link, Box } from "@mui/material";
import SampleImage1 from "../assets/advertisement/sample1.jpg";
import { useInView } from "react-intersection-observer";
import "animate.css";
function Advertisement() {
  const myStyleBox = {
    //width: { sm: 200, md: 500 },
  };
  const { ref, inView } = useInView({
    // オプション
    rootMargin: "-50px", // ref要素が現れてから50px過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });
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
    <Box
      className="Advertisement"
      sx={myStyleBox}
      justifyContent="center"
      ref={ref}
    >
      <Grid
        id="item_10"
        container
        flexDirection={"column"}
        alignItems="center"
        className="animate__animated animate__fadeInUp"
      >
        <Grid item>
          {inView && (
            <Typography variant="h4" mb={3}>
              広告
            </Typography>
          )}
        </Grid>
        <Grid
          item
          container
          flexDirection={"row"}
          //spacing={{ xs: 4, sm: 8, md: 1 }}
          justifyContent="space-around"
          alignItems="center"
          xs={4}
          sm={6}
          md={6}
          gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))"
          gap=" 24px 6%"
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
    </Box>
  );
}

export default Advertisement;
