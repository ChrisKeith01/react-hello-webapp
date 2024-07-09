import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import ContactsCard from '../component/ContactsCard';

const Contact = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.fetchContacts();
    }, []);

    return (
        <div className="container">
            <div className="d-flex justify-content-between">
                <h1>Contacts</h1>
                <Link to="/add">
                    <button className="btn btn-success">Add new contact</button>
                </Link>
            </div>
            <div className="row">
                {store.contacts.map(contact => (
                    <ContactsCard key={contact.id} contact={contact} />
                ))}
            </div>
        </div>
    );
};

export default Contact