import styles from "../styles/Camps.module.css";

const Camps: React.FC = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridGap: "1rem",
      }}
    >
      <div className={styles.card}>
        <h2>E-tekstiiliretriitti 17.-19.6.2022</h2>
        <p>
          Kesäkuussa koodausviikonloput saavat jatkoa ja tarjolla on
          e-tekstiilien parissa puuhastelua!
        </p>
        <p>
          Viikonloppu aloitetaan luennolla, jossa käydään läpi elektronisiin
          tekstiileihin liittyvien materiaaleja (komponentit, tekstiilit),
          tekniikoita (kolvaaminen) ja teorioita (sähkö, virtapiirit). Luennon
          jälkeen päästään kokeilemaan juuri opittuja tietoja ja taitoja
          käytännössä - ommellaan sähköäjohtavaa lankaa, prototyypataan
          virtapiirejä hauenleuoilla ja kolvataan erilaisia juotoksia.
        </p>
        <p>
          Viime vuoden viikonloppuretriitin tapaan viikonloppuna majoitutaan
          yhteisesti 2-3 hengen huoneissa tai sään salliessa pihamökissä. Ruuan
          puolesta erityisruokavaliotoiveita otetaan vastaan, lämmintä ruokaa
          saa kolmesti päivässä ja lisäksi välipalaa löytyy tarvittaessa. Sauna
          ja palju on lämpimänä lauantai-illalla. Allergiavaroituksena: talossa
          asuu myös kissa.
        </p>
        <p>Viikonlopun hinta on 110e, johon sisältyy materiaalimaksu.</p>
      </div>
      <div className={styles.card}>
        <h2>Python beginners retreat 9.-11.9.2022</h2>
        <p>
          Finally it’s time to organize a Python retreat that was postponed by
          Covid last year!
        </p>
        <p>
          This retreat is perfect for you who are new to programming or who have
          been coding in some other programming language than Python. During the
          weekend we’ll get to know the basics of bleeding edge Python
          development and build small bots together! The teacher of the camp is
          Mila, who is a backend engineer working at Wolt.
        </p>
        <p>
          During the weekend we can also play board games or do some outdoors
          activities, take a bath in the palju with the sauna and make some new
          friends! Note that there is a cat living in the house.
        </p>
        <p>The price for the weekend is 100e.</p>
      </div>
    </div>
  );
};

export default Camps;
