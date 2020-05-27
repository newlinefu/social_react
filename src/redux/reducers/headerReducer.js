import logoHeaderImage from '../../resourses/headerLogoImage.jpg';

const defaultState = {
	headerLogo: logoHeaderImage,
	logoText: ['My', 'Social']
}

export default function headerReducer(state = defaultState, action) {
	return state;
}