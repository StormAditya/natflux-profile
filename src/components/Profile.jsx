

import '../App.css'
function Profile(props) {
    return (
        <>
        <div className="profile">
            <img src={props.img} className="profileI" alt={props.name} />
            <div className="name">{props.name}</div>
        </div>
        
        </>
    );
}

export default Profile;