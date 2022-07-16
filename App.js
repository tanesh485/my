import  './App.css';
import Heading from './components/Heading';
import SubHeading from './components/SubHeading';
import InputQuery from './components/InputQuery';
import SubmitButton from './components/SubmitButton';
function App(){
  return(
    <div className='App'>
      
      <Heading />
      <div>
        <SubHeading />
      </div>
      <div>
        <InputQuery />
      </div>
      <div>
        <SubmitButton />
      </div>
      
       
    </div>
  );
}
export default App;