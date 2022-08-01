/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
// styled
import './App.styled.ts';
// routes
import Router from './routes';
// state
import { selectAddress, selectChainId } from 'redux/slices/web3InfoSlice';
import { loginUser } from 'redux/actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
//actions
//utils
import { localStorageCustom } from 'utils';
//components
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { OpacityBackground, RootPage, RootPageWrapper } from 'App.styled';
import { BaseOptionChartStyle } from 'components/pages/ItemDetail/Tabs/GraphTab/BaseOptionChart';
// date/time lib
import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import ModalComingSoon from 'components/CustomUI/CommingSoonModal';
import { HashRouter } from 'react-router-dom';
//context
import SizeObserver from 'contexts/SizeObserver';
import ScrollObserver from 'contexts/ScrollObserver';
import AudioProvider from 'contexts/AudioContext';

declare let window: any;

function App() {
	let dispatch = useDispatch();

	// useSelector
	let userAddress = useSelector(selectAddress);
	let chainId = useSelector(selectChainId);

	// useEffect
	useEffect(() => {
		if (userAddress) {
			const retrieve = localStorage.getItem('signatureAlt');
			let userInfo: { [key: string]: any } = {};
			if (retrieve) {
				userInfo = JSON.parse(retrieve);
				if (!userInfo[userAddress]) dispatch(loginUser(userAddress));
			} else {
				dispatch(loginUser(userAddress));
			}
			// not need call back because "login and sign back"
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userAddress]);

	const getLibrary = (provider: any): Web3Provider => {
		const library = new Web3Provider(provider);
		library.pollingInterval = 12000;
		return library;
	};

	if (window.ethereum) {
		window.ethereum.on('accountsChanged', function (accounts: any) {
			localStorageCustom.removeSignature();
			localStorageCustom.removeSignatureMessageHash();
		});
	}

	return (
		<ScrollObserver>
			<SizeObserver>
				<AudioProvider>
					<LocalizationProvider dateAdapter={DateAdapter}>
						<RootPageWrapper>
							<RootPage>
								<HashRouter basename="/">
									<Web3ReactProvider getLibrary={getLibrary}>
										<OpacityBackground />
										<BaseOptionChartStyle />
										<Router />
									</Web3ReactProvider>
									{/* <ModalComingSoon /> */}
								</HashRouter>
							</RootPage>
						</RootPageWrapper>
					</LocalizationProvider>
				</AudioProvider>
			</SizeObserver>
		</ScrollObserver>
	);
}

export default App;
