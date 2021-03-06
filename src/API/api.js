import * as axios from 'axios';

const template = axios.create({
	withCredentials: true,
	headers: {
		'API-KEY': '83fd8385-fd5a-4334-a64d-212eb54840bb'
	},
	baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})
export const requests = {
	getUserForFollow: function(id) {
		return template.post(`follow/${id}`).then(response => response.resultCode);
	},
	getUserForUnfollow: function(id) {
		return template.delete(`follow/${id}`).then(response => response.resultCode);	
	},
	getAuth: function() {
		return template.get('auth/me').then(response => response.data);
	},
	getUsers: function(pageCount, pageNum) {
		return template
			.get(`users?count=${pageCount}&page=${pageNum}`)
			.then(response => response.data);
	},
	getProfile: function(id) {
		return template
			.get(`profile/${id}`)
			.then(response => response.data)
	},
	getStatus: function(id) {
		return template
			.get(`profile/status/${id}`)
	},
	updateStatus: function(status) {
		return template
			.put('profile/status', {
				status: status
			})
	},
	login: function(email, password, rememberMe = false, captcha) {
		return template
			.post('auth/login', {
				email: email,
				password: password,
				rememberMe: rememberMe,
				captcha: captcha
			})
	},
	logout: function() {
		return template
			.delete('auth/login')
	},

	setPhoto: function(photoFile) {
		const formData = new FormData()
		formData.append("image", photoFile)

		return template
			.put('profile/photo', formData, {
			    headers: {
			      'Content-Type': 'multipart/form-data'
			    }
			})
	},

	sendFormValues: function(fullName, profile) {
		return template
			.put('profile', {fullName: fullName, ...profile})
	},

	getCaptcha: function() {
		return template
				.get('security/get-captcha-url')
	}
}