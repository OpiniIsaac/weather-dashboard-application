import { alpha, styled } from '@mui/material/styles';

const StyledSearchIconWrapperComponent = styled('div')(({ theme }) => ({
 padding: theme.spacing(0, 2),
 height: '100%',
 position: 'absolute',
 pointerEvents: 'none',
 display: 'flex',
 alignItems: 'center',
 justifyContent: 'center',
 // Add a subtle color to the icon for better visibility
 color: alpha(theme.palette.text.primary, 0.7),
}));

const SearchIconWrapper = ({ children }) => {
 return <StyledSearchIconWrapperComponent>{children}</StyledSearchIconWrapperComponent>;
};

export default SearchIconWrapper;
