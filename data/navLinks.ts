// Interface import declaration
import { INavlink } from './../src/interfaces/INavlink';

// Datas to map in the navbar
const navLinks: INavlink[] = [
  {
    id: 1,
    path: '/collection',
    leftTitle: 'Nos sacs',
    firstDropTitle: 'Pour tous les jours',
    secondDropTitle: 'Pour une soirée élégante',
  },
  {
    id: 2,
    path: '/univers',
    leftTitle: 'Univers Brille',
  },
  {
    id: 3,
    path: '/contact',
    leftTitle: 'Contact',
  },
  {
    id: 4,
    path: '',
    rightTitle: 'Rechercher',
  },
  {
    id: 5,
    path: '/compte',
    rightTitle: 'Compte',
  },
  {
    id: 6,
    path: '/panier',
    rightTitle: 'Panier',
  },
];

export default navLinks;
