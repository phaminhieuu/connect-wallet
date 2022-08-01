import { styled, Stack, Typography, Avatar } from '@mui/material';

export const CollectionItem = styled(Stack)(({ theme }) => ({
	cursor: 'pointer',
	borderRadius: '8px',
	padding: 10,
	transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
	position: 'relative',
	color: '#ffffff',
	// boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
	'&:hover': {
		boxShadow: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
	},
	'&::before': {
		content: '""',
		borderRadius: '8px',
		left: 0,
		padding: 10,
		position: 'absolute',
		height: '100%',
		width: '100%',
		backgroundColor: theme.palette.primary.light,
		// opacity: 0.9,
		zIndex: -1,
	},
}));

export const CollectionRank = styled(Typography)(({ theme }) => ({
	width: 20,
	fontWeight: 'bold',
	opacity: 0.5,
	marginRight: 10,
	marginLeft: 10,
}));

export const CollectionAvatar = styled(Avatar)(({ theme }) => ({
	width: 50,
	height: 50,
	backgroundColor: 'black',
}));

export const CollectionInfo = styled(Stack)(({ theme }) => ({
	marginLeft: 10,
}));

export const NameInfo = styled(Typography)(({ theme }) => ({
	fontWeight: 100,
}));

export const TotalInfo = styled(Typography)(({ theme }) => ({
	opacity: 0.5,
}));
