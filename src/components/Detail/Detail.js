import React from 'react'
import { connect } from 'react-redux'
import './Detail.css'
import Header from '../Header/Header'
import history from "../../store";
import {GET_DATA} from "../../store/reducers/app/appAction";
import {LOAD_DETAILS} from "../../store/reducers/detail/detailActon";

class Detail extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        if( Object.keys(this.props.JSONData.site).length === 0 ) {
            this.props.dispatchJSONData(history.getState().router.location.state.app)
        }

        if(Object.keys(this.props.detail).length === 0 ) {
            this.props.dispatchDetail(history.getState().router.location.state.detail)
        }
    }

    render() {
        return (
            <div data-test="component-app" className={"detail"}>
                <Header  />
                <h2 className={"detail_title"}>{this.props.detail.title}</h2>
                <table className={'detail_table'}>
                    <tbody>
                    <tr className={"tr"}>
                        <td className={"detail_data title"}>
                            <p><b>Title:</b></p>
                        </td>
                        <td className={"detail_value title"}>
                            <span>{this.props.detail.title}</span>
                        </td>
                    </tr>
                    <tr>
                        <td className={"detail_data magnitude"}>
                            <span><b>Magnitude:</b></span>
                        </td>
                        <td className={"detail_value magnitude"}>
                            <span>{this.props.detail.mag}</span>
                        </td>
                    </tr>
                    <tr>
                        <td className={"detail_data time"}>
                            <span><b>Time:</b></span>
                        </td>
                        <td className={"detail_value time"}>
                            <span>{this.props.detail.time}</span>
                        </td>
                    </tr>
                    <tr>
                        <td className={"detail_data status"}>
                            <span><b>Status:</b></span>
                        </td>
                        <td className={"detail_value status"}>
                            <span>{this.props.detail.status}</span>
                        </td>
                    </tr>
                    <tr>
                        <td className={"detail_data tsunami"}>
                            <span><b>Tsunami:</b></span>
                        </td>
                        <td className={"detail_value tsunami"}>
                            <span>{this.props.detail.tsunami}</span>
                        </td>
                    </tr>
                    <tr>
                        <td className={"detail_data type"}>
                            <span><b>Tsunami</b>:</span>
                        </td>
                        <td className={"detail_value type"}>
                            <span>{this.props.detail.type}</span>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    detail: state.detail,
    JSONData: state.app
})

const mapDispatchToProps = (dispatch) => ({
    dispatchJSONData: (payload) => dispatch({ type: GET_DATA, payload}),
    dispatchDetail: (payload) => dispatch({ type: LOAD_DETAILS, payload})

})


export default connect(mapStateToProps, mapDispatchToProps)(Detail)
