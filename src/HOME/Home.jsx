import '../global.css'
import './styles.css'

function HOME() {
  return (
    <div className="home">
     <div className="left_home_top_tab">
      <img src={require('./assets/LIFT CLUB.png')} alt="" />
      <h3 className='subtitle'>LOREM IPSUM LOREM IPSUM LOREM IPSUM
    JKJKKJKJ JKJKKJKJ JKJKKJKJ JKJKKJKJ JKJKKJKJ</h3> <br />
<button className="btn_dark_blue"> <a href="#about_us">READ MORE</a> </button>
     </div>
     <div className="right_home_top_tab">
      <img src={require('./assets/car_home.png')} alt="" />
     </div>
    </div>
  );
}

export default HOME;
