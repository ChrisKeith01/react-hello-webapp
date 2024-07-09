const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts:[]
		},
		actions: {
			// Use getActions to call a function within a fuction
		fetchContacts: async () => {
			try {
				const response = await fetch('https://playground.4geeks.com/apis/fake/contact/chriskeith01');
				const data = await response.json();
				setStore({contacts: data});

			} catch (error) {
				console.error('error fetching contacts:', error);
			}
		},
		createContacts: async (contacts) => {
			try {
				const response = await fetch('https://playground.4geeks.com/apis/fake/contact/chriskeith01', {
					method: 'POST',
					headers: {'Content-Type': 'apllication/json'},
					body: JSON.stringify(contacts)
				});
				if (response.ok) {
					getActions().fetchContacts();
				} else {
					console.error('error creating contacts:', response.statusText)
				}
			} catch (error) {
				console.error('error creating contacts:', error); 
			}
		},
		updateContacts: async (id, updatedContacts) => {
			try {
				const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/chriskeith01/${id}`, {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(updatedContacts) 
				});
				if (response.ok) {
					getActions().fetchContacts();
				}
				else {
					console.error('error updating contacts:', response.statusText);
				}
			} catch (error) {
				console.error('error updating contacts:', error);
			}
		},
		deleteContacts: async (id) => {
			try {
				const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/chriskeith01/${id}`, {
					method: 'DELETE'
				});
				if (response.ok) {
					getActions().fetchContacts(); // Refresh the contact list
				} else {
					console.error("Error deleting contact:", response.statusText);
				}
			} catch (error) {
				console.error("Error deleting contact:", error);
			}
		},
		
		}
	};
};

export default getState;