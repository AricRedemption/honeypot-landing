"use client";
import styles from "./IntroCard.module.scss";
import Image, { StaticImageData } from "next/image";
import { color, motion } from "framer-motion";
import Button from "@/components/atoms/Button/Button";
import classNames from "classnames";

export default function IntroCard({
  title,
  description,
  image,
  linkTo,
  IconSize = "medium",
  buttonColor,
  ...props
}: Readonly<{
  title: string;
  description?: string;
  image: StaticImageData;
  IconSize?: "small" | "medium";
  buttonColor?: string;
  linkTo?: {
    href: string;
    display?: string;
  };
}>) {
  return (
    <motion.div
      className={styles["intro-card"]}
      {...props}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div
        className={classNames(
          styles["image-container"],
          IconSize === "small" && styles["small"]
        )}
      >
        <Image src={image} alt={title} className={styles["image"]} />
      </div>
      <div className={styles["text-container"]}>
        <h3 className={styles["title"]}>{title}</h3>
        {description && <p className={styles["description"]}>{description}</p>}
        {linkTo && (
          <Button color={buttonColor} linkTo={linkTo.href}>
            {linkTo.display}
          </Button>
        )}
      </div>
    </motion.div>
  );
}
