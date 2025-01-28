import styles from "./HoneypotAcademiaIntro.module.scss";
import Image from "next/image";
import { StaticImageData } from "next/image";

import flyWheelIcon from "./fly-wheel-icon.png";
import customHookIcon from "./custom-hook-icon.png";
import studyFtoIcon from "./study-fto-icon.png";

export default function HoneypotAcademiaIntro() {
  return (
    <div className={styles["honeypot-academia-intro"]}>
      <h2 className="text-2xl font-bold ml-[2rem]">Honeypot Academia</h2>
      <div className={styles["academy-cards"]}>
        <AcademyCard
          icon={flyWheelIcon}
          title="Fly Wheel"
          description="Our flywheel model includes our community-led launchpad Dreampad, as well as a community-driven public validation node."
        />
        <AcademyCard
          icon={studyFtoIcon}
          title="Study FTO"
          description="Fair Token Offerings (FTO) can further enhance the velocity of circulation by providing immediate liquidity after a token launch."
        />
        <AcademyCard
          icon={customHookIcon}
          title="Custom Hooks"
          description="he Dreampad custom hook is designed to offer maximum flexibility, accommodating various project requirements and investor demands."
        />
      </div>
    </div>
  );
}

export function AcademyCard({
  icon,
  title,
  description,
}: {
  icon: StaticImageData;
  title: string;
  description: string;
}) {
  return (
    <div className={styles["academy-card"]}>
      <Image src={icon} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
