import React, {useState} from 'react';
import Nav from '../components/nav/Nav';
import SearchComponent from '../components/search/SearchComponent';
import CardFeed from '../components/feed/CardFeed';
import FeedDisplay from '../components/feed/FeedDisplay';
import {Row, Result, Button, Avatar} from 'antd';
import {DownOutlined} from '@ant-design/icons';
import './SearchResult.scss';

const SearchResult = () => {


	return(
	<div>
		<Nav/>
		<div className="search-wrapper">
			<SearchComponent/>
			<div className="search-wrapper__search-result">
				<Result
			    title="Found Result"
			    icon={<DownOutlined style={{color: '#FF65C5'}}/>}
	  		/>
	  		<div className="search-wrapper__search-result--tabs">
					<Avatar
		        style={{
		          backgroundColor: 'salmon',
		          verticalAlign: 'middle',
		        }}
		        size="large"        
		      	>        
	      	</Avatar>
					<h1> asdf </h1>
				</div>
			</div>
		</div>
	</div>
	)
}

export default SearchResult;



