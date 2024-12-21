import './Snow2.css';
// import Snowcontent from './Snowcontent';
function Snowman() {
    return ( <div >
        <h1>SnowMans</h1><br/>
        <div className='snow1'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-n2JAywuW7msb7j8psZNLQhfROd34bbpj7g&s" alt="loading.."   className="img4"/>&nbsp;&nbsp;
        <div className='cmp'>
        <p className='para1' ><ul><li>A snowman is a fun and festive figure typically made from snow during the winter months. </li>
         <li>People usually roll large snowballs to create the body and head, stacking them on top of one another. </li>
         <li>The snowman is often adorned with accessories like a carrot for a nose, buttons for the torso, a scarf, and a hat, completing its cheerful appearance.</li>
         <li>A snowman symbolizes the joy of winter and outdoor play, bringing warmth to the cold season with its simple charm and whimsical design.</li>
         </ul></p>
        </div>
        {/* <Snowcontent/> */}
        </div>
    </div> );
}

export default Snowman;