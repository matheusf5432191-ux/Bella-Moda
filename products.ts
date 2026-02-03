import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Vestido Floral Verão",
    price: 189.90,
    originalPrice: 249.90,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=500&fit=crop",
    category: "Vestidos",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Rosa", "Azul", "Branco"],
    isSale: true
  },
  {
    id: 2,
    name: "Blusa Cropped Elegante",
    price: 89.90,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop",
    category: "Blusas",
    sizes: ["P", "M", "G"],
    colors: ["Preto", "Branco", "Bege"],
    isNew: true
  },
  {
    id: 3,
    name: "Calça Jeans Skinny",
    price: 159.90,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=500&fit=crop",
    category: "Calças",
    sizes: ["36", "38", "40", "42", "44"],
    colors: ["Azul Claro", "Azul Escuro", "Preto"]
  },
  {
    id: 4,
    name: "Saia Midi Plissada",
    price: 129.90,
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0uj9a?w=400&h=500&fit=crop",
    category: "Saias",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Verde", "Nude", "Preto"],
    isNew: true
  },
  {
    id: 5,
    name: "Blazer Feminino Premium",
    price: 299.90,
    originalPrice: 399.90,
    image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=400&h=500&fit=crop",
    category: "Casacos",
    sizes: ["P", "M", "G"],
    colors: ["Preto", "Cinza", "Caramelo"],
    isSale: true
  },
  {
    id: 6,
    name: "Conjunto Moletom Confort",
    price: 219.90,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop",
    category: "Conjuntos",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Cinza", "Preto", "Rosa"]
  },
  {
    id: 7,
    name: "Top Fitness Esportivo",
    price: 69.90,
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=500&fit=crop",
    category: "Fitness",
    sizes: ["P", "M", "G"],
    colors: ["Preto", "Rosa", "Azul"],
    isNew: true
  },
  {
    id: 8,
    name: "Camisa Social Feminina",
    price: 119.90,
    originalPrice: 159.90,
    image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=400&h=500&fit=crop",
    category: "Camisas",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Branco", "Azul", "Rosa Claro"],
    isSale: true
  }
];

export const categories = [
  "Todos",
  "Vestidos",
  "Blusas",
  "Calças",
  "Saias",
  "Casacos",
  "Conjuntos",
  "Fitness",
  "Camisas"
];
