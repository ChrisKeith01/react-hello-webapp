import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../store/appContext';
import { useParams, useNavigate } from 'react-router-dom';

const AddContact = () => {
    const { store, actions } = useContext(Context);
    const [contact, setContact] = useState({ full_name: '', email: '', phone: '', address: '' });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            const existingContact = store.contacts.find(c => c.id === parseInt(id));
            if (existingContact) setContact(existingContact);
        }
    }, [id, store.contacts]);

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            await actions.updateContacts(id, contact);
        } else {
            await actions.createContacts(contact);
        }
        navigate('/');
    };

    return (
        <div className="container">
            <h1>{id ? 'Edit Contact' : 'Add a new contact'}</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" name="full_name" className="form-control" value={contact.full_name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" className="form-control" value={contact.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input type="text" name="phone" className="form-control" value={contact.phone} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input type="text" name="address" className="form-control" value={contact.address} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary">{id ? 'Update' : 'Save'}</button>
                <button type="button" className="btn btn-secondary" onClick={() => navigate('/')}>Cancel</button>
            </form>
        </div>
    );
};

export default AddContact;





