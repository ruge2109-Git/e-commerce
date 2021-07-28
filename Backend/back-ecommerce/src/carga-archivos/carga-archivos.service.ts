import { Injectable } from '@nestjs/common';
import { Client } from 'basic-ftp';

@Injectable()
export class CargaArchivosService {

    private urlPath = 'http://localhost/img/ecommerce_1/';

    constructor() { }

    async subirImagen(file: string, nombre: string, extension: string) {

        const archivoGuardar = `${nombre}.${extension}`;
        const client = await this.abrirConeccionFTP();
        try {
            await client.cd('/img/ecommerce_1/')
            await client.uploadFrom(file, archivoGuardar);
        }
        catch (err) {
            return { flag: false, msg: 'Error al guardar el archivo' };
        }
        this.cerrarConeccionFTP(client);
        return {
            flag: true,
            msg: `${this.urlPath}${archivoGuardar}`
        };
    }

    async abrirConeccionFTP() {
        const client = new Client();
        client.ftp.verbose = true;
        try {
            await client.access({
                host: "127.0.0.1",
                user: "ruge",
                password: "ruge",
                secure: false
            });
        } catch (error) {
            console.log(error);
            return null;
        }
        return client;
    }

    async cerrarConeccionFTP(client: Client) {
        if (client != null) {
            client.close();
        }
    }

}
