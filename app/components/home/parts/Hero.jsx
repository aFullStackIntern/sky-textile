import { Box } from "@mui/material";
import hero from "./assets/hero.png";
import Image from "next/image";

export default function Hero() {
  return (
    <Box
      width={"100%"}
      height={{ lg: "90vh", smm: "50vh", xs: "30vh" }}
      position={"relative"}
    >
      {/* <Image src={hero} alt="" fill objectFit="cover" /> */}
      <video
        width="100%"
        height="100%"
        autoPlay
        loop
        muted
        controls={false}
        style={{objectFit:"cover"}}
      >
        <source src="/assets/New.mp4" type="video/mp4" />
      </video>
    </Box>
  );
}
