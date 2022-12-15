import { connect } from "react-redux";
import TopPanel from "./TopPanel";
import getCurrentUser from "../../store/actions/getCurrentUser/getCurrentUser";

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrentUser: (id) => dispatch(getCurrentUser(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopPanel);
