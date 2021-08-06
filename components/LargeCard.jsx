import React from "react";
import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="py-10 relative">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>

      <div className="absolute top-32 left-12">
        <h3 className="text-3xl md:text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>
        <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5 hover:shadow-md active:scale-95 transition duration-150">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
