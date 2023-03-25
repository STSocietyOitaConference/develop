import React from "react";
import ImageDialog from "../dialog/ImageDialog";
import { Typography, Box, Grid, Card, CardMedia } from "@mui/material";
import SampleImage1 from "../dawnload/sampleImage_cat.jpg";
import SampleImage2 from "../dawnload/sampleImage_dog.jpg";
export interface bookParam {
  id: number;
  image: string;
}
const bookList = [
  {
    id: 1,
    image: SampleImage1,
  },
  {
    id: 2,
    image: SampleImage2,
  },
];
function Schedule() {
  return (
    <div className="Schedule" id="item_5" style={{ height: "100vh" }}>
      <Typography variant="h4" style={{ textAlign: "center" }} mb={3}>
        スケジュール
      </Typography>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        margin="auto"
        spacing={3}
      >
        {bookList.map((item, index) => (
          <Grid item key={index} xs={5}>
            <ImageDialog {...item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Schedule;
