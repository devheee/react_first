import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

function Main() {
    const [num, setNum] = useState(0);
    const [idx, setIdx] = useState(0);
    const SL = useRef(null);
    const 슬라이드 = [
        { h3: 'slide01', p: 'content01' },
        { h3: 'slide02', p: 'content02' },
        { h3: 'slide03', p: 'content03' },
    ]
    const 세팅 = {
        dots: false,
        autoplay: false,
        afterChange: idx => setNum(idx)
    }
    return (
        <main>
            <Slider className="slide"
                {...세팅}
                ref={SL}
            >
                {
                    슬라이드.map((it, idx) => {
                        return (
                            <li className={`itm0${idx + 1}`}>
                                <h3>{it.h3}</h3>
                                <p>{it.p}</p>
                            </li>)
                    })
                }

            </Slider>

            <div className="num">
                <strong>{num > 8 ? '' : 0}{num + 1}</strong>/<span>{num > 8 ? '' : 0}{슬라이드.length}</span>
            </div>
            <div className="arrow">
                <GoArrowLeft onClick={() => SL.current.slickPrev()} />
                {/* SL = {current:slider} ---> SL.current = slider*/}
                <GoArrowRight onClick={() => SL.current.slickNext()} />
            </div>
            <div className="dots">
                {
                    ['1번', '2번', '3번'].map((it, idx) => {
                        return (
                            <li onClick={() => SL.current.slickGoTo(idx)}>{it}</li>
                        )
                    })
                }
            </div>
            <div className="tab">
                <ul>
                    {
                        ['1번메뉴', '2번메뉴', '3번메뉴'].map((it, idx) => {
                            return (
                                <li onClick={() => setIdx(idx)}>{it}</li>
                            )
                        })
                    }
                </ul>
                <div>{슬라이드[idx].p}</div>
            </div>
        </main>
    )
}

export default Main;