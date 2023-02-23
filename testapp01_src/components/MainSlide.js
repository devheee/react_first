import Slide from "react-slick";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";
import { RxArrowLeft } from "react-icons/rx";
import { RxArrowRight } from "react-icons/rx";
import { useRef, useState } from "react";


const MainVisual = styled.section`
position:relative;
`
const Arrows = styled.span`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
font-size:100px;
`

const MainSlide = ({ slideData }) => {
    const s = useRef(null)
    const [slideNum, setslideNum] = useState(0);

    const option = {
        dots: true,
        arrows: false,
        afterChange: idx => setslideNum(idx),
    }
    return (
        <MainVisual>
            <Slide {...option} ref={s}>
                {
                    slideData.map(it => {
                        return (
                            <figure>
                                <h2>{it.name}</h2>
                                <p>{it.age}</p>
                            </figure>
                        )
                    })
                }
            </Slide>

            <Arrows>
                <RxArrowLeft onClick={() => s.current.slickPrev()} />
                <RxArrowRight onClick={() => s.current.slickNext()} />
            </Arrows>
            <>{slideNum + 1} / {slideData.length}</>
        </MainVisual>
    )
}

export default MainSlide;