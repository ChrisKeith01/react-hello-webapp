import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import ContactsCard from '../component/ContactsCard';

const Contact = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.fetchContacts();
    }, []); // Empty dependency array ensures this runs only once

    return (
        <div className="container">
            <div className="d-flex justify-content-between" style={{ marginBottom: '20px' }}>
                <h1>Contacts</h1>
                <Link to="/add">
                    <button className="btn btn-success">Add new contact</button>
                </Link>
            </div>
            <div className="row">
                {Array.isArray(store.contacts) && store.contacts.length > 0 ? (
                    store.contacts.map((contact) => (
                        <ContactsCard key={contact.id} contact={contact} />
                    ))
                ) : (
                    <p>No contacts available.</p>
                )}
            </div>
        </div>
    );
};

export default Contact;