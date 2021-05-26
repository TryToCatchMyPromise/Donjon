import {connect} from 'react-redux'
import ServicesPage from 'src/Page Structure/Pages content/services_page/ServicesPage'

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts
  }
}

const mapDispatchToProps = () => {
  return null
}

const ServicesPageContainer = connect(mapStateToProps, mapDispatchToProps)(ServicesPage)

export default ServicesPageContainer
