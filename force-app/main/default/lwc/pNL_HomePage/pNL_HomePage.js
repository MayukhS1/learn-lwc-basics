import { LightningElement, track } from 'lwc';

export default class PNL_HomePage extends LightningElement {
	heroImageUrl = 'https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68';
	authorDescription = 'My name is John Doe and I am a software developer with 5 years of experience. I love to work on challenging projects and constantly strive to improve my skills.';
	@track timer = 'Thanks for joining us!'; 
	connectedCallback(){
		setTimeout(() => {
			this.timer = 'Gone in 2 seconds';
		}, 2000);
		
	}
}