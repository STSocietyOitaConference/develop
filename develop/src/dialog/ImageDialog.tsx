import React, { useState } from "react";
import { Link, Box, Typography, Dialog } from "@mui/material";

const ImageDialog = (props: any) => {
  /** 画面パラメータ */
  const [dialogOpenF, setDialogOpenF] = useState(false);

  /**
   * コンポーネントに渡す引数
   */
  const compProps = {
    bookShowDialog: {
      open: dialogOpenF, //ダイアログの表示プローアティ
      bookParam: props.bookParam,
      onClose: () => setDialogOpenF(false), //ダイアログ非表示処理
    },
    showLink: {
      href: "#",
      onClick: () => setDialogOpenF(true), //ダイアログ表示処理
    },
  };

  return (
    <Box>
      {/* 画像の表示 */}
      <Link {...compProps.showLink}>
        <img
          src={props.bookParam.image}
          alt={"スケジュール" + props.bookParam.id}
          style={{ maxWidth: props.bookParam.sizePer + "%" }}
        />
      </Link>

      {/* ダイアログの表示 */}
      <Dialog {...compProps.bookShowDialog} />
    </Box>
  );
};

export default ImageDialog;
