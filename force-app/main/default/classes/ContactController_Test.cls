@isTest
private class ContactController_Test {
    @TestSetup
    static void makeData(){
        List<Contact> contacts = new List<Contact>();
        for(Integer i = 0; i < 5; i++){
            contacts.add(new Contact(
                FirstName = 'Test',
                LastName = 'Contact ' + i,
                Email = 'test' + i + '@test.com',
                Phone = '1234567890'
            ));
        }
        insert contacts;
    }
    
    @isTest
    static void testGetContacts(){
        Test.startTest();
        List<Contact> contacts = ContactController.getContacts();
        Test.stopTest();
        System.assertEquals(5, contacts.size(), 'unable to get 5 contacts');
        Contact contact = ContactController.getContact(contacts[0].Id);
        System.assertEquals(contacts[0].Id, contact.Id, 'unable to get contact');
    }

    @isTest
    static void testCreateContacts(){
        Test.startTest();
        Contact contact = new Contact(
            FirstName = 'Test',
            LastName = 'Contact',
            Email = 'test'+Math.random()+'@test.com',
            Phone = '1234567890'
        );
        ContactController.createContact(contact);
        Test.stopTest();
        List<Contact> contacts = ContactController.getContacts();
        System.assertEquals(6, contacts.size(), 'unable to create contact');
    }

    @isTest
    static void testUpdateContacts(){
        Test.startTest();
        List<Contact> contacts = ContactController.getContacts();
        Contact contact = contacts[0];
        contact.FirstName = 'Updated';
        ContactController.updateContact(contact);
        Test.stopTest();
        Contact updatedContact = ContactController.getContact(contact.Id);
        System.assertEquals('Updated', updatedContact.FirstName, 'unable to update contact');
    }
}