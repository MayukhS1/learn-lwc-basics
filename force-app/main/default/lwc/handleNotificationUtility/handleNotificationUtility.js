import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class HandleNotificationUtility extends LightningElement {

    /**
     * Following are the public properties which are used outside the component
     * To make it a public property, we need to use @api decorator
     * Note: if you have a public boolean property, then initialize it with false, as  when you pass it to parent / child component 
     * it will evaluate as true by default.
     * Note: if you have a public object property, then consider initializing it with {} (as by default it is undefined)
     */
    @api notificationDetails = {
        title: 'Success',
        message: 'This is a default message',
        variant: 'success',
        mode: 'dismissable',
        duration: 5000
    };
    @api showNotification(){
        const toastEvent = new ShowToastEvent({
            title: this.notificationDetails.title,
            message: this.notificationDetails.message,
            variant: this.notificationDetails.variant,
            mode: this.notificationDetails.mode,
            duration: this.notificationDetails.duration
        });
        this.dispatchEvent(toastEvent);
    }
}