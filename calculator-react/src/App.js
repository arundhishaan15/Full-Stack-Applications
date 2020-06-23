import React, { useState } from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";

// Refactored Code To Functional Based Components //

const App = () => {
    const [result, setResult] = useState("");
  
    const onClick = (button) => {
      if (button === "=") {
        calculate();
      } else if (button === "C") {
        reset();
      } else if (button === "CE") {
        backspace();
      } else {
        setResult(result + button);
      }
    };
  
    const calculate = () => {
      try {
        setResult((eval(result) || "") + "");
      } catch (e) {
        setResult("error");
      }
    };
  
    const reset = () => {
      setResult("");
    };
  
    const backspace = () => {
      setResult(result.slice(0, -1));
    };
  
    return (
      <div>
        <div className="calculator-body">
          <h1>Simple Calculator</h1>
          <ResultComponent result={result} />
          <KeyPadComponent onClick={onClick} />
        </div>
      </div>
    );
  };
  
  export default App;

// Written with Class Based Components //

// class App extends Component {
//     constructor(){
//         super();

//         this.state = {
//             result: ""
//         }
//     }

//     onClick = button => {

//         if(button === "="){
//             this.calculate()
//         }

//         else if(button === "C"){
//             this.reset()
//         }
//         else if(button === "CE"){
//             this.backspace()
//         }

//         else {
//             this.setState({
//                 result: this.state.result + button
//             })
//         }
//     };


//     calculate = () => {
//         var checkResult = ''
//         if(this.state.result.includes('--')){
//             checkResult = this.state.result.replace('--','+')
//         }

//         else {
//             checkResult = this.state.result
//         }

//         try {
//             this.setState({
//                 // eslint-disable-next-line
//                 result: (eval(checkResult) || "" ) + ""
//             })
//         } catch (e) {
//             this.setState({
//                 result: "error"
//             })

//         }
//     };

//     reset = () => {
//         this.setState({
//             result: ""
//         })
//     };

//     backspace = () => {
//         this.setState({
//             result: this.state.result.slice(0, -1)
//         })
//     };

//     render() {
//         return (
//             <div>
//                 <div className="calculator-body">
//                     <h1>Simple Calculator</h1>
//                     <ResultComponent result={this.state.result}/>
//                     <KeyPadComponent onClick={this.onClick}/>
//                 </div>
//             </div>
//         );
//     }
// }

// export default App;
