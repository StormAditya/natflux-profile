import Profile from "./profile";
import p1 from '../assets/net.jpg';
import p2 from '../assets/net2.jpg';
import p3 from '../assets/net3.jpg';
import p4 from '../assets/net4.jpg';
import p5 from '../assets/plus.jpg';
import p6 from '../assets/k.jpg';
import '../App.css';
const n1 = 'Aditya';
const n2 = 'Anand';
const n3 = 'Sunita';
const n4 = 'Children';
const n5 = 'Add Profile';


function Choose() {
    return (
        <div className="choose">
            <Profile img ={p1} name={n1}/>
            <Profile img ={p2} name={n2}/>
            <Profile img ={p3} name={n3}/>
            <Profile img ={p6} name={n4}/>
            <Profile img ={p5} name={n5}/>

        </div>
    );
}

export default Choose;