'use client';

import { useRef, useEffect, useState, ReactNode } from 'react'
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode
}

export const Portal: React.FC<PortalProps> = ({ children }) => {
    const ref = useRef<Element | null>(null)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        const body = document.querySelector("body");
        if (body) body.style.overflow = "hidden";
        ref.current = document.querySelector<HTMLElement>("#portal")
        if (ref.current) {
            setMounted(true)
        }
        return () => {
            if (body) body.style.overflow = "auto";
        }
    }, [])

    return (mounted && ref.current) ? createPortal(<>{children}</>, ref.current) : null
}

export default Portal