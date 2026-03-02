import { Viewport } from 'next';

export const viewport: Viewport = {
    themeColor: '#000000',
};

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
