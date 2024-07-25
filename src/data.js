import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
];

export const socialLinks = [
  { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace' },
];

export const services = [
  {
    id: 1,
    title: 'Saving Money',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
    icon: 'fas fa-wallet fa-fw',
  },
  {
    id: 2,
    title: 'endless hiking',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
    icon: 'fas fa-tree fa-fw',
  },
  {
    id: 3,
    title: 'amazing comfort',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
    icon: 'fas fa-socks fa-fw',
  },
];

export const tours = [
  {
    id: 1,
    title: 'Tibet Adventure',
    destination: 'China',
    description:
      'Loorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    image: tour1,
    date: 'august 26th, 2020',
    duration: '6 days',
    price: 'from $2100',
  },
  {
    id: 2,
    title: 'best of java',
    destination: 'Indonesia',
    description:
      'Loorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    image: tour2,
    date: 'October 1th, 2020',
    duration: '11 days',
    price: 'from $1400',
  },
  {
    id: 3,
    title: 'Explore Hong Kong',
    destination: 'Hong Kong',
    description:
      'Loorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    image: tour3,
    date: 'September 15th, 2020',
    duration: '8 days',
    price: 'from $5000',
  },
  {
    id: 4,
    title: 'Kenya Highlights',
    destination: 'Kenya',
    description:
      'Loorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    image: tour4,
    date: 'December 5th, 2019',
    duration: '20 days',
    price: 'from $3300',
  },
];
