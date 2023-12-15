import styles from "../../sass/container.module.scss"
import anime from "../../img/anime.nft1.gif"
import image1 from "../../img/img.nft1.png"
import image2 from "../../img/img.nft2.png"
import Carrousel from "../../components/Carrousel/Carrousel"

export default function Nft() {
    return(
        <main>
            <h1>NFT</h1>
                <section className={` ${styles.container}`}>
                    <article className="d-flex justify-content-around align-items-center container1Mobile container2Mobile mb20">
                        <h2>Introduction aux NFT <br /><br />(Tokens Non-Fongibles)</h2>    
                            <p>
                                Les NFT, ou Tokens Non-Fongibles, sont une innovation majeure dans le monde de la technologie blockchain.
                                Alors que les cryptomonnaies traditionnelles comme le Bitcoin sont fongibles 
                                (c'est-à-dire que chaque unité est interchangeable avec une autre), les NFT représentent des actifs
                                numériques uniques et indivisibles. Chaque NFT est associé à des informations spécifiques qui le
                                rendent unique, tels que des métadonnées, des propriétés artistiques ou des attributs spéciaux. 
                                Cette caractéristique rend les NFT idéaux pour la représentation numérique de biens uniques tels
                                que l'art numérique, les objets de collection virtuels et même des parcelles de terrain virtuelles.. 
                            </p>
                            <div>
                                <img className="mb20" style={{ width: "150px", height: "150px",display: "block"}} src="https://drive.polychainmonsters.com/ipfs/QmdyaxKLgSxBXtHThqxekwSNYGWdPuTGXeQXSxQm4A6BiS" alt="" />
                                    <div className="container3 d-flex justify-content-around align-items-center styleNone ">
                                        <li ><a title="lien vers polychainmonster" href="https://polychainmonsters.com/" target="-blank" >Polychain Monsters</a></li>
                                    </div> 
                            </div>   
                    </article>
                </section>
                <section className={` ${styles.container}`}>
                    <h2>Fonctionnement des NFT</h2>
                        <article className="d-flex justify-content-around align-items-center container3 container3Mobile m20">
                            <p>
                                Les NFT reposent sur la technologie blockchain, où chaque NFT est enregistré comme un jeton unique 
                                dans un contrat intelligent. Chaque NFT a son propre identifiant unique, ce qui garantit qu'il ne peut
                                pas être dupliqué ou falsifié. La blockchain garantit également la propriété, la traçabilité et 
                                l'authenticité de chaque NFT, ce qui résout le problème de la contrefaçon numérique. Les NFT peuvent 
                                être émis sur différentes blockchains, avec Ethereum étant l'une des plateformes les plus populaires pour 
                                les NFT en raison de sa compatibilité avec les contrats intelligents.
                            </p>
                                <img style={{ width: "150px", height: "150px", margin: '0 auto',display: "block"}} src={anime} alt="GIF animé" />
                        </article>
                        <div className="m20" >                     
                            <Carrousel />                            
                        </div>
                        <div className="container3 d-flex justify-content-around align-items-center styleNone mb20">
                        <li ><a title="lien vers utopiaAvatars" href="https://www.uavatars.io/" target="-blank" >Utopia Avatars</a></li>
                        </div> 
                </section>
                <section className={` ${styles.container}`}>
                    <h2>Exemple de Collection</h2>
                        <article className="d-flex justify-content-around align-items-center container3 container3Mobile m20">
                            <p>
                                L'un des exemples les plus célèbres de collections NFT est "CryptoKitties". Lancé en 2017 sur la
                                blockchain Ethereum, CryptoKitties a créé un engouement pour les NFT et a popularisé le concept 
                                de possession numérique unique. Dans CryptoKitties, les utilisateurs peuvent collectionner, échanger 
                                et élever des chatons virtuels uniques. Chaque CryptoKitty est un NFT avec des attributs spécifiques
                                tels que la couleur, le motif, la génération et même des traits génétiques. En raison de leur unicité,
                                certains CryptoKitties rares se sont vendus pour des sommes impressionnantes, ce qui a démontré le
                                potentiel de valeur des NFT.
                            </p>
                            <div>
                                <img style={{ width: "150px", height: "150px"}} src={image1} alt="nft de cryptoKiitties" />
                                    <div className="container3 d-flex justify-content-around align-items-center styleNone mb20">
                                        <li ><a title="lien vers cryptokitties" href="https://www.cryptokitties.co/" target="-blank" >CryptoKitties</a></li>
                                    </div>   
                            </div>
                            
                        </article>
                        <div className="custom"></div>
                        <article className="d-flex justify-content-around align-items-center container3 container3Mobile m20">
                            <div>
                                <img style={{ width: "300px", height: "200px"}} src={image2} alt="nft de Beeple" />
                                    <div className="container3 d-flex justify-content-around align-items-center styleNone mb20">
                                        <li ><a title="lien vers beeple" href="https://www.beeple-crap.com/" target="-blank" >BEEPLE</a></li>
                                    </div>
                            </div>    
                            <p>
                                Un autre exemple notable est l'artiste numérique Beeple (Mike Winkelmann), qui a vendu une œuvre d'art 
                                NFT intitulée "Everydays: The First 5000 Days" aux enchères chez Christie's pour plus de 69 millions
                                de dollars. Cette vente a marqué un tournant majeur dans la reconnaissance de la valeur des NFT dans le
                                monde de l'art..
                            </p>
                        </article>
                </section>
        </main>
    )
}