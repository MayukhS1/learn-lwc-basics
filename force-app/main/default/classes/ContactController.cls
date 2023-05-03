public without sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts() {
        return [SELECT Id, FirstName, LastName, Name, Email, Phone, MailingAddress FROM Contact];
    }

    @AuraEnabled(cacheable=true)
    public static Contact getContact(String contactId) {
        return [SELECT Id, FirstName, LastName, Name, Email, Phone, MailingAddress FROM Contact WHERE Id = :contactId];
    }

    @AuraEnabled(cacheable=true)
    public static Contact createContact(Contact contact) {
        insert contact;
        return contact;
    }

    @AuraEnabled(cacheable=true)
    public static Contact updateContact(Contact contact) {
        update contact;
        return contact;
    }
}
