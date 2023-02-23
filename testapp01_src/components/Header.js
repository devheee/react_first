import TopBanner from "./TopBanner";


const Header = ({ slogan }) => {
    return (
        <header>
            <TopBanner slogan={slogan} />
        </header>
    )
}

export default Header;