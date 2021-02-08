import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './Header.css'

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div data-test="component-app" className="header">
                <Link to={{
                    pathname: '/',
                    state: {
                        app: this.props.JSONData
                    }
                }} className="header_link"><img className="header_image" src={this.props.JSONData.site.logoImage} alt="This is a logo" /></Link>
                <h1 className="header_title"> {this.props.JSONData.site.title}</h1>
                <Link className="header_profile" to={{
                    pathname: '/profile',
                        state: {
                            app: this.props.JSONData
                        }
                }}>{`Welcome ${this.props.JSONData.profile.firstName}`}</Link>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    JSONData: state.app
})

export default connect(mapStateToProps)(Header)
