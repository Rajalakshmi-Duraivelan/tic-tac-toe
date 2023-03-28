
import './App.css';
import { useState } from 'react';

function App() {
  const [isXturn, setIsXturn]=useState(true);
  const [board,setBoard]=useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ]);

  const winnerLogic = () => {
    const lines=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    for(let i=0;i<lines.length;i++){
      
    const[a,b,c]=lines[i]
    if(board[a]!= null &&
      board[a]==board[b] &&
      board[b]==board[c]){
        return(board[a]);
      }
  }
  return null;
};
  const winner = winnerLogic(board);
  const handleClick = (idx)=>{
    if(!board[idx]){
      const boardCopy=[...board]
      boardCopy[idx] = isXturn? "X" : "O";  
      setBoard(boardCopy)
      setIsXturn(!isXturn);
    }
  }
  return (
    <div >
      <div className="App">
      {
        board.map((val, index) => (
          <GameBox 
          key={index}
          val={val} 
          onPlayersClick={()=>handleClick(index)}
          />
        ))}
        </div>
        <br />
        <div>
          {winner ? <h1>Winner is {winner}</h1> : ""}
          <button onClick={()=>{setBoard([null,null,null,null,null,null,null,null,null])
          setIsXturn(true)}}>Restart</button>
        </div>
    </div>
  );
}

export default App;

function GameBox({val,onPlayersClick}){
  return(
    <div
    style={{ color: val === "X" ? "crimson" : "green" }}
    className='game-box'
    onClick={()=>onPlayersClick()}>
      {val}
    </div>
  )
}