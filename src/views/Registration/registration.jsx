import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import PageNote from "../pageNote.jsx/pageNote";
import "./registration.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundImage: "linear-gradient(to bottom right, #002c83, #02266f)",
    color: theme.palette.common.white,
    border: 0,
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableBodyCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.body}`]: {
    backgroundImage: "linear-gradient(to bottom right, #002c83, #02266f)",
    fontSize: 16,
    minWidth: 40,
    color: theme.palette.common.white,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
    border: 0,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Registration() {
  const RegistrationNotes = [
    "Registration fees include all sessions, opening ceremony and banquet. On-site purchase of banquet tickets is not possible because restaurant advance booking is necessary. Extra banquet tickets can be purchased at the time of registration. An attendee's companion, willing to join the banquet, need to purchase a banquet ticket. Extra banquet ticket cost is 1500 INR for Indian participants and 20 USD for Non Indian participants.",
    "For paper publication, author registration is necessary. It has to be early registration, i.e., before 15 October, 2023. Late registration is possible for participation without paper. Additional 1 paper, will be allowed with an author registration. Additional page charge and additional paper fees are related to paper publication. The payment deadline is at the time of early registration.",
    "Students are encouraged to join IEEE for availing lower registration fees. Even a half-year student member is eligible for the discount rate.",
    "The original student ID or IEEE student card may be verified at ICOTL2023 conference registration desk.",
    "Details of the payment method will be announced soon.",
  ];

  return (
    <div className="registrationBody">
      <div style={{ textAlign: 'center', marginTop: '40px', fontSize: '2rem', fontWeight: 'bold' }}>
        Announcement will be made soon.
      </div>
      <div style={{ display: 'none' }}>
        <div className="tableTitle">
          <label>Early Bird Registration</label>
          <p>(Authors need early bird registration)</p>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }}>
            <TableHead>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell align="center">IEEE Member</StyledTableCell>
              <StyledTableCell align="center">Non IEEE Member</StyledTableCell>
              <StyledTableCell align="center">
                LifeTime IEEE Member
              </StyledTableCell>
              <StyledTableCell align="center">
                Student IEEE Member
              </StyledTableCell>
              <StyledTableCell align="center">
                Student Non IEEE Member
              </StyledTableCell>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <StyledTableBodyCell component="th" scope="row" align="center">
                  Indian
                </StyledTableBodyCell>
                <StyledTableCell align="center"> 8,000 INR</StyledTableCell>
                <StyledTableCell align="center"> 10,000 INR</StyledTableCell>
                <StyledTableCell align="center"> 4,000 INR</StyledTableCell>
                <StyledTableCell align="center"> 5,000 INR</StyledTableCell>
                <StyledTableCell align="center"> 6,000 INR</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableBodyCell component="th" scope="row" align="center">
                  For Indian Author
                </StyledTableBodyCell>
                <StyledTableCell align="center" colSpan={5}>
                  {" "}
                  For IEEE Publication, additional 2,000 INR per paper.<br/>
                  With one registration at most 2 papers could be published. Extra page charge 500 INR per page
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableBodyCell component="th" scope="row" align="center">
                  Non Indian
                </StyledTableBodyCell>
                <StyledTableCell align="center">250 USD</StyledTableCell>
                <StyledTableCell align="center">300 USD</StyledTableCell>
                <StyledTableCell align="center">125 USD</StyledTableCell>
                <StyledTableCell align="center">125 USD</StyledTableCell>
                <StyledTableCell align="center">150 USD</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableBodyCell component="th" scope="row" align="center">
                  For Non Indian Author
                </StyledTableBodyCell>
                <StyledTableCell align="center" colSpan={5}>
                  One paper free of charge. 1 additional paper for 25 USD
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <div className="tableTitle">
          <label>Late Registration</label>
          <p>
            (After February 6<sup>th</sup>, 2026)
          </p>
        </div>
        {/* <div style={{maxHeight:300}}>
          <PageNote/>
        </div> */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }}>
            <TableHead>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell align="center">IEEE Member</StyledTableCell>
              <StyledTableCell align="center">Non IEEE Member</StyledTableCell>
              <StyledTableCell align="center">
                LifeTime IEEE Member
              </StyledTableCell>
              <StyledTableCell align="center">
                Student IEEE Member
              </StyledTableCell>
              <StyledTableCell align="center">
                Student Non IEEE Member
              </StyledTableCell>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <StyledTableBodyCell component="th" scope="row" align="center">
                  Indian
                </StyledTableBodyCell>
                <StyledTableCell align="center"> 10,000 INR</StyledTableCell>
                <StyledTableCell align="center"> 12,000 INR</StyledTableCell>
                <StyledTableCell align="center"> 4,000 INR</StyledTableCell>
                <StyledTableCell align="center"> 7,000 INR</StyledTableCell>
                <StyledTableCell align="center"> 8,000 INR</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableBodyCell component="th" scope="row" align="center">
                  Foreigner
                </StyledTableBodyCell>
                <StyledTableCell align="center">300 USD</StyledTableCell>
                <StyledTableCell align="center">350 USD</StyledTableCell>
                <StyledTableCell align="center">125 USD</StyledTableCell>
                <StyledTableCell align="center">125 USD</StyledTableCell>
                <StyledTableCell align="center">150 USD</StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <div className="tableTitle">
          <label>Registration Notes</label>
        </div>
        <List>
          {RegistrationNotes.map((rule) => (
            <ListItem className="registrationNoteListItem">
              <ListItemIcon className="notesListItemIcon">
                <Brightness1Icon fontSize="10px" className="brightnessIcon" />
              </ListItemIcon>
              <ListItemText>{rule}</ListItemText>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
}
