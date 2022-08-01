/* eslint-disable @typescript-eslint/no-unused-vars */
const LOCAL_STORAGE_VARS = {
	THEME_MODE: 'themeMode',
	SIGNATURE: 'signature',
	SIGNATURE_MESSAGE_HASH: 'signatureMessageHash',
};

// THEME_MODE
const getThemeMode = (): string | null => {
	return localStorage.getItem(LOCAL_STORAGE_VARS.THEME_MODE);
};

const setThemeMode = (value: 'light' | 'dark'): void => {
	localStorage.setItem(LOCAL_STORAGE_VARS.THEME_MODE, value);
};

const removeThemeMode = (): void => {
	localStorage.removeItem(LOCAL_STORAGE_VARS.THEME_MODE);
};

// SIGNATURE
const getSignature = (): string | null => {
	return localStorage.getItem(LOCAL_STORAGE_VARS.SIGNATURE);
};

const setSignature = (value: string): void => {
	localStorage.setItem(LOCAL_STORAGE_VARS.SIGNATURE, value);
};

const removeSignature = (): void => {
	localStorage.removeItem(LOCAL_STORAGE_VARS.SIGNATURE);
};

// SIGNATURE_MESSAGE_HASH
const getSignatureMessageHash = (): string | null => {
	return localStorage.getItem(LOCAL_STORAGE_VARS.SIGNATURE_MESSAGE_HASH);
};

const setSignatureMessageHash = (value: string): void => {
	localStorage.setItem(LOCAL_STORAGE_VARS.SIGNATURE_MESSAGE_HASH, value);
};

const removeSignatureMessageHash = (): void => {
	localStorage.removeItem(LOCAL_STORAGE_VARS.SIGNATURE_MESSAGE_HASH);
};

const loginLocalStorage = (data: any) => {
	const sigArr: { [key: string]: any } = {};

	const sigAlt = localStorage.getItem('signatureAlt');

	if (sigAlt) {
		const retrieve: { [key: string]: any } = JSON.parse(sigAlt);
		console.log('re', retrieve);

		if (!retrieve[data.userAddress]) {
			retrieve[data.userAddress] = data;
			localStorage.setItem('signatureAlt', JSON.stringify(retrieve));
		}
	} else {
		sigArr[data.userAddress] = data;
		localStorage.setItem('signatureAlt', JSON.stringify(sigArr));
	}
};

const getUserInfo = (userAddress: string) => {
	const retrieve = localStorage.getItem('signatureAlt');
	let userInfo: { [key: string]: any } = {};
	if (retrieve) {
		userInfo = JSON.parse(retrieve);
		return userInfo;
	} else return null;
};

export const localStorageCustom = {
	getThemeMode,
	setThemeMode,
	removeThemeMode,
	getSignature,
	setSignature,
	removeSignature,
	getSignatureMessageHash,
	setSignatureMessageHash,
	removeSignatureMessageHash,
	loginLocalStorage,
	getUserInfo,
};
