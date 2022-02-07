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
import Recipes from './components/Meals/Recipes'
import UserHome from './Pages/UserHome'
import UserHome2 from './Pages/UserHome2'


import { UserContext } from './store/UserContext'
function App() {
  return (
    <>
      {/* <Restaurant /> */}
      {/* <Login /> */}
      {/* <Recipes /> */}
      <br></br>
      <Router>
        <Routes>
          <Route exact path="/" element={<Header />} />
          <Route path="/userLogin" element={<Login />} />
          <Route path="/userSignup" element={<SignupUser />} />
          <Route path="/restaurantLogin" element={<LoginRestaurant />} />
          <Route path="/restaurantSignup" element={<SignUpRestaurant />} />
          <Route path="/RestaurantHome" element={<Restaurant />} />
          <Route path="/UserHome" element={<UserHome />} />
          <Route path="/UserHome/:restaurauntId" element={<UserHome2 />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
