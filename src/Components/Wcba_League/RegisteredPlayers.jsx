import React, { useState,useEffect } from "react";
import { db, app } from "../../Firebaseconfig"; // Firebase config
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";

 
import { Link } from "react-router-dom";
import './RegisteredPlayers.css';
 

const RegisteredPlayersWcba = () => {
  
    const [data, setData] = useState([]);
    const [editId, setEditId] = useState(null); // ID of the row being edited
    const [editValues, setEditValues] = useState({}); // Editable values
    useEffect(() => {
        const fetchData = async () => {
          try {
            const querySnapshot = await getDocs(collection(db, "League_Registration","Wcba","Wcba_Registered_Players"));
            const dataList = querySnapshot.docs.map((doc) => ({
              id: doc.id, // Firestore document ID
              ...doc.data(), // Document data
            }));
            setData(dataList);
          } catch (error) {
            console.error("Error fetching data: ", error);
          }
        };
    
        fetchData();
      }, []);  
 
     
    
      // Handle Save button
  
  return (

    
    <div className="Game_Analytics">
          <header class="headerGame">
        <div class="container">
          
           <div class="header__wrapper">

            <nav class="nav">
                <ul>
                    
                   
                <Link to="/Home">Home</Link>
                <Link to="/game" class="active">Game Analytics</Link>
                </ul>
              </nav>
    
        </div>


    </div>



  



               </header>

               <table >
        <caption>Team Rankings and Statistics</caption>
        <thead>
            <tr>
                   
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Status</th>
               
            </tr>
        </thead>
        <tbody>
        {data.map((item) => (
            <tr key={item.id}>

                
               
              <td>{item.Firstname || 0}</td>
              <td>{item.Lastname || 0}</td>
              <td>{item.Status || 0}</td>
            
              
            </tr>
          ))}
           
          

            

        

            

     
        </tbody>
               </table>

               <div class="schedule">
      

        <h1>Game Schedule</h1>
        <div class="day">
            <h3>Sat Dec 07</h3>
            <p>Location: Montana Basketball Court</p>
            <div class="game">
                <div class="time">05:00 PM</div>
                <div class="matchup">
                    <span class="team">Magnolia Hotshots</span> vs 
                    <span class="team">Converge FiberXers</span>
                </div>
            </div>
            <div class="game">
                <div class="time">07:30 PM</div>
                <div class="matchup">
                    <span class="team">Meralco Bolts</span> vs 
                    <span class="team">Rain or Shine</span>
                </div>
            </div>
            <div class="game">
                <div class="time">09:30 PM</div>
                <div class="matchup">
                    <span class="team">NorthPort Batang Pier</span> vs 
                    <span class="team">San Miguel Beermen</span>
                </div>
            </div>
        </div>
       
        <div class="day">
            <h3>Sun Dec 08</h3>
            <p>Location: Montana Basketball Court</p>
            <div class="game">
                <div class="time">05:00 PM</div>
                <div class="matchup">
                    <span class="team">Team Pink</span> vs 
                    <span class="team">Team Black</span>
                </div>
            </div>
            <div class="game">
                <div class="time">07:30 PM</div>
                <div class="matchup">
                    <span class="team">San Miguel Beermen</span> vs 
                    <span class="team">Phoenix Fuel Masters</span>
                </div>
            </div>
            <div class="game">
                <div class="time">09:30 PM</div>
                <div class="matchup">
                    <span class="team">Magnolia Hotshots</span> vs 
                    <span class="team">Eastern Long Lions</span>
                </div>
            </div>
        </div>
       
        <div class="day">
            <h3>Sat Dec 14</h3>
            <p>Location: Montana Basketball Court</p>
            <div class="game">
                <div class="time">05:00 PM</div>
                <div class="matchup">
                    <span class="team">NorthPort Batang Pier</span> vs 
                    <span class="team">Magnolia Hotshots</span>
                </div>
            </div>
            <div class="game">
                <div class="time">07:30 PM</div>
                <div class="matchup">
                    <span class="team">Rain or Shine</span> vs 
                    <span class="team">Eastern Long Lions</span>
                </div>
            </div>
            <div class="game">
                <div class="time">09:30 PM</div>
                <div class="matchup">
                    <span class="team">Terrafirma Dyip</span> vs 
                    <span class="team">Converge FiberXers</span>
                </div>
            </div>
        </div>

         
          <div class="day">
            <h3>Sun Dec 15</h3>
            <p>Location: Montana Basketball Court</p>
            <div class="game">
                <div class="time">05:00 PM</div>
                <div class="matchup">
                    <span class="team">NorthPort Batang Pier</span> vs 
                    <span class="team">Magnolia Hotshots</span>
                </div>
            </div>
            <div class="game">
                <div class="time">07:30 PM</div>
                <div class="matchup">
                    <span class="team">Rain or Shine</span> vs 
                    <span class="team">Eastern Long Lions</span>
                </div>
            </div>
            <div class="game">
                <div class="time">09:30 PM</div>
                <div class="matchup">
                    <span class="team">Terrafirma Dyip</span> vs 
                    <span class="team">Converge FiberXers</span>
                </div>
            </div>
        </div>

         
          <div class="day">
            <h3>Sat Dec 21</h3>
            <p>Location: Montana Basketball Court</p>
            <div class="game">
                <div class="time">05:00 PM</div>
                <div class="matchup">
                    <span class="team">NorthPort Batang Pier</span> vs 
                    <span class="team">Magnolia Hotshots</span>
                </div>
            </div>
            <div class="game">
                <div class="time">07:30 PM</div>
                <div class="matchup">
                    <span class="team">Rain or Shine</span> vs 
                    <span class="team">Eastern Long Lions</span>
                </div>
            </div>
            <div class="game">
                <div class="time">09:30 PM</div>
                <div class="matchup">
                    <span class="team">Terrafirma Dyip</span> vs 
                    <span class="team">Converge FiberXers</span>
                </div>
            </div>
        </div>

           
           <div class="day">
            <h3>Sun Dec 22</h3>
            <p>Location: Montana Basketball Court</p>
            <div class="game">
                <div class="time">05:00 PM</div>
                <div class="matchup">
                    <span class="team">NorthPort Batang Pier</span> vs 
                    <span class="team">Magnolia Hotshots</span>
                </div>
            </div>
            <div class="game">
                <div class="time">07:30 PM</div>
                <div class="matchup">
                    <span class="team">Rain or Shine</span> vs 
                    <span class="team">Eastern Long Lions</span>
                </div>
            </div>
            <div class="game">
                <div class="time">09:30 PM</div>
                <div class="matchup">
                    <span class="team">Terrafirma Dyip</span> vs 
                    <span class="team">Converge FiberXers</span>
                </div>
            </div>
        </div>

          
           <div class="day">
            <h3>Sat Dec 28</h3>
            <p>Location: Montana Basketball Court</p>
            <div class="game">
                <div class="time">05:00 PM</div>
                <div class="matchup">
                    <span class="team">NorthPort Batang Pier</span> vs 
                    <span class="team">Magnolia Hotshots</span>
                </div>
            </div>
            <div class="game">
                <div class="time">07:30 PM</div>
                <div class="matchup">
                    <span class="team">Rain or Shine</span> vs 
                    <span class="team">Eastern Long Lions</span>
                </div>
            </div>
            <div class="game">
                <div class="time">09:30 PM</div>
                <div class="matchup">
                    <span class="team">Terrafirma Dyip</span> vs 
                    <span class="team">Converge FiberXers</span>
                </div>
            </div>
        </div>

          
           <div class="day">
            <h3>Sun Dec 29</h3>
            <p>Location: Montana Basketball Court</p>
            <div class="game">
                <div class="time">05:00 PM</div>
                <div class="matchup">
                    <span class="team">NorthPort Batang Pier</span> vs 
                    <span class="team">Magnolia Hotshots</span>
                </div>
            </div>
            <div class="game">
                <div class="time">07:30 PM</div>
                <div class="matchup">
                    <span class="team">Rain or Shine</span> vs 
                    <span class="team">Eastern Long Lions</span>
                </div>
            </div>
            <div class="game">
                <div class="time">09:30 PM</div>
                <div class="matchup">
                    <span class="team">Terrafirma Dyip</span> vs 
                    <span class="team">Converge FiberXers</span>
                </div>
            </div>
        </div>
           </div>
    </div>
  );
};

export default RegisteredPlayersWcba ;
