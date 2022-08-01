import { styled, Box } from '@mui/material';

export const Wrapper = styled(Box)(({ theme }) => ({
	cursor: 'pointer',
	borderRadius: '8px',
	padding: 10,
	...(theme.palette.mode === 'light'
		? {
				background: '#e0f6ff',
				color: '#186ca5',
				boxShadow:
					'0 1px 3px rgba(255, 255, 255, 0.12), 0 1px 2px rgba(213, 239, 255, 0.24)',
				'&:hover': {
					boxShadow: '1px 1px 17px 0px #c6dffa',
				},
		  }
		: {
				backgroundImage: theme.palette.gradients.third,
				color: '#ffffff',
				boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
				'&:hover': {
					boxShadow: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
				},
		  }),
}));
