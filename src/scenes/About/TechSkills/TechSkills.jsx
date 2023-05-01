import s from "./TechSkills.module.scss";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiCss3Full,
} from "react-icons/di";
import {
  SiMysql,
  SiRedux,
  SiHandlebarsdotjs,
  SiBootstrap,
  SiGit,
  SiFigma,
  SiJava,
  SiFirebase,
  SiPostman,
  SiNetlify,
  SiAmazonaws,
  SiSass,
  SiMaterialui,
  SiNginx,
} from "react-icons/si";

const TechSkills = () => {
  return (
    <ul className={s.container}>
      {/* FRONT TOOLS */}
      <li className={s.techIcon}>
        <DiJavascript1 className={s.icon}  />
        <p className={s.title}>JavaScript</p>
      </li>

      <li className={s.techIcon}>
        <SiMysql className={s.icon}  />
        <p className={s.title}>MYSQL</p>
      </li>

      <li className={s.techIcon}>
        <DiReact className={s.icon}  />
        <p className={s.title}>ReactJs</p>
      </li>
      <li className={s.techIcon}>
        <SiRedux className={s.icon}  />
        <p className={s.title}>Redux</p>
      </li>
      <li className={s.techIcon}>
        <DiCss3Full className={s.icon}  />
        <p className={s.title}>CSS</p>
      </li>
      <li className={s.techIcon}>
        <SiBootstrap className={s.icon}  />
        <p className={s.title}>Bootstrap</p>
      </li>
      <li className={s.techIcon}>
        <SiFigma className={s.icon}  />
        <p className={s.title}>Figma</p>
      </li>
      {/* BACKEND TOOL */}

      <li className={s.techIcon}>
        <DiNodejs className={s.icon}  />
        <p className={s.title}>NodeJs</p>
      </li>
      <li className={s.techIcon}>
        <DiMongodb className={s.icon}  />
        <p className={s.title}>Mongodb</p>
      </li>

      <li className={s.techIcon}>
        <SiGit className={s.icon} />
        <p className={s.title}>Git</p>
      </li>
      <li className={s.techIcon}>
        <SiHandlebarsdotjs className={s.icon} />
        <p className={s.title}>Handlebars</p>
      </li>
      <li className={s.techIcon}>
        <SiJava className={s.icon} />
        <p className={s.title}>java</p>
      </li>
      <li className={s.techIcon}>
        <SiFirebase className={s.icon} />
        <p className={s.title}>Firebase</p>
      </li>
      <li className={s.techIcon}>
        <SiPostman className={s.icon} />
        <p className={s.title}>Postman</p>
      </li>
      <li className={s.techIcon}>
        <SiNetlify className={s.icon} />
        <p className={s.title}>Netlify</p>
      </li>
      <li className={s.techIcon}>
        <SiAmazonaws className={s.icon} />
        <p className={s.title}>Amazon aws </p>
      </li>
      <li className={s.techIcon}>
        <SiSass className={s.icon} />
        <p className={s.title}>Sass </p>
      </li>
      <li className={s.techIcon}>
        <SiMaterialui className={s.icon} />
        <p className={s.title}>Materialui </p>
      </li>
      <li className={s.techIcon}>
        <SiNginx className={s.icon} />
        <p className={s.title}>Nginx </p>
      </li>

      
      
    </ul>
  );
};

export default TechSkills;
