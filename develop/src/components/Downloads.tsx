import React from "react";

import {
  Typography,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Box,
} from "@mui/material";
import Button from "@mui/material/Button";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { useInView } from "react-intersection-observer";
import "animate.css";

const dowonloadInfo = [
  ["ダウンロードファイル名1", "備考1"],
  ["ダウンロードファイル名2", "備考2"],
  ["ダウンロードファイル名3", "備考3"],
  ["ダウンロードファイル名4", "備考4"],
  ["ダウンロードファイル名5", "備考5"],
];
function Downloads() {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: "-50px", // ref要素が現れてから50px過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });
  return (
    <Box id="item_8" ref={ref} className="Downloads">
      <Grid
        className="animate__animated animate__fadeInUp"
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        mb={6}
      >
        <Grid item xs={12} md={6}>
          {inView && (
            <Typography variant="h4" align="center" mb={3}>
              各種ダウンロード
            </Typography>
          )}
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
    </Box>
  );
}

export default Downloads;
