import { Emergency } from '../../components/shared/model/emergency';
import jugendnotmail from '../images/logo/jugendnotmail.png';
import bkeJugend from '../images/logo/bkeJugend.png';
import notfallnummerlogo from '../images/logo/notfallnummerlogo.jpg';
import krisenchat from '../images/logo/krisenchat.png';

export const emergencies: Emergency[] = [
  {
    id: '13dffcc6-0bd2-4eb8-ba42-c54f8274c05a',
    title: 'jugendnotmail',
    logo: jugendnotmail,
    website: {
      link: 'https://www.jugendnotmail.de',
      title: 'www.jugendnotmail.de',
    },
    buttons: [
      {
        id: '444e5fce-73f0-47cb-a1d5-20b241c7d9cb',
        icon: 'comment',
        label: 'Einzelberatung',
        description: 'Dienstag bis Freitag von 18 bis 21 Uhr',
        link: 'https://junoma-beratung.de/users/login',
      },
      {
        id: 'b231bc9e-c0b5-4dc3-8ae0-3630dd6f87f4',
        icon: 'comment-dots',
        label: '24/7 Chat',
        description: '',
        link: 'https://junoma-beratung.de/users/login',
      },
      {
        id: '8253396b-b9bb-4142-bc33-099cdefd1213',
        icon: 'envelope',
        label: 'Mail',
        description: '',
        link: 'https://junoma-beratung.de/users/login',
      },
      {
        id: '9ad1b69b-13f2-4711-b84a-2ba18562a404',
        icon: 'globe-europe',
        label: 'Foren',
        description: '',
        link: 'https://junoma-beratung.de/users/login',
      },
    ],
    tags: [
      'Angst',
      'Depressionen',
      'Selbstverletzung',
      'Esstörungen',
      'Familie',
      'Schule',
      'Missbrauch',
      'Mobbing',
      'Gewalt',
      'Sucht',
      'Liebe & Sexualität',
      'Freundschaft',
      'Suizidgedanken',
      'Stress',
      'Vernachlässigung',
      'Krisen',
      'Soziale Medien',
      'Wut',
    ],
  },
  {
    id: '1e44e628-e05f-4644-bdd9-eead37ffa7f1',
    title: 'Krisenchat',
    logo: krisenchat,
    website: {
      link: 'https://krisenchat.de',
      title: 'krisenchat.de',
    },
    buttons: [
      {
        id: '5b91f9f5-0aff-4709-b6b9-7945747851f3',
        icon: 'graduation-cap',
        label: 'Oase',
        description: 'Atme tief durch und lass dich inspirieren',
        link: 'https://krisenchat.de/oase',
      },
      {
        id: 'a423cbac-bf2c-4a7a-b137-20f690bf9ddf',
        icon: 'whatsapp',
        label: '24/7 Chat',
        description: '',
        link: 'https://wa.me/4915735998143',
      },
      {
        id: 'f1a29bda-114e-40ec-bcf8-02d3096c4c5e',
        icon: 'sms',
        label: 'SMS',
        description: '',
        link: 'sms:4915735998143',
      },
    ],
    tags: [
      'Achtsamkeit & Stress',
      'Identität',
      'Ängste',
      'Mobbing & Hass im Netz',
      'Depressionen',
      'Süchte',
      'Familie & Beziehungen',
      'Gewalt',
      'Meine Rechte',
    ],
  },
  {
    id: '5e9e42b9-fd78-4f99-a819-f924ad16553e',
    title: 'Bke Jugendberatung',
    logo: bkeJugend,
    website: {
      link: 'https://www.bke-jugendberatung.de',
      title: 'www.bke-jugendberatung.de',
    },
    buttons: [
      {
        id: 'cbb9c3d4-c487-47d2-870d-6d40c7a2a042',
        icon: 'comment',
        label: 'Einzelchat',
        description: '',
        link: 'https://jugend.bke-beratung.de/views/chat/sprechstunde.html',
      },
      {
        id: 'c7fd57d9-70d2-43a1-9c66-a22e12fba805',
        icon: 'comments',
        label: 'Gruppenchat',
        description: '',
        link: 'https://jugend.bke-beratung.de/views/chat/gruppenchat.html',
      },
      {
        id: '85c03846-1106-4d6d-8333-75ea09f1f697',
        icon: 'envelope',
        label: 'E-Mail',
        description: '',
        link: 'https://jugend.bke-beratung.de/views/einzelberatung/erstanfrage.html',
      },
      {
        id: '46722d77-114e-4697-a7c8-83365dfe86fd',
        icon: 'globe-europe',
        label: 'Forum',
        description: '',
        link: 'https://jugend.bke-beratung.de/views/forum/index.html',
      },
    ],
    tags: [],
  },
  {
    id: '44c72d83-113d-46f7-b012-bd45251796a7',
    title: 'Nummer gegen Kummer',
    logo: notfallnummerlogo,
    website: {
      link: 'https://www.nummergegenkummer.de/',
      title: 'www.nummergegenkummer.de',
    },
    buttons: [
      {
        id: '0dd475e7-a289-44df-8025-6d3b2590167c',
        icon: 'phone',
        label: 'Telefon',
        description: 'Montags bis Samstag von 14-20 Uhr',
        link: 'tel:116111',
      },
      {
        id: 'e6f41844-3ef3-43b6-adc5-69866cc4c909',
        icon: 'whatsapp',
        label: 'Chat',
        description: 'Mittwochs und donnerstags von 14-18 Uhr',
        link: 'https://www.nummergegenkummer.de/kinder-und-jugendberatung/online-beratung/',
      },
      {
        id: '978f747b-4683-4165-b758-bb37134dac5a',
        icon: 'envelope',
        label: 'E-Mail',
        description: '',
        link: 'https://www.nummergegenkummer.de/kinder-und-jugendberatung/online-beratung/',
      },
    ],
    tags: [],
  },
];
