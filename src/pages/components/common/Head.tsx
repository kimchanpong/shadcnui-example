import Head from "next/head"

type titleProps = {
    title: string;
}

export default function CustomHead({ title }: titleProps) {
    return (
        <Head>
            <title>{title}</title>
        </Head>
    )
}