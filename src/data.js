// Temp list of aliments - move into db afterward
const aliments = [
  {
    id: 1,
    name: 'Pain blanc',
    ref_freq: 2,
    img: './img/Picto1.png',
    color01: '#7C5434',
    color02: '#DA9C4A',
  },
  {
    id: 2,
    name: 'Viande Rouge',
    ref_freq: 2,
    img: './img/Picto2.png',
    color01: '#CA433C',
    color02: '#EFC2AE',
  },
  {
    id: 3,
    name: 'Produits laitiers de vache (lait, yaourt, fromage)',
    ref_freq: 1,
    img: './img/Picto3.png',
    color01: '#2434A4',
    color02: '#FFFFFF',
  },
  {
    id: 4,
    name: 'Confiture',
    ref_freq: 1,
    img: './img/Picto4.png',
    color01: '#3C0908',
    color02: '#B82C3C',
  },
  {
    id: 5,
    name: 'Boissons sucrée (jus de fruits, soda...)',
    ref_freq: 1,
    img: './img/Picto5.png',
    color01: '#2b211f',
    color02: '#4e3834',
  },
  {
    id: 6,
    name: 'Boisson énergisante',
    ref_freq: 1,
    img: './img/Picto6.png',
    color01: '#344b8c',
    color02: '#FFFFFF',
  },
  {
    id: 7,
    name: 'Huile raffinée (arachide, tournesol), margarine',
    ref_freq: 1,
    img: './img/Picto7.png',
    color01: '#C16330',
    color02: '#ffeb7e',
  },
  {
    id: 8,
    name: 'Beurre',
    ref_freq: 2,
    img: './img/Picto8.png',
    color01: '#F4CC34',
    color02: '#fff2bc',
  },
  {
    id: 9,
    name: 'Alcool',
    ref_freq: 1,
    img: './img/Picto9.png',
    color01: '#E4A541',
    color02: '#e5f3f1',
  },
  {
    id: 10,
    name: 'Vin rouge (1 verre de 12cL)',
    ref_freq: 3,
    img: './img/Picto10.png',
    color01: '#930715',
    color02: '#b54f3b',
  },
  {
    id: 11,
    name: 'Biscuits apéritifs',
    ref_freq: 1,
    img: './img/Picto11.png',
    color01: '#C16330',
    color02: '#e0aa6b',
  },
  {
    id: 12,
    name: 'Sauce industrielle',
    ref_freq: 1,
    img: './img/Picto12.png',
    color01: '#C16330',
    color02: '#e0aa6b',
  },
  {
    id: 13,
    name: 'Fruits',
    ref_freq: 4,
    img: './img/Picto13.png',
    color01: '#C16330',
    color02: '#e0aa6b',
  },
  {
    id: 14,
    name: 'Sel ajouté',
    ref_freq: 1,
    img: './img/Picto14.png',
    color01: '#C16330',
    color02: '#e0aa6b',
  },
  {
    id: 15,
    name: 'Oeuf',
    ref_freq: 3,
    img: './img/Picto15.png',
    color01: '#C16330',
    color02: '#e0aa6b',
  },
  {
    id: 16,
    name: 'Champignon',
    ref_freq: 3,
    img: './img/Picto16.png',
    color01: '#C16330',
    color02: '#e0aa6b',
  },
  {
    id: 17,
    name: 'Riz',
    ref_freq: 3,
    img: './img/Picto17.png',
    color01: '#C16330',
    color02: '#e0aa6b',
  },
  {
    id: 18,
    name: 'Pâtes',
    ref_freq: 2,
    img: './img/Picto18.png',
    color01: '#C16330',
    color02: '#e0aa6b',
  },
  {
    id: 19,
    name: 'Chocolat Noir',
    ref_freq: 3,
    img: './img/Picto19.png',
    color01: '#C16330',
    color02: '#e0aa6b',
  },
  {
    id: 20,
    name: 'Patate douce et Pomme de terre',
    ref_freq: 3,
    img: './img/Picto20.png',
    color01: '#C16330',
    color02: '#e0aa6b',
  },
  {
    id: 21,
    name: 'Eau',
    ref_freq: 4,
    img: './img/Picto21.png',
    color01: '#C16330',
    color02: '#e0aa6b',
  },
  {
    id: 22,
    name: 'Café',
    ref_freq: 4,
    img: './img/Picto22.png',
    color01: '#C16330',
    color02: '#e0aa6b',
  },
  {
    id: 23,
    name: 'Thé et Infusion',
    ref_freq: 4,
    img: './img/Picto23.png',
    color01: '#C16330',
    color02: '#e0aa6b',
  },
  {
    id: 24,
    name: 'Ail et Oignon',
    ref_freq: 4,
    img: './img/Picto24.png',
    color01: '#C16330',
    color02: '#e0aa6b',
  },
  {
    id: 25,
    name: 'Huile végétale de première pression à froid (olive, noix, colza, lin)',
    ref_freq: 4,
    img: './img/Picto25.png',
    color01: '#C16330',
    color02: '#e0aa6b',
  },
  {
    id: 26,
    name: 'Epices',
    ref_freq: 4,
    img: './img/Picto26.png',
    color01: '#C16330',
    color02: '#e0aa6b',
  },
  {
    id: 27,
    name: 'Herbes aromatiques',
    ref_freq: 4,
    img: './img/Picto27.png',
    color01: '#C16330',
    color02: '#e0aa6b',
  },
  {
    id: 28,
    name: 'Fruits à coques et oléagineux',
    ref_freq: 4,
    img: './img/Picto28.png',
    color01: '#C16330',
    color02: '#e0aa6b',
  },
  {
    id: 29,
    name: 'Beurre et Crème fraiche',
    ref_freq: 2,
    img: './img/Picto29.png',
    color01: '#058DD3',
    color02: '#74C4E4',
  },
  {
    id: 30,
    name: 'Produits laitiers de chèvre et brebis',
    ref_freq: 3,
    img: './img/Picto30.png',
    color01: '#3BA066',
    color02: '#F1F1F1',
  },
  {
    id: 31,
    name: 'Viande blanche (Volaille)',
    ref_freq: 3,
    img: './img/Picto31.png',
    color01: '#E17922',
    color02: '#FBF2D2',
  },
  {
    id: 32,
    name: 'Poissons gras (sardine, maquereau, harengs, truite, saumon, etc)',
    ref_freq: 3,
    img: './img/Picto32.png',
    color01: '#D03E1E',
    color02: '#EFD7B8',
  },
  {
    id: 33,
    name: 'Sucre',
    ref_freq: 1,
    img: './img/Picto33.png',
    color01: '#F3D21B',
    color02: '#F1F1F1',
  },
  {
    id: 34,
    name: 'Confiserie et Friandises',
    ref_freq: 1,
    img: './img/Picto34.png',
    color01: '#7353A3',
    color02: '#D79BC0',
  },
  {
    id: 35,
    name: 'Charcuterie',
    ref_freq: 2,
    img: './img/Picto35.png',
    color01: '#782424',
    color02: '#CD8080',
  },
  {
    id: 36,
    name: 'Pain rustique (variété ancienne et au levain)',
    ref_freq: 3,
    img: './img/Picto36.png',
    color01: '#432B1C',
    color02: '#90501C',
  },
  {
    id: 37,
    name: 'Céréales du petit déjeuné, pain de mie, biscotte',
    ref_freq: 2,
    img: './img/Picto37.png',
    color01: '#D0832D',
    color02: '#CCA876',
  },
  {
    id: 38,
    name: 'Patisseries',
    ref_freq: 1,
    img: './img/Picto38.png',
    color01: '#F4AC54',
    color02: '#F7E97B',
  },
  {
    id: 39,
    name: 'Fruits secs',
    ref_freq: 3,
    img: './img/Picto39.png',
    color01: '#A76D47',
    color02: '#E4CCA1',
  },
  {
    id: 40,
    name: 'Plats préparés et aliments ultra transformés',
    ref_freq: 1,
    img: './img/Picto40.png',
    color01: '#0C7E45',
    color02: '#C1AB7C',
  },
  {
    id: 41,
    name: 'Poissons maigres (colin, cabillaud, merlan, lieu, sol, raie, lotte)',
    ref_freq: 3,
    img: './img/Picto41.png',
    color01: '#0C7E45',
    color02: '#C1AB7C',
  },
  {
    id: 42,
    name: 'Fast Food',
    ref_freq: 1,
    img: './img/Picto42.png',
    color01: '#0C7E45',
    color02: '#C1AB7C',
  },
  {
    id: 43,
    name: 'Fruits de mer, mollusques',
    ref_freq: 3,
    img: './img/Picto43.png',
    color01: '#0C7E45',
    color02: '#C1AB7C',
  },
  {
    id: 44,
    name: 'Légumes secs (pois chiche, lentilles, haricots blans)',
    ref_freq: 4,
    img: './img/Picto44.png',
    color01: '#0C7E45',
    color02: '#C1AB7C',
  },
  {
    id: 45,
    name: 'Légumes frais',
    ref_freq: 4,
    img: './img/Picto45.png',
    color01: '#0C7E45',
    color02: '#C1AB7C',
  },
];

export default aliments;
