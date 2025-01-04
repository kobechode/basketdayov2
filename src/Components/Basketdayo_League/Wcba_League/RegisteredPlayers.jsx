import React, { useState, useEffect } from "react";
import { db,app } from "../../../Firebaseconfig"
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import './RegisteredPlayers.css';

const RegisteredPlayersWcba = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [itemsPerPage, setItemsPerPage] = useState(5); // Items per page (3 items per page)
  const [searchQuery, setSearchQuery] = useState(""); // Search query

  // Handle data slicing for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Filter the data based on the search query
  const filteredData = data.filter((item) => {
    return (
      (item.Firstname && item.Firstname.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.Lastname && item.Lastname.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.Status && item.Status.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage); // Total pages calculation

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "League_Registration", "Wcba", "Wcba_Registered_Players"));
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

  // Handle the next page button click
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle the previous page button click
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="Game_Analytics">
      <header className="headerGame">
        <div className="container">
          <div className="header__wrapper">
            <nav className="nav">
              <ul>
                <Link to="/wcbaleague">Registration</Link>
                <Link to="/game" className="active">Registered Players</Link>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <table>
        <caption>Registered Players</caption>
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td>{item.Firstname || 0}</td>
              <td>{item.Lastname || 0}</td>
              <td>{item.Status || 0}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Buttons */}
      <div className="pagination">
        {/* Previous Button */}
        <button onClick={prevPage} disabled={currentPage === 1} className="prev-button">
          Previous
        </button>

        {/* Next Button */}
        <button onClick={nextPage} disabled={currentPage === totalPages} className="next-button">
          Next
        </button>
      </div>

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

export default RegisteredPlayersWcba;
