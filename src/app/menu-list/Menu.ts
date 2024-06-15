export interface Menu{
    nombre : string;
    tipo: 'p' | 'b' | 'po';
    precio : number;
    stock : number,
    imagen : string;
    cantidad : number;
    oferta : boolean;
}