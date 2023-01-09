import { Container } from '@mui/material'
import { FunctionComponent } from 'react'
import ProductsTable from './components/data-display/products/ProductsTable'

const App: FunctionComponent = () => {
  return (

      <Container maxWidth="md">
        <ProductsTable />
      </Container>

  )
}

export default App
