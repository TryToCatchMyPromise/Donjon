import {connect} from 'react-redux'
import HotelBooking from 'src/Page Structure/Pages content/hotel_page/Booking/HotelBooking'

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts
  }
}

const mapDispatchToProps = () => {
  return null
}

const HotelBookingContainer = connect(mapStateToProps, mapDispatchToProps)(HotelBooking)

export default HotelBookingContainer
