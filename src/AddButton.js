import React from "react";
import { Fab, makeStyles } from "@material-ui/core";
import Add from "@material-ui/icons/Add";
import AlertDialog from "./AlertDialog";
import { ConfirmationDialog } from "./ConfirmationDialog";

const AddEventButton = () => {
  const useStyles = makeStyles(theme => ({
    fab: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    }
  }));
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dialogProps = {
    open: open,
    title: "Add New Event",
    description: "Fill all the fields below.",
    onSubmit: handleClickOpen,
    onClose: handleClose
  };

  // const openDialog = () => {
  //   return <ConfirmationDialog {...dialogProps}></ConfirmationDialog>;
  // };

  return (
    <div>
      <ConfirmationDialog {...dialogProps}></ConfirmationDialog>
      <Fab
        color="primary"
        aria-label="add"
        className={classes.fab}
        onClick={handleClickOpen}
      >
        <Add />
      </Fab>
    </div>
  );
};

export default AddEventButton;
