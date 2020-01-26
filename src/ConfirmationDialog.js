import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField
} from "@material-ui/core";

export const ConfirmationDialog = ({
  open,
  title,
  description,
  onSubmit,
  onClose
}) => {
  return (
    <Dialog open={open}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <div> {description}</div>
          <div>
            <TextField
              id="outlined-password-input"
              label="Event Name"
              type="text"
            />
          </div>
          <div>
            <TextField
              id="outlined-password-input"
              placeholder="dd/mm/yyyy"
              label="Date"
              type="text"
            />
          </div>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={onSubmit}>
          Add
        </Button>
        <Button color="primary" onClick={onClose} autoFocus>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};
