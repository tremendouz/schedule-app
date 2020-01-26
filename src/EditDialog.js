import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField
} from "@material-ui/core";

const EditDialog = ({ open, title, description, event, onSubmit, onClose }) => {
  const [eventFromList, setEventFromList] = useState(event);

  const updateEventName = e => {
    let newEvent = { ...eventFromList };
    newEvent.name = e.target.value;
    setEventFromList(newEvent);
  };

  const updateEventDate = e => {
    let newEvent = { ...eventFromList };
    newEvent.date = e.target.value;
    setEventFromList(newEvent);
  };

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
              value={eventFromList.name}
              onChange={updateEventName}
            />
          </div>
          <div>
            <TextField
              id="outlined-password-input2"
              placeholder="dd/mm/yyyy"
              label="Date"
              type="text"
              value={eventFromList.date}
              onChange={updateEventDate}
            />
          </div>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={() => onSubmit(eventFromList)}>
          Add
        </Button>
        <Button color="primary" onClick={onClose} autoFocus>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditDialog;
