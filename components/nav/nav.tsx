import React from 'react';
import {
  IconButton,
  Flex,
  useColorModeValue,
  Text,
  FlexProps,
} from '@chakra-ui/react';
import {
  FiMenu,
} from 'react-icons/fi';

interface NavProps extends FlexProps {
  onOpen: () => void;
}
export const Nav = ({ onOpen, ...rest }: NavProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="40px"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold">
        GE
      </Text>
    </Flex>
  );
};