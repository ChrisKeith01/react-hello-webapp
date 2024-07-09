import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import DeleteModal from './DeleteModal';

const ContactCards = ({ contact }) => {
    const { actions } = useContext(Context);
    const [showModal, setShowModal] = useState(false);

    const handleDelete = () => {
        actions.deleteContacts(contact.id);
        setShowModal(false);
    };

    return (
        <div className="col-12 mb-3">
            <div className="card">
                <div className="card-body d-flex justify-content-between">
                    <div>
                        <h5 className="card-title">{contact.full_name}</h5>
                        <p className="card-text"><i className="fas fa-map-marker-alt"></i> {contact.address}</p>
                        <p className="card-text"><i className="fas fa-phone"></i> {contact.phone}</p>
                        <p className="card-text"><i className="fas fa-envelope"></i> {contact.email}</p>
                    </div>
                    <div className="btn-group">
                        <Link to={`/edit/${contact.id}`}>
                            <button className="btn btn-primary"><i className="fas fa-edit"></i></button>
                        </Link>
                        <button className="btn btn-danger" onClick={() => setShowModal(true)}>
                            <i className="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
            <DeleteModal show={showModal} onClose={() => setShowModal(false)} onConfirm={handleDelete} />
        </div>
    );
};

export default ContactCards;