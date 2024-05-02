import React, { useEffect, useRef, ReactNode } from 'react'
import gsap from 'gsap';

interface MagneticComponentProps {
  children: ReactNode;
}

export default function MagneticComponent(
  { children }: MagneticComponentProps
) {
  const magnetic = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!magnetic.current) return;

    const xTo = gsap.quickTo(
      magnetic.current,
      "x",
      { duration: 1, ease: "elastic.out(1, 0.3)" });

    const yTo = gsap.quickTo(
      magnetic.current,
      "y",
      { duration: 1, ease: "elastic.out(1, 0.3)" });

    const mouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height, width, left, top }
        = magnetic.current?.getBoundingClientRect() as DOMRect;

      const x = clientX - (left + width / 2)
      const y = clientY - (top + height / 2)
      xTo(x);
      yTo(y)
    }

    const mouseLeave = (e: MouseEvent) => {
      xTo(0);
      yTo(0)
    }

    magnetic.current.addEventListener("mousemove", mouseMove)
    magnetic.current.addEventListener("mouseleave", mouseLeave)

    return () => {
      magnetic.current?.removeEventListener("mousemove", mouseMove)
      // eslint-disable-next-line react-hooks/exhaustive-deps
      magnetic.current?.removeEventListener("mouseleave", mouseLeave)
    }
  }, [])
  return (
    React.cloneElement(children as React.ReactElement, { ref: magnetic })
  )
};
