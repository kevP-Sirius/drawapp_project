import { connect } from 'react-redux';

// == Import : local
import { DrawGame } from '../components/drawGame';
// Action Creators
import { changeDrawStatus,switchDrawOff } from '../store/reducer/drawGameReducer';
/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state) => ({ 
  drawStatus: state.drawGameReducer.drawStatus,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch) => ({
  switchDrawStatus: () => {
    dispatch(changeDrawStatus())
  },
  switchDrawOff : ( )=>{
      dispatch(switchDrawOff())
  }
});

// Container
const DrawGameContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DrawGame);

// == Export
export default DrawGameContainer;

/* = export à la volée
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example);
*/