"use client";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Props {
  images: string[];
}

export default function Projects({ images }: Props) {
  return (
    <Carousel
      centerMode={true}
      axis={"horizontal"}
      autoPlay={true}
      infiniteLoop={true}
      width={1000}
      showThumbs={false}
    >
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Imagen ${index}`} />
        </div>
      ))}
    </Carousel>
  );
}
