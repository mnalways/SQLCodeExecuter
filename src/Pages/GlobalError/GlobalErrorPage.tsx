import { Image } from "@chakra-ui/react";
import errorImg from "./../../assets/Error.png";

const GlobalError = () => {
  return (
    <div style={{ background: "white", width: "100%", height: "100%" }}>
      <Image src={errorImg}></Image>
    </div>
  );
};

export default GlobalError;
