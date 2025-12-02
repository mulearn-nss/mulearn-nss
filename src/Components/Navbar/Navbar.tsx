import styles from "./Navbar.module.css";
import { useEffect, useState } from "react";
import { ULearn } from "../../assets/svg/svg";
import { useReactPath } from "./path.hook.ts";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import data from "../../../data.json";

const Navbar = () => {
    const [openmenu, setopenmenu] = useState(false);
    const [navbg, setNavBg] = useState(false);
    function openMenu() {
        setopenmenu(!openmenu);
    }
    const path = useReactPath();
    const navContent = ["home", "about", "gallery", "team", "contact"];
    useEffect(() => { }, [path]);
    const changeNavBg = () => {
        window.scrollY >= 150 ? setNavBg(true) : setNavBg(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", changeNavBg);
        return () => {
            window.removeEventListener("scroll", changeNavBg);
        };
    }, []);
    return (
        <div
            className={styles.navbarWrapper}
            style={{
                background: navbg ? "rgba(255,255,255,0.4)" : "transparent",
            }}
        >
            <div className={styles.navbarLeft}>
                <a href="#home">
                    <ULearn/>
                    <p>{data.collegeCode}</p>
                </a>
            </div>
            <div className={styles.navbarRight}>
                <div>
                    {navContent.map((content, i) => (
                        <a 
                          href={`#${content}`} 
                          key={i.toString() + content}
                          className={window.location.href.includes(`#${content}`) ? styles.active : ''}
                        >
                            <p style={{
                                fontSize: "18px",
                                fontWeight: 600,
                            }}>
                                {content}
                            </p>
                        </a>
                    ))}
                </div>
                <button>
                    <a target="_blank" href="http://app.mulearn.org/register">Join µlearn</a>
                </button>
            </div>
            
            <div className={styles.navbarMobile}>
                <button 
                    onClick={openMenu} 
                    className={styles.hamburger}
                    aria-label={openmenu ? 'Close menu' : 'Open menu'}
                >
                    {openmenu ? <AiOutlineClose /> : <AiOutlineMenu />}
                </button>
                <AnimatePresence>
                    {openmenu && (
                        <motion.div 
                            className={styles.mobileMenu}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <button 
                                onClick={() => setopenmenu(false)}
                                className={styles.closeButton}
                                aria-label="Close menu"
                            >
                                <AiOutlineClose />
                            </button>
                            <div className={styles.mobileMenuContent}>
                                {navContent.map((content, i) => (
                                    <motion.a
                                        href={`#${content}`}
                                        key={i.toString() + content}
                                        className={`${styles.mobileNavLink} ${window.location.href.includes(`#${content}`) ? styles.active : ''}`}
                                        onClick={() => setopenmenu(false)}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        {content}
                                    </motion.a>
                                ))}
                                <motion.button 
                                    className={styles.mobileCta}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: navContent.length * 0.1 }}
                                >
                                    <a href="http://app.mulearn.org/register">Join µlearn</a>
                                </motion.button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Navbar;