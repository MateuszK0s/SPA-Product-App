import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { Product } from '../components/types/api'
import List from '@mui/material/List'
import Grid from '@mui/material/Grid'
import ListItemText from '@mui/material/ListItemText'

interface Style {
  position: 'absolute'
  top: string
  left: string
  transform: string
  width: number
  bgcolor: string
  border: string
  boxShadow: number
  p: number
}

const style: Style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}

interface Props {
  open: boolean
  setOpen: (open: boolean) => void
  product: Product
}

const ProductDetailsModal: React.FC<Props> = ({ open, setOpen, product }) => {
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2">
            {product.name}
          </Typography>
          <Grid item xs={12} md={6}>
              <List>
                <ListItemText primary="ID:" secondary={product.id} />
                <ListItemText primary="Name:" secondary={product.name} />
                <ListItemText primary="Year:" secondary={product.year} />
                <ListItemText primary="Color:" secondary={product.color} />
                <ListItemText primary="Pantone value:" secondary={product.pantone_value} />
              </List>
          </Grid>
        </Box>
      </Modal>
    </div>
  )
}

export default ProductDetailsModal
