import React from "react";

const items = [
  { src: "/public/icons/mail.png", label: "Email", href: "mailto:dudals89@gmail.com" },
  { src: "/public/icons/github.png", label: "GitHub", href: "https://github.com/kimyougmin" },
  { src: "/public/icons/tstory.png", label: "Blog", href: "https://yourblog.com" },
];


const DockBar = () => {
  return (
    <div className="sticky bottom-4 left-0 w-full z-40 flex justify-center mt-20">
      <div className="flex items-end gap-4 bg-[#2e2e2e]/70 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-xl">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group flex flex-col items-center"
          >
            <div className="absolute bottom-[90px] px-3 py-1 rounded-md bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
              {item.label}
            </div>
            <img
              className="w-[82px] h-[82px] transition-transform duration-300 group-hover:scale-110"
              src={item.src}
              alt={item.label}
            />
          </a>
        ))}
      </div>
    </div>
  );
};
export default DockBar;
