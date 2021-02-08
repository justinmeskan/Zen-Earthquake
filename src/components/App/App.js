import React from 'react'
import { connect } from 'react-redux'
import './App.css'
import Header from '../Header/Header'
import data from '../../../JSONData/data.js'
import { GET_DATA } from '../../store/reducers/app/appAction'
import { LOAD_DETAILS } from '../../store/reducers/detail/detailActon'
import { Time } from '../Time/Time'
import { Link } from 'react-router-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            JSONData: {}
        }
        this.addDetailToStore = this.addDetailToStore.bind(this)
    }

    componentWillMount() {
        // Mock HTTP Request
        // Added Data to Redux
        this.props.dispatchJSONData(data)
        // Used Local state for top level data usage
        this.setState((state) => {
            return {JSONData: data}
        })
    }

    componentDidMount() {

    }

    addDetailToStore(detail) {
        this.props.dispatchDetail(detail)
    }

    render() {
        console.log('state', this.state.JSONData)
        return (
            <div data-test="component-app" className={"app zen_home"}>
                <Header  />
                <h2 className={"zen_title"}>{this.state.JSONData.data.metadata.title}</h2>
                <table className={'zen_table'}>
                    <thead>
                        <tr className={"thr"}>
                            <th className={"th"}>
                                Title
                            </th>
                            <th className={"th"}>
                                Magnitude
                            </th>
                            <th className={"th"}>
                                Time
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.JSONData.data.features.map((feature, i) => {
                            return (
                                <tr className={"tr"} key={i}>
                                    <td className={"td_title"}>
                                        <Link onClick={() => {
                                            this.addDetailToStore(feature.properties)
                                        }} to={() => ({
                                            pathname: '/detail',
                                            state: {
                                                app: {...this.state.JSONData},
                                                detail: feature.properties
                                            }
                                        })}> {feature.properties.place} </Link>
                                    </td>
                                    <td className={"td_magnitude"}>
                                        {feature.properties.mag}
                                    </td>
                                    <td className={"td_time"}>
                                        <Time time={feature.properties.time}/>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    location: state.router.location
})

const mapDispatchToProps = (dispatch) => ({
    dispatchJSONData: (payload) => dispatch({ type: GET_DATA, payload}),
    dispatchDetail: (payload) => dispatch({ type: LOAD_DETAILS, payload})
})


export default connect(mapStateToProps, mapDispatchToProps)(App)
