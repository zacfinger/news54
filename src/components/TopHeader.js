import React, { Fragment} from 'react'

const TopHeader = () => {
	return (
		<div id="CollapsibleHeader-topHeader" className="CollapsibleHeader-topHeader">
			<div id="CurrentConditionsAtAGlanceDetail">
		    		<div className="CurrentConditionsAtAGlanceDetail-wrapper">
				    <div id="CurrentConditionsAtAGlanceDetail-wrapper-cityName">Tucson</div>
				    <div className="CurrentConditionsAtAGlanceDetail-wrapper-sky d-none d-md-block">Clear</div>
		    		</div>
		    		<div id="CurrentConditionsAtAGlanceDetail-weatherInfo">
				    <span id="CurrentConditionsAtAGlanceDetail-temp">
					79°
				    </span>
				    <span id="weather-icon" style={{backgroundImage: "url('https://raw.githubusercontent.com/fabianalexisinostroza/Antu-classic/90645fdd27cb53ddd77476dedcf8698488c903a9/Antu/status/64/weather-few-clouds.svg')"}} />
		    		    <div className="CurrentConditionsAtAGlanceDetail-wrapper d-none d-md-inline-block">
					<div className="CurrentConditionsAtAGlanceDetail-wrapper-sky">H°</div>
					<div className="CurrentConditionsAtAGlanceDetail-wrapper-sky">L 53°</div>
				    </div>
		    		</div>
			</div>
		</div>
	)
}

export default TopHeader
