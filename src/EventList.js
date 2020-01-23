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

  const rows = () => {
    const dateFormat = "HH:mm";
    const events = [...new Array(10)].map((_, index) => ({
      name: `Lab${index}`,
      date: dateFns.format(currentDate, dateFormat)
    }));
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
            <Edit></Edit>
            <Delete></Delete>
          </TableCell>
        </TableRow>
      )
    );
    return data;
  };

  const data = () => {};

  return (
    <TableContainer className={classes.container} component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>{columns()}</TableRow>
        </TableHead>
        <TableBody>{rows()}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default EventList;
