

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Banane",
    price: 1000,
    image: "https://www.aprifel.com/wp-content/uploads/2019/02/banane.jpg",
    description: "Lorem ipsum dolor sit amet"
  },
  {
    id: 2,
    name: "Fraises",
    price: 2000,
    image: "https://mapetiteassiette.com/wp-content/uploads/2021/06/AdobeStock_254635130-min-min.png",
    description: "Lorem ipsum dolor sit amet"
  },
  {
    id: 3,
    name: "Oranges",
    price: 4000,
    image: "https://img-3.journaldesfemmes.fr/a5LFTZ3qU2fUVOmwIVKDJawBJXA=/1500x/smart/83c0e4f55dd846dea2be0be27e715dcd/ccmcms-jdf/10662446.jpg",
    description: "Lorem ipsum dolor sit amet"
  },
  {
    id: 4,
    name: "Ignames",
    price: 300,
    image: "https://lnt-1b770.kxcdn.com/wp-content/uploads/2020/04/igname.jpg",
    description: "Lorem ipsum dolor sit amet"
  },
  {
    id: 5,
    name: "Tomates",
    price: 2400,
    image: "https://img.passeportsante.net/1000x526/2021-05-03/i102192-tomate-nu.webp",
    description: "Lorem ipsum dolor sit amet"
  },
]


export interface Product{
  name: string;
  price: number;
  image: string;
  id: number;
  description: string;
}

export interface CartItem{
  quantity: number;
  product: Product;
}
