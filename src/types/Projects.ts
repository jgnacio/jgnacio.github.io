export type ProjectsListType = {
    title: string;
    comingSoon?: boolean;
    description: string;
    link?: {
      callToAction?: string;
      youtube?: string;
      github?: string;
      website?: string;
    };
    image: {
      src: string;
      backgroundUrl: string;
      alt: string;
    };
    techStack: {
      frontend?: any[];
      backend?: any[];
      deployment?: any[];
      other?: any[];
    }
}[]
