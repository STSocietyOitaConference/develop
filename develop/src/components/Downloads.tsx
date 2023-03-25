import React from "react";
import {
  Typography,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
} from "@mui/material";
import Button from "@mui/material/Button";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

const dowonloadInfo = [
  ["ダウンロードファイル名1", "備考1"],
  ["ダウンロードファイル名2", "備考2"],
  ["ダウンロードファイル名3", "備考3"],
  ["ダウンロードファイル名4", "備考4"],
  ["ダウンロードファイル名5", "備考5"],
];
function Downloads() {
  return (
    <Grid
      id="item_8"
      className="Downloads"
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12} md={6}>
        <Typography variant="h4" align="center" mb={3}>
          各種ダウンロード
        </Typography>
      </Grid>
      <Grid
        item
        container
        justifyContent="center"
        alignItems="center"
        xs={12}
        md={6}
      >
        <Grid item container justifyContent="space-between" xs={12} md={6}>
          {dowonloadInfo.map((item: any, _index) => {
            return (
              <ListItem disablePadding key={_index}>
                <Grid item container>
                  <ListItemButton
                    sx={{
                      borderBottom: 0.5,
                      borderColor: "#e6e6e6",
                    }}
                    disableRipple
                  >
                    <Grid
                      item
                      container
                      flexDirection="column"
                      justifyContent="space-between"
                    >
                      <ListItemText
                        primary={item[0]}
                        primaryTypographyProps={{
                          color: "secondary",
                        }}
                      />
                      <ListItemText
                        primary={item[1]}
                        primaryTypographyProps={{
                          color: "secondary",
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="label"
                      >
                        <FileDownloadOutlinedIcon />
                      </IconButton>
                    </Grid>
                  </ListItemButton>
                </Grid>
              </ListItem>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Downloads;
