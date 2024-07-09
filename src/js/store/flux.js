const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: []
        },
        actions: {
            fetchContacts: async () => {
                try {
                    const response = await fetch('https://playground.4geeks.com/contact/agendas/chriskeith01/contacts');
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const data = await response.json();
                    setStore({ contacts: data.contacts });
                } catch (error) {
                    console.error("Error fetching contacts:", error);
                }
            },
            createContact: async (contact) => {
                try {
                    const mappedContact = {
                        name: contact.full_name,
                        email: contact.email,
                        phone: contact.phone,
                        address: contact.address
                    };

                    const response = await fetch('https://playground.4geeks.com/contact/agendas/chriskeith01/contacts', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(mappedContact)
                    });
                    if (response.ok) {
                        getActions().fetchContacts();
                    } else {
                        console.error("Error creating contact:", response.statusText);
                    }
                } catch (error) {
                    console.error("Error creating contact:", error);
                }
            },
            updateContact: async (id, updatedContact) => {
                try {
                    const mappedContact = {
                        name: updatedContact.full_name,
                        email: updatedContact.email,
                        phone: updatedContact.phone,
                        address: updatedContact.address
                    };

                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/chriskeith01/contacts/${id}`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(mappedContact)
                    });
                    if (response.ok) {
                        getActions().fetchContacts();
                    } else {
                        console.error("Error updating contact:", response.statusText);
                    }
                } catch (error) {
                    console.error("Error updating contact:", error);
                }
            },
            deleteContact: async (id) => {
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/chriskeith01/contacts/${id}`, {
                        method: 'DELETE'
                    });
                    if (response.ok) {
                        getActions().fetchContacts();
                    } else {
                        console.error("Error deleting contact:", response.statusText);
                    }
                } catch (error) {
                    console.error("Error deleting contact:", error);
                }
            }
        }
    };
};

export default getState;