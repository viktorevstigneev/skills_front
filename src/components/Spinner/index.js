import { connect } from "react-redux";
import Spinner from "./Spinner";

const mapStateToProps = (state) => ({
  theme: state.theme,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({

});
export default connect(mapStateToProps, mapDispatchToProps)(Spinner);
