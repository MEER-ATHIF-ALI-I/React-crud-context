import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from './UserContext';


function CreateUsers() {
    const { userData, setUserData } = useContext(UserContext);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [imgurl, setImgurl] = useState('');
    const [description, setDescription] = useState('');
    const history = useHistory();

    let handleSubmit = (e) => {
        e.preventDefault();
        let obj = { name, age, email, imgurl, description };
        setUserData([...userData, obj])
        history.push('/users')
    }
    return (
        <div>
            <h3 className="page-title mb-4">Create New User</h3>
            <form onSubmit={handleSubmit} className="pb-3">
                <div className="row">
                    <div className="col-lg-6 mb-3">
                        <label htmlFor="name">Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="name" className="form-control" />
                    </div>
                    <div className="col-lg-6 mb-3">
                        <label htmlFor="age">Age</label>
                        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} id="age" className="form-control" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 mb-3">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" className="form-control" />
                    </div>
                    <div className="col-lg-6 mb-3">
                        <label htmlFor="imgurl">Image Url</label>
                        <input type="text" value={imgurl} onChange={(e) => setImgurl(e.target.value)} id="imgurl" className="form-control" />
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-lg-12">
                        <label htmlFor="description">Description</label>
                        <textarea type="text" value={description} onChange={(e) => setDescription(e.target.value)} id="description" className="form-control" rows="3"></textarea>
                    </div>
                </div>
                <div className="btn-container">
                    <button className="btn btn-outline-primary btn-container-primary">Create</button>
                </div>
            </form>

        </div>
    )
}

export default CreateUsers