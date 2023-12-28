"use client";
import React, { useRef, useEffect } from "react";

import styles from "./person-modal.module.scss";

import CloseIcon from "./CloseIcon";
import Avatar from "@/components/shared/Person/Avatar";

interface IModal {
    onClose: () => void,
    person: {
        image: string,
        name: string,
        job: string;
    }
    description: string,
    className: string
}
const PersonModal: React.FC<IModal> = ({ onClose, person, description, className = "" }) => {
    const ref = useRef<any>(null);
    useEffect(() => {
        const handleOutSideClick = (event: any) => {
            if (!ref.current?.contains(event.target)) {
                onClose();
            }
        };

        window.addEventListener("mousedown", handleOutSideClick);

        return () => {
            window.removeEventListener("mousedown", handleOutSideClick);
        };
    }, [ref]);

    return (
        <div className={styles.booking_modal} ref={ref}>
            <span className={styles.closeIcon} onClick={onClose}>
                 <CloseIcon />
            </span>
            <div className={`${styles.person}`}>
                <Avatar {...person} />
                <p className={`${styles.person_description}`}>{description}</p>
            </div>
        </div>
    )
}

export default PersonModal