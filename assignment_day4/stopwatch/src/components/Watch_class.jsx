import React, { Component } from 'react'

export default class Watch_class extends Component {

    constructor(){
        super();
        this.state={
            count:0,
            interval:0,
            x:true
            
        }
    }

    start(){
        if(this.state.x){
            this.setState({x:false})
        let inte=setInterval(() => {
          this.setState({count:this.state.count+1})
        }, 1000)

        this.setState({interval:inte})
    }
        
    }

    stop(){
        clearInterval(this.state.interval)
        this.setState({x:true})

    }

    reset(){
        this.setState({count:0})
        clearInterval(this.state.interval)
        this.setState({x:true})
    }

  render() {
    return (





        <div class="grid place-items-center h-screen">
    <div class="p-6 w-2/4 h-2/4 shadow-orange-900 bg-yellow-500 bg-yellow rounded-lg border border-blue-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
        <h1>Class Component</h1>
        <br/><br/><br/><br/>
          <h1 class=" h-1/4 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><h1>{((this.state.count)/60)<1 ? "0"+"0" :((this.state.count)/60)?"0"+parseInt((this.state.count)/60):parseInt((this.state.count)/60)}:{((this.state.count)%60)<10 ? "0" + ((this.state.count)%60):(this.state.count)%60}</h1></h1>
        </a>


    
      <br/><br/>
      <button class=" transition ease-in-out delay-150 bg-yellow-500 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-400 duration-300 ...   cursor-pointer h-10 px-5 m-2 text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800" onClick={()=>{this.start()}}>Start</button>
      <button class=" transition ease-in-out delay-150 bg-red-700 hover:-translate-y-1 hover:scale-110 hover:bg-red-400 duration-300 ...  cursor-pointer h-10 px-5 m-2 text-red-100 transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800" onClick={()=>{this.stop()}}>Stop</button>
      <button class=" transition ease-in-out delay-150 bg-purple-700 hover:-translate-y-1 hover:scale-110 hover:bg-purple-400 duration-300 ...  cursor-pointer h-10 px-5 m-2 text-purple-100 transition-colors duration-150 bg-purple-600 rounded-lg focus:shadow-outline hover:bg-purple-700" onClick={()=>{this.reset()}}>Reset</button>

     
    </div>
    </div>

    )
  }
}


//<h1>{(sec/60)< 1 ? "0" + "0" :(sec/60)<10?"0"+parseInt(sec/60):parseInt(sec/60) }:{(sec%60) < 10 ? "0" + (sec%60) : sec%60 }</h1>
