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
      "CO is a common industrial hazard resulting from the incomplete burning of material containing carbon such as natural gas, gasoline, kerosene, oil, propane, coal, or wood.",

      props.stats[0] + " μg/m3"
    ),
    createData(
      "NH₃",
      "Ammonia is a common pollutant because it is relatively abundant but can be toxic, causing lower reproduction and growth, or death. The neutral, un-ionized form of ammonia in water is highly toxic to fish and other aquatic life.",
      props.stats[1] + " μg/m3"
    ),
    createData(
      "NO",
      "High levels of nitrogen dioxide are harmful to vegetation—damaging foliage, decreasing growth or reducing crop yields. Nitrogen dioxide can fade and discolour furnishings and fabrics, reduce visibility, and react with surfaces.",
      props.stats[2] + " μg/m3"
    ),
    createData(
      "NO₂",
      "NO₂ primarily gets in the air from the burning of fuel. NO2 forms from emissions from cars, trucks and buses, power plants, and off-road equipment. Breathing air with a high concentration of NO2 can irritate airways in the human respiratory system",

      props.stats[3] + " μg/m3"
    ),
    createData(
      "O₃",
      "When inhaled, ozone can damage the lungs. Relatively low amounts can cause chest pain, coughing, shortness of breath and throat irritation. Ozone may also worsen chronic respiratory diseases such as asthma and compromise the ability of the body to fight respiratory infections.",

      props.stats[4] + " μg/m3"
    ),
    createData(
      "PM₂.₅",
      "Particulate matter of 2.5 micrometres are formed as a result of burning fuel and chemical reactions that take place in the atmosphere. These particles are also the primary reason for occurrence of smog. ",
      props.stats[5] + " μg/m3"
    ),
    createData(
      "PM₁₀",
      "Particulate matter contains microscopic solids or liquid droplets that are so small that they can be inhaled and cause serious health problems. Some particles less than 10 micrometers in diameter can get deep into your lungs and some may even get into your bloodstream. However, particles less than 2.5 micrometers in diameter, also known as fine particles or PM2.5, pose the greatest risk to health.",
      props.stats[6] + " μg/m3"
    ),
    createData(
      "SO₂",
      "The largest source of SO₂ in the atmosphere is the burning of fossil fuels by power plants and other industrial facilities. Short-term exposures to SO₂ can harm the human respiratory system and make breathing difficult. ",
      props.stats[7] + " μg/m3"
    ),
  ];
  const classes = useStyles();
  return (
    <div>
      {props.stats.length > 0 ? (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="caption table">
            <caption>
              <Link href="/sources">Sources</Link>
            </caption>
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
