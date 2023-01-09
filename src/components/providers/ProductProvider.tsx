import { useSnackbar } from 'notistack'
import { createContext, useEffect, useState } from 'react'
import useApi from '../../hooks/useApi'
import { Product } from '../types/api'

export interface ProductContextType {
  products: Product[]
  setFilterID: (id: string) => void
  setProducts: (products: Product[]) => void
  page: number
  setPage: (page: number) => void
  rowsPerPage: number
  total: number
  setRowsPerPage: (rowsPerPage: number) => void
}

interface Props {
  children: React.ReactNode
}

export const ProductContext = createContext<ProductContextType | null>(null)

const ProductProvider = ({ children }: Props) => {
  const [products, setProducts] = useState<Product[]>([])
  const [filterID, setFilterID] = useState('')
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const { enqueueSnackbar } = useSnackbar()

  const { fetchData } = useApi()
  useEffect(() => {
    fetchData('products', { page, per_page: rowsPerPage, id: filterID })
      .then((data) => {
        // check if data is an array or an object
        if (Array.isArray(data.data)) {
          setProducts(data.data)
          setTotal(data.total)
        } else {
          setProducts([data.data])
          setTotal(1)
        }
      })
      .catch((e) => { enqueueSnackbar(e.message, { variant: 'error' }) })
  }, [page, rowsPerPage, filterID])

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        setFilterID,
        page,
        setPage,
        rowsPerPage,
        setRowsPerPage,
        total
      }}
    >

      {children}

    </ProductContext.Provider>
  )
}

export default ProductProvider
