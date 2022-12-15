import { connect } from "react-redux";
import Games from "./Games";
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
export default connect(mapStateToProps, mapDispatchToProps)(Games);
