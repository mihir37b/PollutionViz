import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import "./Chemicals.css";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, info, num) {
  return { name, info, num };
}

export default function Chemicals(props) {
  const rows = [
    createData(
      "CO",
      "Carbon monoxide (chemical formula CO) is a colorless, odorless, and tasteless dangerous flammable gas that is slightly less dense than air. Carbon monoxide consists of one carbon atom and one oxygen atom. It is the simplest molecule of the Oxocarbon family. In coordination complexes the carbon monoxide ligand is called carbonyl",
      props.stats[0] + " μg/m3"
    ),
    createData(
      "NH₃",
      "Ammonia is a compound of nitrogen and hydrogen with the formula NH3. A stable binary hydride, and the simplest pnictogen hydride, ammonia is a colourless gas with a distinct characteristic of a pungent smell",
      props.stats[1] + " μg/m3"
    ),
    createData(
      "NO",
      "Nitric oxide (nitrogen oxide[5] or nitrogen monoxide) is a colorless gas with the formula NO. It is one of the principal oxides of nitrogen.",
      props.stats[2] + " μg/m3"
    ),
    createData(
      "NO₂",
      " Nitrogen dioxide is a chemical compound with the formula NO",

      props.stats[3] + " μg/m3"
    ),
    createData(
      "O₃",
      "Ozone (/ˈoʊzoʊn/), or trioxygen, is an inorganic molecule with the chemical formula O.",

      props.stats[4] + " μg/m3"
    ),
    createData(
      "PM₂.₅",
      "of 10 micrometers (μm) or less; fine particles, designated PM2.5, with a diameter of 2.5 μm or less;[6] ultrafine particles; and soot.",
      props.stats[5] + " μg/m3"
    ),
    createData(
      "PM₁₀",
      "Using a nationwide network of monitoring sites, EPA has developed ambient air quality trends for particle pollution, also called Particulate Matter (PM). PM10 describes inhalable particles, with diameters that are generally 10 micrometers and smaller.",
      props.stats[6] + " μg/m3"
    ),
    createData(
      "SO₂",
      "ulfur dioxide (SO2), a colorless, bad-smelling, toxic gas, is part of a larger group of chemicals referred to as sulfur oxides (SOx). These gases, especially SO2, are emitted by the burning of fossil fuels — coal, oil, and dies",
      props.stats[7] + " μg/m3"
    ),
  ];
  const classes = useStyles();
  return (
    <div>
      {props.stats.length > 0 ? (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="caption table">
            <caption>A basic table example with a caption</caption>
            <TableHead>
              <TableRow>
                <TableCell>Chemicals</TableCell>
                <TableCell>Definition</TableCell>
                <TableCell align="right">Concentration</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>{row.info}</TableCell>
                  <TableCell align="right">{row.num}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        ""
      )}
    </div>
  );
}
