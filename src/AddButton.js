import React, { Component } from "react";

import { Fab, makeStyles } from "@material-ui/core";
import Add from "@material-ui/icons/Add";

const AddEventButton = () => {
  const useStyles = makeStyles(theme => ({
    fab: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    }
  }));
  const classes = useStyles();

  return (
    <Fab color="primary" aria-label="add" className={classes.fab}>
      <Add />
    </Fab>
  );
};

export default AddEventButton;
