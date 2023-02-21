import Nav from "./Nav";
import img from './img.jpg';
import './test.css'

function Footer() {
    return (
        <footer className="Footer">
            <Nav />
            <div className="bg">
                background
            </div>
            {/* <img src={img} /> */}
            <img src={process.env.PUBLIC_URL + '/images/img.jpg'} alt="" />
        </footer>
    )
}

export default Footer;