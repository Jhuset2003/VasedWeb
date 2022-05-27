import { CircularProgressbar,  buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import bars from './styles/ProgressBar.module.css'

const ProgressBar = ({percentage}) => {
  
  return (
    <>
        <div className={bars.circle}>
            <CircularProgressbar className={bars.content} value={percentage} text={`${percentage}%`} 
            
            styles={buildStyles({

                // Text size
                textSize: '25px',

                // Colors
                backgroundColor: 'transparent',
                pathColor: 'white',
                textColor: 'white',
                trailColor: 'transparent',
            })}
            />
        </div>

    </>
  )
}

export default ProgressBar