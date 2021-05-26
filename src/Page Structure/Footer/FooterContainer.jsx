import {connect} from 'react-redux'
import Footer from 'src/Page Structure/Footer/Footer'

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts
  }
}

const mapDispatchToProps = () => {
  return null
}

const FooterContainer = connect(mapStateToProps, mapDispatchToProps)(Footer)

export default FooterContainer
