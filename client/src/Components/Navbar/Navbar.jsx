/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Navbar.css";
import "./Nav";

import Logo from "../../assets/Images/logo.jpg";

const Navbar = () => {
  return (
    <nav className="NavMenu">
      <div className="container">
        <div className="row">
          <div className="logo">
            <a className="aLogo" href="/">
              <img className="logo_img" src={Logo} alt="logo ItemsDeQualité" />
            </a>
          </div>
          <div className="mobile_btn">
            <i className="fas fa-bars"></i>
          </div>
          <div className="main_menu">
            <ul className="ulNav">
              {/* exemple multi burger */}
              {/* <li className="has_dropdown">
                <a className="aNav" href="#">
                  Pages <i className="fas fa-angle-down"></i>
                </a>
                <ul className="sub_menu">
                  <li>
                    <a className="aNav" href="#">
                      Page 1
                    </a>
                  </li>
                  <li className="has_dropdown">
                    <a className="aNav" href="#">
                      Page 2 <i className="fas fa-angle-right"></i>
                    </a>
                    <ul className="sub_menu">
                      <li>
                        <a className="aNav" href="#">
                          Page 2.1
                        </a>
                      </li>
                      <li>
                        <a className="aNav" href="#">
                          Page 2.2
                        </a>
                      </li>
                      <li className="has_dropdown">
                        <a className="aNav" href="#">
                          Page 2.3 <i className="fas fa-angle-right"></i>
                        </a>
                        <ul className="sub_menu">
                          <li>
                            <a className="aNav" href="#">
                              Page 2.1
                            </a>
                          </li>
                          <li>
                            <a className="aNav" href="#">
                              Page 2.2
                            </a>
                          </li>
                          <li>
                            <a className="aNav" href="#">
                              Page 2.3
                            </a>
                          </li>
                          <li>
                            <a className="aNav" href="#">
                              Page 2.4
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a className="aNav" href="#">
                          Page 2.4
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="aNav" href="#">
                      Page 3
                    </a>
                  </li>
                  <li>
                    <a className="aNav" href="#">
                      Page 4
                    </a>
                  </li>
                </ul>
              </li> */}
              <ul className="mega_menu_dropdown has_dropdown">
                <a className="aNav">
                  <span className="aMainNav">Maison</span> <i className="fas fa-angle-down"></i>
                </a>
                <div className="mega_menu sub_menu">
                  <div className="mega_menu_item">
                    <h3>Buanderie & Salle de bain</h3>
                    <li className="has_dropdown">
                      <a className="aNav">
                        Laver / Sécher <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="/maison/machine-a-laver">
                          Machine à laver
                        </a>
                        <a className="aNav" href="#">
                          Sèche-linge
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Repasser <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Centrale vapeur
                        </a>
                        <a className="aNav" href="#">
                          Défroisseur vapeur
                        </a>
                        <a className="aNav" href="#">
                          Fer à repasser
                        </a>
                        <a className="aNav" href="#">
                          Pattemouille
                        </a>
                        <a className="aNav" href="#">
                          Chauffe-eau
                        </a>
                        <a className="aNav" href="#">
                          Pattemouille
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Salle de bain <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Colonne de douche
                        </a>
                        <a className="aNav" href="#">
                          Paroi de douche
                        </a>
                        <a className="aNav" href="#">
                          Sauna
                        </a>
                        <a className="aNav" href="#">
                          Sèche-serviette électrique
                        </a>
                        <a className="aNav" href="#">
                          Serviette de bain
                        </a>
                      </ul>
                    </li>
                  </div>
                  <div className="mega_menu_item">
                    <h3>Entretien</h3>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Aspirateurs <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Aspirateur à main
                        </a>
                        <a className="aNav" href="#">
                          Aspirateur avec sac
                        </a>
                        <a className="aNav" href="#">
                          Aspirateur balai
                        </a>
                        <a className="aNav" href="#">
                          {" "}
                          Aspirateur laveur
                        </a>
                        <a className="aNav" href="#">
                          Aspirateur robot
                        </a>
                        <a className="aNav" href="#">
                          Aspirateur sans sac
                        </a>
                        <a className="aNav" href="#">
                          Aspirateur eau et poussière
                        </a>
                        <a className="aNav" href="#">
                          Nettoyeur de sol
                        </a>
                        <a className="aNav" href="#">
                          Robot laveur de sol
                        </a>
                        <a className="aNav" href="#">
                          Shampouineuse
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Traitement de l'eau <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Adoucisseur d'eau
                        </a>
                        <a className="aNav" href="#">
                          Distillateur d'eau
                        </a>
                        <a className="aNav" href="#">
                          Osmoseur
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Gestion de l'humidité <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Déshumidificateur
                        </a>
                        <a className="aNav" href="#">
                          Humidificateur d'air
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Traitement de l'eau <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Adoucisseur d'eau
                        </a>
                        <a className="aNav" href="#">
                          Distillateur d'eau
                        </a>
                        <a className="aNav" href="#">
                          Osmoseur
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Nettoyeurs vapeur <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Balai vapeur
                        </a>
                        <a className="aNav" href="#">
                          Nettoyeurs vapeur
                        </a>
                      </ul>
                      {/* solo */}
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Nettoyeurs vitres <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Nettoyeur vitre
                        </a>
                        <a className="aNav" href="#">
                          Robot lave vitre
                        </a>
                      </ul>
                      {/* solo */}
                    </li>
                    <a className="aNav" href="#">
                      Purificateur d'air
                    </a>
                  </div>
                  <div className="mega_menu_item">
                    <h3>Chauffage & clim.</h3>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Climatisation <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Climatiseur mobile
                        </a>
                        <a className="aNav" href="#">
                          Climatiseur split
                        </a>
                        <a className="aNav" href="#">
                          Rafraichisseur d'air
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Ventilation <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Ventilateur
                        </a>
                        <a className="aNav" href="#">
                          VMC
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Radiateurs <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Radiateur électrique{" "}
                        </a>
                        <a className="aNav" href="#">
                          Radiateur hydraulique
                        </a>
                        <a className="aNav" href="#">
                          radiateur bain d'huile
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Chauffage d'appoint <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Parasol chauffant{" "}
                        </a>
                        <a className="aNav" href="#">
                          Poêle à gaz
                        </a>
                        <a className="aNav" href="#">
                          Poêle à pétrole
                        </a>
                        <a className="aNav" href="#">
                          Radiateur soufflant
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Cheminées <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Cheminée à l'éthanol{" "}
                        </a>
                        <a className="aNav" href="#">
                          Cheminée électrique
                        </a>
                        <a className="aNav" href="#">
                          Insert de cheminée
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Chauffage bois <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Poêle à bois{" "}
                        </a>
                        <a className="aNav" href="#">
                          Poêle à granulés
                        </a>
                      </ul>
                    </li>
                  </div>
                  <div className="mega_menu_item">
                    <h3>Tech/Mobilier/Literie</h3>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Sécurité <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Alarme maison{" "}
                        </a>
                        <a className="aNav" href="#">
                          Boite à clefs{" "}
                        </a>
                        <a className="aNav" href="#">
                          Caméra de surveillance extérieure
                        </a>
                        <a className="aNav" href="#">
                          Caméra de surveillance intérieure
                        </a>
                        <a className="aNav" href="#">
                          Coffre-fort
                        </a>
                        <a className="aNav" href="#">
                          Extincteur
                        </a>
                        <a className="aNav" href="#">
                          Serrure connectée
                        </a>
                        <a className="aNav" href="#">
                          Visiophone
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Mobilier <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Banc de rangement{" "}
                        </a>
                        <a className="aNav" href="#">
                          Bureau assis debout{" "}
                        </a>
                        <a className="aNav" href="#">
                          Chaise de bureau
                        </a>
                        <a className="aNav" href="#">
                          Chaise de gamer
                        </a>
                        <a className="aNav" href="#">
                          Chauffeuse
                        </a>
                        <a className="aNav" href="#">
                          Coiffeuse
                        </a>
                        <a className="aNav" href="#">
                          Fauteuil de relaxation
                        </a>
                        <a className="aNav" href="#">
                          Table basse
                        </a>
                        <a className="aNav" href="#">
                          Table à manger
                        </a>
                        <a className="aNav" href="#">
                          Table basse
                        </a>
                        <a className="aNav" href="#">
                          Tabouret de bar
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Literie <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Barrière lit enfant{" "}
                        </a>
                        <a className="aNav" href="#">
                          Couverture{" "}
                        </a>
                        <a className="aNav" href="#">
                          Lit coffre
                        </a>
                        <a className="aNav" href="#">
                          Lit enfant
                        </a>
                        <a className="aNav" href="#">
                          Lit gigogne
                        </a>
                        <a className="aNav" href="#">
                          Lit pliant
                        </a>
                        <a className="aNav" href="#">
                          Lit superposé
                        </a>
                        <a className="aNav" href="#">
                          Matelas 140x190
                        </a>
                        <a className="aNav" href="#">
                          Matelas 160x200
                        </a>
                        <a className="aNav" href="#">
                          Matelas 180x200
                        </a>
                        <a className="aNav" href="#">
                          Matelas 90x190
                        </a>
                        <a className="aNav" href="#">
                          Oreiller à mémoire de forme
                        </a>
                        <a className="aNav" href="#">
                          Protège matelas
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Tech <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Interrupteur sans fil{" "}
                        </a>
                        <a className="aNav" href="#">
                          Refroidisseur ordinateur portable{" "}
                        </a>
                        <a className="aNav" href="#">
                          Thermostat
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Accessoires <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Corbeille à papier{" "}
                        </a>
                        <a className="aNav" href="#">
                          Destructeur de documents{" "}
                        </a>
                        <a className="aNav" href="#">
                          Lampe de lecture
                        </a>
                      </ul>
                    </li>
                  </div>
                </div>
              </ul>
              <ul className="mega_menu_dropdown has_dropdown">
                <a className="aNav" href="#">
                  <span className="aMainNav">Cuisine</span> <i className="fas fa-angle-down"></i>
                </a>
                <div className="mega_menu sub_menu">
                  <div className="mega_menu_item">
                    <h3>Fait maison</h3>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Pour les apéro <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Kit apéro
                        </a>
                        <a className="aNav" href="#">
                          Bouteille originale
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Pour le repas <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Appareil à croque-monsieur{" "}
                        </a>
                        <a className="aNav" href="#">
                          Friteuse{" "}
                        </a>
                        <a className="aNav" href="#">
                          Machine à pain{" "}
                        </a>
                        <a className="aNav" href="#">
                          Machine à pâtes fraîches
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Pour le desert <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Déshydrateur alimentaire
                        </a>
                        <a className="aNav" href="#">
                          Fontaine à chocolat
                        </a>
                        <a className="aNav" href="#">
                          Gaufrier
                        </a>
                        <a className="aNav" href="#">
                          Machine à lait végétal{" "}
                        </a>
                        <a className="aNav" href="#">
                          Mousseur à lait{" "}
                        </a>
                        <a className="aNav" href="#">
                          Sorbetière
                        </a>
                        <a className="aNav" href="#">
                          Yaourtière{" "}
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Les ustensiles <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Aiguiseur de couteau
                        </a>
                        <a className="aNav" href="#">
                          Batterie de cuisine
                        </a>
                        <a className="aNav" href="#">
                          Casserole
                        </a>
                        <a className="aNav" href="#">
                          Chalumeau de cuisine{" "}
                        </a>
                        <a className="aNav" href="#">
                          Cocotte en fonte{" "}
                        </a>
                        <a className="aNav" href="#">
                          Essoreuse à salade
                        </a>
                        <a className="aNav" href="#">
                          Coupe frite{" "}
                        </a>
                        <a className="aNav" href="#">
                          Faitout
                        </a>
                        <a className="aNav" href="#">
                          Mandoline
                        </a>
                        <a className="aNav" href="#">
                          Poêle
                        </a>
                        <a className="aNav" href="#">
                          Théière
                        </a>
                        <a className="aNav" href="#">
                          Wok
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Vaiselle <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Bol{" "}
                        </a>
                        <a className="aNav" href="#">
                          Verre
                        </a>
                        <a className="aNav" href="#">
                          Flûte
                        </a>
                        <a className="aNav" href="#">
                          Tasse
                        </a>
                        <a className="aNav" href="#">
                          Assiette{" "}
                        </a>
                        <a className="aNav" href="#">
                          Couteau{" "}
                        </a>
                        <a className="aNav" href="#">
                          Fourchette{" "}
                        </a>
                        <a className="aNav" href="#">
                          Cuillère
                        </a>
                        <a className="aNav" href="#">
                          Cruche / Carafe{" "}
                        </a>
                        <a className="aNav" href="#">
                          Ramequin
                        </a>
                        <a className="aNav" href="#">
                          Mug isotherme{" "}
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Autres <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Banc de cuisine
                        </a>
                        <a className="aNav" href="#">
                          Compacteur déchets
                        </a>
                        <a className="aNav" href="#">
                          Desserte de cuisine
                        </a>
                        <a className="aNav" href="#">
                          Filtre à eau{" "}
                        </a>
                        <a className="aNav" href="#">
                          Poubelle de cuisine
                        </a>
                        <a className="aNav" href="#">
                          Robinet de cuisine{" "}
                        </a>
                      </ul>
                    </li>
                  </div>
                  <div className="mega_menu_item">
                    <h3>Robot & Cuisson</h3>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Robots de cuisine <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Blender chauffant
                        </a>
                        <a className="aNav" href="#">
                          Robot cuiseur
                        </a>
                        <a className="aNav" href="#">
                          Robot multifonction
                        </a>
                        <a className="aNav" href="#">
                          Robot pâtissier
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Cuisson conviviale <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Appareil à fondue
                        </a>
                        <a className="aNav" href="#">
                          Appareil à raclette
                        </a>
                        <a className="aNav" href="#">
                          Crêpière
                        </a>
                        <a className="aNav" href="#">
                          Plancha
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Cuisson & réchauffage <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Cuisinière
                        </a>
                        <a className="aNav" href="#">
                          Cuisinière à gaz
                        </a>
                        <a className="aNav" href="#">
                          Micro-ondes
                        </a>
                        <a className="aNav" href="#">
                          Piano de cuisson
                        </a>
                        <a className="aNav" href="#">
                          Plaque de cuisson
                        </a>
                        <a className="aNav" href="#">
                          Réchaud
                        </a>
                        <a className="aNav" href="#">
                          Rôtissoire
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Cuiseurs <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Autocuiseur
                        </a>
                        <a className="aNav" href="#">
                          Cuiseur à riz
                        </a>
                        <a className="aNav" href="#">
                          Cuiseur vapeur
                        </a>
                        <a className="aNav" href="#">
                          Multicuiseur
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Fours <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Four à pizza
                        </a>
                        <a className="aNav" href="#">
                          Four encastrable
                        </a>
                        <a className="aNav" href="#">
                          Mini-four
                        </a>
                      </ul>
                    </li>
                  </div>
                  <div className="mega_menu_item">
                    <h3>Gros électroménager</h3>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Taille standard <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Cave à vin
                        </a>
                        <a className="aNav" href="#">
                          Congélateur
                        </a>
                        <a className="aNav" href="#">
                          Hotte aspirante
                        </a>
                        <a className="aNav" href="#">
                          Lave-vaisselle
                        </a>
                        <a className="aNav" href="#">
                          Réfrigérateur
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Taille mini <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Mini congélateur
                        </a>
                        <a className="aNav" href="#">
                          Mini lave-vaisselle
                        </a>
                        <a className="aNav" href="#">
                          Mini réfrigérateur
                        </a>
                      </ul>
                    </li>
                  </div>
                  <div className="mega_menu_item">
                    <h3>Petit électroménager</h3>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Hâcher / Mixer / Découper <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Hachoir
                        </a>
                        <a className="aNav" href="#">
                          Hachoir à viande
                        </a>
                        <a className="aNav" href="#">
                          Mixeur plongeant
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Machines à café <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Cafetière à dosettes
                        </a>
                        <a className="aNav" href="#">
                          Cafetière filtre
                        </a>
                        <a className="aNav" href="#">
                          Cafetière à capsules
                        </a>
                        <a className="aNav" href="#">
                          Machine à café{" "}
                        </a>
                        <a className="aNav" href="#">
                          Percolateur à café
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Appareils à boissons <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Ensemble petit-déjeuner
                        </a>
                        <a className="aNav" href="#">
                          Plateau de lit
                        </a>
                        <a className="aNav" href="#">
                          Grille-pain
                        </a>
                        <a className="aNav" href="#">
                          Bol
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Appareils de cuisine <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Balance de cuisine
                        </a>
                        <a className="aNav" href="#">
                          Batteur électrique
                        </a>
                        <a className="aNav" href="#">
                          Machine à pop-corn
                        </a>
                        <a className="aNav" href="#">
                          Thermomètre de cuisson
                        </a>
                        <a className="aNav" href="#">
                          Tire-bouchon
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Conservation des aliments <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Machine sous vide
                        </a>
                        <a className="aNav" href="#">
                          Stérilisateur à bocaux
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Petit déjeuner <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Bouilloire électrique
                        </a>
                        <a className="aNav" href="#">
                          Stérilisateur à bocaux
                        </a>
                      </ul>
                    </li>
                  </div>
                </div>
              </ul>
              <ul className="mega_menu_dropdown has_dropdown">
                <a className="aNav" href="#">
                  <span className="aMainNav">Jardin & Bricolage</span> <i className="fas fa-angle-down"></i>
                </a>
                <div className="mega_menu sub_menu">
                  <div className="mega_menu_item">
                    <h3>Côté jardin</h3>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Pelouse <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Arroseur pelouse
                        </a>
                        <a className="aNav" href="#">
                          Scarificateur
                        </a>
                        <a className="aNav" href="#">
                          Tondeuse électrique
                        </a>
                        <a className="aNav" href="#">
                          Tondeuse robot
                        </a>
                        <a className="aNav" href="#">
                          Tondeuse thermique{" "}
                        </a>
                        <a className="aNav" href="#">
                          Tracteur tondeuse
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Taille & coupe <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Coupe-bordure
                        </a>
                        <a className="aNav" href="#">
                          Débroussailleuse
                        </a>
                        <a className="aNav" href="#">
                          Sécateur
                        </a>
                        <a className="aNav" href="#">
                          Taille-haie
                        </a>
                        <a className="aNav" href="#">
                          Tronçonneuse{" "}
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Propreté du jardin <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Brouette
                        </a>
                        <a className="aNav" href="#">
                          Broyeur de végétaux
                        </a>
                        <a className="aNav" href="#">
                          Composteur de jardin
                        </a>
                        <a className="aNav" href="#">
                          Nettoyeur haute pression
                        </a>
                        <a className="aNav" href="#">
                          Souffleur de feuilles{" "}
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Entretien du sol <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Grelinette
                        </a>
                        <a className="aNav" href="#">
                          Motobineuse
                        </a>
                      </ul>
                    </li>
                  </div>
                  <div className="mega_menu_item">
                    <h3>Aménagement extérieur</h3>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Aménagement extérieur <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Bain de soleil
                        </a>
                        <a className="aNav" href="#">
                          Balancelle de jardin
                        </a>
                        <a className="aNav" href="#">
                          Banc de jardin
                        </a>
                        <a className="aNav" href="#">
                          Chaise de jardin
                        </a>
                        <a className="aNav" href="#">
                          Chaise longue
                        </a>
                        <a className="aNav" href="#">
                          Desserte de jardin
                        </a>
                        <a className="aNav" href="#">
                          Fauteuil suspendu
                        </a>
                        <a className="aNav" href="#">
                          Hamac
                        </a>
                        <a className="aNav" href="#">
                          Salon de jardin
                        </a>
                        <a className="aNav" href="#">
                          Table basse de jardin
                        </a>
                        <a className="aNav" href="#">
                          Table de jardin
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Ombrage <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Auvent
                        </a>
                        <a className="aNav" href="#">
                          Parasol
                        </a>
                        <a className="aNav" href="#">
                          Pergola
                        </a>
                        <a className="aNav" href="#">
                          Store banne
                        </a>
                        <a className="aNav" href="#">
                          Voile d'ombrage
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Rangement / Abris <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Abri de bûches
                        </a>
                        <a className="aNav" href="#">
                          Abri de jardin
                        </a>
                        <a className="aNav" href="#">
                          Abri moto
                        </a>
                        <a className="aNav" href="#">
                          Niche pour chien
                        </a>
                        <a className="aNav" href="#">
                          Poulailler
                        </a>
                        <a className="aNav" href="#">
                          Serre de jardin
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Décoration & luminaires <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Brasero
                        </a>
                        <a className="aNav" href="#">
                          Jardinière
                        </a>
                        <a className="aNav" href="#">
                          Luminaire extérieur
                        </a>
                        <a className="aNav" href="#">
                          Panneau japonais
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Jeux d'extérieur <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Aire de jeux extérieure
                        </a>
                        <a className="aNav" href="#">
                          Balençoire
                        </a>
                        <a className="aNav" href="#">
                          Panier de basket
                        </a>
                        <a className="aNav" href="#">
                          Cage de foot
                        </a>
                        <a className="aNav" href="#">
                          Terrain de pétanque
                        </a>
                        <a className="aNav" href="#">
                          Trampoline
                        </a>
                      </ul>
                    </li>
                  </div>

                  <div className="mega_menu_item">
                    <h3>Côté piscine</h3>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Spa <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Spa gonflable
                        </a>
                        <a className="aNav" href="#">
                          Spa portable
                        </a>
                        <a className="aNav" href="#">
                          Spa luxe
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Piscines hors sol <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Piscine gonflable
                        </a>
                        <a className="aNav" href="#">
                          Piscine tubulaire
                        </a>
                        <a className="aNav" href="#">
                          Baignoire balnéo
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Accessoires piscine <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Alarme de piscine
                        </a>
                        <a className="aNav" href="#">
                          Bâche de piscine
                        </a>
                        <a className="aNav" href="#">
                          Filtre à sable
                        </a>
                        <a className="aNav" href="#">
                          Robot piscine
                        </a>
                        <a className="aNav" href="#">
                          Epuisette
                        </a>
                        <a className="aNav" href="#">
                          kit test qualité d'eau
                        </a>
                        <a className="aNav" href="#">
                          Distributeur chlore
                        </a>
                        <a className="aNav" href="#">
                          Bouée
                        </a>
                      </ul>
                    </li>
                  </div>
                  <div className="mega_menu_item">
                    <h3>Côté garage</h3>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Outillage électroportatif <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Chauffage de chantier
                        </a>
                        <a className="aNav" href="#">
                          Compresseur d'air
                        </a>
                        <a className="aNav" href="#">
                          Décapeur thermique
                        </a>
                        <a className="aNav" href="#">
                          Marteau perforateur
                        </a>
                        <a className="aNav" href="#">
                          Niveau laser
                        </a>
                        <a className="aNav" href="#">
                          Perceuse
                        </a>
                        <a className="aNav" href="#">
                          Pompe d'arrosage
                        </a>
                        <a className="aNav" href="#">
                          Poste à souder
                        </a>
                        <a className="aNav" href="#">
                          Scie à onglet
                        </a>
                        <a className="aNav" href="#">
                          Scie circulaire
                        </a>
                        <a className="aNav" href="#">
                          Scie sauteuse
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Autres <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Boîte à outils
                        </a>
                        <a className="aNav" href="#">
                          Conteneur poubelle
                        </a>
                        <a className="aNav" href="#">
                          Echelle
                        </a>
                        <a className="aNav" href="#">
                          Groupe électrogène
                        </a>
                        <a className="aNav" href="#">
                          Kit panneau solaire
                        </a>
                      </ul>
                    </li>
                  </div>
                </div>
              </ul>
              <ul className="mega_menu_dropdown has_dropdown">
                <a className="aNav" href="#">
                  <span className="aMainNav">Loisirs</span> <i className="fas fa-angle-down"></i>
                </a>
                <div className="mega_menu sub_menu">
                  <div className="mega_menu_item">
                    <h3>Musculation & fitness</h3>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Gym & cardio <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Aquabike
                        </a>
                        <a className="aNav" href="#">
                          Ballon de gym
                        </a>
                        <a className="aNav" href="#">
                          Bande élastique fitness
                        </a>
                        <a className="aNav" href="#">
                          Plateforme vibrante
                        </a>
                        <a className="aNav" href="#">
                          Rameur
                        </a>
                        <a className="aNav" href="#">
                          Sac de frappe
                        </a>
                        <a className="aNav" href="#">
                          Stepper
                        </a>
                        <a className="aNav" href="#">
                          Tapis de course
                        </a>
                        <a className="aNav" href="#">
                          Trampoline de fitness
                        </a>
                        <a className="aNav" href="#">
                          Vélo d'appartement
                        </a>
                        <a className="aNav" href="#">
                          Vélo elliptique
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Musculation <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Appareil à abdo
                        </a>
                        <a className="aNav" href="#">
                          Banc de musculation
                        </a>
                        <a className="aNav" href="#">
                          Barre de traction
                        </a>
                        <a className="aNav" href="#">
                          Chaise romaine
                        </a>
                        <a className="aNav" href="#">
                          Haltères de musculation
                        </a>
                        <a className="aNav" href="#">
                          Station de musculation
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Accessoires <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Tapis de yoga
                        </a>
                        <a className="aNav" href="#">
                          Brassard
                        </a>
                        <a className="aNav" href="#">
                          Montre connecter sport
                        </a>
                        <a className="aNav" href="#">
                          Bande Poignet
                        </a>
                        <a className="aNav" href="#">
                          Gant de boxe
                        </a>
                        <a className="aNav" href="#">
                          Hand grip
                        </a>
                        <a className="aNav" href="#">
                          Sac de sport
                        </a>
                      </ul>
                    </li>
                  </div>
                  <div className="mega_menu_item">
                    <h3>Mobilité électrique</h3>
                    <a className="aNav" href="#">
                      Vélo Electrique
                    </a>
                    <a className="aNav" href="#">
                      Vélo standart
                    </a>
                    <a className="aNav" href="#">
                      Trottinette électrique
                    </a>
                    <a className="aNav" href="#">
                      Trottinette standart
                    </a>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Autres <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Gyropode
                        </a>
                        <a className="aNav" href="#">
                          Gyroroue
                        </a>
                        <a className="aNav" href="#">
                          Hoverboard
                        </a>
                        <a className="aNav" href="#">
                          Skateboard électrique
                        </a>
                        <a className="aNav" href="#">
                          Gant de boxe
                        </a>
                        <a className="aNav" href="#">
                          Hand grip
                        </a>
                      </ul>
                    </li>
                  </div>
                  <div className="mega_menu_item">
                    <h3>Voyage / Loisirs outdoor</h3>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Pique-nique & BBQ <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Barbecue à charbon
                        </a>
                        <a className="aNav" href="#">
                          Barbecue à gaz
                        </a>
                        <a className="aNav" href="#">
                          Barbecue électrique
                        </a>
                        <a className="aNav" href="#">
                          Glacière électrique
                        </a>
                        <a className="aNav" href="#">
                          Housse barbecue
                        </a>
                        <a className="aNav" href="#">
                          Accessoires barbecue
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Auto / Moto <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Coffre de toit
                        </a>
                        <a className="aNav" href="#">
                          Remorque de voiture
                        </a>
                        <a className="aNav" href="#">
                          GPS
                        </a>
                        <a className="aNav" href="#">
                          Porte Gps
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Bagages & sacs <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Cage de transport pour chien
                        </a>
                        <a className="aNav" href="#">
                          Cage de transport pour chat
                        </a>
                        <a className="aNav" href="#">
                          Sac à dos
                        </a>
                        <a className="aNav" href="#">
                          Sac de voyage
                        </a>
                        <a className="aNav" href="#">
                          Sac de randonnée
                        </a>
                        <a className="aNav" href="#">
                          Valise cabine
                        </a>
                        <a className="aNav" href="#">
                          Valise rigide
                        </a>
                        <a className="aNav" href="#">
                          Sac de randonnée
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Loisirs liés à l'eau <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Kayak gonflable
                        </a>
                        <a className="aNav" href="#">
                          Paddle gonflable
                        </a>
                        <a className="aNav" href="#">
                          Sac imperméable
                        </a>
                        <a className="aNav" href="#">
                          Palme
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Loisirs de plein air <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Détecteur de métaux
                        </a>
                        <a className="aNav" href="#">
                          GPS de randonnée
                        </a>
                        <a className="aNav" href="#">
                          Montre GPS
                        </a>
                        <a className="aNav" href="#">
                          Télescope
                        </a>
                        <a className="aNav" href="#">
                          Tente de plage
                        </a>
                        <a className="aNav" href="#">
                          Tente familial
                        </a>
                        <a className="aNav" href="#">
                          Tente de réception
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Accessoires <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Carnet de voyage
                        </a>
                        <a className="aNav" href="#">
                          Lunchbox
                        </a>
                        <a className="aNav" href="#">
                          Parapluie
                        </a>
                      </ul>
                    </li>
                  </div>
                  <div className="mega_menu_item">
                    <h3>Jeux & Loisirs créatifs</h3>
                    <a className="aNav" href="#">
                      Jeux de société
                    </a>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Couture <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Machine à coudre
                        </a>
                        <a className="aNav" href="#">
                          Surjeteuse
                        </a>
                        <a className="aNav" href="#">
                          Kit couture débutant
                        </a>
                        <a className="aNav" href="#">
                          Kit couture
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Loisirs créatifs <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Kit poterie
                        </a>
                        <a className="aNav" href="#">
                          Kit de bougie
                        </a>
                        <a className="aNav" href="#">
                          Machine de découpe scra
                        </a>
                      </ul>
                    </li>
                  </div>
                </div>
              </ul>
              <ul className="mega_menu_dropdown has_dropdown">
                <a className="aNav" href="#">
                  <span className="aMainNav">Bébé</span> <i className="fas fa-angle-down"></i>
                </a>
                <div className="mega_menu sub_menu">
                  <div className="mega_menu_item">
                    <h3>Se déplacer avec bébé</h3>
                    <a className="aNav" href="#">
                      Siège auto bébé
                    </a>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Poussettes <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Nacelle bébé
                        </a>
                        <a className="aNav" href="#">
                          Poussette 3 roues
                        </a>
                        <a className="aNav" href="#">
                          Poussette canne
                        </a>
                        <a className="aNav" href="#">
                          Poussette double
                        </a>
                        <a className="aNav" href="#">
                          Poussette trio
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Equipements de portage <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Echarpe de portage
                        </a>
                        <a className="aNav" href="#">
                          Porte bébé
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Sacs & accessoires <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Ceinture de grossesse
                        </a>
                        <a className="aNav" href="#">
                          Chancelière
                        </a>
                        <a className="aNav" href="#">
                          Sac à langer
                        </a>
                      </ul>
                    </li>
                  </div>
                  <div className="mega_menu_item">
                    <h3>Faire manger bébé</h3>
                    <a className="aNav" href="#">
                      Chaise haute bébé
                    </a>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        La préparation du repas <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Chauffe-biberon
                        </a>
                        <a className="aNav" href="#">
                          Robot bébé
                        </a>
                      </ul>
                    </li>
                  </div>
                  <div className="mega_menu_item">
                    <h3>Faire dormir bébé</h3>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Le lit <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Berceau
                        </a>
                        <a className="aNav" href="#">
                          Couffin bébé
                        </a>
                        <a className="aNav" href="#">
                          Gigoteuse
                        </a>
                        <a className="aNav" href="#">
                          Hamac bébé
                        </a>
                        <a className="aNav" href="#">
                          Lit cabane
                        </a>
                        <a className="aNav" href="#">
                          Lit cododo
                        </a>
                        <a className="aNav" href="#">
                          Lit parapluie
                        </a>
                        <a className="aNav" href="#">
                          Matelas bébé
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Le babyphone et la veilleuse <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Babyphone
                        </a>
                        <a className="aNav" href="#">
                          Babyphone vidéo
                        </a>
                        <a className="aNav" href="#">
                          Veilleuse bébé
                        </a>
                      </ul>
                    </li>
                  </div>
                  <div className="mega_menu_item">
                    <h3>S'équiper pour bébé</h3>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        L'éveil <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Chancelière
                        </a>
                        <a className="aNav" href="#">
                          Draisienne
                        </a>
                        <a className="aNav" href="#">
                          Parc bébé
                        </a>
                        <a className="aNav" href="#">
                          Tapis d'éveil bébé
                        </a>
                        <a className="aNav" href="#">
                          Transat bébé
                        </a>
                        <a className="aNav" href="#">
                          Tricycle bébé
                        </a>
                        <a className="aNav" href="#">
                          Trotteur bébé
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        La toilettes & les soins <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Baignoire bébé
                        </a>
                        <a className="aNav" href="#">
                          Barrière sécurité enfant
                        </a>
                        <a className="aNav" href="#">
                          Lingettes bébé
                        </a>
                        <a className="aNav" href="#">
                          Matelas à langer
                        </a>
                        <a className="aNav" href="#">
                          Mouche bébé
                        </a>
                        <a className="aNav" href="#">
                          Pèse-bébé
                        </a>
                        <a className="aNav" href="#">
                          Poubelle à couches
                        </a>
                      </ul>
                    </li>
                  </div>
                </div>
              </ul>
              <ul className="mega_menu_dropdown has_dropdown">
                <a className="aNav" href="#">
                  <span className="aMainNav">Beauté</span> <i className="fas fa-angle-down"></i>
                </a>
                <div className="mega_menu sub_menu">
                  <div className="mega_menu_item">
                    <h3>Soin visage et corps</h3>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Soin des dents <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Brosse à dents électrique
                        </a>
                        <a className="aNav" href="#">
                          Hydropulseur dentaire
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Soin du visage <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Aspirateur points noirs
                        </a>
                        <a className="aNav" href="#">
                          Brosse nettoyante visage
                        </a>
                        <a className="aNav" href="#">
                          Miroir maquillage
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Soin du corps
                        <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Appareil anti-cellulite
                        </a>
                        <a className="aNav" href="#">
                          Râpe pied électrique
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Mesures corporelles
                        <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Balance
                        </a>
                        <a className="aNav" href="#">
                          Tensiomètre
                        </a>
                        <a className="aNav" href="#">
                          Thermomètre médical
                        </a>
                      </ul>
                    </li>
                  </div>
                  <div className="mega_menu_item">
                    <h3>Soin des cheveux</h3>
                    <a className="aNav" href="#">
                      Fer à boucler
                    </a>
                    <a className="aNav" href="#">
                      Sèche-cheveux
                    </a>
                    <a className="aNav" href="#">
                      Tondeuse cheveux
                    </a>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Lissage <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Brosse soufflante
                        </a>
                        <a className="aNav" href="#">
                          Fer à lisser
                        </a>
                        <a className="aNav" href="#">
                          Lisseur vapeur
                        </a>
                      </ul>
                    </li>
                  </div>
                  <div className="mega_menu_item">
                    <h3>Rasage et épilation</h3>
                    <a className="aNav" href="#">
                      Rasoir électrique
                    </a>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Epilateurs <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Épilateur à lumière pulsée
                        </a>
                        <a className="aNav" href="#">
                          Épilateur électrique
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Tondeuses <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Tondeuse à barbe
                        </a>
                        <a className="aNav" href="#">
                          Tondeuse à bikini
                        </a>
                      </ul>
                    </li>
                  </div>
                  <div className="mega_menu_item">
                    <h3>Bien-être</h3>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Massage et stimulation <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Appareil massage pied
                        </a>
                        <a className="aNav" href="#">
                          Electrostimulateur
                        </a>
                        <a className="aNav" href="#">
                          Siège de massage
                        </a>
                        <a className="aNav" href="#">
                          Simulateur d'aube
                        </a>
                        <a className="aNav" href="#">
                          Stimulateur circulatoire
                        </a>
                        <a className="aNav" href="#">
                          Table de massage
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Luminothérapie et olfactothérapie <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Diffuseur d'huiles essentielles
                        </a>
                        <a className="aNav" href="#">
                          Lampe de luminothérapie
                        </a>
                        <a className="aNav" href="#">
                          Simulateur d'aube
                        </a>
                      </ul>
                    </li>
                    <li className="has_dropdown">
                      <a className="aNav" href="#">
                        Correction et confort posturaux <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="sub_menu">
                        <a className="aNav" href="#">
                          Ceinture lombaire
                        </a>
                        <a className="aNav" href="#">
                          Correcteur de posture
                        </a>
                      </ul>
                    </li>
                  </div>
                </div>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
