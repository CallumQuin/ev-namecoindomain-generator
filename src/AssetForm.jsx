import { useState } from "react";
import { Container, HStack, VStack } from '@chakra-ui/react';
import {
  FormControl,
  FormLabel,
  Input,
  Button
} from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import { Heading } from '@chakra-ui/react';

const AssetForm = () => {
  const [nmcAsset, setNmcAsset] = useState("");
  const navigate = useNavigate();

  const handleChange = e => {
    setNmcAsset(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    navigate(`/${nmcAsset}`)
  }



  return (
    <Container width="100vw" height="100vh">
      <VStack>

        <Heading size='2xl' mt="30vh" mb="2vh">Namecoin id/ Generator</Heading>

        <form onSubmit={onSubmit}>
          <HStack align="flex-end">
            <FormControl>
              <FormLabel htmlFor="nmcAsset">Asset</FormLabel>
              <Input id="nmcAsset" name="nmcAsset" type="text"
                value={nmcAsset} onChange={handleChange} placeholder="id/khal" />
            </FormControl>
            <Button type="submit">Generate</Button>
          </HStack>
        </form>
        <a href="https://github.com/cryptokorin" target="_blank" style={{ textDecoration: 'underline black' }}>Credit to cryptokorin</a>

      </VStack>
    </Container >
  )
}

export default AssetForm;