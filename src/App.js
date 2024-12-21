
import './App.css';
import Cakes from './Components/Cakes';
import Christmas from './Components/Christmas';
import Snow from './Components/Snow';
import Snowman from './Components/Snowman';
import Sweaters from './Components/Sweaters';

function App() {
  return (
   <div>
    <div className='div'>
      <p>DECEMBER</p>
    <br/>
    </div><br/>
    <text className='text' >December is a month of quiet beauty and festive cheer, where the world slows down under crisp skies and the glow of holiday lights. It’s a time for reflection, connection, and the warmth of loved ones, wrapped in the peaceful embrace of winter. As the year draws to a close, December invites moments of joy and anticipation, making it a truly special time of year.</text><br/><br/><br/>
    <text className="text2">Curious to explore more of what makes December so magical?</text><br/><br/>
    {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaH7NI0Al0LI4wxaax1YbwhWyMwzCKQYDp8A&s' alt='loading..' width={290} height={174} />&nbsp;&nbsp;&nbsp;<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAYutyqXTcwOcq1YcD9B2Oma5iBkPOLDQLmA&s' alt='loading..' width={290} height={174}/>&nbsp;&nbsp;&nbsp;<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbCb6lN-W8FXyvaAs_4IAzDHO3mAKUZDAbKw&s' alt='loading..' width={290} height={174}/>&nbsp;&nbsp;&nbsp;<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqRBt1W3XzW2c6BireOLJtwFQnIqtgSVuFKQ&s' alt='loading..' width={290} height={174}/>&nbsp;&nbsp;&nbsp;<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpHBRMN-CYe4empGFEi97I2eSqoDWy-ncVfw&s' alt='loading..' width={290} height={174}/> */}
    <div className='december'>
    <Snow/><br/>
    <Snowman/><br/>
    <Sweaters/><br/>
    <Christmas/><br/>
    <Cakes/><br/>
    </div>
   
    <footer>

      <br/><br/>
      <text>Copyright@2024</text>
      <br/><br/><br/>
    </footer>
    
   </div>
  );
}

export default App;
