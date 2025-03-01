"use client";

import { client } from "@/consts/client";
import { useGetENSAvatar } from "@/hooks/useGetENSAvatar";
import { useGetENSName } from "@/hooks/useGetENSName";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { FaRegMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import {
  ConnectButton,
  useActiveAccount,
  useActiveWallet,
  useDisconnect,
} from "thirdweb/react";

export function SideMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);
  const { disconnect } = useDisconnect();
  const account = useActiveAccount();
  const { data: ensName } = useGetENSName({ address: account?.address || "" });
  const { data: ensAvatar } = useGetENSAvatar({ ensName });
  const { colorMode, toggleColorMode } = useColorMode();
  const wallet = useActiveWallet();

  return (
    <Box> {/* Added key prop to force re-render */}
      <Button
        display={{ lg: "none", base: "block" }}
        ref={btnRef}
        onClick={onOpen}
      >
        <HamburgerIcon />
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent style={{ zIndex: 1000, width: '200px' }} >
          <DrawerCloseButton />
          <DrawerHeader textAlign="center">
            <Button height="56px" w="56px" onClick={toggleColorMode} mr="10px">
              {colorMode === "light" ? <FaRegMoon /> : <IoSunny />}
            </Button>
          </DrawerHeader>
          <DrawerBody textAlign="center">
            {account && (
              <Box display="block" mb={2}>
                <Link href="/profile" _hover={{ textDecoration: "none" }}>
                  Profile {ensName ? `(${ensName})` : ""}
                </Link>
              </Box>
            )}
            <Box display="block" mb={2}>
              <Link href="/" _hover={{ textDecoration: "none" }}>
                Home
              </Link>
            </Box>
            <Box display="block" mb={2}>
              <Link href="/launchpad" _hover={{ textDecoration: "none" }}>
                Launchpad
              </Link>
            </Box>
            <Box display="block" mb={2}>
              <Link href="/about" _hover={{ textDecoration: "none" }}>
                About
              </Link>
            </Box>
            <Box display="block" mb={2}>
              <Link href="/contact" _hover={{ textDecoration: "none" }}>
                Contact
              </Link>
            </Box>
          </DrawerBody>
          <DrawerFooter>
            {account && (
              <Button
                onClick={() => {
                  if (wallet) disconnect(wallet);
                }}
              >
                Logout
              </Button>
            )}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
