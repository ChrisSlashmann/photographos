import React from 'react';
import portfolio from '../../assets/img/portfolio.jpg';
import sample1 from '../../assets/img/1.jpg';
import sample2 from '../../assets/img/2.jpg';
import sample3 from '../../assets/img/3.jpg';
import sample4 from '../../assets/img/4.jpg';
import './samples.css';

function Samples() {
  return (
    <section className="samples">
      <img className="samples__portfolio" src={portfolio} alt="Portfolio" />

      <h3 className="samples__desc">
        We provide 17 sample layouts that you can use together or separately in your project. 
        And you get 4 fully functional photographers templates. ⬐ Take a look.
      </h3>

      <ul className="samples__list">
        <li className="samples__list-item">
          <img className="samples__list-sample" alt="sample 1" src={sample1}/>
          <a className="samples__list-show-more" href="http://">
            Demo #1
          </a>
        </li>

        <li className="samples__list-item">
          <img className="samples__list-sample" alt="sample 2" src={sample2}/>
          <a className="samples__list-show-more" href="http://">
            Demo #2
          </a>
        </li>

        <li className="samples__list-item">
          <img className="samples__list-sample" alt="sample 3" src={sample3}/>
          <a className="samples__list-show-more" href="http://">
            Demo #3
          </a>
        </li>

        <li className="samples__list-item">
          <img className="samples__list-sample" alt="sample 4" src={sample4}/>
          <a className="samples__list-show-more" href="http://">
            Demo #4
          </a>
        </li>
      </ul>

    </section>
  )
}

export default Samples;