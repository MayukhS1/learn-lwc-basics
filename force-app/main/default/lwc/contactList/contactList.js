/* eslint-disable @lwc/lwc/no-api-reassignments */
import { LightningElement, wire, api } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';
import { deleteRecord } from 'lightning/uiRecordApi';
import LightningConfirm from 'lightning/confirm';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ContactList extends LightningElement {
    @api searchTerm = '';
    @api contacts = [];

    // @wire(getContacts)
    // wiredContacts({ error, data }) {
    //     if (data) {
    //         this.contacts = data;
    //     } else if (error) {
    //         console.log('Error loading contacts:', error);
    //     }
    // }

    connectedCallback() {
        this.loadContacts();
    }

    @api
    get filteredContacts() {
        const searchTerm = this.searchTerm.toLowerCase();
        console.log('get method searchTerm', searchTerm);
        if (searchTerm === '') {
            return this.contacts;
        }
        return this.contacts.filter((contact) => {
            return (
                String(contact.Name).toLowerCase().includes(searchTerm) ||
                String(contact.Email).toLowerCase().includes(searchTerm) ||
                String(contact.Phone).toLowerCase().includes(searchTerm)
            );
        });
    }

    loadContacts() {
        getContacts()
            .then((result) => {
                this.contacts = result;
                console.log('contacts', this.contacts);
            })
            .catch((error) => {
                console.log('Error loading contacts:', error);
            });
    }

    handleSearch(event) {
        this.searchTerm = event.target.value;
    }

    async handleDelete(event) {
        const contactId = event.target.dataset.id;
        const result = await LightningConfirm.open({
            message: 'Are You sure you want to delete this contact?',
            variant: 'header',
            label: 'Confirm Delete'
        });
        if (!result) {
            return;
        }
        deleteRecord(contactId)
            .then(() => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Contact Deleted',
                        message: `Record deleted successfully | id: ${contactId}`,
                        variant: 'success'
                    })
                );
                this.contacts = this.contacts.filter((contact) => contact.Id !== contactId);
            })
            .catch((error) => {
                console.log('Error deleting contact:', error);
            });
    }
}