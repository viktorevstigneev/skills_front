import { connect } from "react-redux";
import JavaScriptCourse from "./JavaScriptCourse";
import getCurrentUser from "../../../store/actions/getCurrentUser/getCurrentUser";

const mapStateToProps = (state) => ({
  theme: state.theme,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrentUser: (text, inputLanguage, outputLanguage) => {
    dispatch(getCurrentUser(text, inputLanguage, outputLanguage));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(JavaScriptCourse);
