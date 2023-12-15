import anime1 from "../../img/anime.home1.gif";
import anime2 from "../../img/anime.home2.gif";
import anime3 from "../../img/anime.home3.gif";
import anime4 from "../../img/anime.web.gif";
import anime5 from "../../img/anime.web2.gif";
import anime6 from "../../img/anime.web3.gif";
import anime7 from "../../img/anime.web4.gif";
import styles from "../../sass/container.module.scss"

export default function Home() {
    return(
        <main>
        <section>
            <h1>WEB 3</h1>
                <article className={`${styles.container}`}>
                    
                        <div className="d-flex justify-content-around align-items-center container1Mobile container2Mobile mb20">
                        <h2> Qu'est-ce que <br /><br /> le Web 3.0 ?</h2>
                            <p>Le Web 3.0, également appelé "Web sémantique", est la prochaine évolution du World Wide
                               Web qui vise à transformer l'expérience en ligne en utilisant des technologies avancées 
                               et des protocoles décentralisés. Contrairement au Web 2.0, où la plupart des données sont
                               statiques et stockées sur des serveurs centralisés, le Web 3.0 est caractérisé par une architecture
                               distribuée et décentralisée. Cela signifie que les utilisateurs ont un contrôle accru sur leurs données
                               et peuvent interagir avec des applications décentralisées (dApps) sans l'intermédiaire d'entités centrales.
                            </p>
                            <img style={{ width: "150px", height: "150px"}} src={anime1} alt="GIF animé" />
                        </div>
                </article>
        </section>
        <section className={`${styles.container}`}>
            <h2>Les caractéristiques clés</h2>
            <br /><br />
            <article  className="">
            <div className="d-flex align-items-center justify-content-around container3 container1Mobile">
                <img style={{ width: "150px", height: "150px"}} src={anime4} alt="GIF animé" />
                    <p>
                    <span className=""> Identité numérique souveraine :</span>
                        <br /><br />
                        Avec le Web 3.0, les utilisateurs ont un contrôle total sur leurs données personnelles. Ils peuvent créer leur
                        identité numérique souveraine, stockée de manière sécurisée sur la blockchain, et décider avec qui ils souhaitent
                        partager certaines informations. Cela améliore considérablement la confidentialité et la sécurité en ligne.
                    </p>     
                </div>
                <div className="d-flex margin-top container1Mobile ">
                    <div className="custom"></div>
                    <div className="d-flex flex-column container2 align-items-center  ">
                    <p>
                       <span> Blockchain et <br /> contrats intelligents :</span>
                        <br /><br />
                        La technologie blockchain joue un rôle central dans le Web 3.0. Elle permet de sécuriser et de valider
                        les transactions sans nécessiter d'autorités centrales. Les contrats intelligents, qui sont des programmes
                        autonomes exécutés sur la blockchain, facilitent l'automatisation des processus et garantissent des échanges
                        de données fiables et sécurisés entre les utilisateurs.
                        <br /><br />   
                    </p>
                    <img style={{ width: "150px", height: "150px"}} src={anime2} alt="GIF animé" className="d-flex align-item-center justify-content-center"/>
                    </div>
                    <div className="custom"></div>
                    <div className="d-flex flex-column container2 align-items-center  mt20 mb10">
                    <p>
                        <span>Interopérabilité :</span>
                        <br /><br />
                        Le Web 3.0 vise à créer un écosystème interconnecté où les différentes applications et plateformes peuvent
                        interagir de manière transparente. Cela signifie que les données et les identités des utilisateurs peuvent être 
                        facilement partagées entre les dApps, améliorant ainsi l'expérience utilisateur et permettant le développement
                        de solutions innovantes.
                        <br /><br />    
                    </p>
                    <img style={{ width: "150px", height: "150px"}} src={anime5} alt="GIF animé" />
                    </div>
                </div>
                
            </article>
        </section>
        <section className={`${styles.container}`}>
            <h2>Les cas d'utilisations</h2>
            <br /><br />
            <article className=""> 
                <div className="d-flex justify-content-around align-items-center container3 container1Mobile mb20">
                    <p>
                        <span>  Finance décentralisée ( DEFI ) :</span>
                            <br /><br />
                                Le Web 3.0 a donné naissance à la DeFi, un écosystème financier décentralisé qui offre des services financiers
                                traditionnels sans l'intervention d'intermédiaires. Les utilisateurs peuvent participer à des prêts, des emprunts, 
                                des échanges et des investissements en utilisant des contrats intelligents, offrant ainsi une plus grande transparence
                                et accessibilité financière.
                                <br /><br />
                    </p>
                    <img style={{ width: "150px", height: "150px"}} src={anime3} alt="GIF animé" />
                </div>
                <div className=" d-flex flex-column  mb20 ">
                <div className="custom "></div>
                    <div className="d-flex justify-content-around align-items-center container3 container3Mobile ">
                <img style={{ width: "150px", height: "150px"}} src={anime6} alt="GIF animé" />
                    <p>
                        <span>  Jeux et propriété <br /> d'actifs numériques :</span>
                            <br /><br />
                                Le Web 3.0 a ouvert de nouvelles perspectives pour les jeux en ligne en permettant la propriété réelle d'actifs 
                                numériques grâce aux NFT (jetons non fongibles). Ces NFT permettent aux joueurs de posséder et d'échanger des objets
                                de jeu uniques, créant ainsi un marché d'actifs numériques prospère.
                    </p>
                    </div> 
                    <br />          
                    <div className="custom"></div>
                    <div className="d-flex justify-content-around align-items-center container3 container1Mobile">      
                        <p>
                            <span>  Réseaux sociaux décentralisés :</span>
                                <br /><br />
                                    Les plateformes de médias sociaux basées sur le Web 3.0 offrent une alternative aux grands réseaux sociaux centralisés
                                    en respectant la vie privée des utilisateurs et en leur permettant de contrôler leurs données. Ces réseaux mettent 
                                    l'accent sur la sécurité et l'absence de censure, offrant ainsi une expérience en ligne plus libre et démocratique.
                        </p>
                        <img style={{ width: "150px", height: "150px"}} src={anime7} alt="GIF animé" />
                    </div>  
                </div>
            </article>
            <div className="custom "></div>
            <article className=" d-flex resume size container3 mb20">
                <p className="">
                En résumé, le Web 3.0 représente une nouvelle ère d'Internet qui met    l'accent sur la décentralisation, la sécurité 
                des données et l'autonomie des utilisateurs. Avec l'utilisation de la blockchain, des contrats intelligents et d'autres
                technologies émergentes, le Web 3.0 offre un potentiel énorme pour transformer de nombreux secteurs et façons 
                d'interagir en ligne  
                </p>
            </article>
        </section>
        </main>   
    );
}