"use client";

interface Props {
  image?: string;
  alt?: string;
  tittle?: string;
  content?: string;
}

export default function Abilities({ image, alt, tittle, content }: Props) {
  return (
    <div className="flex relative text-white w-48">
      <img src={image} alt={alt} className="w-0 absolute top-0 left-0" />
      <div>
        <h3>{tittle}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}
