import { Link } from 'react-router-dom';
import styles from './FolderContainer.module.css';
import './anime.css';
import { GoArrowSmallRight } from "react-icons/go";
import './anime';

const FolderContainer = ({ folderTitle, links, functionFile, state, linkNav }) => {

    return (
        <div className={styles.folderContainer}>
            <Link to={!state ? linkNav : '/BoxHtml'} className='linkBtn'>
                <button className={`${styles.btnLateralDropdown}`} onClick={functionFile}>
                    <div className={styles.folder}>
                        <div className={!state ? 'enabled' : 'disabled'}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                                <path fill="#303030"
                                    d="M7.05 40q-1.2 0-2.1-.925-.9-.925-.9-2.075V11q0-1.15.9-2.075Q5.85 8 7.05 8h14l3 3h17q1.15 0 2.075.925.925.925.925 2.075v23q0 1.15-.925 2.075Q42.2 40 41.05 40Zm0-29v26h34V14H22.8l-3-3H7.05Zm0 0v26Z" />
                            </svg>
                        </div>
                        <div className={state ? 'enabled' : 'disabled'}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                                <path fill="#303030"
                                    d="M7 40q-1.15 0-2.075-.925Q4 38.15 4 37V11q0-1.15.925-2.075Q5.85 8 7 8h14.05l3 3H41q1.15 0 2.075.925Q44 12.85 44 14H22.75l-3-3H7v26l5.1-20H47l-5.35 20.7q-.3 1.2-1.1 1.75T38.5 40Zm3.15-3h28.6l4.2-17h-28.6Zm0 0 4.2-17-4.2 17ZM7 14v-3 3Z" />
                            </svg>
                        </div>
                    </div>
                    <p className={styles.folderTitle}>{folderTitle}</p>
                </button>
            </Link>
            <div className={state ? `${styles.dropdownFiles}` : 'disabled'}>
                <ul className={'listDropdown'}>
                    {links.map((link, index) => (
                        <li key={index} className='liDropdown'>
                            <a href={link.href}><span className={styles.miniIcon}>{<GoArrowSmallRight />}</span>{link.linkText}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    )
}

export default FolderContainer