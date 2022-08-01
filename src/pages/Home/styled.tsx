import { styled, Box, Stack, Typography } from '@mui/material';
import BackgroundImage from 'assets/images/home/bg-img.webp';

export const FirstSectionHomePage = styled(Box)(({ theme }) => ({
	width: '100%',
	// opacity: 0.9,
	position: 'absolute',
	top: 0,
	zIndex: 3,
	overflow: 'hidden',

	...(theme.palette.mode === 'light'
		? {
				background: theme.palette.primaryLight.main,
		  }
		: {
				backgroundImage: theme.palette.gradients.secondary,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'bottom',
		  }),
}));

export const OpacityBackground = styled(Box)(({ theme }) => ({
	position: 'absolute',
	top: 0,
	width: '100%',
	height: '100%',
	backgroundImage: `url('${BackgroundImage}')`,
	opacity: 0.1,
	zIndex: -2,
}));

export const HeaderSection = styled(Stack)(({ theme }) => ({
	alignItems: 'center',
	margin: '0 auto',
}));

export const MainHeader = styled(Typography)(({ theme }) => ({
	textAlign: 'center',
}));

export const SubHeader = styled(Typography)(({ theme }) => ({
	textAlign: 'center',
	maxWidth: 800,
	color: theme.palette.grey['500'],
}));

export const ButtonViewAll = styled('span')(({ theme }) => ({
	cursor: 'pointer',
	fontWeight: 600,
	opacity: 1,
	marginLeft: 10,
	background:
		'linear-gradient(52deg, #00ff36 7%, #00ee57 17%, #00c5ad 37%, #00a4f1 52%, #0b98fc 88%, #0066ff 94%)',
	backgroundClip: 'text',
	WebkitBackgroundClip: 'text',
	WebkitTextFillColor: 'transparent',

	'&:hover': {
		textDecoration: 'underline !important',
	},
}));

export const ImgCatchAFish = styled(Box)(({ theme }) => ({
	textAlign: 'center',
	width: 750,
	height: 600,
	margin: 'auto',
	img: {
		width: '100%',
		height: '100%',
	},
	'@media screen and (max-width:1500px)': {
		width: 700,
		height: 600,
	},
	'@media screen and (max-width:992px)': {
		width: 600,
		height: 500,
	},
	'@media screen and (max-width:683px)': {
		width: '80%',
		height: 'auto',
	},
}));
