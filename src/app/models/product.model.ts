interface Thumb {
  thumbUrl: string;
}

export class ProductModel {
  id: number;
  name: string;
  description: string;
  image: string;
  thumbs: Thumb[];
  category: string;
  categoryId: number;
  value: string;
  favorito: boolean;
  color: string;
  status: 'Novo' | 'Usado';
}
