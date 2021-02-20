import React, { Component, Fragment} from 'react'
import axios from 'axios'
import config from '../config'

export class TopHeader extends Component {

	state = {
		weather: {}
	}

	componentDidMount() {
		axios.get(`http://` + config.domain + `/api/weather`)
		.then(res => this.setState({
			weather: res.data,
			isLoaded: true
		}))
		.catch(err => console.log(err));
	}

	render(){
	    const { weather } = this.state;

	    return (
		<div id="CollapsibleHeader-topHeader" className="CollapsibleHeader-topHeader">
			<div id="CurrentConditionsAtAGlanceDetail">
		    		<div id="CurrentConditionsAtAGlanceDetail-wrapper" className="CurrentConditionsAtAGlanceDetail-wrapper">
				    <div id="CurrentConditionsAtAGlanceDetail-wrapper-cityName" className="CurrentConditionsAtAGlanceDetail-wrapper-cityName">Tucson</div>
				    <div className="CurrentConditionsAtAGlanceDetail-wrapper-sky d-none d-md-block">{weather.sky}</div>
		    		</div>
		    		<div id="CurrentConditionsAtAGlanceDetail-weatherInfo">
				    <span id="CurrentConditionsAtAGlanceDetail-temp" className="CurrentConditionsAtAGlanceDetail-temp">
		    			{weather.temp}°
				    </span>
				    <span id="weather-icon" className="weather-icon" style={{backgroundImage: "url('/" + `${weather.icon}` +".svg')"}} />
		    		    <div className="CurrentConditionsAtAGlanceDetail-wrapper d-none d-md-inline-block">
					<div className="CurrentConditionsAtAGlanceDetail-wrapper-sky">H°</div>
					<div className="CurrentConditionsAtAGlanceDetail-wrapper-sky">L {weather.min}°</div>
				    </div>
		    		</div>
			</div>
		</div>
	    )
	}
}

export default TopHeader
