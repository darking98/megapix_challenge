import React, { useState } from 'react'
/* Chakra UI */
import {
  Flex,
  Text,
  Table as ChakraTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  useMediaQuery,
  Select,
  Box
} from '@chakra-ui/react'
/* FontAwesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight, faAnglesLeft } from '@fortawesome/free-solid-svg-icons'
const Table = ({ data, columns }) => {
  /* Hook para arreglar un bug en la versión mobile */
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')

  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(5)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(data.length / itemsPerPage)

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  return (
    <>
      <TableContainer
        borderTopLeftRadius='md'
        borderBottomLeftRadius='md'
        borderTopRightRadius='md'
        borderBottomRightRadius='md'
      >
        <ChakraTable
          variant='simple'
          style={{
            tableLayout: isLargerThan768 ? 'fixed' : 'auto',
            borderSpacing: '0 8px',
            borderCollapse: 'separate'
          }}
        >
          <Thead background='lightBlack'>
            <Tr>
              {columns.map((el, idx) => (
                <Th
                  key={idx}
                  borderTopLeftRadius={idx === 0 ? 'md' : null}
                  borderBottomLeftRadius={idx === 0 ? 'md' : null}
                  borderTopRightRadius={
                    idx === columns.length - 1 ? 'md' : null
                  }
                  borderBottomRightRadius={
                    idx === columns.length - 1 ? 'md' : null
                  }
                >
                  {el}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody
            background='lightBlack'
            py={4}
            border='1px solid 1E1E1E'
            my={4}
          >
            {currentItems.length > 0 ? currentItems.map((transaction) => (
              <Tr borderColor='none' key={transaction.id}>
                {Object.values(transaction).map((value, idx) => (
                  <Td
                    key={idx}
                    textAlign='center'
                    borderTopLeftRadius={idx === 0 ? 'md' : null}
                    borderBottomLeftRadius={idx === 0 ? 'md' : null}
                    borderTopRightRadius={
                      idx === columns.length - 1 ? 'md' : null
                    }
                    borderBottomRightRadius={
                      idx === columns.length - 1 ? 'md' : null
                    }
                  >
                    {value}
                  </Td>
                ))}
              </Tr>
            )) : (
              <Tr>
                <Td colSpan={columns.length} textAlign='center'>Debes crear un rol</Td>
              </Tr>
            )}
          </Tbody>
        </ChakraTable>
      </TableContainer>

      {/* Pagination */}
      <Flex
        alignItems='center'
        justifyContent='space-between'
        width='100%'
        background='lightBlack'
        borderRadius='md'
        p={8}
        filter='drop-shadow(21px 4px 80px rgba(255, 255, 255, 0.03))'
        fontSize={{ base: 'xs', md: 'sm' }}
      >
        <Box>
          <Select
            onChange={(e) => setItemsPerPage(e.target.value)}
            border='none'
            _focus={{ border: '1px solid white' }}
          >
            <option value='5'>5 filas</option>
            <option value='10'>10 filas</option>
            <option value='20'>20 filas</option>
          </Select>
        </Box>

        <Flex>
          <Button
            onClick={handlePrevPage}
            variant='transparent'
            disabled={currentPage === 1}
            fontSize={{ base: 'xs', md: 'sm' }}
            mr={2}
            display={{ base: 'none', md: 'flex' }}
          >
            <FontAwesomeIcon icon={faAnglesLeft} width='16px' />
            <Text ml={4}>Anterior</Text>
          </Button>
          {Array.from({ length: totalPages }, (_, index) => (
            <Button
              variant='transparent'
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              outline={currentPage === index + 1 ? '1px solid white' : null}
              fontSize='sm'
              mr={{ base: 0, md: 2 }}
            >
              {index + 1}
            </Button>
          ))}
          <Button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            variant='transparent'
            fontSize='sm'
            display={{ base: 'none', md: 'flex' }}
          >
            <Text mr={4}>Siguiente</Text>
            <FontAwesomeIcon icon={faAnglesRight} width='16px' />
          </Button>
        </Flex>
        <Text>
          {currentPage} / {totalPages} | {data.length} items
        </Text>
      </Flex>
    </>
  )
}

export default Table
