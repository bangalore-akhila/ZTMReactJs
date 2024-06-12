import './list.css';
import React, { Component } from 'react'

export class List extends Component {
  render() {
    const { list } = this.props
    return (
      <div className='card-list'>
        {list?.map((monster) => {
            return <div className="card-container"key={monster.id}>
              <img alt={`monster ${monster.name}`} src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} />
              <h2>{monster.name}</h2>
              <p>{monster.email}</p>
              </div>
        }      
        )}
      </div>
    )
  }
}

export default List