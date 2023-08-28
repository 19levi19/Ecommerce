import "./Banner.scss";
import BannerIMg from "../../../assets/banner-img.png"
const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
               
                <h1>SALES</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum laboriosam quae sit delectus dolore doloremque reiciendis, modi sed impedit architecto vel alias neque itaque ab placeat deleniti in ea perspiciatis.
                </p>
                <div className="ctas">
                    <div className="banner-cta">Read More</div>
                    <div className="banner-cta v2">Shop Now</div>   
                </div>
            </div>
            <img className="banner-img"src={BannerIMg} alt="" />
        </div>
    </div>;
};

export default Banner;
