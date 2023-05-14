import { LightningElement } from 'lwc';

export default class LifeCycleHooks extends LightningElement {
    constructor(){
        //super() method is used to call the constructor of the parent class
        //This is required as we're extend LightningElement class
        super();
        /*  constructor is called only once when the component is created
         *  it's called before the component is inserted into the DOM
         *  You will not be able to access the DOM in the constructor
         */
        console.log('Constructor Called');
    }

    connectedCallback(){
        /**
         * Connected Callback is called when the component is inserted into the DOM
         * You can access the DOM in this method and perform any DOM manipulation
         * This method can be called multiple times
         * This method is called after the constructor
         */
        console.log('Connected Callback Called');
    }

    //render(){
        /**
         * Call this method to update the UI. It may be called before or after connectedCallback()
         * It’s rare to call render() in a component. The main use case is to conditionally render a template.
         */
    //}
    

    renderedCallback(){
        /**
         * Rendered Callback is called when the component is rendered
         * This method can be called multiple times
         * This method is called after the connectedCallback
         * This method is called after every render of the component
         */
        console.log('Rendered Callback Called');
    }

    disconnectedCallback(){
        /**
         * Disconnected Callback is called when the component is removed from the DOM
         * This method can be called multiple times
         * This method is called after the renderedCallback
         */
        console.log('Disconnected Callback Called');
    }

    errorCallback(error, stack){
        /**
         * Error Callback is called when there is an error in the component
         * This method can be called multiple times
         */
        console.log('Error Callback Called',error);
        console.log('Stack Trace',stack);
    }
}