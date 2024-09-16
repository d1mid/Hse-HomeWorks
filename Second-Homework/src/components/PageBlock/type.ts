import { ReactNode } from "react";

export type TPageBlockProps = {
    className?: string;
    children: ReactNode,
    tagName?: string;
    isSpaced?: boolean;
}