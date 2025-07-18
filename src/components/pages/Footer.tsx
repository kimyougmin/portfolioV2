function Footer() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="bg-[url('/main-bg.png')] bg-cover bg-center w-full h-full absolute pt-28">
        <div className={`mb-12 transition-all duration-700 ease-out transform`}>
          <p className="text-3xl sm:text-5xl lg:text-9xl font-bold drop-shadow-xl text-white text-center">
            Thank You!
          </p>
          <p className="text-black text-xl sm:text-2xl lg:text-3xl relative -top-3 text-center">
            봐주셔서 감사합니다!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
