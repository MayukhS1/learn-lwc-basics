import { LightningElement,track } from 'lwc';

export default class PrivatePublicPropertiesExample extends LightningElement {
    // following are reactive private properties, which are not exposed to the template | so no need to use @track
    // all properties are reactive since spring 2020 update of salesforce
    time = 0;
    rate = 0;
    principal = 0;
    simpleInterest = 0;
    // any non primitive property should be decorated with @track in order to re-render the template
    @track interestMessage = {
        displayMessage: true,
        messageBody: '',
        className: 'slds-text-color_default'
    };
    handleTimeChange (event) { 
        this.time = Number(event.target.value);
    }
    handleRateChange (event) {
        this.rate = Number(event.target.value);
    }
    handlePrincipalChange (event) {
        this.principal = Number(event.target.value);
    }
    calculateSimpleInterest(){
        this.simpleInterest = (this.principal * this.rate * this.time) / 100;
        let taxAmount = this.simpleInterest * 0.18;
        this.interestMessage = {
            displayMessage: true,
            messageBody: `Tax Amount: ${taxAmount}`,
            className: 'slds-text-color_success'
        };
        if(taxAmount>500){
            const handleNotification =  this.template.querySelector('c-handle-notification-utility');
            handleNotification.notificationDetails = {
                title: 'Warning',
                message: 'Consider suggesting an ROI reduction plan!',
                variant: 'warning',
                mode: 'dismissable',
                duration: 5000
            };
            handleNotification.showNotification();
        }
    }
}