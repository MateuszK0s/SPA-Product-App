import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow
} from '@mui/material'
import { FunctionComponent, useContext, useState } from 'react'
import ProductDetailsModal from '../../../utils/ProductDetailsModal'
import { ProductContext, ProductContextType } from '../../providers/ProductProvider'
import SearchInput from '../../SearchInput'
import { Product } from '../../types/api'

const ProductsTable: FunctionComponent = () => {
  const { products, rowsPerPage, page, total, setPage } = useContext(ProductContext) as ProductContextType
  const [open, setOpen] = useState(false)
  const [modalProduct, setModalProduct] = useState<Product>()

  const handleRowClick = (product: Product) => {
    setModalProduct(product)
    setOpen(true)
  }

  const onPageChange = (pageNumber: number) => {
    setPage(pageNumber + 1)
  }

  return (
    <>
    <TableContainer component={Paper}>
      <SearchInput />
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (

            <TableRow
              key={product.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              style={{ backgroundColor: product.color }}
              onClick={() => { handleRowClick(product) }}
            >
              <TableCell component="th" scope="row">
                {product.id}
              </TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.year}</TableCell>
            </TableRow>
          ))
          }
          {(modalProduct != null) && <ProductDetailsModal open={open} setOpen={setOpen} product={modalProduct}/> }
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5]}
        component="div"
        count={total}
        rowsPerPage={rowsPerPage}
        page={page - 1}
        onPageChange={(e, nr) => {
          onPageChange(nr)
        }}
      />
    </TableContainer>

    </>
  )
}

export default ProductsTable
