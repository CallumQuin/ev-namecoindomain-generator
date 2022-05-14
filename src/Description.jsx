import { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  useClipboard,
  Textarea,
  Box,
} from '@chakra-ui/react';

const Description = ({ title, punycode, nmcAsset, registration,
  onLoad }) => {
  const { hasCopied, onCopy } = useClipboard(title);
  const [description, setDescription] = useState("");
  const { hasCopied: hasCopiedDescription, onCopy: onCopyDescription } = useClipboard(description);

  useEffect(() => {
    if (punycode) {
      setDescription(`Asset: ${nmcAsset}

Mint: ${registration}

The possession of this Emblem Vault (EV) built on the ERC-721 Ethereum token standard gives ownership to the Namecoin asset listed above and can be opened at any time for direct access to the underlying asset on its native chain.

This vault contains a Namecoin Identity id/ asset. Launched in May 2012, Namecoin Identities refer to the first-ever attempt at a Web3 decentralized identity service, which aimed to trustlessly verify identity securely and without relying on a central party storing or processing information. 

There are a total of 7075 Namecoin IDs from 2012 to 2017, collectively they form the third ever NFT collection in the blockchain history after Historical Domains and Punycodes. Namecoin Identities are also one of the first examples of utility NFTs, meaning that these non-fungible tokens (NFTs) have some purpose, apart from the art or aesthetic value.

Namecoin is the first fork of Bitcoin and therefore the first altcoin. It’s a special purpose blockchain designed primarily for decentralized domain names and digital identity. The assets on the Namecoin blockchain are now agreed by the community to be among the earliest forms of NFTs. 

All Namecoin assets expire after 36,000 blocks (250 days or ~8 months) after which they can be claimed by anyone. Therefore, it's necessary to keep a small amount of NMC (around 1-2) in this vault so it can be renewed automatically.`)
    }
  }, [nmcAsset, punycode, registration])

  return (
    <Box w="100%" ml={24} mt={{ base: "2em", xl: "0" }}>
      <FormControl w={{ lg: "80%", xl: "70%", "2xl": "50%" }} mb={4} mt={{ lg: "0", xl: "10em" }} px={{ base: "2.5em", lg: "0" }}>
        <FormLabel>Title</FormLabel>
        <Flex>
          <Input type="text" value={title} isReadOnly={true} />
          <Button onClick={onCopy} ml={2}>
            {hasCopied ? 'Copied' : 'Copy'}
          </Button>
        </Flex>
      </FormControl>
      <FormControl w={{ lg: "80%", xl: "95%", "2xl": "80%" }} mb={4} px={{ base: "2.5em", lg: "0" }}>
        <FormLabel>Description</FormLabel>
        <Flex >
          <Textarea
            value={description}
            isReadOnly
            h="28em"
          />
          <Button onClick={onCopyDescription} ml={2}>
            {hasCopiedDescription ? 'Copied' : 'Copy'}
          </Button>
        </Flex>
      </FormControl>
      {/* {category === "Text" &&
        <FormControl w={{ lg: "80%", xl: "70%", "2xl": "50%" }} mb={4} px={{ base: "2.5em", lg: "0" }}>
          <FormLabel>Translation (optional)</FormLabel>
          <Flex>
            <Input type="text" value={translation} onChange={e => setTranslation(e.target.value)} />
            <Button onClick={onLoad} ml={2}>
              Add to image
            </Button>
          </Flex>
        </FormControl>} */}
    </Box>
  )
}

export default Description;