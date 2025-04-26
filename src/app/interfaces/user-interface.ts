export interface UserInterface {
    id:string;
    createdAt:Date;
    name: string;
    telephone: string;
    email: string;
    budget: number;
    service: {
      serviceName: string;
      languages: number;
      pages: number;
    }[];
  }