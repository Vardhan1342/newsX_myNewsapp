import React, { Component , useState} from 'react';
import Navbar from './component/Navbar';
import NewsComp from './component/NewsComp';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
// onClick={()=>{this.setState({progress:this.state.progress+100})}}

export class App extends Component {
  constructor()
  {
    super();
    this.state={
      progress:0,
      mode:"dark"
      
    }
  }


  setProgress=(progress)=>{
    return this.setState({progress:progress})
  }
 handelChange()
 {
 
 }

  render() {
    return (
      <Router>
      <div>
      <LoadingBar color="#f11946" progress={this.state.progress} onLoaderFinished={() => this.setState({progress:0})} />

        <Navbar mode={this.state.mode} changemode={this.handelChange}/>
        <Routes>
         <Route exact path='/' element={<NewsComp setProgress={this.setProgress} key="general" pageSize={6} country='in' category="general" />} />
         <Route exact path='/general' element={<NewsComp setProgress={this.setProgress} key="general" pageSize={6} country='in' category="general" />} />
         <Route exact path='/science' element={<NewsComp setProgress={this.setProgress} key="science" pageSize={6} country='in' category="science" />} />
         <Route exact path='/business' element={<NewsComp setProgress={this.setProgress} key="business" pageSize={6} country='in' category="business" />} />
         <Route exact path='/entertainment' element={<NewsComp setProgress={this.setProgress} key="entertainment" pageSize={6} country='in' category="entertainment" />} />
         <Route exact path='/health' element={<NewsComp setProgress={this.setProgress} key="health" pageSize={6} country='in' category="health" />} />
         <Route exact path='/sports' element={<NewsComp setProgress={this.setProgress} key="sports" pageSize={6} country='in' category="sports" />} />
         <Route exact path='/technology' element={<NewsComp setProgress={this.setProgress} key="technology" pageSize={6} country='in' category="technology" />} />
       </Routes>
      </div>
      </Router>
    );
  }
}

export default App;

