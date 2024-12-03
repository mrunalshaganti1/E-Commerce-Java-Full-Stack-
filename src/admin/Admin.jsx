import { CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useMediaQuery } from '@mui/material';
import { Box, useTheme } from '@mui/system';
import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';

import InboxIcon from '@mui/icons-material/Inbox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import Dashboard from './components/Dashboard';
import CreateProductForm from './components/CreateProductForm';
import ProductsTable from './components/ProductsTable';
import OrdersTable from './components/OrdersTable';
import CustomersTable from './components/CustomersTable';

const menu = [
  {name: "Dashboard", path: "/admin", icon: <DashboardIcon/>},
  {name: "Products", path: "/admin/products", icon:<Inventory2Icon/>},
  {name: "Customers", path: "/admin/customers", icon: <SupportAgentIcon/>},
  {name: "Orders", path: "/admin/orders", icon:<ProductionQuantityLimitsIcon/>},
  {name: "Add Product", path: "/admin/product/create", icon: <HealthAndSafetyIcon/>},
  //{name: "", path: " "},
]

const Admin = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisibile] = useState(false);
  const navigate = useNavigate();

  const drawer = (
    <Box sx={{overflow:"auto", 
              display: "flex", 
              flexDirection: "column", 
              justifyContent: "space-between",
              height: "100%"}}>

        {/* {isLargeScreen && <Toolbar/>} */}
        <List>
          {menu.map((item, index) => <ListItem key={item.name} disablePadding onClick={() => navigate(item.path)}>
            <ListItemButton>
              <ListItemIcon>
                  {item.icon}
              </ListItemIcon>
              <ListItemText>{item.name}</ListItemText>
            </ListItemButton>
          </ListItem>)}
        </List>

        <List>
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                  <ManageAccountsIcon/> 
              </ListItemIcon>
              <ListItemText>Account</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
    </Box>
  )

  return (
    <div>
        <div className='flex h-[100vh]'>
            <CssBaseline/>

            <div className='w-[15%] border border-r-gray-900 h-full'>
              {drawer}
            </div>

            <div className='w-[85%]'>
              <Routes>
                <Route path='/' element={<Dashboard/>}></Route>
                <Route path='/product/create' element={<CreateProductForm/>}></Route>
                <Route path='/products' element={<ProductsTable/>}></Route>
                <Route path='/orders' element={<OrdersTable/>}></Route>
                <Route path='/customers' element={<CustomersTable/>}></Route>
              </Routes>
            </div>
        </div>
    </div>
  )
}

export default Admin