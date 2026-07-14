import Problem from './Problem.tsx';
import 'katex/dist/katex.min.css';
import './App.css'

function App() {
  

  return (
    
      <div style = {{display:'flex', flexDirection: 'column', gap: '10px'}}>
        <h1>Math Homework</h1>
         <Problem></Problem>
         <input></input>
         <button onClick={()=> alert('Next question not implemented yet')} > Next Question</button>
      </div>
  )
}

export default App

