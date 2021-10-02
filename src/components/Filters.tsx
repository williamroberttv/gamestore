import { useState } from 'react';
import { IconButton, Flex, Text } from '@chakra-ui/react';
import {
  FaSortAlphaDownAlt, FaSortAlphaUpAlt,
  FaSortNumericDownAlt, FaSortNumericUpAlt,
} from 'react-icons/fa';
import { FiStar } from 'react-icons/fi';
import { FiltersProps } from '../utils/types';

export function Filters(
  { sortAlphabetically, sortByPrice, sortByStars }: FiltersProps,
) {
  const [selectedFilter, setSelectedFilter] = useState<string>('');

  return (
    <Flex mt="50px" align="center" justify="flex-end">
      <Text mr="16px" fontWeight="700">Filtros</Text>
      <IconButton
        ml="8px"
        bg={selectedFilter === 'alphabetically down' ? '#E45C75' : ''}
        _hover={{ background: '#E45C75' }}
        aria-label="sort alphabetically down"
        type="button"
        onClick={() => {
          sortAlphabetically('up');
          setSelectedFilter('alphabetically down');
        }}
        icon={<FaSortAlphaUpAlt size={20} />}
      />
      <IconButton
        ml="8px"
        bg={selectedFilter === 'alphabetically up' ? '#E45C75' : ''}
        _hover={{ background: '#E45C75' }}
        aria-label="sort alphabetically up"
        type="button"
        onClick={() => {
          sortAlphabetically('down');
          setSelectedFilter('alphabetically up');
        }}
        icon={<FaSortAlphaDownAlt size={20} />}
      />
      <IconButton
        ml="8px"
        bg={selectedFilter === 'price up' ? '#E45C75' : ''}
        _hover={{ background: '#E45C75' }}
        aria-label="sort price up"
        type="button"
        onClick={() => {
          sortByPrice('up');
          setSelectedFilter('price up');
        }}
        icon={<FaSortNumericUpAlt size={20} />}
      />
      <IconButton
        ml="8px"
        bg={selectedFilter === 'price down' ? '#E45C75' : ''}
        _hover={{ background: '#E45C75' }}
        aria-label="sort price down"
        type="button"
        onClick={() => {
          sortByPrice('down');
          setSelectedFilter('price down');
        }}
        icon={<FaSortNumericDownAlt size={20} />}
      />
      <IconButton
        ml="8px"
        bg={selectedFilter === 'stars' ? '#E45C75' : ''}
        _hover={{ background: '#E45C75' }}
        aria-label="sort by stars"
        type="button"
        onClick={() => {
          sortByStars();
          setSelectedFilter('stars');
        }}
        icon={<FiStar size={20} />}
      />
    </Flex>
  );
}
