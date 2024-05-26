import { faMagnifyingGlass, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={clsx("flex", styles.main)}>
      <div className="flex">
        <Image
          src={"/Header/stack-overflow.svg"}
          width={50}
          height={20}
          title="Stack Overlfow"
          alt="Stack Overflow"
        />
        <h4>
          stack <span>overflow</span>
        </h4>
      </div>
      <form className="flex">
        <div className="flex">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type="text" />
        </div>
      </form>
    </header>
  );
};

export default Header;
