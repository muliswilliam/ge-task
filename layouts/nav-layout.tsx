import { ReactNode } from "react";
import { useDisclosure, useColorModeValue, Drawer, DrawerContent, Box } from "@chakra-ui/react";

// components
import { Nav } from "@/components/nav/nav";
import { Sidebar } from "@/components/sidebar/sidebar";

export default function NavLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" p='10px'>
      <Sidebar
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <Sidebar onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <Nav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}