import s from "./AboutTextCard.module.scss";
import { ImPointRight } from "react-icons/im";

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: "justify" }}>
        Hi Everyone, I am <em className={s.purple}>MISHAB P </em>
        from <em className={s.purple}> Malappuram</em>
        <br />
        Skilled in Full Stack Developer
        <br /> Bachelor in Economics from
        <br />
        Bharathidasan University , Tamil Nadu.
        <br />
        <br />
        Apart from coding, some other activities that I love to do!
        <br />
        <br />
        I am a self-taught MERN stack developer with a passion for
        developing scalable web applications and solving problems working across
        the full stack. I am looking to join forces with intellectuals out there
        to continue to grow my skill set while contributing to the welfare of
        the community and inspiring people.
      </p>
      <br />
        <br />

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Playing Football
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Reading
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Travelling
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Listening To Music
        </li>
      </ul>

      <p
        style={{
          color: "rgb(155 126 172)",
          textAlign: "center",
          marginTop: "1rem",
        }}
      >
        "Strive to build things that make a difference!"{" "}
      </p>
    </div>
  );
};

export default AboutTextCard;
