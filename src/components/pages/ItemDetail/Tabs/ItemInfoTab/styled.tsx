import { styled, Typography, Box } from '@mui/material';
import { flexStyled } from 'components/Theme/CustomStyled';

export const CollectionName = styled(Typography)({
	color: '#27FF00',
	width: 'fit-content',
	cursor: 'pointer',
	'&:hover': {
		textDecoration: 'underline !important',
	},
});

export const ItemName = styled(Typography)({
	padding: '0.5rem 0',
});

export const ItemOwner = styled(Typography)({
	span: {
		color: '#27FF00',
		cursor: 'pointer',

		'&:hover': {
			textDecoration: 'underline !important',
		},
	},
});

export const BoxSubContent = styled(Box)({
	...flexStyled('start', 'center'),
});

export const BoxPrice = styled(Box)({
	...flexStyled('start', 'center'),
});
