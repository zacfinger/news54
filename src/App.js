import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import StoryGrid from './components/stories/StoryGrid'
import config from './config'
import './App.css';

const App = () => {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
	const fetchItems = async () => {
		const result = await axios(`http://` + config.domain + `/api/`)

		console.log(result.data)

		setItems(result.data)
		setIsLoading(false)

	}

	fetchItems()
  }, [])

  return (
    <div className="container">
    	<Header />
	<StoryGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
