import "../Testimonials/Testimonials.css";
import User1 from "../../assets/user1.png";
import User2 from "../../assets/user2.png";
import User3 from "../../assets/user3.png";

function Testimonials() {
  return (
    <div className="testimonials Container">
      <ul>
        <li>
          <div className="slide">
            <div className="user-info">
              <img src={User1} alt="User 1" />
              <div>
                <h3>Emily Williams</h3>
                <span>Edusity, USA</span>
              </div>
            </div>
            <p>
              Choosing to pursue my degree at Edusity was one of the best
              decisions I've ever made. The supportive community,
              state-of-the-art facilities, and commitment to academic excellence
              have truly exceeded my expectations.
            </p>
          </div>
        </li>

        <li>
          <div className="slide">
            <div className="user-info">
              <img src={User2} alt="User 2" />
              <div>
                <h3>William Jackson</h3>
                <span>Edusity, USA</span>
              </div>
            </div>
            <p>
              Choosing to pursue my degree at Edusity was one of the best
              decisions I've ever made. The supportive community,
              state-of-the-art facilities, and commitment to academic excellence
              have truly exceeded my expectations.
            </p>
          </div>
        </li>

        <li>
          <div className="slide">
            <div className="user-info">
              <img src={User3} alt="User 3" />
              <div>
                <h3>Emily Williams</h3>
                <span>Edusity, USA</span>
              </div>
            </div>
            <p>
              Choosing to pursue my degree at Edusity was one of the best
              decisions I've ever made. The supportive community,
              state-of-the-art facilities, and commitment to academic excellence
              have truly exceeded my expectations.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Testimonials;
