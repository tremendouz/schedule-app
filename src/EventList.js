import {
  Table,
  TableContainer,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  makeStyles,
  Button
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Delete from "@material-ui/icons/Delete";
import Edit from "@material-ui/icons/Edit";
import EditDialog from "./EditDialog";

import * as dateFns from "date-fns";

import React, { useState } from "react";

const EventList = () => {
  const useStyles = makeStyles({
    container: {
      maxWidth: 650,
      marginTop: 50
    },
    table: {
      width: 650
    },
    row: {
      height: 50
    },
    cell: {
      display: "flex",
      alignItems: "center"
    },
    icon: {
      marginLeft: 10,
      marginRight: 10
    }
  });

  const columns = () => {
    const columnNames = ["Event Name", "Date", "RSVP"];
    let columns = [];
    columnNames.forEach(e => columns.push(<TableCell>{e}</TableCell>));
    return columns;
  };

  const currentDate = new Date();
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const dateFormat = "HH:mm";
  const [events, setEvents] = React.useState(
    [...new Array(10)].map((_, index) => ({
      id: index,
      name: `Lab${index}`,
      date: dateFns.format(currentDate, dateFormat)
    }))
  );

  const [selectedEvent, setSelectedEvent] = React.useState(events[1]);

  const handleClickOpen = event => {
    console.log("setting selected event");
    setSelectedEvent(event);
    console.log("...");
    console.log(event);
    setOpen(true);
  };

  const removeEvent = event => {
    const array = events.filter(e => e.id != event.id);
    setEvents(array);
    setOpen(false);
  };

  const editEvent = event => {
    console.log("editing");
    console.log(event);
    const newArray = events.map(e => (e.id === event.id ? { ...event } : e));
    setEvents(newArray);
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let dialogProps = {
    open: open,
    title: "Edit The Event",
    description: "Change the fields below.",
    event: selectedEvent,
    onSubmit: editEvent,
    onClose: handleClose
  };

  const rows = () => {
    let data = [];
    events.forEach(e =>
      data.push(
        <TableRow className={classes.row}>
          <TableCell align="left">{e.name}</TableCell>
          <TableCell align="left">{e.date}</TableCell>
          <TableCell align="left" className={classes.cell}>
            <Button variant="contained" color="primary">
              RSVP
            </Button>
            <Edit
              className={classes.icon}
              onClick={() => handleClickOpen(e)}
            ></Edit>
            <Delete
              className={classes.icon}
              onClick={() => removeEvent(e)}
            ></Delete>
          </TableCell>
        </TableRow>
      )
    );
    return data;
  };

  const data = () => {};

  return (
    <div>
      <EditDialog {...dialogProps}></EditDialog>
      <TableContainer className={classes.container} component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>{columns()}</TableRow>
          </TableHead>
          <TableBody>{rows()}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default EventList;
