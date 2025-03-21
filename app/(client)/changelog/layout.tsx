import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Changelog from my journey",
    description: "Changelog from my journey",
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Changelog from my journey",
        description: "Changelog from my journey",
        url: "https://speetly.com/changelog",
        type: "website",
        images: [
            {
                url: "https://speetly.com/images/og-image.png",
                width: 1200,
                height: 630,
                alt: "Speetly Changelog",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Changelog from my journey",
        description: "Changelog from my journey",
        images: ["https://speetly.com/images/og-image.png"],
    },
    alternates: {
        canonical: "https://speetly.com/changelog",
    },
};

export default function ChangelogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div className="p-4">{children}</div>;
}
