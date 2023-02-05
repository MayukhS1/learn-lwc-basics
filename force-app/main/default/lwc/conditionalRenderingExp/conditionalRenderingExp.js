import { LightningElement, track } from 'lwc';

export default class ConditionalRenderingExp extends LightningElement {
	@track disableButton = false;
	@track name = '';
	@track age;
	handleNameChange(event){
		this.name = event.target.value;
	}
	handleAgeChange(event){
		this.age = event.target.value;
		if(this.age < 18 || this.age > 60){
			this.disableButton = true;
		}else{
			this.disableButton = false;
		}
		console.log('age: '+this.age);
		console.log('disableButton: '+this.disableButton);
	}
	handleClick(){		
	}
}