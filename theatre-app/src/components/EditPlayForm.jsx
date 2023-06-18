import { Button, FormControl, FormLabel, Input, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import playsService from "../services/plays.service";

const EditPlayForm = ({ play: { title, image, director, theatre, opinion, _id }, onClose, getPlay }) => {
  const [data, setData] = useState({
    title,
    image,
    director,
    theatre,
    opinion
  });
  
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await playsService.edit(_id, data);
      getPlay();
      onClose();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ModalContent as="form" onSubmit={handleSubmit}>
      <ModalHeader>Editar información de obra</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <FormControl>
          <FormLabel>Título</FormLabel>
          <Input type='text' name={"title"} value={data.title} onChange={handleChange} />
        </FormControl>
        <FormControl mt="12px">
          <FormLabel>Director/a</FormLabel>
          <Input type='text' name={"director"} value={data.director} onChange={handleChange} />
        </FormControl>
        <FormControl mt="12px">
          <FormLabel>Teatro</FormLabel>
          <Input type='text' name={"theatre"} value={data.theatre} onChange={handleChange} />
        </FormControl>
        <FormControl mt="12px">
          <FormLabel>Opinión</FormLabel>
          <Textarea multiple type='text' name={"opinion"} value={data.opinion} onChange={handleChange} />
        </FormControl>
        <FormControl mt="12px">
          <FormLabel>URL Imagen</FormLabel>
          <Textarea multiple type='text' name={"image"} value={data.image} onChange={handleChange} />
        </FormControl>
      </ModalBody>

      <ModalFooter>
        <Button colorScheme='blue' mr={3} onClick={onClose}>
          Cancelar
        </Button>
        <Button variant='ghost' type='submit'>Guardar</Button>
      </ModalFooter>
    </ModalContent>
  )
}

export default EditPlayForm