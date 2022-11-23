import Data from './MOCK_DATA.json';
import {useState} from 'react';

function App() {

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="App">
      <input type="text" placeholder="Search..." onChange={e => {setSearchTerm(e.target.value)}} />
      {Data.filter(item => {
        if(searchTerm === ''){
          return item;
        }else if (item.first_name.toLowerCase().includes(searchTerm.toLowerCase()) || item.last_name.toLowerCase().includes(searchTerm.toLowerCase())){
          return item;
        }
      }).map((item, key) => {
        return(
          <div className='person' key={key}>
            <p>{item.first_name} {item.last_name} - ({item.gender})</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
