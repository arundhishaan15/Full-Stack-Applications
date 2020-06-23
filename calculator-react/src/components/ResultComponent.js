import React, {Component} from 'react';

// Refactored Code To Functional Based Components //

const ResultComponent = ({ result }) => {
    return (
      <div className="result">
        <p>{result}</p>
      </div>
    );
  };
  
export default ResultComponent;

// Written with Class Based Components //

// class ResultComponent extends Component {


//     render() {
//         let {result} = this.props;
//         return (
//             <div className="result">
//                 <p>{result}</p>
//             </div>
//     )
//         ;
//     }
// }


// export default ResultComponent;

