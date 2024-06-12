import {Component} from 'react';
import List from '../cardlist/list';
import SearchBox from '../searchbox';

class Monster extends Component {
    constructor(){
        super();
        this.state ={
            Allmonsters : [],
            filtMonsters : []
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=> res.json())
        .then((users)=>{
            this.setState({monsters : users, filtMonsters : users})
        })
    }

    onSearch =(e)=> {
      const search = e.target.value;
      const filteredMonsters = this.state.monsters.filter((mon) => mon.name.toLowerCase().includes(search));
      this.setState({filtMonsters : filteredMonsters})
    }

    render(){
        const {filtMonsters} = this.state;
        return <div>
            Monster Website
            <SearchBox onSearch = {this.onSearch}/>
            <List list={filtMonsters}/>
        </div>
    }
}

export default Monster;