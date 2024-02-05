export interface ProjectData {
  id: number;
  slug: string;
  title: string;
  series: string;
  category: string;
  images: string[];
  displayImage: number;
  description: string;
}

export interface TestimonialData {
  id: number;
  text: string;
  author: string;
  position: string;
  company: string;
}
