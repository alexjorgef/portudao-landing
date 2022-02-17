import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { TableHead } from '@mui/material';

// @ts-ignore
function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  // @ts-ignore
  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  // @ts-ignore
  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  // @ts-ignore
  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  // @ts-ignore
  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

interface Props {
  rows: any;
}

export default function Events({ rows }: Props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  // @ts-ignore
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // @ts-ignore
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const tableHeaders = [
    'Country',
    'Name',
    'Description',
    'Start date',
    'End date',
    'Expiry date',
    'Fancy name',
    'Image',
    'Virtual event',
    'Private event',
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }}>
        <TableHead>
          <TableRow>
            {tableHeaders.map((th) => (
              <TableCell align="center" style={{ width: 160 }}>
                {th}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          )
            // @ts-ignore
            .map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" align="center">
                  {row.country}
                </TableCell>
                <TableCell style={{ width: 160 }} align="left">
                  {row.name}
                </TableCell>
                <TableCell style={{ width: 160 }} align="left">
                  {row.description}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {row.start_date}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {row.end_date}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {row.expiry_date}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {row.fancy_id}
                </TableCell>
                <TableCell align="center">
                  <img src={row.image_url} alt="" style={{ width: 160 }} />
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {row.virtual_event ? 'yes' : 'no'}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {row.private_event ? 'yes' : 'no'}
                </TableCell>
              </TableRow>
            ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
