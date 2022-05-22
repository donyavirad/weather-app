import React from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Main from './components/main/Main'
import Form from "./components/Form/form"
import "./base.scss"
class App extends React.Component {
    
    render(){
       const localInfo = localStorage.getItem("weatherData")
        return(
            <main>
                    <Router>
                            <Routes>
                                <Route path='/' element={
                                    !(localInfo === null) ? <Main/>
                                    : <Form/>
                                }/>
                                <Route path='/home' element={<Main/>} />
                                <Route path='/start' element={<Form/>} />
                            </Routes>
                    </Router>
            </main>
        )
    }
}

export default App;
