import { Box, Button, Card, CardBody, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Textarea, chakra, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import EditPlayForm from './EditPlayForm';
import playsService from '../services/plays.service';
import { useParams } from 'react-router-dom';

const PlayDetails = ({ title, image, director, theatre, _id, opinion, getPlay }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Card mt="32px" w={["90%", "500px"]} mx="auto">
        <CardBody>
          <Heading as="h2" size={"md"}>Título: {title}</Heading>
          <Text mt="8px">Director/a: {director}</Text>
          <Text mt="8px">Teatro: {theatre}</Text>
          <Text mt="8px">Opinión: {opinion}</Text>
          <Button mt="16px" onClick={onOpen}>✏️</Button>
        </CardBody>
      </Card>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <EditPlayForm play={{ title, director, image, theatre, opinion, _id }} onClose={onClose} getPlay={getPlay} />
      </Modal>
    </>
  )
}

export default PlayDetails