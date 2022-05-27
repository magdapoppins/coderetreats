import styles from "../styles/SignUp.module.css";

const SignUp: React.FC = () => {
  return (
    <div className={styles.info}>
      <h2>Book a ticket to a retreat!</h2>
      <p>
        Tickets can be booked by emailing Magda at stenius.mimmy@gmail.com 💌
        Please include the following info in your mail:
      </p>
      <ul>
        <li>Your full name</li>
        <li>Any dietary restrictions</li>
        <li>Which retreat you want to join</li>
      </ul>
      <p>Will will get back to you within a couple of days.</p>
    </div>
  );
};

export default SignUp;
