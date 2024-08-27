
import React, { useEffect, useState } from 'react';
import poster from '../Assets/poster.png';
import Footer from '../Components/Footer';
import colors from '../data/colors'; // Assume this is an array of hex codes like ['#FF5733', '#33FF57', ...]
import './Home.css';

function Home() {
  const [toPopUp, setPopUp] = useState(false);
  const [groupName, setGroupName] = useState('');
  const [selectedColor,setSelectedColor]=useState('');
  const [groups,setGroups]=useState([]);

  useEffect(()=>{
    const storedGroups=JSON.parse(localStorage.getItem('groups'))||[];
    console.log(storedGroups);
  },[])

  const choice=(clr)=>{
    // console.log(clr);
    setSelectedColor(clr);
  }

  const handlePlus = () => {
    setPopUp(!toPopUp);
  };
  const handleGroupNameChange = (e) => {
    setGroupName(e.target.value);
    // console.log(e.target.value);
  };
  const pushGroup=()=>{

    if(selectedColor&& groupName){
      const recentGroup={groupName,selectedColor};
      const updatedGroup=[...groups,recentGroup];
      setGroups(updatedGroup);
      localStorage.setItem('groups',JSON.stringify(updatedGroup));
      setSelectedColor('');
      setGroupName('');
      setPopUp(false);
    }
    else {
      alert('Please enter a group name and select a color.');
    }
    
    console.log(groups);
    
  }

  return (
    <>
      <div className="container">
        <div className="left">
          <h1>Pocket Notes</h1>
          <button className='plus-btn' onClick={handlePlus}>
            +
          </button>
          
        </div>
        {toPopUp && (
            <>
            <div className="overlay"></div>
            <div className="group-input-popup">
              <h1>Create New Group</h1>
              <label>Group Name :</label>
              <input
              className='grpName'
                type="text"
                placeholder='Enter group name'
                value={groupName}
                onChange={handleGroupNameChange}
              />
              <div className="colors-container">
                <label htmlFor="colorChoose">Choose color:</label>
                {colors.map((clr, index) => (

                  <button
                    onClick={()=> choice(clr)}
                    key={index}
                    className="color-circle"
                    // colour={clr}
                    style={{
                       backgroundColor: clr,
                       border: clr === selectedColor ? '2px solid black' : 'none' }}
                  ></button>
                ))}
              </div>
              <button onClick={pushGroup} className='createBTN'>Create</button>
            </div>
          </>
          )}
        <div className="right">
          <img src={poster} alt="" />
          <h1>Pocket Notes</h1>
          <div className="description">
            <h3>
              Send and receive messages without keeping your phone online. Use Pocket Notes on up to 4 linked devices and 1 mobile phone.
            </h3>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
