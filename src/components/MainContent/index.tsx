import React from "react";
import styles from './index.module.scss';
import { TMainContent } from "./index.types";

export default function MainContent({ children }: TMainContent) {

    return (
        <section className={styles.mainContent}>
            {children}
        </section>
    )
}