import React from 'react'
import { BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom'
import Home from './pages/home'
import Form from './pages/form'
import "./base.scss"
class App extends React.Component {
    
    render(){
       const localInfo = localStorage.getItem("weatherInfo")
        return(
            <main>
            <BrowserRouter basename='https://weather-app-donyavi.netlify.app'>
                <Router>
                        <Routes>
                            <Route exact path='./' element={
                                !(localInfo === null) ? <Navigate to={"/home"}/>
                                : <Navigate to="/start"/>
                            }/>
                            <Route exact path='./home' element={<Home/>} />
                            <Route exact path='./start' element={<Form/>} />
                        </Routes>
                </Router>
            </BrowserRouter>
            </main>
        )
    }
}

export default App;
