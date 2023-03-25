import React from "react";
import {
  Typography,
  ListItem,
  ListItemButton,
  ListItemText,
  Grid,
} from "@mui/material";

import { format, parse } from "date-fns";

function formatDate(inputDate: any) {
  const formatday = format(
    parse(inputDate, "yyyyMMdd", new Date()),
    "yyyy年.MM.dd"
  );
  return formatday;
}
const informations = [
  [formatDate(20230312), "コーラックを飲みました。今日も快便です。"],
  [formatDate(20230311), "便秘になりました。"],
  [formatDate(20230310), "痔の手術しました。今日も快便です"],
  [formatDate(20230309), "痔になりました。お尻が痛みます。"],
  [formatDate(20231231), "今日も快便です"],
];
function WhatNew() {
  return (
    <Grid
      className="WhatNew"
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12} md={6}>
        <Typography variant="h4" align="center" mb={3}>
          お知らせ
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        {informations.map((item: any, _index) => {
          return (
            <ListItem disablePadding key={_index}>
              <Grid item container flexDirection={"column"}>
                <ListItemButton
                  sx={{
                    textAlign: "left",
                    borderBottom: 0.5,
                    borderColor: "#e6e6e6",
                  }}
                  disableRipple
                >
                  <Grid item>
                    <ListItemText
                      primary={item[0]}
                      primaryTypographyProps={{
                        color: "secondary",
                      }}
                    />
                  </Grid>
                  <Grid ml={4}>
                    <ListItemText
                      primary={item[1]}
                      primaryTypographyProps={{
                        color: "secondary",
                      }}
                    />
                  </Grid>
                </ListItemButton>
              </Grid>
            </ListItem>
          );
        })}
      </Grid>
    </Grid>
  );
}

export default WhatNew;
