import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom'

import Header from './components/Layouts/Header'
import Restaurant from './Pages/Restaurant'
import LoginRestaurant from './components/Layouts/LoginAsRestaurant'
import SignupUser from './components/Layouts/RegisterUser'
import SignUpRestaurant from './components/Layouts/RegisterRestaurant'
import Login from './components/Layouts/LoginAsUser'
function App() {
  return (
    <>
      {/* <Restaurant /> */}
      {/* <Login /> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Header />} />
          <Route path="/userLogin" element={<Login />} />
          <Route path="/userSignup" element={<SignupUser />} />
          <Route path="/restaurantLogin" element={<LoginRestaurant />} />
          <Route path="/restaurantSignup" element={<SignUpRestaurant />} />
          <Route path="/RestaurantHome" element={<Restaurant />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
