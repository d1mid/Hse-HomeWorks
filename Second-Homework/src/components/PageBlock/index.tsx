import type { TPageBlockProps } from './type';

export const PageBlock= ({
    className,
    children,
    isSpaced = true
    // tagName ='section'
}: TPageBlockProps) => {

    // const Tag = tagName
    return (
        <section className={`content-row ${className} ${isSpaced ? 'content-row--spaced' : ''}`}>
            {children}
        </section>
    )
}