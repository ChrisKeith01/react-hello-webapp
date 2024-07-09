import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import DeleteModal from './DeleteModal';

const ContactsCard = ({ contact }) => {
    const { actions } = useContext(Context);
    const [showModal, setShowModal] = useState(false);

    const handleDelete = () => {
        actions.deleteContact(contact.id);
        setShowModal(false);
    };

    return (
        <div style={{ marginBottom: '20px', border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
            <div style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ flexGrow: 1 }}>
                    <h5 style={{ margin: '0 0 10px' }}>{contact.name}</h5>
                    <p style={{ margin: '0 0 5px' }}><i className="fas fa-map-marker-alt"></i> {contact.address}</p>
                    <p style={{ margin: '0 0 5px' }}><i className="fas fa-phone"></i> {contact.phone}</p>
                    <p style={{ margin: '0 0 5px' }}><i className="fas fa-envelope"></i> {contact.email}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                    <Link to={`/edit/${contact.id}`} style={{ marginBottom: '5px' }} className="btn btn-primary">
                        <i className="fas fa-edit"></i>
                    </Link>
                    <button className="btn btn-danger" onClick={() => setShowModal(true)}>
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            </div>
            <DeleteModal show={showModal} onClose={() => setShowModal(false)} onConfirm={handleDelete} />
        </div>
    );
};

export default ContactsCard;