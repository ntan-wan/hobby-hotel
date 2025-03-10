export interface Property {
  id: number;
  name: string;
  type: string;
  price: number;
  images: string[];
  description: string;
  amenities: string[];
  rating: number;
  location: string;
}

export interface AccommodationFilters {
  rating?: number;
  priceRange?: [min: number, max: number];
  amenities?: string[];
  type?: string;
}

export interface Accommodation {
  id: number;
  name: string;
  location: string;
  description: string;
  pricePerNight: number;
  isAvailable: boolean;
  rating: number;
  thumbnail: string;
  ammenities: string[];
  images: string[];
  facilities: string[];
  propertyType: string;
}
