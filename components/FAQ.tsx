import styles from "../styles/FAQ.module.css";

const FAQ: React.FC = () => {
  return (
    <div className={styles.faq}>
      <b>What happens during a code retreat?</b>
      <p>
        On Friday, participants arrive at the retreat location and have a shared
        dinner around 18. Those who want to can play some board games and get to
        know each other, or you can bring your own games or suggest other
        activities. On Saturday we have a brunchy breakfast around 9 and start
        the workshop day. Most retreats have a theory part in the morning,
        followed by a hands-on session in the afternoon. Between the sessions we
        have lunch and a break. After the workshop there is dinner and a
        possibility to use the sauna and palju and hang out in the yard or in
        the common room, and there will be some snacks and drinks provided. On
        Sunday morning we have breakfast at 9, followed by a feedback session
        and then its time to pack and get ready to head back home!
      </p>
      <b>I am a vegan, is that ok?</b>
      <p>
        Yes, we can accommodate any special diets, just let us know when you
        sign up!
      </p>
      <b>How do I get to the retreat?</b>
      <p>We orgaize pick ups from Turku bus and train stations if needed.</p>
      <b>What is the accommodation like?</b>
      <p>
        We will stay comfortably in 2-3 person shared bedrooms and a summer room
        in the yard. If needed you can request to have a room for yourself, in
        this case please let us know when booking. There is a cat living on the
        property, so bring your allergy medicines with you if you need them!
      </p>
      <b>What is the price?</b>
      <p>
        The price of the retreats is 100e per person. This fee is used to cover
        teacher salary, the accommodation and food.
      </p>
    </div>
  );
};

export default FAQ;
