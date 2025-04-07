export class Serie {
      public number: number;
      public name: string;
      public channel: string;
      public seasons: number;
      public descripcion: string;
      public link: string;
      public imagen: string;

      constructor(number: number, name: string, channel: string, seasons: number, descripcion: string, link: string, imagen: string) {
          this.number = number;
          this.name = name;
          this.channel = channel;
          this.seasons = seasons;
          this.descripcion = descripcion;
          this.link = link;
          this.imagen = imagen;
      }
  }
  