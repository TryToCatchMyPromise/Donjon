import {connect} from 'react-redux'
import ContactsPage from 'src/Page Structure/Pages content/contacts/ContactsPage'

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts
  }
}

const mapDispatchToProps = () => {
  return null
}

const ContactsPageContainer = connect(mapStateToProps, mapDispatchToProps)(ContactsPage)

export default ContactsPageContainer
