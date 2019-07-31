import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Forecast from 'react-forecast';
import axios from 'axios';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            latitude:'0.0',
            longitude: '0.0',
            city: 'a',
            isAppLoaded: false
        }
    }
    
    componentWillMount(){
        this.getIP()        
    }
    
    async getIP(){
        const IP_URL_HOME = 'https://ipapi.co/json/';
            const json = await axios.get(IP_URL_HOME);
            this.setState({
              latitude: json.data.latitude,
              longitude: json.data.longitude,
              city: json.data.city,
              isAppLoaded: true
            });
    }
    
    render(){
        if (this.state.isAppLoaded === true){
            return(
            <div>
                <Forecast latitude={this.state.latitude} longitude={this.state.longitude} name={this.state.city} units='si' />
            </div>
            )
        }
        return(
            <div>
                <Forecast latitude={this.state.latitude} longitude={this.state.longitude} name={this.state.city} units='si' />
            </div>
        )
    }
}

export default App;
