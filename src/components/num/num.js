import React from 'react'
import './num.css'
export class Num extends React.Component {

  handleClick = (e) => {
    this.props.onclick(e.target.innerText)
  }

  parse = (item) => {
    try {
      return parseInt(item)
    }
    catch {
      return 'ERROR'
    }
  }
  render() {
    const numList = [ ['C', '^2', '%', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']
    ]
    let x = 'col border bg-light'
    return (
      numList.map(
        (row,index) => {
          return (
            <div className="row" key={index}>
              {row.map(
                (col, index, array) => {
                  if(this.parse(col) === 0){
                    x = 'col-6 border bg-light py-2'
                  }
                  else{
                    if(isNaN(this.parse(col)) && col !== '.')
                    {
                      x = 'col border bg-warning text-white py-2 font-weight-bold'
                    }
                    else{
                      x = 'col border bg-light py-2'
                    }
                  }

                  
                  
                  return (
                    <a className={x} key={index} onClick={this.handleClick}>
                      {col}
                    </a>
                  )
                }
              )}
            </div>)
        }
      )
    )
  }
}
