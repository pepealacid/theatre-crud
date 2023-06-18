import { Box, Center, Heading, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlayDetails from "../components/PlayDetails";
import playsService from "../services/plays.service";

export default function PlayDetailsPage() {
  const { id } = useParams();
  const [play, setPlay] = useState(null);

  const getPlay = async () => {
    try {
      const res = await playsService.getOne(id);
      setPlay(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPlay();
  }, [id])

  return (
    <Box as="section">
      <Heading textAlign={"center"}>Todo detail</Heading>
      {
        play ? <PlayDetails getPlay={getPlay} {...play} /> : 
        <Center mt="32px">
          <Spinner />
        </Center>
      }
    </Box>
  )
}