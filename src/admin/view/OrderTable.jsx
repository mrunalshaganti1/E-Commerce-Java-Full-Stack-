import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { confirmOrders, deleteOrders, deliveredOrders, getOrders, shipOrders } from '../../State/Admin/Order/Action';
import { Avatar, AvatarGroup, Button, Card, CardContent, CardHeader, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const OrderTable = () => {

  const dispatch = useDispatch();

  const {adminOrder} = useSelector(store => store);

  const [anchorEl, setAnchorEl] = React.useState([]);
  const open = Boolean(anchorEl);

  useEffect(() => {
    dispatch(getOrders())
  },[adminOrder.confirmed, adminOrder.shipped, adminOrder.delivered, adminOrder.deletedOrder])

  console.log("Get Orders: ", adminOrder)

  return (
    <div className='p-5'>
      <Card className='mt-2' sx={{bgcolor: "#7a6668"}}>
        <CardHeader title="Recent Orders"/>
        <CardContent sx={{bgcolor: "#7a6668"}}>
                <TableContainer component={Paper} >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Image</TableCell>
                          <TableCell align="left">Title</TableCell>
                          <TableCell align="left">Id</TableCell>
                          <TableCell align="left">Category</TableCell>
                          <TableCell align="left">Total Price</TableCell>
                          
                          <TableCell align="left">Status</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {adminOrder?.orders?.map((row, index) => (
                          <TableRow
                            key={row.title}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell component="th" scope="row">
                              <AvatarGroup max={3} sx={{justifyContent:"start"}}>{row.orderItems.map((item) => <Avatar src={item.product.imageUrl}></Avatar>)}</AvatarGroup>
                            </TableCell>
                            <TableCell>
                              {row.orderItems.map((item) => <p>{item.product.title}</p>)}
                            </TableCell>
                            <TableCell>
                              {row.orderItems.map((item) => <p>{item.product.id}</p>)}
                            </TableCell>
                            <TableCell>
                              {row.orderItems.map((item) => <p>{item.product.category.name}</p>)}
                            </TableCell>
                            <TableCell>
                              {row.orderItems.map((item) => <p>{item.product.totalPrice}</p>)}
                            </TableCell>
                            <TableCell align="left"><span className={`px-5 py-2 rounded-full ${row.orderStatus == "CONFIRMED" ? "bg-[green]" : row.orderStatus == "SHIPPED" ? "bg-[blue]" : row.orderStatus == "PLACED" ? "bg-[grey]" : row.orderStatus == "PENDING" ? "bg-[yellow]" : row.orderStatus == "DELIVERED" ? "bg-orange-500" : "bg-[red]"}`}>{row.orderStatus}</span></TableCell>
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

export default OrderTable