import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
        
const Statistics = ({title,stats})=>(
<section className={styles.statistics}>
  {title && <h2 className={styles.title}>Upload stats</h2>}
  <ul className={styles.statList}>   
  {stats.map((item)=>(
         <li className={styles.item} key={item.id} title="Upload stats">
         <span className={styles.label}>{item.label} </span>
         <span className={styles.percentage}>{item.percentage}%</span>
         </li>         
        ))}    
  </ul>
</section>
);

// Statistics.defaultProps ={
//     title: null,   
//    }

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
}
export default Statistics;

/* <ul>
        {statisticalData.map((item)=>(
         <li key={statisticalData.id} ><Statistics title="Upload stats" stats={statisticalData} /></li>         
        ))}
        </ul> */