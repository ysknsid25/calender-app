import Counter from "./presentation";
import { connect } from "react-redux";
import { increment, decrement } from "../../redux/count/actions";

//storeからどのstateを引っ張ってくるか
const mapStateProps = ({ count }) => ({ count });

//上は以下と同義
//const mapStateProps = state => {
//    return { count: state.count };
//};

//どんなdispatcherをpropsに渡すか
const mapDispatchProps = dispatch => ({
    increment: count => {
        dispatch(increment(count));
    },
    decrement: count => {
        dispatch(decrement(count));
    }
});

export default connect(
    mapStateProps,
    mapDispatchProps
)(Counter);
