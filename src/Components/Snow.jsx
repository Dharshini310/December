import './Snow.css';
// import Snowcontent from './Snowcontent';
function Snow() {
    return ( <div >
        <h1>Snow</h1><br/>
        <div className='snow'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBHjwDFun-ZLl2SnQ6RRh9ebSULDXokCAxjQ&s" alt="loading.." className="img4"/>&nbsp;&nbsp;
        <div className='cmp'>
        <p className='para'><ul><li>Snow is nature's delicate masterpiece</li>
         <li>A shimmering blanket of pure white that transforms the world into a serene winter wonderland.</li>
         <li> Each snowflake, a tiny work of art, flutters from the sky, dancing on the wind before settling softly on the ground.</li>
         <li> As it accumulates, it creates a quiet hush, muffling sounds and giving the world a peaceful stillness.</li>
         <li> The snow sparkles like diamonds in the sunlight, casting a magical glow over everything it touches.</li>
        
         </ul></p>
        </div>
        {/* <Snowcontent/> */}
        </div>
    </div> );
}

export default Snow;