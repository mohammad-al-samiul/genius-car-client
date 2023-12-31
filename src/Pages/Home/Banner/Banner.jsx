import BannerItem from "../../../Components/BannerItem/BannerItem";
import image1 from "../../../assets/images/banner/1";
import image2 from "../../../assets/images/banner/2";
import image3 from "../../../assets/images/banner/3";
import image4 from "../../../assets/images/banner/4";
import image5 from "../../../assets/images/banner/5";
import image6 from "../../../assets/images/banner/6";
const Banner = () => {
  return (
    <div className="carousel w-[80%] rounded-lg">
      <BannerItem
        image={image1}
        slideId={"slide1"}
        leftSlide={`#slide6`}
        rightSlide={`#slide2`}
        
      />
      <BannerItem
        image={image2}
        slideId={"slide2"}
        leftSlide={`#slide1`}
        rightSlide={`#slide3`}
      />
      <BannerItem
        image={image3}
        slideId={"slide3"}
        leftSlide={`#slide2`}
        rightSlide={`#slide4`}
      />
      <BannerItem
        image={image4}
        slideId={"slide4"}
        leftSlide={`#slide3`}
        rightSlide={`#slide6`}
      />
      <BannerItem
        image={image5}
        slideId={"slide5"}
        leftSlide={`#slide4`}
        rightSlide={`#slide6`}
      />
      <BannerItem
        image={image6}
        slideId={"slide6"}
        leftSlide={`#slide5`}
        rightSlide={`#slide1`}
      />
    </div>
  );
};

export default Banner;
