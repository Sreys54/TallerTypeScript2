
export class Serie {
    order: number;
    name: string;
    channel: string;
    seasons: number;
  
    constructor(order: number, name: string, channel: string, seasons: number) {
      this.order = order;
      this.name = name;
      this.channel = channel;
      this.seasons = seasons;
    }
  }
  