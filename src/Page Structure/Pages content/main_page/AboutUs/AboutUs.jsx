import classes from 'src/Page Structure/Pages content/main_page/AboutUs/AboutUs.module.css'
import Infographics from 'src/Page Structure/Pages content/main_page/AboutUs/ Infographics/Infographics'
import History from 'src/Page Structure/Pages content/main_page/AboutUs/History/History'

const AboutUs = () => {
  return (
    <div id='history' className={classes.wrapper}>
      {/* <a name = "test"></a> */}
      <div className={classes.overlay}>
        <div className={classes.data_container}>
          <div className={classes.history_wrapper}>
            <History />
          </div>
          <div className={classes.separating_line_container}>
            <div className={classes.separating_line} />
          </div>
          <Infographics />
        </div>
      </div>
    </div>
  )
}

export default AboutUs
