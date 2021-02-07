import React from 'react'
import { connect } from 'react-redux'
import './Profile.css'
import Header from '../Header/Header'

class Profile extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div data-test="component-app" className={"profile"}>
                <Header  />
                    <h3 className={"profile_title"}>Profile</h3>
                    <div className={"profile_wrapper"}>
                        <div className={"profile_image"}>
                            <img className={"avatar"} src={this.props.profile.avatarImage} />
                        </div>
                        <table className={'profile_table'}>
                            <tbody>
                                    <tr className={"tr"}>
                                        <td className={"profile_data first_name"}>
                                            <p>First Name:</p>
                                        </td>
                                        <td className={"profile_value first_name"}>
                                            <span>{this.props.profile.firstName}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={"profile_data last_name"}>
                                            <span>Last Name:</span>
                                        </td>
                                        <td className={"profile_value last_name"}>
                                            <span>{this.props.profile.lastName}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={"profile_data phone"}>
                                            <span>Phone:</span>
                                        </td>
                                        <td className={"profile_value phone"}>
                                            <span>{this.props.profile.phone}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={"profile_data email"}>
                                            <span>Email:</span>
                                        </td>
                                        <td className={"profile_value email"}>
                                            <span>{this.props.profile.email}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={"profile_data bio"}>
                                            <span>Bio:</span>
                                        </td>
                                        <td className={"profile_value bio"}>
                                            <span>{this.props.profile.bio}</span>
                                        </td>
                                    </tr>
                            </tbody>
                        </table>
                    </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    profile: state.app.profile
})


export default connect(mapStateToProps,)(Profile)
