import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Content from "./components/Main";
import MainSlide from "./components/MainSlide";
import Wrap from "./components/Wrap";


const App = () => {
    const DATA = [
        { name: 'sohee', sex: 'female', age: 29 },
        { name: 'sohee2', sex: 'female', age: 39 },
        { name: 'sohee3', sex: 'female', age: 49 },
    ]

    const [num, setNum] = useState(0);

    const slogan = [
        { title: '사람과 사람을 연결하는 종합 승강기 기업', desc: '최고의 기술과 서비스로 편리하고 풍요로운 세상을 만들어갑니다.' }
    ]
    return (
        <>
            <Wrap className="gg">
                <Header slogan={slogan} />
                <MainSlide slideData={DATA} />
                <Content data={DATA[0].name} num={num} setNum={setNum} />
                <Content data={DATA[1].name} num={num} setNum={setNum} />
                <Content data={DATA[2].name} num={num} setNum={setNum} />
                <Footer />
            </Wrap>
        </>
    )
}

export default App;