import React from "react";
import ImageDialog from "../dialog/ImageDialog";
import { Typography, Box, Grid } from "@mui/material";
import SampleImage1 from "../dawnload/image0.jpg";
import SampleImage2 from "../dawnload/gdApple1.png";
const bookList = [
  {
    id: 1,
    image: SampleImage1,
    sizePer: 30,
  },
  {
    id: 2,
    image: SampleImage2,
    sizePer: 30,
  },
];
function Schedule() {
  return (
    <div className="Schedule" id="item_4">
      <Typography variant="h4" style={{ textAlign: "center" }}>
        スケジュール
      </Typography>
      <Box mx={10} mt={4}>
        <Grid container spacing={1}>
          {bookList.map((item) => (
            <Grid key={item.id}>
              <ImageDialog bookParam={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Schedule;
