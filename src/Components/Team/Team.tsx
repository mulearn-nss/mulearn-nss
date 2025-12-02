import { useEffect, useRef } from 'react';
import styles from "./Team.module.css";
import line from "./assets/line.png";
import line2 from "./assets/line2.png";
import data from "../../../data.json"

const Team = () => {
    const teamRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.visible);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        teamRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            teamRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    const addToRefs = (el: HTMLDivElement | null, index: number) => {
        if (el && !teamRefs.current.includes(el)) {
            teamRefs.current[index] = el;
        }
    };

    return (
        <div className={styles.teamWrapper} id="team">
            <h1>Our Team</h1>
            <div className={styles.teamBodyWrapper}>
                <div className={styles.teamBgLineWrapper}>
                    <img src={line} alt="" loading="lazy" />
                    <img src={line2} alt="" loading="lazy" />
                    <img src={line} alt="" loading="lazy" />
                    <img src={line2} alt="" loading="lazy" />
                    <img src={line} alt="" loading="lazy" />
                    <img src={line2} alt="" loading="lazy" />
                </div>
                <div className={styles.teamMembersDetailsWrapper}>
                    <div 
                        ref={(el) => addToRefs(el, 0)}
                        className={`${styles.team} ${styles.team1}`}
                    >
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.staffAdvisor.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.staffAdvisor.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Staff Advisor
                            </div>
                        </div>
                    </div>
                    <div 
                        ref={(el) => addToRefs(el, 1)}
                        className={`${styles.team} ${styles.team2}`}
                    >
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.campusLead.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.campusLead.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Campus Lead
                            </div>
                        </div>
                    </div>
                    <div 
                        ref={(el) => addToRefs(el, 2)}
                        className={`${styles.team} ${styles.team3}`}
                    >
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.campusCoLead.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.campusCoLead.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Campus Co-Lead
                            </div>
                        </div>
                    </div>
                    <div 
                        ref={(el) => addToRefs(el, 3)}
                        className={`${styles.team} ${styles.team4}`}
                    >
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.treasurer.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.treasurer.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Creative Lead
                            </div>
                        </div>
                    </div>
                    <div 
                        ref={(el) => addToRefs(el, 4)}
                        className={`${styles.team} ${styles.team5}`}
                    >
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.technicalLead.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.technicalLead.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Technical Lead
                            </div>
                        </div>
                    </div>
                    <div 
                        ref={(el) => addToRefs(el, 5)}
                        className={`${styles.team} ${styles.team6}`}
                    >
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.mediaLead.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.mediaLead.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Media Lead
                            </div>
                        </div>
                    </div>
                    <div 
                        ref={(el) => addToRefs(el, 6)}
                        className={`${styles.team} ${styles.team7}`}
                    >
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.contentLead.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.contentLead.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Design Lead
                            </div>
                        </div>
                    </div>
                    <div 
                        ref={(el) => addToRefs(el, 7)}
                        className={`${styles.team} ${styles.team8}`}
                    >
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.operationLead.image}
                                alt={`${data.team.operationLead.name}, Operation Lead`}
                                loading="lazy"
                                width="200"
                                height="200"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.operationLead.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Content Lead
                            </div>
                        </div>
                    </div>
                    
                    {/* New Team Members */}
                    <div 
                        ref={(el) => addToRefs(el, 8)}
                        className={`${styles.team} ${styles.team9}`}
                    >
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.member9.image}
                                alt={`${data.team.member9.name}, ${data.team.member9.role}`}
                                loading="lazy"
                                width="200"
                                height="200"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.member9.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                {data.team.member9.role}
                            </div>
                        </div>
                    </div>
                    
                    <div 
                        ref={(el) => addToRefs(el, 9)}
                        className={`${styles.team} ${styles.team10}`}
                    >
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.member10.image}
                                alt={`${data.team.member10.name}, ${data.team.member10.role}`}
                                loading="lazy"
                                width="200"
                                height="200"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.member10.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                {data.team.member10.role}
                            </div>
                        </div>
                    </div>
                    
                    <div 
                        ref={(el) => addToRefs(el, 10)}
                        className={`${styles.team} ${styles.team11}`}
                    >
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.member11.image}
                                alt={`${data.team.member11.name}, ${data.team.member11.role}`}
                                loading="lazy"
                                width="200"
                                height="200"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.member11.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                {data.team.member11.role}
                            </div>
                        </div>
                    </div>  
                    <div 
                        ref={(el) => addToRefs(el, 11)}
                        className={`${styles.team} ${styles.team12}`}
                    >
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.member12.image}
                                alt={`${data.team.member11.name}, ${data.team.member12.role}`}
                                loading="lazy"
                                width="200"
                                height="200"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.member12.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                {data.team.member12.role}
                            </div>
                        </div>
                    </div>                     
                </div>
            </div>
        </div>
    );
};

export default Team;