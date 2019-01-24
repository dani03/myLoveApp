import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Header } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';


class Apropos extends Component {
    static navigationOptions = {
        drawerIcon: (
            <Image 
            source={require('../components/img/logo/A-Propos.png')}
            style={{ height: 24, width: 24 }} 

            />
        )
    }
    render() {
        return (
            <ScrollView style={styles.container}>  
            <Header 
            style={{
                backgroundColor: 'white',
                justifyContent: 'flex-start',
                alignItems: 'flex-end' 
          }}>
               
                        <Icon 
                            name='reorder'
                            onPress={() => this.props.navigation.openDrawer()}
                            color='#ce5e4b'
                            size={25}
                        />    
            </Header>
            <View>
             
                <View style={styles.allText}>
                    <Text style={styles.title}>
                    CONDITIONS GENERALES D’UTILISATION DE L’APPLICATION MOBILE My Love
                    </Text>
                    <Text style={styles.maj}>
                        Mise à jour Janvier 2019 {'\n'}
                        Les présentes conditions générales d’utilisation (ci-après dénommées «
                        CGU ») ont pour objet de déterminer les règles d’utilisation de
                        l’application mobile « My Love » (ci-après dénommée « l’Application »)
                        éditée par la société MY LOVE.
                    </Text>
                    <Text>
                       <Text style={styles.grandTitre}>Article 1 : Définitions {'\n'}</Text> 
                        Les termes débutant par une majuscule au sein des présentes CG,
                        qu’ils soient utilisés indifféremment au singulier ou au pluriel, auront, la
                        signification qui leur est donnée ci-après :
                        • « Application » : désigne l’application mobile dénommée « My
                        Love » éditée et fournie par MY LOVE, donnant accès aux
                        Services, qui est disponible gratuitement dans « Apple Store »
                        d’Apple et le « Google Play Store » de Google pour être téléchargée
                        par l’Utilisateur sur son terminal Apple iOS et Android.
                        • « CGU » : désigne les présentes conditions générales d’utilisation
                        de l’Application.{'\n'}
                        • « Contenu » : désigne sans que cette liste soit limitative, la
                        structure de l’Application, le contenu éditorial, les dessins, les
                        illustrations, les images, les photographies, les chartes
                        graphiques, les marques, les logos, les sigles, les dénominations
                        sociales, les œuvres audiovisuelles, les œuvres multimédias, les
                        contenus visuels, les contenus audio et sonores, ainsi que tout
                        autre contenu présent au sein de l’Application et/ou tout autre
                        élément composant l’Application.{'\n'}
                        • « Services » : désigne les différentes fonctionnalités et services
                        proposées par l’Application.{'\n'}
                        • « MY LOVE » : désigne la personne physique Victor Rousseau au
                        domicilié au 15 rue du Douet à Cesson-Sévigné.{'\n'}
                        • « Utilisateur » : désigne toute personne physique majeure ou
                        mineure ayant préalablement obtenu l’autorisation de ses parents{'\n'}
                    </Text>
                    <Text>
                        ou de la personne investie de l’autorité parentale ayant accès à
                        l’Application et aux Services.{'\n'}
                        • « Partenaire » : désigne la personne en couple avec l’Utilisateur,
                        cette personne peut-être un homme ou une femme.{'\n'}
                        Par ailleurs, au titre des présentes, les termes « Données Personnelles
                        », « Traitement », « Responsable de Traitement », « Sous-traitant » ont la
                        définition qui est donnée à ces termes au sein de l’article 4 du
                        Règlement Européen 2016/679 du 27 avril 2016 (ci-après « RGPD »).{'\n'}
                       <Text style={styles.grandTitre}>Article 2 : Acceptation des CGU </Text>
                        L’accès à l’Application, au Contenu et aux Services ainsi que leur
                        utilisation, sont subordonnés à l’acceptation sans réserve par
                        l’Utilisateur des présentes CGU. En installant l’Application, l’Utilisateur

                        accepte sans condition ni réserve l’intégralité des CGU définies ci-
                        après. Les présentes CGU constituent en conséquence un accord

                        contractuel entre l’Utilisateur et My Love. En cas de refus, l’Utilisateur
                        s’engage à ne pas utiliser ni accéder à l’Application et à ses Services.
                        Article 3 : Objet de l’Application
                        L’Application a pour objet de fournir à l’Utilisateur les Services
                        suivants : {'\n'}
                        • Une représentation digitale de son amour.{'\n'}
                        • Le nombre de jour en relation avec son/sa partenaire.{'\n'}
                        • Partager le service My Love par des applications tiers.{'\n'}
                        • Envoyer des messages personnalisés à son/sa partenaire.{'\n'}
                        Cette liste est non exhaustive et peut être modifiée à tout moment par
                        MY LOVE sans que cette responsabilité ne puisse être engagée à ce
                        titre par qui que ce soit.{'\n'}
                         <Text style={styles.grandTitre}> Article 4 : Conditions financières</Text>{'\n'}
                        L’ application est proposée au prix de 2,99€ aux Utilisateurs. Les
                        utilisateurs pourront pour ce prix avoir toutes fonctionnalités
                        proposées pour une relation équivalent à un et uniquement un
                        partenaire. Lors d’une rupture, l’Utilisateur perd les services que
                        propose My Love.{'\n'}
                        Lors d’une nouvelle relation, l’Utilisateur devra à partir de l’application
                        My Love déclarer une « nouvelle relation », il devra donc payer à
                        nouveaux 2,99€ pour sa/son nouveau(elle) partenaire.

                        <Text style={styles.grandTitre}>Article 5 : Accès à l’Application</Text>
                        Pour accéder et utiliser l’Application, l’Utilisateur doit posséder un
                        téléphone compatible ou un terminal mobile et un accès au réseau
                        Internet. L’Application est téléchargeable gratuitement depuis les
                        plateformes « Apple Store » et « Google Play Store » sur les terminaux
                        mobiles suivants : - téléphone mobile Iphone® d’Apple® disposant du
                        système d’exploitation iOS sous iOS iOS 9 et ultérieurs. - téléphone
                        mobile disposant du système d’exploitation Android® OS 4.4 et
                        ultérieur La version du logiciel de l’Application peut être mise à jour de
                        temps à autre pour ajouter de nouvelles fonctions et de nouveaux
                        services.{'\n'}
                        <Text style={styles.grandTitre}>Article 6 : Création d’un Compte</Text>
                        L’accès aux Services disponibles sur l’Application est accessible à tout
                        Utilisateur. Cependant pour avoir cet accès les Utilisateurs doivent
                        créer un compte auprès de l’application My Love (notamment nom,
                        prénom, numéro de téléphone, mail, etc...).
                        L’Utilisateur pourra demander à tout moment à ce que soit supprimé
                        son compte en actionnant cette fonctionnalité dans la rubrique. Il
                        pourra également se déconnecter via le bouton prévu à cet effet dans le
                        menu.{'\n'}

                        <Text style={styles.grandTitre}>
                        Article 7 : Propriété Intellectuelle de l’Application</Text> {'\n'}
                        MY LOVE est propriétaire exclusif de tous les droits de propriété
                        intellectuelle afférents à l’Application et son contenu.{'\n'}
                        Aucune des dispositions des CGU ne peut être interprétée comme une
                        cession, un transfert, une vente, une concession, une licence, un prêt,
                        une location, une autorisation d'exploitation consentie directement ou

                        indirectement par MY LOVE au profit de l'Utilisateur sur l'Application et/
                        ou les Services.{'\n'}
                        <Text style={styles.grandTitre}>
                            Article 8 : Obligations de l’Utilisateur</Text>
                        L’Utilisateur s’engage expressément : {'\n'}
                        • à ne pas reproduire de façon permanente ou provisoire
                        l’Application, en tout ou partie, par tout moyen et sous toute forme
                        ;{'\n'}
                        • à ne pas utiliser de logiciels ou de procédés destinés à copier le
                        Contenu sans l'autorisation préalable écrite de MY LOVE ;{'\n'}
                        • à ne pas procéder à toute adaptation, modification, traduction,
                        transcription, arrangement, compilation, décompilation,

                        assemblage, désassemblage, transcodage, ni appliquer la rétro-
                        ingénierie (ou « Reverse Engineering ») de tout ou partie de

                        l’Application, des Services et/ou du Contenu ; {'\n'}
                        • à ne pas exporter l’Application, ni fusionner tout ou partie de
                        l’Application avec d'autres programmes informatiques ;{'\n'}
                        • à ne pas procéder à des courtes citations, analyses et
                        reproductions destinées à des revues de presse ainsi qu'aux
                        autres utilisations expressément autorisées par la loi dans les
                        limites et conditions fixées par cette dernière et sous réserve
                        notamment de citer le nom des auteurs et la source éditoriale ;{'\n'}
                        • à renoncer expressément à utiliser des logiciels ou dispositifs
                        susceptibles de perturber le bon fonctionnement de l’Application,
                        ni à engager d'action de nature à imposer une charge
                        disproportionnée pour les infrastructures de MY LOVE ;{'\n'}
                        • à ne pas extraire ou réutiliser, y compris à des fins privées, sans
                        autorisation préalable écrite de MY LOVE, une partie substantielle
                        ou non du contenu des bases de données et archives constituées
                        par l'Application ; {'\n'}
                        • à ne pas mettre en place des systèmes susceptibles de pirater
                        l’Application et/ou le Contenu en tout ou partie, ou de nature à
                        violer les présentes CGU ; {'\n'}
                        • à informer MY LOVE dès la connaissance d'un acte de piratage et
                        en particulier de toute utilisation illicite ou non contractuelle de
                        l’Application et/ou du Contenu quel que soit le mode de diffusion ;{'\n'}

                        • ne pas vendre, louer, sous-licencier ou distribuer de quelque façon
                        que ce soit l’Application et/ou le Contenu à des tiers.{'\n'}

                         <Text style={styles.grandTitre}>
                         Article 9 : Protection des données personnelles</Text> {'\n'}
                        Dans le cadre de l’utilisation de l’Application, MY LOVE procède au
                        traitement des Données Personnelles des Utilisateurs.{'\n'}
                        Ces traitements s’effectuent conformément au RGPD, à la loi N°78-017
                        du 6 janvier 1978 relative à l'Informatique, aux Fichiers et aux Libertés
                        modifiée par la loi n° 2018-493 du 20 juin 2018, ainsi qu’à la Politique de
                        protection des données personnelles Soufflet Agriculture accessible
                        (cf. infra « Politique de protection des données personnelles,
                        Application Mobile « My Love ») {'\n'}
                        <Text style={styles.grandTitre}>
                         Article 10 : Disponibilité de l’Application</Text> {'\n'}
                        MY LOVE s'engage à faire ses meilleurs efforts pour sécuriser l'accès, la
                        consultation et l'utilisation des Services de l’Application. L’Application
                        est accessible 24 heures sur 24, 7 jours sur 7 sauf en cas de force
                        majeure ou de survenance d'un évènement hors du contrôle de MY
                        LOVE et sous réserve des éventuelles pannes et interventions de
                        maintenance nécessaires au bon fonctionnement de l’Application. Les
                        interventions de maintenance pourront être effectuées sans que les
                        Utilisateurs aient été préalablement avertis. {'\n'}
                        MY LOVE est tenue à une obligation de moyens concernant
                        l’accessibilité, le fonctionnement et / ou la disponibilité de l’Application
                        et / ou des Services. MY LOVE se réserve la possibilité d’interrompre, de
                        suspendre ou de limiter l’accès à tout ou partie de l’Application et/ ou
                        des Services, notamment en raison de contrainte technique ou
                        juridique. {'\n'}
                        <Text style={styles.grandTitre}>
                        Article 11 : Liens Hypertextes</Text> {'\n'}
                        L’Application peut contenir des liens hypertextes vers des sites internet
                        tiers qui ne sont pas régis par les présentes CGU.{'\n'}
                        MY LOVE ne dispose d’aucun contrôle quant aux contenus des sites
                        internet tiers référencés par des liens hypertextes. Ces sites internet
                        sont édités par des sociétés tierces indépendantes de MY LOVE. MY
                        LOVE ne saurait en conséquence assumer une quelconque

                        responsabilité quant au contenue, publicités, produits, services ou
                        toute autre information ou donnée, disponibles sur ou à partir de ces
                        sites. En conséquence l’Utilisateur reconnaît être seul responsable de
                        l’accès et de l’utilisation de ses sites. MY LOVE ne pourra être tenue
                        responsable de tous dommages ou pertes avérés ou allégués{'\n'}
                        consécutifs ou en relation avec l’utilisation ou le fait d’avoir fait
                        confiance aux contenus, à des biens ou des services disponibles sur
                        ces sites.{'\n'}
                        <Text style={styles.grandTitre}>
                        Article 12 : Garanties et responsabilités</Text> {'\n'}
                        Les informations diffusées sur l’Application sont fournies à titre
                        strictement et exclusivement informatif et indicatif. MY LOVE fait ses
                        meilleurs efforts pour maintenir l’Application et les Services à jour et
                        diffuser des informations fiables, licites et actualisées. Cependant, MY
                        LOVE ne saurait pour autant garantir l’intégrité, l’exactitude,
                        l’exhaustivité, l’actualité ou autre qualité des informations diffusées sur
                        l’Application.{'\n'}
                        L’Utilisateur est seul responsable de la bonne utilisation avec
                        discernement des Services mis à sa disposition sur l’Application.
                        SOUFFLET AGRICULTURE ne pourra être tenu responsable des
                        conséquences directes et indirectes, matérielles ou immatérielles,
                        pouvant résulter de la consultation, de l’utilisation et/ ou de
                        l’interprétation des informations et /ou conseils contenus sur
                        l’Application par l’Utilisateur.{'\n'}
                        L’accès et l’utilisation de l'Application se font aux risques et périls de
                        l'Utilisateur. L’Application est fourni « tel quel » et « comme disponible »
                        sans garantie quelle qu’elle soit. Il appartient à tout Utilisateur de
                        prendre toutes les mesures appropriées de façon à protéger ses
                        propres données et/ ou logiciels stockés sur ses équipements
                        informatique et téléphonique contre toute atteinte. L'Utilisateur déclare
                        connaître et accepter les caractéristiques et les limites du réseau
                        Internet et, notamment les caractéristiques fonctionnelles et des
                        performances techniques du réseau Internet ; les problèmes liés à
                        connexion et/ou d'accès au réseau Internet et/ou aux sites web ; les
                        problèmes liés à la disponibilité et à l'encombrement des réseaux ; les
                        problèmes liés à la défaillance ou à la saturation des réseaux ; les
                        problèmes liés au temps de transit, à l’accès aux informations mises en

                        ligne, aux temps de réponse pour afficher, consulter, interroger ou
                        autrement transférer des données ; les risques d’interruption ; l'absence
                        de protection de certaines données contre des détournements
                        éventuels ou piratage ; les risques de contamination par d’éventuels
                        virus circulant sur les dits réseaux, etc. pour lesquelles la
                        responsabilité MY LOVE ne saurait être engagée.{'\n'}
                        MY LOVE ne peut être tenue pour responsable :{'\n'}
                        • en cas de défaut, de perte, de retard ou d’erreur de transmission
                        de données qui sont indépendants de sa volonté;{'\n'}
                        • de l'envoi de messages et/ou de données et à une adresse fausse,
                        erronée ou incomplète ;{'\n'}
                        • si des données ne lui parvenaient pas, pour quelque raison que ce
                        soit, ou si les données qu’elle reçoit étaient illisibles ou
                        impossibles à traiter ;{'\n'}
                        • au cas où l’Utilisateur ne parvenait à accéder ou à utiliser le Site,
                        l’Application et/ou les Services pour quelque raison que ce soit ;{'\n'}
                        • si{'\n'}, pour quelque raison que ce soit, la connexion devait être
                        inte{'\n'}rrompue.{'\n'}
                        Par {'\n'}ailleurs, SOUFFLET AGRICULTURE décline toute responsabilité en
                        cas {'\n'}de mauvaise utilisation du terminal et/ou d'incident lié à l'utilisation
                        du terminal lors de l’utilisation de l’Application. Futuroscope ne saurait
                        en aucun cas être tenue responsable de tout dommage, de quelque
                        nature que ce soit, causé aux Utilisateurs, à leurs terminaux, à leurs
                        équipements informatiques et téléphoniques et aux données qui y sont
                        stockées ni des conséquences pouvant en découler sur leur activité
                        personnelle, professionnelle ou commerciale.{'\n'}
                        <Text style={styles.grandTitre}>  
                        Article 13 : Evolution des CGU </Text> {'\n'}
                        Les CGU applicables sont celles en vigueur à la date de la connexion et
                        de l’utilisation de l’Application par l’Utilisateur.{'\n'}
                        MY LOVE se réserve le droit de modifier, à tout moment, tout ou partie,
                        des dispositions des CGU sans préavis ni information préalable des
                        Utilisateurs afin de les adapter aux évolutions des Services, aux
                        évolutions techniques, légales ou jurisprudentielles ou lors de la mise
                        en place de nouvelles prestations.{'\n'}

                        Les modifications éventuellement apportées par MY LOVE aux CGU
                        seront portées à la connaissance des Utilisateurs par leur simple mise
                        en ligne. Elles sont réputées acceptées sans réserve par tout Utilisateur
                        qui accède à l’Application postérieurement à ladite mise en ligne. MY
                        LOVE invite donc tout Utilisateur à consulter régulièrement les CGU.
                        Tout nouveau Service intégrant de nouvelles techniques ou nouvelles
                        caractéristiques améliorant la qualité des Services existants seront
                        aussi soumis aux présentes CGU, sauf disposition expresse contraire.{'\n'}
                        <Text style={styles.grandTitre}>  Article 14 : Contact </Text> {'\n'}
                        Toute question relative à l’Application et/ou aux Services doit être
                        adressée par mail à l’adresse suivante : societe.my.love@gmail.com.{'\n'}
                        <Text style={styles.grandTitre}> Article 15 : Loi applicable </Text>{'\n'}
                        Les présentes CGU sont soumises à la loi française. Tout litige ou
                        contestation relatif à l'exécution ou à l'interprétation du présent
                        règlement qui n’aura pu être réglé à l'amiable entre les parties sera
                        soumis aux tribunaux compétents du ressort de la Cour d'appel de
                        Troyes.{'\n'}
                        MY LOVE POLITIQUE DE PROTECTION{'\n'}
                        DES DONNEES PERSONNELLES{'\n'}
                        APPLICATION MOBILE My Love{'\n'}

                        Mise à jour août 2018{'\n'}
                        Toute Donnée Personnelle collectée dans le cadre de l’utilisation de
                        l’Application sera traitée et conservée conformément au Règlement
                        Européen 2016/679 du 27 avril 2016 (ci-après « RGPD ») et à la loi
                        N°78-017 du 6 janvier 1978 relative à l'Informatique, aux Fichiers et aux
                        Libertés modifiée par la loi n° 2018-493 du 20 juin 2018 relative à la
                        protection des données personnelles.{'\n'}
                        <Text style={styles.grandTitre}>1. Définitions </Text> {'\n'}

                        Au titre des présentes, les termes « Données Personnelles », «
                        Traitement », « Responsable de Traitement », « Sous-traitant » ont la
                        définition qui est donnée à ces termes au sein de l’article 4 du RGPD.
                        • « Responsable de Traitement » : désigne la personne de Victor
                        Rousseau domicilié au 15 rue du Douet à Cesson-Sévigné en sa
                        qualité de Président.{'\n'}
                        <Text style={styles.grandTitre}>
                         2. Collecte des Données Personnelles </Text>{'\n'}
                        Le Responsable de Traitement veille à ne collecter et ne traiter que des
                        Données Personnelles strictement nécessaires au regard de la finalité
                        pour laquelle elles sont traitées.{'\n'}
                        Par ailleurs, la collecte des Données Personnelles dans le cadre de
                        l’Application revêt un caractère contractuel et ne conditionne en aucun
                        cas la conclusion d’un quelconque contrat avec le Responsable de
                        Traitement, hormis l’adhésion aux CGU de l’Application.{'\n'}
                        La non fourniture des Données Personnelles nécessaires à la création
                        d’un compte entrainera une utilisation restreinte de l’Application,
                        limitée aux fonctionnalités ouvertes à la connexion sans compte (cf.
                        infra).{'\n'}
                        Les Données Personnelles collectées pour permettre l’accès et
                        l’utilisation de l’Application sont les suivantes :{'\n'}
                        ◦ Prénom{'\n'}
                        ◦ Nom{'\n'}
                        ◦ Sexe{'\n'}
                        ◦ Adresse mail{'\n'}
                        ◦ Mot de passe{'\n'}
                        ◦ Numéro de téléphone{'\n'}
                        ◦ Numéro du téléphone de son/sa partenaire agricole{'\n'}
                         Par la suite, une fois le compte crée,
                         l’Utilisateurs pourra compléter son{'\n'}
                        profil, avec les données suivantes :{'\n'}
                        ◦ Âge{'\n'}
                        ◦ Date de mise en couple{'\n'}
                        ◦ Personnaliser ses messages pour sa/son partenaire{'\n'}
                        Il aura aussi la possibilité de partager l’application sur ses réseaux
                        sociaux. Il est à noter que le renseignement de certains champs est
                        nécessaire pour la création d’un compte ou l’utilisation de l’Application.{'\n'}

                        À défaut de renseignement de ces champs, la création d’un compte ne
                        pourra être validée.{'\n'}

                        <Text style={styles.grandTitre}>
                        3. Finalités du traitement des Données Personnelles
                        collectées </Text> {'\n'}
                        Le Traitement des Données Personnelles collectées auprès des
                        Utilisateurs a pour principale finalité la mise à disposition des Services
                        de l’Application consistant dans un outil d’aide à la décision en matière
                        agricole. Plus précisément, les sous-finalités du Traitement des
                        Données Personnelles des Utilisateurs sont notamment les suivantes :{'\n'}
                        • Fournir une expérience simple, plaisante, et innovante pour le
                        couple{'\n'}
                        • Faire en sorte que le couple puisse facilement échanger avec son/
                        sa partenaire.{'\n'}
                        • Pour les Utilisateurs avoir accès à des services qui leurs sont
                        adaptés et en lien avec l’application My Love.{'\n'}
                        De même, et sous réserve de leur absence d’opposition, les Utilisateurs
                        peuvent recevoir des newsletters, contenus informationnels sur
                        différents sujets, communiqués de presse, invitation à des évènements
                        par le Responsable de Traitement, questionnaires en vue d’études
                        marketing.{'\n'}
                        <Text style={styles.grandTitre}>
                            4. Base légale du Traitement </Text>{'\n'}
                        Le Traitement des Données Personnelles est fondé sur :{'\n'}
                        • L’exécution d’un contrat ou de mesures précontractuelles prises à
                        la demande d’un Utilisateur : il s’agit de l’utilisation explicite du
                        service My love.{'\n'}
                        • L’intérêt légitime du Responsable de Traitement et plus
                        particulièrement son intérêt économique : il s’agit du Traitement
                        lié à l’achat de 2,99€ de l’application. Le Traitement lié au suivi de
                        la facturation et à la comptabilité du Responsable de Traitement.{'\n'}
                        <Text style={styles.grandTitre}>
                        5. Conservation des Données Personnelles Collectées</Text>{'\n'}

                        Les Données Personnelles des Utilisateurs sont conservées, en base
                        active, pendant une durée de trois (3) ans à compter de la dernière
                        activité de l’Utilisateur dans l’Application. A l’issue de ce délai, le profil
                        de l’Utilisateur est considéré comme « inactif » et sera
                        automatiquement désactivé. Il appartiendra donc à l’Utilisateur d’en
                        créer un nouveau pour toute nouvelle connexion.{'\n'}
                        En revanche, les statistiques de mesure d'audience et les Données de
                        fréquentation brutes de l’Application ne sont pas conservées plus de
                        treize (13) mois.{'\n'}
                        Toutefois, à l’issu de ces délais précités, en ce compris en tant que de
                        besoin à compter de la demande de suppression par un Utilisateur, ses
                        Données Personnelles pourront faire l’objet d’un Archivage
                        intermédiaire afin de satisfaire aux obligations légales, comptables et
                        fiscales du Responsable de Traitement (comme l’obligation de
                        conservation pendant une durée de dix (10) ans des factures posée par
                        l’article L.123-22 du Code de commerce) et/ou à tout le moins pendant
                        le délai de prescription applicable (comme le délai de prescription de
                        droit commun de cinq (5) ans consacré par l’article 2224 du Code civil),
                        mais également afin de prévenir d'éventuels comportements illicites
                        après la suppression du compte de l’Utilisateur (réutilisation d’un
                        ancien compte Utilisateur par un tiers, par exemple) ou encore afin de
                        répondre à des demandes post-clôture des comptes Utilisateurs, etc.
                        En cas de procédure contentieuse, y compris concernant uniquement le
                        Responsable de Traitement, par exemple à l’égard de l’administration,
                        les Données Personnelles précitées ainsi que toute informations,
                        documents et pièces contenant des Données Personnelles tendant à
                        établir les faits susceptibles d’être reprochés ou concernant
                        l’identification des mises en cause, des victimes, des témoins et des
                        auxiliaires de justices (nom, nom d'usage, prénoms, adresse, numéros
                        de téléphone, adresse électronique) peuvent être conservées pour la
                        durée de la procédure, y compris pour une durée supérieure à celles
                        indiquées ci-dessus.{'\n'}

                        <Text style={styles.grandTitre}>
                        6. Mise en œuvre des droits des Utilisateurs </Text>{'\n'}
                        Conformément à la réglementation applicable aux Données
                        Personnelles, les Utilisateurs disposent des droits suivants :{'\n'}
                        • Droit d’information et d’accès{'\n'}
                        • Droit de rectification{'\n'}
                        • Droit à l’effacement (« droit à l’oubli ») et plus spécifiquement,
                        droit de faire parvenir au Responsable de Traitement des
                        consignes spéciales relatives au sort des Données Personnelles
                        des Utilisateurs après leur décès.{'\n'}
                        • Droit à la limitation du Traitement{'\n'}
                        • Droit d’opposition{'\n'}
                        • Droit à la portabilité des Données Personnelles{'\n'}
                        >Les Utilisateurs peuvent mettre à jour ou supprimer les Données
                        Personnelles qui les concernent soit en se connectant sur leur compte
                        et en configurant les paramètres de ce compte, soit pour les
                        Utilisateurs ne disposant pas de compte, en adressant leur demande à
                        societe.my.love@gmail.com en précisant leur nom, prénom, adresse et
                        en joignant une copie recto/verso d’une pièce d’identité ;{'\n'}
                        L’exercice par les Utilisateurs de leurs droits n’affecte pas la licéité des
                        traitements effectués avant cet exercice.{'\n'}
                        Les Utilisateurs disposent du droit d’adresser une réclamation à la CNIL
                        s’ils estiment que leurs droits ne sont pas respectés. Nous invitons
                        toutefois les Utilisateurs à nous contacter au préalable avant
                        d’introduire une réclamation auprès de la CNIL (www.cnil.fr).
                    </Text>
                    <Text>
                        <Text style={styles.title}>Conditions Générales de Vente</Text>{'\n'}
                        La société MY LOVE représenté par Victor Rousseau domicilié au
                        15 rue du Douet à Cesson-Sévigné.{'\n'}
                        <Text style={styles.article}>
                        Article 1. - Définitions{'\n'}
                        </Text>
                        Les termes et expressions visés ci-après signifient, lorsqu'ils sont
                        précédés d’une majuscule, pour les besoins de l'interprétation et de
                        l'exécution des présentes :{'\n'}
                        « Application » désigne l’application mobile dénommée « My Love »
                        éditée et fournie par MY LOVE, donnant accès aux Services, qui
                        est disponible gratuitement dans « Apple Store » d’Apple et le «
                        Google Play Store » de Google pour être téléchargée par
                        l’Utilisateur sur son terminal Apple iOS et Android.{'\n'}
                        « MY LOVE » : désigne la personne physique Victor Rousseau au
                        domicilié au 15 rue du Douet à Rennes (35000).{'\n'}
                        «Utilisateurs», désigne toute personne physique majeure ou
                        mineure ayant préalablement obtenu l’autorisation de ses parents
                        ou de la personne investie de l’autorité parentale ayant accès à
                        l’Application et aux Services.{'\n'}
                        « Conditions Générales de Vente» désigne les conditions de vente
                        de l’Application qui sont acceptées par les Utilisateurs avant toute
                        Commande auprès du PRESTATAIRE.{'\n'}
                        « Conditions Générales d’Utilisation» désigne les conditions
                        d’utilisation de l’Application qui sont acceptées par le Utilisateurs
                        avant utilisation de l’application.{'\n'}
                        « Commande » désigne l’achat du service proposé par l’application
                        et validé par l’Utilisateur à partir de l’application.
                        « Mail de confirmation» : mail envoyé au CLIENT une fois sa
                        Commande validée.{'\n'}
                        « Prix » désigne la valeur unitaire du Service ; cette valeur s'entend
                        toutes taxes comprises.{'\n'}
                        « Service » désigne les services rendus à travers l’utilisation de
                        l’application.{'\n'}
                        « Site » désigne le site internet situé à l’adresse http://
                        www.mlove.fr.{'\n'}
                        « Validation de la Commande » a le sens donné à l'Article 6 ;{'\n'}

                        <Text style={styles.article}>
                        Article 2. - Objet
                        </Text>{'\n'}
                        Les présentes Conditions Générales de Vente ont pour objet de
                        définir les conditions contractuelles de vente du Service My Love
                        proposé avec l’Utilisateurs.{'\n'}

                         <Text style={styles.article}>
                         Article 3. - Champ d'application – Entrée en vigueur{'\n'}
                        - Durée
                         </Text>{'\n'}
                        Les présentes Conditions Générales de Vente sont applicables à
                        toutes les ventes du service par MY LOVE intervenues par le biais
                        de l’application.{'\n'}
                        L’Utilisateur déclare avoir pris connaissance des présentes
                        Conditions Générales de Vente avant la Validation de la Commande
                        au sens de l'Article 5. La Validation de la Commande vaut donc
                        acceptation sans restriction ni réserve des présentes Conditions
                        Générales de Vente.{'\n'}
                        MY LOVE se réserve le droit de modifier à tout moment les
                        présentes Conditions Générales de Vente en publiant une nouvelle
                        version sur le Site et l’application. Les Conditions Générales de
                        Vente sont celles en vigueur à la date de validation de la
                        commande.{'\n'}
                        Les présentes Conditions Générales de Vente entrent en vigueur à
                        la date de Validation de la Commande telle que définie à l'Article 5
                        et pour toute la durée nécessaire à la fourniture du Services,
                        jusqu'à l'extinction des garanties et obligations dues par MY LOVE.{'\n'}
                        <Text style={styles.article}>
                        Article 4. - Utilisation du Site et de l’Application
                        </Text>{'\n'}
                        MY LOVE s'engage à faire ses meilleurs efforts afin de sécuriser
                        l'accès, la consultation et l'utilisation du Site et de l’Application
                        conformément aux règles d'usages de l'Internet.{'\n'}
                        En conséquence, la responsabilité de MY LOVE ne peut être
                        engagée dans les cas suivants (y compris en cas de dommages
                        subis par des tierces parties) :{'\n'}

                        - interruptions momentanées des Services nécessaires à leur
                        évolution, maintenance, ou plus généralement en cas de mises à
                        jour de certains fichiers ;{'\n'}
                        - difficultés de fonctionnement ou interruptions momentanées des
                        Services indépendamment de la volonté MY LOVE notamment en
                        cas d'interruptions des services d'électricité ou de
                        télécommunication ;{'\n'}
                        - défaillances ou dysfonctionnements du réseau Internet dans la
                        transmission de messages ou documents;{'\n'}
                        - dommages susceptibles de résulter du téléchargement ou de
                        l'utilisation des contenus éditoriaux disponibles sur le Site ou
                        accessibles sur des sites tiers via les Services du Site.{'\n'}
                        - défaillances ou dysfonctionnements des appareils de consultation
                        (ordinateur ou Smartphone) ou dues par des évolutions logiciels
                        (Android ou iOS){'\n'}
                        Par ailleurs, le CLIENT demeure seul responsable des dommages
                        et préjudices, directs ou indirects, matériels ou immatériels dès lors
                        qu'ils auraient pour cause, fondement ou origine un usage du Site
                        ou de l’Application par lui-même ou par toute personne autorisée
                        par lui à utiliser l’Application, que cet usage soit réalisé de manière
                        frauduleuse ou non frauduleuse.{'\n'}
                        L’Utilisateurs déclare accepter les caractéristiques et les limites de
                        l'Internet et, en particulier, reconnaît :{'\n'}
                        - que la communication de ses éventuels codes d'accès et
                        précisément de son identifiant et de son mot de passe ou d'une
                        manière générale de toute information jugée confidentielle est
                        réalisée sous sa propre responsabilité ;{'\n'}
                        - qu'il lui appartient de prendre toutes mesures nécessaires pour
                        s'assurer que les caractéristiques techniques de son ordinateur lui
                        permettent l’utilisation de l’Application ;{'\n'}
                        - qu'il lui appartient de prendre toutes les mesures appropriées de
                        façon à protéger ses propres données et/ou logiciels de la
                        contamination par des éventuels virus circulant à travers le Site ;{'\n'}
                        <Text style={styles.article}>
                        Article 5. - Connexion
                        </Text>{'\n'}
                        L’Utilisateurs doit disposer d’un accès à Internet afin d’utiliser le
                        Service. MY LOVE ne garantit pas la compatibilité du Service avec

                        l’ensemble des systèmes d’exploitations et ne saurait être tenu à
                        aucune obligation envers l’Utilisateurs à ce titre. Les éventuels frais
                        correspondants à ces accès sont à la seule charge de l’Utilisateurs.{'\n'}
                        <Text style={styles.article}>
                        Article 6. - La Commande
                        </Text>{'\n'}
                        Descriptif des étapes de la Commande du service
                        Afin de réaliser la Commande, l’utilisateur devra obligatoirement
                        suivre les étapes suivantes :{'\n'}
                        - Se connecter à l’app store de son choix (Google Play ou Apps
                        Store){'\n'}
                        - Télécharger l’application payante pour accéder à tous les
                        services de l’application My Love.{'\n'}
                        L’application est à un coût de 2,99€ pour une relation. L’application
                        va mettre en relation deux utilisateurs, et c’est cette relation entre
                        deux personnes qui va amener les services d’un prix de 2,99€.{'\n'}
                        En cas de rupture, l’Utilisateur sera coupé de tous ses services liés
                        à la relation avec son ou sa partenaire. Il pourra le cas échéant
                        commencer une nouvelle relation, avec un/une autre partenaire
                        cependant pour avoir accès à nouveau aux services il faudra payer
                        une nouvelle fois 2,99€. L’Utilisateurs devra payer une nouvelle fois
                        également même si son/sa nouveau(elle) partenaire est sous le
                        même identifiant que la précédente.{'\n'}
                        Ainsi donc toute rupture est définitive et entraine la suppression des
                        services. Pour accéder à nouveau aux services il faudra effectuer
                        une nouvelle commande (Achat intégré à l’application). La
                        commande doit être effectué par chaque Utilisateur pour créer une
                        relation.{'\n'}
                        - Valider la Commande et le Prix (« Validation de la commande »).{'\n'}
                        - Procéder au paiement via le Store qu’il à choisit en amont.{'\n'}
                        - Une fois la confirmation établie par le Store, l’Utilisateurs à accès
                        à tous les services de l’application My Love.{'\n'}
                        MY LOVE s'engage à honorer la Commande suite à l’acceptation
                        du Store sélectionné. MY LOVE ne sera pas responsable en cas de
                        dysfonctionnement de la plateforme de paiement du store
                        sélectionné ou d’un problème d’internet lors de ce paiement. Aucun
                        remboursement pourra être fait envers l’application My Love. {'\n'}

                         <Text style={styles.article}>
                         Article 7 : Tarifs 
                         </Text>{'\n'}
                        Le service proposée via l’Application My Love se présente sous
                        forme d’un achat sur le store lors du téléchargement de
                        l’application. Où comme un achat intégré pour une nouvelle
                        « commande ».{'\n'}
                        Le Prix du service vendu pour utiliser l’application My Love est de
                        2,99€. Des options payantes peuvent être ajoutées. Le prix peut
                        aussi varier en fonction des mises à jours et des services ajoutés.
                        La durée de validité du service et du Prix est déterminée par
                        l’actualisation de l’application My Love.{'\n'}
                        <Text style={styles.article}>
                        Article 8. - Paiement
                        </Text> {'\n'}
                        Le paiement de l’application ses fait via la plate-forme sécurisée
                        des Stores sélectionnés. My Love rejette toute responsabilité vis à
                        vis du paiement. L’Utilisateurs devra se renseigner auprès de
                        l’entreprise Google ou Apple.
                        Le paiement du téléchargement de l’application est valable jusqu’au
                        mis à jours de l’application qui pourrait changer le processus de la
                        commande. Des éventuels frais pourront être supplémentaire, ces
                        derniers feront l’object d’achat intégré auprès des utilisateurs. Ces
                        achats auront accès à des services supplémentaires de
                        l’application.{'\n'}

                        <Text style={styles.article}>
                        Article 10. - Désinscription – Suppression du
                        compte
                        </Text>{'\n'}
                        L’Utilisateur peut supprimé à tout moment son compte sur
                        l’Application en se rendant dans les réglages de l’application prévu
                        à cet effet. Il faudra envoyer un mail de confirmation de suppression
                        avec son identifiant (Nom, prénom, numéro de téléphone) à
                        l’adresse suivante : societe.my.love@gmail.com pour confirmation.
                        La suppression du compte annule l’envoie de Newsletter, ou
                        d’invitation à des évènements. En revanche le traitement des

                        données sera toujours en base de données de l’application My
                        Love.{'\n'}

                        <Text style={styles.article}>
                        Article 12. - Confidentialité – Protection des
                        données à caractère personnel
                        </Text>{'\n'}
                        Les informations demandées à l’Utilisateurs sont nécessaires au
                        traitement du service proposé.
                        MY LOVE a déclaré la collecte et le traitement des données
                        personnelles des Utilisateurs auprès de la CNIL. L’ensemble des
                        éléments relatifs à l’utilisation du compte (Informations, données de
                        connexion...) sera conservé et archivé.
                        MY LOVE pourra se prévaloir, notamment à des fins probatoires, de
                        tout acte, fichier, enregistrement, sur tous supports reçus ou
                        conservés, directement ou indirectement.
                        MY LOVE s’engage à ne communiquer ces informations à des tiers
                        que sur réquisition d'une autorité judiciaire ou administrative.
                        Conformément à la Loi n° 78-17 du 6 janvier 1978 modifiée, dite Loi
                        Informatique et Liberté, le CLIENT dispose d'un droit de
                        consultation, de modification et de retrait des toutes données
                        personnelles collectées par MY LOVE. Ces droits peuvent être
                        exercés en adressant un message électronique à l’adresse
                        societe.my.love@gmail.com. Cependant MY LOVE se réserve le
                        droit d’utiliser certaines informations concernant ces utilisateurs
                        pour leur apporter des services complémentaire auprès de
                        commerçants tiers.{'\n'}
                        L’Utilisateur s’engage à accepter de recevoir les emails adressés
                        par My Love et à ne pas en bloquer la réception.{'\n'}
                        <Text style={styles.article}>
                        Article 13 . – Droit de rétractation
                        </Text>{'\n'}
                        Aucun droit de rétractation ne pourra être exercé par l’Utilisateur
                        une fois la commande passée.{'\n'}

                         <Text style={styles.article}>Article 14 . – Réclamations</Text>{'\n'}
                        L’Utilisateurs doit adresser ses éventuelles réclamations auprès de
                        MY LOVE par mail au contact suivant : societe.my.love@gmail.com
                        en rappelant la problème lié à l’application.

                        <Text style={styles.article}>
                            Article 16 . – Droits de propriété intellectuelle
                        </Text>{'\n'}
                        La marque de l’application My Love, ainsi que l'ensemble des
                        marques figuratives ou non et plus généralement toutes les autres
                        marques, illustrations, images et logotypes figurant sur les Biens,
                        leurs accessoires, emballages etc... qu’ils soient déposés ou non,
                        sont et demeureront la propriété exclusive de MY LOVE.{'\n'}
                        Toute reproduction totale ou partielle, modification ou utilisation de
                        ces marques, illustrations, images et logotypes, pour quelque motif
                        et sur quelque support que ce soit, sans accord exprès et préalable
                        de MY LOVE, est strictement interdite. Il en est de même de toute
                        combinaison ou conjonction avec toute autre marque, symbole,
                        logotype et plus généralement tout signe distinctif destiné à former
                        un logo composite. Il en est de même pour tout droit d'auteur,
                        dessin, modèle et brevet qui sont la propriété de MY LOVE.{'\n'}
                        <Text style={styles.article}>
                            Article 17. - Cas de force majeur
                        </Text>{'\n'}
                        L'exécution par MY LOVE de ses obligations aux termes des
                        présentes sera suspendue en cas de survenance d'un cas fortuit ou
                        de force majeure qui en gênerait ou en retarderait l'exécution.
                        En cas de survenance d’un évènement visé au présent article, la
                        partie touchée par la force majeure informera promptement l’autre
                        de sa durée et de ses conséquences prévisibles et fera tous ses
                        efforts pour en limiter la portée.{'\n'}
                        <Text style={styles.article}>
                        Article 18. - Nullité d'une Clause du Contrat
                        </Text>{'\n'}
                        Si l'une quelconque des dispositions des présentes était annulée,
                        cette nullité n'entraînerait pas la nullité des autres dispositions du
                        Contrat qui demeureront en vigueur entre les Parties.{'\n'}
                        <Text style={styles.article}>
                        Article 19. - Responsabilité
                        </Text>{'\n'}

                        Il appartient à l’Utilisateur d'assurer sa propre sécurité informatique
                        notamment de la confidentialité de ses codes d’accès. MY LOVE ne
                        saurait être tenu responsable de tout dégât accidentel ou volontaire
                        causé à l’Utilisateur par des tiers ou par leur connexion au
                        RÉSEAU. Il appartient à l’Utilisateur de s'assurer de la compatibilité
                        de son système informatique ou de celui de tiers avec les
                        applications développées et diffusées par MY LOVE.{'\n'}
                        MY LOVE ne saurait être tenu responsable de la mauvaise qualité
                        ou du dysfonctionnement de systèmes informatiques appartenant
                        ou exploités par des tiers ou FOURNISSEURS hébergeant ou
                        diffusant les liens informatiques donnant accès aux produits
                        commercialisés par MY LOVE ou de leur incompatibilité avec les
                        applications développées ou distribuées par MY LOVE.{'\n'}
                        <Text style={styles.article}>
                        Article 20. - Droit Applicable – Attribution de
                        juridiction
                        </Text>{'\n'}
                        L'interprétation et l'exécution des présentes conditions générales de
                        vente et de fourniture de prestations de service, ainsi que de tous
                        les actes qui en seront la conséquence, seront soumis au droit
                        français. Tout litige découlant des présentes conditions générales
                        de vente relèvera de la compétence exclusive des tribunaux
                        compétents du ressort du tribunal de commerce de RENNES -
                        35000 même en cas de clause attributive de juridiction contraire.
                    </Text>
                    <Text>
                    <Text style={styles.title}>
                         Mentions légales{'\n'}
                    </Text>
                    
                    Information éditeur :{'\n'}
                    Directeur de la publication : Victor Rousseau{'\n'}
                    Contact : societe.my.love@gmail.com{'\n'}
                    Information hébergeur :{'\n'}
                    SAS au capital de 10 069 020 €{'\n'}
                    RCS Lille Métropole 424 761 419 00045{'\n'}
                    Code APE 2620Z{'\n'}
                    N° TVA : FR 22 424 761 419{'\n'}
                    Siège social : 2 rue Kellermann – 59100 Roubaix – France.{'\n'}
                    Directeur de la publication : Octave KLABA{'\n'}
                    </Text>
                </View>  
            </View>
        </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    allText: {
        margin: 10,
        flexWrap: 'wrap',
        top: 5
    },
    title: {
        color: '#ce5e4b',
        fontSize: 20,
        
    },
    maj: {
        top: 7,
    },
    grandTitre: {
        fontSize: 15,
        marginTop: 10,
        textDecorationLine: 'underline',
        
    },
    article: {
        color: '#AADADC',
        fontSize: 15
    }
});

export default Apropos;
