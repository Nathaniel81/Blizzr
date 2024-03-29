import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./Pages/Home";
import ProductListPage from "./Pages/ProductListPage";
import ProductDetailPage from "./Pages/ProductDetailPage";
import CartPage from "./Pages/CartPage";
import LoginPage from "./Pages/LoginPage";
import ShippingPage from "./Pages/ShippingPage";
import PaymentPage from "./Pages/PaymentPage";
import PlaceorderPage from "./Pages/PlaceorderPage";
import OrderPage from "./Pages/OrderPage";
import ProfilePage from "./Pages/ProfilePage";
import RegisterPage from "./Pages/RegisterPage";
import UserListPage from "./Pages/UserListPage";
import UserEditPage from "./Pages/UserEditPage";
import ProductListAdminPage from "./Pages/ProductListAdminPage";
import ProductEditPage from "./Pages/ProductEditPage";
import OrderListPage from "./Pages/OrderListPage";

const App = () => {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/products" Component={ProductListPage} />
          <Route path="/product/:id" Component={ProductDetailPage} />
          <Route path="/cart/:id?" Component={CartPage} />
          <Route path="/shipping" Component={ShippingPage} />
          <Route path="/payment" Component={PaymentPage} />
          <Route path="/placeorder" Component={PlaceorderPage} />
          <Route path="/order/:id" Component={OrderPage} />
          <Route path="/profile" Component={ProfilePage} />
          <Route path="/register" Component={RegisterPage} />
          <Route path="/login" Component={LoginPage} />

          <Route path="/admin/users" Component={UserListPage} />
          <Route path="/admin/user/:id/edit" Component={UserEditPage} />
          <Route path='/admin/productlist' Component={ProductListAdminPage} />
          <Route path='/admin/product/:id/edit' Component={ProductEditPage} />
          <Route path='/admin/orderlist' Component={OrderListPage} />

        </Routes>
        <Footer />
    </Router>
  )
}

export default App