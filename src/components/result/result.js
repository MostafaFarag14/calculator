import React from 'react'
import './result.css'
export class Result extends React.Component {
render(){
return (
  <div className="row bg-dark text-light" >
        <div className="col py-3 text-right display-4">{this.props.result}</div>
      </div>
)
}

}