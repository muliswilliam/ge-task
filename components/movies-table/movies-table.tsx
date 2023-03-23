import React from 'react'

// utils
import { Movie } from '../../utils/types'

// components
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Flex,
  Button,
  Stack,
  HStack,
  Link,
  Text
} from '@chakra-ui/react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'


interface MoviesTableProps {
  movies: Movie[]
  currentPage: number
  hasMore: boolean | undefined | null
  isPreviousData: boolean
  isFetching: boolean
  onNext: () => void
  onPrevious: () => void
}

export const MoviesTable = (props: MoviesTableProps) => {
  const {
    movies,
    currentPage,
    hasMore,
    isPreviousData,
    isFetching,
    onNext,
    onPrevious,
  } = props

  return (
    <Stack direction='column' spacing='12px'>
      <TableContainer
        borderWidth='1px'
        borderRadius='4px'
      >
        <Table variant='simple' borderWidth='1px'>
          <Thead bg='gray.100'>
            <Tr>
              <Th>Title</Th>
              <Th>Link</Th>
            </Tr>
          </Thead>
          <Tbody>
            {movies.map((movie: any) => (
              <Tr key={movie.id}>
                <Td m={0}>
                  <Text width='500px' textOverflow='ellipsis' overflow='hidden'>{movie.title.native}</Text>
                </Td>
                <Td>
                  <Link href={movie.externalLinks[0]?.url} overflow='hidden' color='teal'>
                    {movie.externalLinks[0]?.url}
                  </Link>
                </Td>
              </Tr>
            ))}            
          </Tbody>
        </Table>
      </TableContainer>
      <Stack
        direction='row'
        justifyContent={isFetching ? 'space-between': 'flex-end'}
      >
        {isFetching && <Button isLoading variant='ghost' />}
        <HStack spacing='12px'>
          <Button
            leftIcon={<FiArrowLeft />}
            colorScheme='teal'
            size='sm'
            variant='solid'
            onClick={onPrevious}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <Button
            rightIcon={<FiArrowRight />}
            colorScheme='teal'
            size='sm'
            onClick={onNext}
            disabled={isPreviousData && !hasMore}
          >
            Next
          </Button>          
        </HStack>
      </Stack>
    </Stack>
  )
}
