import "./App.css";
import "./assets/form.css";
import "./assets/product.css";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/Login";
import Register from "./component/Register";
import Cart from "./component/Cart";
import Checkcart from "./component/Checkcart";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Productdetail from "./component/Productdetail";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/regiter" element={<Register />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkcart" element={<Checkcart />} />
      <Route path="/productdetail" element={<Productdetail />} />
    </Routes>
  );
};

export default App;
