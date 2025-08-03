
interface ImageDetailModalProps {
  image: string;
  imageModalCloseHandler: () => void;
}
function ImageDetailModal({ image, imageModalCloseHandler }: ImageDetailModalProps) {
  return (
    <div
      onClick={imageModalCloseHandler}
      className="z-100 w-full h-full sm:px-24 sm:py-8 p-0 absolute left-0 top-0 bg-black bg-opacity-50 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="z-101 sm:pt-52 pt-72 sm:px-4 px-0"
      >
        <div className="absolute sm:top-64 sm:right-32 top-92 right-4">
          <div className="sticky top-0 pt-4">
            <div
              onClick={imageModalCloseHandler}
              className="rounded-full bg-[#DCDCDC] w-fit p-3 opacity-50"
            >
              <img
                src="/icons/Close.png"
                className="sm:w-[24px] sm:h-[24px] w-[16px] h-[16px]"
              />
            </div>
          </div>
        </div>
        <img className="w-full" src={image} />
      </div>
    </div>
  );
}

export default ImageDetailModal;
