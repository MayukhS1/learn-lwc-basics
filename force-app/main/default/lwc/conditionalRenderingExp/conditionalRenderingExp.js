import { LightningElement, track } from 'lwc';

export default class ConditionalRenderingExp extends LightningElement {
	@track disableButton = false;
	@track name = '';
	@track age;
	@track registeredUsers = [{id:'12', name: 'John', age: 20}, {id: '23', name: 'Jane', age: 30}];
	columns = [
		{ label: 'Name', fieldName: 'name'},
		{ label: 'Age', fieldName: 'age'}
	];
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
	}
	handleClick(){
		let id = Math.random().toString(36).substr(2, 9);
		this.registeredUsers = [...this.registeredUsers ,{id:id, name: this.name, age: this.age}];
		console.log( JSON.stringify(this.registeredUsers));
	}
	
}