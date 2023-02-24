
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const MainVisual = ({ basic }) => {
    const option = {
        dots: false,
        arrows: false,
        afterChange: idx => { console.log(idx) }
    }

    const [num, setNum] = useState(1)

    return (
        <section className="MainVisual">
            <Slider {...option}>
                {
                    basic.map((it, idx) => {
                        return (
                            <div className={`itm itm0${idx + 1}`} key={it.id}>
                                <div className="inner">
                                    <div className="tit">{it.title}</div>
                                    <strong>{it.desc}</strong>
                                    <em>{it.id}</em>
                                </div>
                            </div>
                        )
                    })}
            </Slider>
            <div className="num">{num}</div>
        </section>
    )
}

export default MainVisual;