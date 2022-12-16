import { connect } from "react-redux";
import Profile from "./Profile";
import getCurrentUser from "../../store/actions/getCurrentUser/getCurrentUser";

const mapStateToProps = (state) => ({
  theme: state.theme,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrentUser: (text, inputLanguage, outputLanguage) => {
    dispatch(getCurrentUser(text, inputLanguage, outputLanguage));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
