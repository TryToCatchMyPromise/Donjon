import {connect} from 'react-redux'
import HotelPage from 'src/Page Structure/Pages content/hotel_page/HotelPage'

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts
  }
}

const mapDispatchToProps = () => {
  return null
}

const HotelPageContainer = connect(mapStateToProps, mapDispatchToProps)(HotelPage)

export default HotelPageContainer
