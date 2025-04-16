// prodactobject ===valodationobject   (title ,discron)

export const PrudactScema = (prodact: {
  title: string;
  description: string;
  imageURL: string;
  price: string;
}) => {
  const err: {
    title: string;
    description: string;
    imageURL: string;
    price: string;
  } ={ title: "", description: "", imageURL: "", price: "" };

  const validUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(prodact.imageURL);

if(!prodact.price.trim()|| isNaN(Number(prodact.price))){
    err.price = "price must be a number";
}

if(!prodact.imageURL.trim() || !validUrl){
    err.imageURL = "Invalid URL";
}

  if(!prodact.title.trim()||prodact.title.length<=10 ||prodact.title.length>80){
    err.title = "title must be between 10 and 80 characters";
  }

  if(!prodact.description.trim()||prodact.description.length<=10 ||prodact.description.length>100){
    err.description = "title must be between 10 and 80 characters";
  }
  return err;
};
export default PrudactScema