interface Iprop {
  image: string;
  classname: string;
  alt: string;
}

const Image = ({ image, classname, alt }: Iprop) => {
  return (
    <div>
      <img src={image} alt={alt} className={classname} />
    </div>
  );
};

export default Image;
