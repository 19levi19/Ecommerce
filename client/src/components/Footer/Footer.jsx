import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa"
import Payment from "../../assets/payments.png"
import "./Footer.scss";
const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis eaque perferendis facilis rerum voluptatem, magnam a natus deleniti! Vero iste optio possimus autem est maiores nisi tempora eligendi cum temporibus!
                </div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                    <FaLocationArrow />
                    <div className="text">xyz building , Indira Road , 41220 ,Pune, Maharashtra</div>
                </div>
                <div className="c-item">
                    <FaMobileAlt />
                    <div className="text">Phone: 0471 272 0261</div>
                </div>
                <div className="c-item">
                    <FaEnvelope/>
                    <div className="text">Email : store@dev.com</div>
                </div>
            </div>
            <div className="col">
                <div className="title">Categories</div>
                <span className="text">Headphones </span>
                <span className="text">Smart Watches</span>
                <span className="text">Bluetooth Speakers</span>
                <span className="text">Wireless Earbuds</span>
                <span className="text">Home Theatre</span>
                <span className="text">Projectors</span>
            </div>
            <div className="col"><div className="title">Pages</div>
            <span className="text">Home </span>
                <span className="text">About</span>
                <span className="text">Privacy Policy</span>
                <span className="text">Returns</span>
                <span className="text">Terms and Conditions</span>
                <span className="text">Contact Us</span></div>

        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">JSDEVSTORE 2023 CREATED BY JS DEV. PREMIUM E-COMMERCE SOLUTIONS</div>
            </div>
            <img src={Payment} alt="" />
        </div>
    </footer>;
};

export default Footer;
