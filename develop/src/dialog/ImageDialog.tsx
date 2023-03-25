import * as React from "react";

import Dialog from "@mui/material/Dialog";

import { CardMedia } from "@mui/material";
import { bookParam } from "../components/Schedule";

export interface SimpleDialogProps {
  open: boolean;
  imageValue: string;
  onClose: () => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const handleClose = () => {
    props.onClose();
  };

  return (
    <Dialog onClose={handleClose} open={props.open} maxWidth={"lg"}>
      {
        <CardMedia
          component="img"
          image={props.imageValue}
          title={"スケジュール"}
          onClick={handleClose}
        />
      }
    </Dialog>
  );
}

export default function ImageDialog(props: bookParam) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <CardMedia
        component="img"
        image={props.image}
        title={"スケジュール" + props.id}
        onClick={handleClickOpen}
        style={{ height: "50vh" }}
      />
      <SimpleDialog
        imageValue={props.image}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
