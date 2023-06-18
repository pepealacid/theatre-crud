import {
  Card,
  Image,
  Stack,
  Heading,
  Text,
  CardBody,
  Button,
  ButtonGroup,
  CardFooter,
  Divider,
} from "@chakra-ui/react";

import { Link } from "react-router-dom"

const Play = ({
  title,
  _id,
  image,
  director,
  theatre,
  opinion,
  deletePlay,
}) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={image} alt="play-image" borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          {director!=="Unknown" && <Text>Dirigida por {director}</Text>}
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button onClick={()=>{deletePlay(_id)}} variant="ghost" colorScheme="blue">
            🗑
          </Button>
          <Link to={`/plays/${_id}`}>
            <Button variant="solid" colorScheme="blue">
              Ver detalles
            </Button>
          </Link>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default Play;
