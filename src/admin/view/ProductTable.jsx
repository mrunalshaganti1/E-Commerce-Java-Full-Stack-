import { Avatar, Button, Card, CardContent, CardHeader, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect } from 'react'
import { deleteProduct, findProducts } from '../../State/Product/Action'
import { useDispatch, useSelector } from 'react-redux'

const ProductTable = () => {

  const dispatch = useDispatch();
  const {products} = useSelector(store => store);

  useEffect(() => {
    const data = {
      category: "mens_kurta",
      colors: [],
      sizes: [],
       minPrice: 0, 
       maxPrice: 100000,
       minDiscount:  0,
       sort: "price_low",
       pageNumber: 0,
       pageSize: 10,
       stock: ""
    }
    dispatch(findProducts(data));
  },[products.product])
  return (
    <div className='p-5'>
      <Card className='mt-2' sx={{bgcolor: "#7a6668"}}>
        <CardHeader title="Recent Products"/>
        <CardContent sx={{bgcolor: "#7a6668"}}>
                <TableContainer component={Paper} >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Image</TableCell>
                          <TableCell align="left">Title</TableCell>
                          <TableCell align="left">Id</TableCell>
                          <TableCell align="left">Category</TableCell>
                          <TableCell align="left">Discounted Price</TableCell>
                          <TableCell align="left">Quantity</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {products?.products?.content?.slice(0,5).map((row) => (
                          <TableRow
                            key={row.title}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell component="th" scope="row">
                              <Avatar src={row.imageUrl}></Avatar> 
                            </TableCell>
                            <TableCell align="left">{row.title}</TableCell>
                            <TableCell align="left">{row.id}</TableCell>
                            <TableCell align="left">{row.category.name}</TableCell>
                            <TableCell align="left">{row.discountedPrice}</TableCell>
                            <TableCell align="left">{row.quantity}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
            </TableContainer>
        </CardContent>
      </Card>
        
    </div>
  )
}

export default ProductTable