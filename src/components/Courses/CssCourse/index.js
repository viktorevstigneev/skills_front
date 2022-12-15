import { connect } from "react-redux";
import CssCourse from "./CssCourse";
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
export default connect(mapStateToProps, mapDispatchToProps)(CssCourse);
