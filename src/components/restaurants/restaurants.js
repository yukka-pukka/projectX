import React, { Component } from 'react';
import { db, restaurantsCollection  } from '../../utils/firebase';
import { firebaseLooper } from '../../utils/helper';
import axios from 'axios';
import data from '../../data.json'


class Restaurants extends Component {
    
    state = {
        restaurants: null
    }

   
    render(){
        // const restaurants  = this.state.restaurants  
        console.log(data)
        return(
        <div>
            
            
        
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th> Name </th>
                        <th> Lat </th>
                        <th> Long </th>

                    </tr>
                </thead>
                <tbody>
                    {/* { this.handleRestaurantsData(restaurants)} */}
                </tbody>
            </table>
        </div>
       
    )
}
}


export default Restaurants;