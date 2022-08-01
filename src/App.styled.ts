import { styled } from '@mui/material';
import BackgroundImage from 'assets/images/home/bg-img.webp';

export const RootPageWrapper = styled('div')(({ theme }) => ({
	width: '100%',
	// height: '100%',
	overflow: 'clip',
	// backgroundImage: -moz-linear-gradient(to left, #00284b 0%, #020a1a 100%);

	...(theme.palette.mode === 'light'
		? { background: theme.palette.primaryLight.light }
		: {
				backgroundImage: 'linear-gradient(to right,#020a1a 0%,#00284b 50%,#020a1a 100%)',
		  }),
	// '&::before': {
	// 	content: '""',
	// 	position: 'fixed',
	// 	top: 0,
	// }
}));

export const RootPage = styled('div')(({ theme }) => ({
	position: 'relative',

	// overflow: 'hidden',
	...(theme.palette.mode === 'light'
		? {
				backgroundImage: 'unset',
		  }
		: {
				backgroundImage: `url('${BackgroundImage}')`,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundAttachment: 'fixed',
		  }),
}));

export const OpacityBackground = styled('div')(({ theme }) => ({
	...(theme.palette.mode === 'light'
		? {}
		: {
				opacity: '0.9',
				position: 'fixed',
				top: '0',
				width: '100%',
				height: '100%',
				backgroundImage: theme.palette.gradients.secondary,
				zIndex: '0',
		  }),
}));
