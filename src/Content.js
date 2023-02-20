import { useState } from "react";
import './common.css';

const Content = ({ name }) => {
    const [num, setNum] = useState(0);
    const [on, setOn] = useState('');
    // let num = 0;
    // useState로 리액트는 변수를 선언하고 변경한다.
    const numSet = () => {
        setNum(num + 1);
    }

    const toggleOn = () => {
        setOn(!on)
    }
    return (
        <div className={`Content ${on ? 'on' : ''}`}>
            {console.log(name, num)}
            <span>{name} {num}</span>
            <button onClick={() => setNum(num + 1)}>CLICK</button>
            {/* {btn.addEventListner('click', ()=> fn())} */}
        </div>
    )
}

export default Content;