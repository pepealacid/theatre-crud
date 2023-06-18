import { Button, FormControl, FormLabel, Input, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, Select, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import playsService from "../services/plays.service";

const CreatePlayForm = ({ getPlays, onClose }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await playsService.create(data);
      getPlays();
      onClose();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  return (
    <ModalContent as="form" onSubmit={handleSubmit}>
      <ModalHeader>Agregar obra</ModalHeader>
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
        <Button variant='ghost' type='submit' isLoading={loading}>Guardar</Button>
      </ModalFooter>
    </ModalContent>
  )
}

export default CreatePlayForm