interface Props {
  images: string[];
}

export default function Technologies({ images }: Props) {
  return (
    <article className="flex py-9">
      {images?.map((image, index) => (
        <img src={image} key={index} alt={`Imagen ${index}`} className="w-10" />
      ))}
    </article>
  );
}
