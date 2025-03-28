"use client";
import { useState } from "react";

import { client } from "@/consts/client";
import { useGetENSAvatar } from "@/hooks/useGetENSAvatar";
import { useGetENSName } from "@/hooks/useGetENSName";
import { Link } from "@chakra-ui/next-js";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  useColorMode,
  Divider,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { blo } from "blo";
import { FaRegMoon } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { IoSunny } from "react-icons/io5";
import { SearchIcon } from "@chakra-ui/icons";
import {
  ConnectButton,
  useActiveAccount,
  useActiveWallet,
  useDisconnect,
} from "thirdweb/react";
import type { Wallet } from "thirdweb/wallets";
import { SideMenu } from "./SideMenu";

export function Navbar() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const account = useActiveAccount();
  const wallet = useActiveWallet();
  const { colorMode } = useColorMode();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && searchQuery.trim() !== "") {
      // Prevent default form submission if wrapped in a form
      event.preventDefault();
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      // Optionally clear search bar after submission
      // setSearchQuery("");
    }
  };

  return (
    <Box py="30px" px={{ base: "20px", lg: "50px" }} maxWidth="2000px" margin="0 auto">
      <Flex direction="row" justifyContent="space-between" alignItems="center">
        {/* Left Group: Logo + Nav Links */}
        <Flex alignItems="center" gap="40px">
          <Box>
          <Heading
            as={Link}
            href="/"
            _hover={{ textDecoration: "none" }}
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontWeight="extrabold"
          >
            <Image
              src="/images/logo.png"
              alt="Logo"
              height="80px"
            />
          </Heading>
        </Box>
          {/* Add a subtle vertical divider */}
          <Divider orientation="vertical" height="40px" borderColor="gray.200" display={{ lg: "block", base: "none" }} />
          {/* Nav Links (visible on large screens) */}
        <Flex display={{ lg: "flex", base: "none" }} gap="20px" my="auto">
          <Box>
            <Link href="/" _hover={{ textDecoration: "none" }}>
              Home
            </Link>
          </Box>
          <Box>
            <Link href="/launchpad" _hover={{ textDecoration: "none" }}>
              Launchpad
            </Link>
          </Box>
          <Box>
            <Link href="/about" _hover={{ textDecoration: "none" }}>
              About
            </Link>
          </Box>
          <Box>
            <Link href="/contact" _hover={{ textDecoration: "none" }}>
              Contact
            </Link>
          </Box>
        </Flex>
        </Flex>

        {/* Right Group: Search + Theme + Connect/Profile (visible on large screens) */}
        <Flex display={{ lg: "flex", base: "none" }} alignItems="center" justifyContent="flex-end" gap="20px">
          {/* Search Bar */}
          <InputGroup maxW="300px"> {/* Removed mx="auto" */}
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.500" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search collections and NFTs"
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyDown={handleSearchSubmit}
            />
          </InputGroup>
          {/* Theme Toggle */}
          <ToggleThemeButton />
          {/* Connect/Profile */}
          {account && wallet ? (
            <ProfileButton address={account.address} wallet={wallet} />
          ) : (
            <ConnectButton
              client={client}
              theme={colorMode}
              connectButton={{ style: { height: "56px" } }}
            />
          )}
        </Flex>

        {/* Mobile: Hamburger Menu (visible on small screens) */}
        <Flex display={{ base: "flex", lg: "none" }}>
          <SideMenu />
        </Flex>
      </Flex>
    </Box>
  );
}

function ProfileButton({
  address,
  wallet,
}: {
  address: string;
  wallet: Wallet;
}) {
  const { disconnect } = useDisconnect();
  const { data: ensName } = useGetENSName({ address });
  const { data: ensAvatar } = useGetENSAvatar({ ensName });
  const { colorMode } = useColorMode();
  return (
    <Link href={`/profile/${address}`} _hover={{ textDecoration: "none" }}>
      <Button height="56px">
        <Flex direction="row" gap="5" alignItems="center">
          <Box my="auto">
            <FiUser size={30} />
          </Box>
          <Image
            src={ensAvatar || blo(address as `0x${string}`)}
            height="40px"
            rounded="8px"
          />
        </Flex>
      </Button>
    </Link>
  );
}

function ToggleThemeButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button height="56px" w="56px" onClick={toggleColorMode} mr="10px">
      {colorMode === "light" ? <FaRegMoon /> : <IoSunny />}
    </Button>
  );
}