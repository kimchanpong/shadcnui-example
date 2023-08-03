import NavBar from './NavBar';
import CustomHead from './Head';

type LayoutProps = {
    children: any;
}

export default function Layout({children} : LayoutProps) {
    return (
        <>
            <CustomHead title="웹메모 프로젝트"/>
            <main className="webkit-box-flex grow">
                <NavBar />
                <main>{children}</main>
            </main>
        </>
    )
}