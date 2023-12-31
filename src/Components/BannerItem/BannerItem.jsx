/* eslint-disable react/prop-types */
const BannerItem = ({ image, slideId, leftSlide,rightSlide  }) => {
  return (
    <div id={slideId} className="carousel-item relative w-full">
      <img src={image} className="w-full" />
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
        <a href={leftSlide} className="btn btn-circle btn-neutral mr-4">
          ❮
        </a>
        <a href={rightSlide} className="btn btn-circle btn-error ! text-white">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
