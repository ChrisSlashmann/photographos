/* eslint-disable jsx-a11y/img-redundant-alt */
import './template.css';
import picture from '../../assets/img/Main.jpg';

function Template() {
  return (
    <section className="template">
      <h2 className="template__desc">
        The fully customizable porfolio template based on Webflow. Made by designers, for designers.
      </h2>
      <img className="template__img" src={picture} alt="Main picture" />
      <a className="template__btn" href="http://">
        Buy template
      </a>
    </section>
  )
}

export default Template;