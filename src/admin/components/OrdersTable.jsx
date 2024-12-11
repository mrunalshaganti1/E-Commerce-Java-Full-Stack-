import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { confirmOrders, deleteOrders, deliveredOrders, getOrders, shipOrders } from '../../State/Admin/Order/Action';
import { Avatar, AvatarGroup, Button, Card, CardContent, CardHeader, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const OrdersTable = () => {

  const dispatch = useDispatch();

  const {adminOrder} = useSelector(store => store);

  const [anchorEl, setAnchorEl] = React.useState([]);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    dispatch(getOrders())
  },[adminOrder.confirmed, adminOrder.shipped, adminOrder.delivered])

  console.log("Get Orders: ", adminOrder)

  const handleShippedOrder = (orderId) => {
    dispatch(shipOrders(orderId));
    handleClose();
  }
  const handleConfirmedOrder = (orderId) => {
    dispatch(confirmOrders(orderId));
    handleClose();
  }
  const handleDeliveredOrder = (orderId) => {
    dispatch(deliveredOrders(orderId));
    handleClose();
  }

  const handleDeleteOrder = (orderId) => {
    dispatch(deleteOrders(orderId));
  }

  return (
    <div className='p-5'>
      <Card className='mt-2' sx={{bgcolor: "#7a6668"}}>
        <CardHeader title="All Products"/>
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
                          
                          <TableCell align="left">Status</TableCell>
                          <TableCell align="left">Update</TableCell>
                          <TableCell align="left">Delete</TableCell>
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
                            <TableCell align="left">{row.totalPrice}</TableCell>
                            <TableCell align="left"><span className={`px-5 py-2 rounded-full ${row.orderStatus == "CONFIRMED" ? "bg-[green]" : row.orderStatus == "SHIPPED" ? "bg-[blue]" : row.orderStatus == "PLACED" ? "bg-[grey]" : row.orderStatus == "PENDING" ? "bg-[yellow]" : "bg-[red]"}`}>{row.orderStatus}</span></TableCell>
                            <TableCell align="left"><Button
                                  id="basic-button"
                                  aria-controls={open ? 'basic-menu' : undefined}
                                  aria-haspopup="true"
                                  aria-expanded={open ? 'true' : undefined}
                                  onClick={handleClick}
                                >
                                  Status
                                </Button>
                                <Menu
                                  id={`basic-menu-${row.id}`}
                                  anchorEl={anchorEl[index]}
                                  open={Boolean(anchorEl[index])}
                                  onClose={handleClose}
                                  MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                  }}
                                >
                                  <MenuItem onClick={() => handleConfirmedOrder(row.id)}>Confirm Order</MenuItem>
                                  <MenuItem onClick={() => handleShippedOrder(row.id)}>Shipped Order</MenuItem>
                                  <MenuItem onClick={() => handleDeliveredOrder(row.id)}>Delivered Order</MenuItem>
                                </Menu></TableCell>
                            <TableCell align="left"><Button variant='outlined' onClick={() => handleDeleteOrder(row.id)} aria-controls={`basic-menu-${row.id}`}>Delete</Button></TableCell>
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

export default OrdersTable