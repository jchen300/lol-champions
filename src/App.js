import React  from 'react';
import logo from './logo.svg';
import CardList from './component/card-list/CardList';
import SearchBox from './component/SearchBox/SearchBox';
import './App.css'

const API_KEYS = "RGAPI-2e2efa4a-e927-4270-9130-ac3a097d58f4";
const FETCH_URL =  "https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/_0PheTkqlc8QbhI8W_1O2SzRw6PqRIzu8XecAGBvEgPmkC8?api_key=RGAPI-2cd6af10-7e05-4faa-9b35-8bc3798ebb69";
const CHAMP_URL = "http://ddragon.leagueoflegends.com/cdn/9.24.2/data/en_US/champion.json"
class App extends React.Component {
  constructor(){
    super();

    this.state = { 
      userInfo : null,
      champions : {},
      searchField: '',
    }
  }

  componentDidMount() {
    fetch(CHAMP_URL)
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        this.setState({champions : data.data});
      })
      .catch(err=>console.log(err));
    fetch(FETCH_URL)
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        this.setState({userInfo: data});
      })
      .catch(err=>console.log(err));
  }
  

  render() {
    const { champions, searchField } =  this.state;
    const filteredChampions = Object.keys(champions).filter(champion => 
      champions[champion].name.toLowerCase().includes(searchField.toLowerCase()));
    const dict = filteredChampions.reduce((obj,key)=>{
      obj[key] = champions[key];
      return obj;
    },{})
    return(
      <div className="App">
        <h3 className="Title"> League of Legends Champions</h3>
        <SearchBox placeholder='search champions' handleChange={e => this.setState({searchField : e.target.value})}/>
        <CardList champions = {dict}/>        
      </div>
    );
  }
}

export default App;
