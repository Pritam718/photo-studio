//import styled from "@emotion/styled";
import { alpha,styled,ThemeProvider, useTheme } from "@mui/system";
import  InputBase  from "@mui/material/InputBase";
import SearchIcon from '@mui/icons-material/Search';
import { CssBaseline, createTheme } from '@mui/material';

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

const StyledInputBase = styled(InputBase)(({ theme }) => {
    console.log(theme,"hlwwwwwwwwwwwwwwwwwwww")
    return {
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }});

  const Search = styled('div')(({ theme }) => {
    console.log(theme,"hiiiiiiiiiiiiiiiiiiiiiiiiiiii")
    return {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }
  });

function NavSearch() {
  const theme = useTheme();

  return (
    <ThemeProvider theme={createTheme(theme)}><Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search></ThemeProvider>
    
  )
}

export default NavSearch