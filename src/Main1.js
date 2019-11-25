import React from "react";
import {Link} from "react-router-dom";
import './App.css'

export default class Main1 extends React.Component{
	constructor(props) {
    super(props);
    this.state = {
	  post1: [],
	  post2: [],
	  post3: []
    };
  }
  componentDidMount(){
	 fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=3b9b47999dfe42309055b8dab4916124')
.then(data => data.json())
.then(data => {
  console.log(data);
  this.setState({
	post1:data.articles[0],
	post2:data.articles[1],
	post3:data.articles[2]
  });
})
	}

  render(){
		return(
			<main>
				<div>
                    <Link to={'/Blogpost'}><h1>{this.state.post1.title}</h1></Link>
					<p>{this.state.post1.publishedAt}</p>
					<div className='summary'>
						<img src={this.state.post1.urlToImage} className='textImage'/>
						<p className='text'>{this.state.post1.description}</p>
						</div>
                    <Link to={'/BlogPost1'}><h1>{this.state.post2.title}</h1></Link>
					  <p>{this.state.post2.publishedAt}</p>
					  <div className='summary'>
						<img src={this.state.post2.urlToImage} className='textImage'/>
						<p className='text'>{this.state.post2.description}</p>
					</div>
                    <Link to={'/BlogPost2'}><h1>{this.state.post3.title}</h1></Link>
					<p>{this.state.post3.publishedAt}</p>
					<div className='summary'>
						<img src={this.state.post3.urlToImage} className='textImage'/>
						<p className='text'>{this.state.post3.description}</p>
					</div>
				</div>
		 </main>
	  );
	}
}





