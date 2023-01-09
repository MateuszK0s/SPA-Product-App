import { alpha, InputBase, styled } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useContext } from 'react'
import { ProductContext, ProductContextType } from './providers/ProductProvider'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,

  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto'
  }
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    borderRadius: '4px',
    backgroundColor: alpha(theme.palette.common.black, 0.03),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.07)
    },
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch'
      }
    }
  }
}))

const SearchInput = () => {
  const productContext = useContext(ProductContext) as ProductContextType
  const { products, setProducts, setFilterID } = productContext

  const handleFilterChange = (e: any) => {
    const tableFilter = e.target.value
    setFilterID(tableFilter)

    if (tableFilter === '') {
      setProducts(products)
    }
  }

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search..."
        inputProps={{ 'aria-label': 'search', min: 1, max: 12 }}
        type="number"
        onChange={handleFilterChange}
      />
    </Search>
  )
}

export default SearchInput
