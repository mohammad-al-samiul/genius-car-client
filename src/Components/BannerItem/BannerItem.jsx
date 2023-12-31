/* eslint-disable react/prop-types */
const BannerItem = ({ image, slideId, leftSlide, rightSlide }) => {
  return (
    <div id={slideId} className="carousel-item relative w-full">
      <img src={image} className="rounded-lg w-full" />
      <div className="lg:pl-14 lg:w-3/5 absolute flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
        <div className="text-white space-y-2 text-center">
          <h1 className="text-2xl lg:text-5xl">Affordable Price For Car Servicing</h1>
          <p className="overflow-hidden overflow-ellipsis line-clamp-2">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div>
            <button className="btn btn-sm lg:btn-md btn-error ! text-white mr-4 ">
              Discover More
            </button>
            <button className="btn btn-sm lg:btn-md btn-neutral ! text-white">
              Latest Project
            </button>
          </div>
        </div>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1 lg:-translate-y-1/2 left-5 right-5 bottom-0">
        <a href={leftSlide} className="btn btn-sm lg:btn-md btn-circle btn-neutral mr-4">
          ❮
        </a>
        <a href={rightSlide} className="btn btn-sm lg:btn-md btn-circle btn-error ! text-white">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
