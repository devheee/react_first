import Header from "./components/Header";
import MainContent from "./components/MainContent";
import MainVisual from "./components/MainVisual";
import TopBanner from "./components/TopBanner";
import { common, basic, menu } from "./data/common";

const App = () => {
    return (
        <div>
            <TopBanner common={common} basic={basic} menu={menu} />
            <Header common={common} basic={basic} menu={menu} ok />
            <MainVisual basic={basic} />
            <MainContent common={common} basic={basic} menu={menu} />
        </div>
    )
}

export default App;