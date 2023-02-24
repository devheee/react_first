import { useState } from "react";
import { FcLike } from "react-icons/fc";

const TopBanner = ({ common, basic, menu }) => {
    const [on, setOn] = useState('') // 리액트에서 렌더링되게 변수를 선언해주는 방법
    return (
        <div className={`TopBanner ${on}`}>
            <div className="inner">
                <h2>{basic[0].title}</h2>
                <p>{basic[0].desc}</p>
            </div>
            <FcLike className="btn" onClick={() => setOn('on')} />
        </div>
    )
}

export default TopBanner;