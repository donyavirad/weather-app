import React from 'react'
import { BrowserRouter as Router,Routes,Route,Navigate, BrowserRouter} from 'react-router-dom'
import Home from './pages/home'
import Form from './pages/form'
import "./base.scss"
class App extends React.Component {
    
    render(){
       const localInfo = localStorage.getItem("weatherInfo")
        return(
            <main>
                <Router>
                        <Routes>
                            <Route path='/' element={
                                !(localInfo === null) ? <Navigate to={"/home"}/>
                                : <Navigate to="/start"/>
                            }/>
                            <Route path='/home' element={<Home/>} />
                            <Route path='/start' element={<Form/>} />
                        </Routes>
                </Router>
            </main>
        )
    }
}

export default App;
