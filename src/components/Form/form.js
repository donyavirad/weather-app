import React from 'react'
import { Link} from 'react-router-dom'
import axios from 'axios'
import "./form.scss"
import Container from '../../hoc/Container'
class Form extends React.Component {
    state={
        userInput :"",
        data:{},
        error: false,
        loading: false,
        setDataIsOk : false,
    }
    setInput=(e)=>{
        this.setState({userInput: e.target.value})
    }
    serachCity =(e)=>{
        e.preventDefault()
        this.setState({error : false , loading : true, data: {} })
        axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${this.state.userInput}&limit=10&appid=3c1faa2ad2a590d8f291f067c5ba2c00`)
        .then((response)=>{
            this.setState({
                data: response
            })
            this.setState({loading: false})
        }).catch(()=>{
            this.setState({error: true, loading:false})
        })
        
    }
    addCity =(e)=>{
        const dataCity = this.state.data.data[e.target.id]
        const string = JSON.stringify(dataCity)
        localStorage.setItem("weatherData",string)
        this.setState({setDataIsOk:true})
    }
    render(){
        
        let result = null
        if(this.state.loading){
            result =  
            <div className='form-result-show'>
                <div className='form-loading'></div>
                <div className='form-loading'></div>
                <div className='form-loading'></div>
                <div className='form-loading'></div>
            </div>
        }
        if(this.state.data.status === 200 ){
            const data = this.state.data.data
            
            if(data.length === 0){
               result = 
               <div className='form-result-show'>
                    <p>شهری یافت نشد.</p>
                </div>
            }else{
                result = 
                <div className='form-result-show'>
                    {data.map((item,id)=>{
                       return(
                            <Link to="/home" key={id} id={id} onClick={this.addCity} className='form-result-item'>
                                {item.name} {item.country} {item.state}
                            </Link>
                       )
                   })}
                </div>

            }
        }
    
        return(
            <div className='form'>
                <Container>
                    <div className='form-container'>
                        <div className='form-box'>
                            <h1 className='form-title'>آب و هوا</h1>
                            <form className='form-inputs' onSubmit={this.serachCity}>
                                <input 
                                    className='form-inputs-string'
                                    value={this.state.userInput}
                                    onChange={this.setInput}
                                    placeholder='نام شهر را وارد کنید.'
                                    required
                                />
                                
                                <input className='form-inputs-submit' type="submit" value="جستوجو" />
                            </form>
                            <div className='form-result'>
                                {result}
                                {this.state.error ? 
                                    <div className='form-result-show'>
                                        <p  style={{color: "white"}}>اتصال اینترنت را بررسی کنید.</p>
                                    </div>
                                :null}

                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}


export default Form
