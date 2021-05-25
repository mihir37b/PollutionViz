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
import { Link } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, info) {
  return { name, info };
}

export default function Sources() {
  const rows = [
    createData(
      "CO",
      <Link href="https://www.osha.gov/sites/default/files/publications/carbonmonoxide-factsheet.pdf">
        https://www.osha.gov/sites/default/files/publications/carbonmonoxide-factsheet.pdf
      </Link>
    ),
    createData(
      "NH₃",
      <Link href="https://maineenvironmentallaboratory.com/?p=1026#:~:text=Home%20%2F%20Ammonia%20(NH3),(now%20called%20ammonium%20ion)">
        https://maineenvironmentallaboratory.com/?p=1026#:~:text=Home%20%2F%20Ammonia%20(NH3),(now%20called%20ammonium%20ion)
      </Link>
    ),
    createData(
      "NO",
      <Link href="https://www.qld.gov.au/environment/pollution/monitoring/air/air-pollution/pollutants/nitrogen-oxides">
        https://www.qld.gov.au/environment/pollution/monitoring/air/air-pollution/pollutants/nitrogen-oxides
      </Link>
    ),
    createData(
      "NO₂",
      <Link href="https://www.epa.gov/no2-pollution/basic-information-about-no2">
        https://www.epa.gov/no2-pollution/basic-information-about-no2
      </Link>
    ),
    createData(
      "O₃",
      <Link href="https://www.epa.gov/indoor-air-quality-iaq/ozone-generators-are-sold-air-cleaners">
        https://www.epa.gov/indoor-air-quality-iaq/ozone-generators-are-sold-air-cleaners
      </Link>
    ),
    createData(
      "PM₂.₅",
      <Link href="https://www.airveda.com/blog/what-is-pm2-5-and-why-is-it-important#:~:text=are%20some%20examples.-,PM2.,take%20place%20in%20the%20atmosphere">
        https://www.airveda.com/blog/what-is-pm2-5-and-why-is-it-important#:~:text=are%20some%20examples.-,PM2.,take%20place%20in%20the%20atmosphere
      </Link>
    ),
    createData(
      "PM₁₀",
      <Link href="https://www.epa.gov/pm-pollution/particulate-matter-pm-basics">
        https://www.epa.gov/pm-pollution/particulate-matter-pm-basics
      </Link>
    ),
    createData(
      "SO₂",
      <Link href=" https://www.epa.gov/so2-pollution/sulfur-dioxide-basics">
        https://www.epa.gov/so2-pollution/sulfur-dioxide-basics
      </Link>
    ),
  ];
  const classes = useStyles();
  return (
    <div>
      <h1>Sources</h1>

      <Link href="/">Back Home</Link>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell>Chemicals</TableCell>
              <TableCell>Source</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.info}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
