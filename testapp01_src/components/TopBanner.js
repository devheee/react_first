import styled from "styled-components";
import { RxArrowUp } from "react-icons/rx";
import { useState } from "react";


const TopBannerWrap = styled.div`
position: relative;
background:#f3f3f3;
height: 100px;
overflow: hidden;
&.on {
    height: 0;
}`
const TopBannerInner = styled.div`
width:1200px;
margin:0 auto;`
const TopBannerTitle = styled.h2`
font-size:20px;
margin:0 0 10px 0;
`
const TopBannerDesc = styled.p`
font-size:14px;
`
const TopBannerIcon = styled.span`
position: absolute;
top: 30px;
left: 50%;
transform: translate(-50%, 0);
margin: 0 0 0 600px;
color: tomato;
background: #fff;
`

const TopBanner = ({ slogan }) => {
    const [on, setOn] = useState(false);
    return (
        <TopBannerWrap className={on && 'on'}>
            <TopBannerInner>
                <TopBannerTitle>{slogan[0].title}</TopBannerTitle>
                <TopBannerDesc>{slogan[0].desc}</TopBannerDesc>
            </TopBannerInner>
            <TopBannerIcon onClick={() => setOn(true)}><RxArrowUp className="btn" /></TopBannerIcon>
        </TopBannerWrap>
    )
}

export default TopBanner;