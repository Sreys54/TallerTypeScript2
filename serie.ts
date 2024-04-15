
export class Serie {
    order: number;
    name: string;
    channel: string;
    seasons: number;
    sinopsis: string;
    link: string;
    image: string;
  
    constructor(order: number, name: string, channel: string, seasons: number, sinopsis: string, link: string, image: string) {
      this.order = order;
      this.name = name;
      this.channel = channel;
      this.seasons = seasons;
      this.sinopsis = sinopsis;
      this.link = link;
      this.image = image
    }
  }
  