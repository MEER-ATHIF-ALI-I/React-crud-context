import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from './UserContext';


export default function EditUsers(props) {
    const { userData, setUserData } = useContext(UserContext);
    const user = userData[props.match.params.id];
    const [name, setName] = useState(user.name);
    const [age, setAge] = useState(user.age);
    const [email, setEmail] = useState(user.email);
    const [imgurl, setImgurl] = useState(user.imgurl);
    const [description, setDescription] = useState(user.description);
    const history = useHistory();

    let handleSubmit = (e) => {
        e.preventDefault();
        userData[props.match.params.id] = { name, age, email, imgurl, description };
        setUserData([...userData])
        history.push('/users')
    }
    return (
        <div>
            <h3 className="page-title mb-4">Edit Existing User</h3>
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
                    <button className="btn btn-outline-primary btn-container-primary">Update</button>
                </div>
            </form>

        </div>
    )
}