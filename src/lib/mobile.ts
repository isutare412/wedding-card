import MobileDetect from 'mobile-detect';

const mobileDetect = new MobileDetect(navigator.userAgent);

export function isMobile(): boolean {
	return mobileDetect.mobile() !== null;
}
