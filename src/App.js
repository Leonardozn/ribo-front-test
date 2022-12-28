import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Overview from './views/Overview'
import AddUser from './views/AddUser'
import Users from './views/Users/Users'
import MainContainer from './components/MainContainer/MainContainer'
import { useState } from 'react'

function App() {
  const [sidebar, setSidebar] = useState(true)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <Router>
      <Sidebar sidebar={sidebar} showSidebar={showSidebar}/>
      <MainContainer sidebar={sidebar}>
        <Routes>
          <Route path="/overview" exact element={<Overview />}/>
          <Route path="/adduser" exact element={<AddUser />}/>
          <Route path="/users" exact element={<Users />}/>
        </Routes>
      </MainContainer> 
    </Router>
  );
}

export default App;
