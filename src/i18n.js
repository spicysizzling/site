import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read:
    //  https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    description: {
                        part1: "Get The Best Catering Service with us",
                        title2: "About Us",
                        part2First: "Spicysizzling Cakes turns the sweet moments at your events such as weddings, graduations, seminars, anniversaries, etc to fond memories with our exquisite and luscious cakes.",
                        part2ListTitle: "Contact us for your :",
                        part2List1: " Pasteries",
                        part2List2: "Cakes",
                        part2List3: "Cupcakes",
                        part2Second: "Also, cakes make your guests happy, after all, when organising an event, your priority is to make sure that your guests leave happily and with unforgettable memories. All these and more are what we make happen. So, for your pastries, cakes, cupcakes, mini cakes of different shapes, contact us and let's be part of your event.",
                        part2Contact: "Contact us",
                        title3: "TESTIMONIALS",
                        subTitle3: "Happy customers feedback on social medial platform of our services",
                        part3Text1: "Many thanks for coming to prepare the amazing job and delicious cakes and meatpies for our invitedguests during the presentation of our movie at Brasil Consulate in Lagos. We called you 36hours toinform you of what we need, and then your appeared with your staff, as if you have been briefed somemonths earlier.",
                        part3Text2: "The cake is so tasty and fantastic!, i must say, the flavor is so out of this world,thanks u very much ma. I love the fact that different flavors were mixed for the cupcakes, you're the best.",
                        part3Text3: "The cake you made was so nice and taste really good, my children loved it, i will order for more soon, thank you very much ma.",
                        part4: "Checkout our work",
                        title5: "CONTACT US",
                        part5Text1: "Reach out to us on the following social media platforms or using the Whatsapp link that we also have here",
                        navTitle1: "Home",
                        navTitle2: "About",
                        navTitle3: "Our Work",
                        navTitle4: "Recipe",
                        navTitle5: "Contact"
                    }
                }
            },

            fr: {
                translation: {
                    description: {
                        part1: "Obtenez le meilleur service de restauration avec nous",
                        title2: "À propos",
                        part2First: "Spicysizzling Gâteaux transforme les doux moments de vos événements tels que les mariages, les remises de diplômes, les séminaires, les anniversaires, etc. en bons souvenirs avec nos gâteaux exquis et succulents.",
                        part2ListTitle: "Contactez-nous pour vos :",
                        part2List1: " Pâtisseries",
                        part2List2: "Gâteau",
                        part2List3: "Cupcakes",
                        part2Second: "Aussi, les gâteaux rendent vos invités heureux, après tout, lors de l'organisation d'un événement, votre priorité est de faire en sorte que vos invités repartent heureux et avec des souvenirs inoubliables. Tout cela et plus encore sont ce que nous réalisons. Alors, pour vos pâtisseries, gâteaux, cupcakes, mini gâteaux de différentes formes, contactez-nous et participons à votre événement.",
                        part2Contact: "Contactez-nous",
                        title3: "TÉMOIGNAGES",
                        subTitle3: "Commentaires de clients satisfaits sur la plateforme de médias sociaux de nos services",
                        part3Text1: "Un grand merci pour  le travail incroyable et les  délicieux gâteaux et tartes à la viande preparés  pour nos invités lors de la présentation de notre film au consulat du Brésil à Lagos. Nous vous avons appelé 36 heures pour vous informer de ce dont nous avions besoin, puis vous êtes apparu avec votre personnel, comme si vous aviez été informé quelques mois plus tôt.",
                        part3Text2: "Le gâteau est tellement savoureux et fantastique!, je dois dire que la saveur est tellement hors du commun , merci beaucoup maman. J'adore le fait que différentes saveurs aient été mélangées pour les cupcakes, tu es la meilleure.",
                        part3Text3: "Le gâteau que vous avez fait était si bon et avait vraiment bon goût, mes enfants l'ont adoré, je vais en commander plus bientôt, merci beaucoup maman.",
                        part4: "Découvrez nos réalisations",
                        title5: "CONTACTEZ-NOUS",
                        part5Text1: "Contactez-nous sur les plateformes de médias sociaux suivantes ou en utilisant le lien Whatsapp que nous avons également ici",
                        navTitle1: "Acceuil",
                        navTitle2: "À propos",
                        navTitle3: "Nos Réalisation",
                        navTitle4: "Recette",
                        navTitle5: "Contact"
                    }
                }
            }
        }
    });

export default i18n;