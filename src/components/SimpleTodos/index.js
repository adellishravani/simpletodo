import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

import {Component} from 'react'

class SimpleTodos extends Component {
    state={detailsList:initialTodosList}
    
  onDeleteUser=(id)=>{
const {detailsList}=this.state
const filteredData=detailsList.filter(each=>each.id!==id)

this.setState({detailslist:filteredData})
    
  }

  render() {
    return (
      <div className="bg">
        <div className="card">
          <h1 className="heading">Simple Todos</h1>
          <div >
            <ul>
              {initialTodosList.map(eachitem => (
                <TodoItem todoDetails={eachitem} key=eachitem.id ondeleteUser={this.onDeleteUser}/>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default SimpleTodos