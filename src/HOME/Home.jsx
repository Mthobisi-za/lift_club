import '../global.css'
import './styles.css'

function HOME() {
  return (
    <div className="home">
     <div className="left_home_top_tab">
      <img src={require('./assets/LIFT CLUB.png')} alt="" />
     </div>
     <div className="right_home_top_tab">
      <img src={require('./assets/car_home.png')} alt="" />
     </div>
    </div>
  );
}

export default HOME;
