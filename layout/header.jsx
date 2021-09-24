import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import classes from './layout.module.scss';

const Header = props => {

    const router = useRouter();

    return (
        <header className={classes.header}>
            <Image src="/fondo.png" layout='fill'></Image>
            <div className={classes['header__logo']} onClick={() => router.push('/')}>
                <Image src="/RM.png" width="280px" height="100px"></Image>
            </div>
        </header>
    )
}

export default Header;