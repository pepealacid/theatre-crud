import { useEffect, useState } from "react";
import playsService from "../services/plays.service";
import Play from "../components/Play";
import CreatePlayForm from "../components/CreatePlayForm"
import { Center, Heading, Button, useDisclosure, Box, Spinner, Text, Modal, ModalOverlay } from "@chakra-ui/react";

const HomePage = () => {
  const [plays, setPlays] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  useEffect(() => {
    getPlays();
  }, []);

  const getPlays = async () => {
    try {
      const res = await playsService.getAll();
      setPlays(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePlay = async (id) => {
    try {
        await playsService.delete(id);
        getPlays();
    } catch (error) {
        console.log(error)
    }
  }

  const renderPlays = () => {
    return plays.map((play) => <Play key={play._id} deletePlay={deletePlay} getPlays={getPlays} {...play} />);
  };

  return (
    <Box as="section">
      <Heading as="h1" size="xl">
        Obras de teatro que has visto:
      </Heading>
      {plays && 
        <Center mt="32px">
          <Button onClick={onOpen}>Añadir obra</Button>
        </Center>}
        <Box mt="32px">
            {
                !plays ?
                    <Center>
                        <Spinner />
                    </Center> :
                    plays && plays.length ?
                    <Box
                     maxW={["90%", "500px"]}
                     mx="auto" >
                     {renderPlays()}
                     </Box> :
                     <Text>No hay obras</Text>
            }
        </Box>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <CreatePlayForm onClose={onClose} getPlays={getPlays}/>
        </Modal>
    </Box>
  );
};

export default HomePage;
