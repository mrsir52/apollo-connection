import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import gql from "graphql-tag";
import { Query } from "react-apollo";



class App extends Component {
  render() {
    
    return (
      <div className="App">
      <h1>USD Currency</h1>
  <Query
    query={gql`
      {
        getPokemon(id: 1) {
          id
          name
          height
          abilities {
            slot
            is_hidden
            ability {
              name
              url
            }
          }
          stats {
            effort
            base_stat
            stat {
              name 
              url
            }
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      console.log("HERE ---->", data.getPokemon)
      if (loading) return <p>Loading...</p>;
      
      if (error) return <p>Error :(</p>;
      
      
       
      return data.getPokemon.map( obj => {({ id }, { name }) => (
        <div key={id}>
          <button>{`${id}: ${name}`}</button>
        </div>
        
      )});
    }}
  </Query>
);
        
      </div>
    );
  }
}

export default App;






