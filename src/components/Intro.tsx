import { useEffect, useState } from "react";

export default function Intro() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // 컴포넌트 마운트 시 애니메이션 트리거
    setTimeout(() => setShow(true), 100);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="bg-[url('/main-bg.png')] bg-cover bg-center w-full h-full absolute pt-14">
        <div className="flex gap-6 w-fit mb-10 mx-auto relative h-10">
          <p className="text-xl font-bold underline hover:text-2xl">Blog</p>
          <p className="text-xl font-bold underline hover:text-2xl">Github</p>
        </div>
        <div
          className={`mb-12 transition-all duration-700 ease-out transform ${
            show ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
          }`}
        >
          <p className="text-3xl sm:text-5xl lg:text-9xl font-bold drop-shadow-xl text-white text-center">
            FrontEnd Developer
          </p>
          <p className="text-black text-xl sm:text-2xl lg:text-3xl relative -top-3 text-center">
            프론트엔드 개발자 <span className="font-bold">김영민</span>입니다.
          </p>
        </div>

        <p className="text-sm sm:text-xl text-center">
          사용자의 관점에서 문제를 정의하고 해결하는 태도를 중심에 두고,<br />
          맡은 일은 끝까지 책임지고 완성도 높게 마무리하겠습니다.
        </p>

        <div className="absolute bottom-0 w-full flex justify-center">
          <img
            className="h-[calc(90vh-40vh)] transition-all max-sm:h-[calc(90vh-40vh)]"
            src="/person.png"
            alt="김영민"
          />
        </div>
      </div>
    </div>
  );
}
