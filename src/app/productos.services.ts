import { Injectable } from '@angular/core';
import { Products } from './model/products';
import { SelectItem } from 'primeng/api';
import { Observable} from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable(
    { providedIn: 'root' }
)

export class ProductosServices {

    constructor(private http: HttpClient) { }

       private url = 'api/products/products.json';

    getPctos(id: number): Observable<Products | undefined> {
        return this.getAllProducts().pipe(
            map((products: Products[]) => products.find(p => p.id === id))
          );
    }

    getAllProducts(): Observable<Products[]> {
        return this.http.get<Products[]>(this.url).pipe();
      }

    getTipoProductos(): SelectItem[] {
        return [
            { label: '-Todos-', value: null },
            { label: 'Discos rígidos', value: 'Discos rígidos' },
            { label: 'Fuentes de alimentación', value: 'Fuentes de alimentación' },
            { label: 'Impresoras', value: 'Impresoras' },
            { label: 'Monitores', value: 'Monitores' },
            { label: 'Mouses', value: 'Mouses' },
            { label: 'Parlantes', value: 'Parlantes' },
            { label: 'Placas de video', value: 'Placas de video' },
            { label: 'Procesadores', value: 'Procesadores' },
            { label: 'Teclados', value: 'Teclados' },
            { label: 'Webcam', value: 'Webcam' }
        ];
    }

    getMarcas(): SelectItem[] {
        return [
            { label: '-Todas-', value: null },
            { label: 'Amd', value: 'Amd' },
            { label: 'Antec', value: 'Antec' },
            { label: 'Brother', value: 'Brother' },
            { label: 'Corsair', value: 'Corsair' },
            { label: 'Creative', value: 'Creative' },
            { label: 'Epson', value: 'Epson' },
            { label: 'Genius', value: 'Genius' },
            { label: 'Hitachi', value: 'Hitachi' },
            { label: 'HP', value: 'HP' },
            { label: 'Intel', value: 'Intel' },
            { label: 'LG', value: 'LG' },
            { label: 'Logitech', value: 'Logitech' },
            { label: 'Nvidia', value: 'Nvidia' },
            { label: 'Papalook', value: 'Papalook' },
            { label: 'Radeon', value: 'Radeon' },
            { label: 'Samsung', value: 'Samsung' },
            { label: 'Sound Blaster', value: 'Sound Blaster' },
            { label: 'Thermaltake', value: 'Thermaltake' },
            { label: 'Toshiba', value: 'Toshiba' },
            { label: 'Western Digital', value: 'Western Digital' }
        ];
    }

    getProductos(): Products[] {
        return [
            {
                id: 1,
                brand: "Amd",
                detail: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, quos provident. Voluptatem magni eveniet eius fuga aperiam eos fugiat laudantium quaerat rerum delectus, maxime autem pariatur voluptatum! Illum, eos ipsa!",
                price: "27899.99",
                model: "RYZEN 5 2400G",
                productType: "Procesadores"
            },

            {
                id: 2,
                brand: "Amd",
                detail: "Quad core 3.1Ghz/socket AM4 Radeon R7",
                price: "3605.00",
                model: "A8 9600",
                productType: "Procesadores"
            },

            {
                id: 3,
                brand: "Amd",
                detail: "Socket AM4/4 nucleos/3.6Ghz Cache L3 4Mb/Radeon rx Vega 11",
                price: "5405.00",
                model: "Ryzen 5 bulk",
                productType: "Procesadores"
            },

            {
                id: 4,
                brand: "Amd",
                detail: "Dual core 3.5GHZ/socket AM4 Radeon R5",
                price: "2345.00",
                model: "A6 9500",
                productType: "Procesadores"
            },

            {
                id: 5,
                brand: "Amd",
                detail: "Socket AM4/Dual core/3.2Ghz Graficos Radeon Vega 3",
                price: "7605.00",
                model: "Athlon 200Ge",
                productType: "Procesadores"
            },

            {
                id: 6,
                brand: "Amd",
                detail: "Socket AM4/4 nucleos/3.5Ghz Cache L2 2Mb/65W",
                price: "8410.00",
                model: "Ryzen 3 1200",
                productType: "Procesadores"
            },

            {
                id: 7,
                brand: "Amd",
                detail: "Quad core 3.1Ghz/socket AM4 Radeon R7",
                price: "7005.00",
                model: "Socket AM4/4 nucleos/3.5Ghz Cache L3 4Mb/Radeon Vega 8",
                productType: "Procesadores",
            },

            {
                id: 8,
                brand: 'Amd',
                detail: "Quad core 3.1Ghz/socket AM4 Radeon R7",
                price: "3605.00",
                model: "A8 9600",
                productType: 'Procesadores'
            },

            {
                id: 10,
                brand: "Intel",
                detail: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, quos provident. Voluptatem magni eveniet eius fuga aperiam eos fugiat laudantium quaerat rerum delectus, maxime autem pariatur voluptatum! Illum, eos ipsa!",
                price: "25599.99",
                model: "i7 Core I7 8700 4.6ghz Coffee Lake Cpu",
                productType: "Procesadores"
            },

            {
                id: 11,
                brand: "Intel",
                detail: "Quad core/3.60Ghz/Smart cache 6Mb/HD Intel 630",
                price: "9055.00",
                model: "Core I3 8100",
                productType: "Procesadores"
            },

            {
                id: 12,
                brand: "Intel",
                detail: "6 nucleos/2.8Ghz/9Mb smart cache/HD Intel 630",
                price: "13415.00",
                model: "Core I5 8400",
                productType: "Procesadores"
            },

            {
                id: 13,
                brand: "Intel",
                detail: "6 nucleos/3.20Ghz/12Mb smart cache/HD Intel 630",
                price: "21930.00",
                model: "Core I7 8700",
                productType: "Procesadores"
            },

            {
                id: 14,
                brand: "Intel",
                detail: "Socket LGA1155 / 3.0GHZ",
                price: "900.00",
                model: "G2030",
                productType: "Procesadores"
            },

            {
                id: 20,
                brand: "Genius",
                detail: "Mouse óptico",
                price: "150.00",
                model: "Gen-Opt",
                productType: "Mouses"
            },

            {
                id: 21,
                brand: "Logitech",
                detail: "Mouse óptico",
                price: "180.00",
                model: "Log-Opt",
                productType: "Mouses"
            },

            {
                id: 22,
                brand: "Genius",
                detail: "Mouse inalámbrico",
                price: "380.00",
                model: "Gen-Ina",
                productType: "Mouses"
            },

            {
                id: 23,
                brand: "Logitech",
                detail: "Mouse inalámbrico",
                price: "550.00",
                model: "Log-Ina",
                productType: "Mouses"
            },

            {
                id: 24,
                brand: "Genius",
                detail: "Gamer Mouse óptico",
                price: "250.00",
                model: "Gen-Opt-Gam",
                productType: "Mouses"
            },

            {
                id: 25,
                brand: "Logitech",
                detail: "Gamer Mouse óptico",
                price: "280.00",
                model: "Log-Opt-Gam",
                productType: "Mouses"
            },

            {
                id: 26,
                brand: "Genius",
                detail: "Gamer Mouse inalámbrico",
                price: "480.00",
                model: "Gen-Ina-Gam",
                productType: "Mouses"
            },

            {
                id: 27,
                brand: "Logitech",
                detail: "Gamer Mouse inalámbrico",
                price: "650.00",
                model: "Log-Ina-Gam",
                productType: "Mouses"
            },

            {
                id: 30,
                brand: "Genius",
                detail: "Teclado óptico",
                price: "350.00",
                model: "Tec-Opt",
                productType: "Teclados"
            },

            {
                id: 31,
                brand: "Logitech",
                detail: "Teclado óptico",
                price: "380.00",
                model: "Tec-Opt",
                productType: "Teclados"
            },

            {
                id: 32,
                brand: "Genius",
                detail: "Teclado inalámbrico",
                price: "680.00",
                model: "Tec-Ina",
                productType: "Teclados"
            },

            {
                id: 33,
                brand: "Logitech",
                detail: "Teclado inalámbrico",
                price: "750.00",
                model: "Tec-Ina",
                productType: "Teclados"
            },

            {
                id: 34,
                brand: "Genius",
                detail: "Teclado Mouse óptico",
                price: "550.00",
                model: "Tec-Opt-Gam",
                productType: "Teclados"
            },

            {
                id: 35,
                brand: "Logitech",
                detail: "Teclado Mouse óptico",
                price: "480.00",
                model: "Tec-Opt-Gam",
                productType: "Teclados"
            },

            {
                id: 36,
                brand: "Genius",
                detail: "Teclado Mouse inalámbrico",
                price: "680.00",
                model: "Tec-Ina-Gam",
                productType: "Teclados"
            },

            {
                id: 37,
                brand: "Logitech",
                detail: "Teclado Mouse inalámbrico",
                price: "850.00",
                model: "Tec-Ina-Gam",
                productType: "Teclados"
            },

            {
                id: 40,
                brand: "Samsung",
                detail: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quisquam blanditiis voluptas nihil nulla recusandae, reiciendis illo ratione eveniet similique. Voluptatum quae quasi doloribus quibusdam doloremque odio amet. Numquam, ipsam!",
                price: "2150.00",
                model: "Sam-Led-1",
                productType: "Monitores"
            },

            {
                id: 41,
                brand: "LG",
                detail: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quisquam blanditiis voluptas nihil nulla recusandae, reiciendis illo ratione eveniet similique. Voluptatum quae quasi doloribus quibusdam doloremque odio amet. Numquam, ipsam!",
                price: "1180.00",
                model: "Lg-Led-1",
                productType: "Monitores"
            },

            {
                id: 42,
                brand: "Samsung",
                detail: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quisquam blanditiis voluptas nihil nulla recusandae, reiciendis illo ratione eveniet similique. Voluptatum quae quasi doloribus quibusdam doloremque odio amet. Numquam, ipsam!",
                price: "2380.00",
                model: "Sam-Led-2",
                productType: "Monitores"
            },

            {
                id: 43,
                brand: "LG",
                detail: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quisquam blanditiis voluptas nihil nulla recusandae, reiciendis illo ratione eveniet similique. Voluptatum quae quasi doloribus quibusdam doloremque odio amet. Numquam, ipsam!",
                price: "1550.00",
                model: "Lg-Led-2",
                productType: "Monitores"
            },

            {
                id: 44,
                brand: "Samsung",
                detail: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quisquam blanditiis voluptas nihil nulla recusandae, reiciendis illo ratione eveniet similique. Voluptatum quae quasi doloribus quibusdam doloremque odio amet. Numquam, ipsam!",
                price: "2250.00",
                model: "Sam-Led-3",
                productType: "Monitores"
            },

            {
                id: 45,
                brand: "LG",
                detail: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quisquam blanditiis voluptas nihil nulla recusandae, reiciendis illo ratione eveniet similique. Voluptatum quae quasi doloribus quibusdam doloremque odio amet. Numquam, ipsam!",
                price: "1280.00",
                model: "Lg-Led-3",
                productType: "Monitores"
            },

            {
                id: 46,
                brand: "Samsung",
                detail: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quisquam blanditiis voluptas nihil nulla recusandae, reiciendis illo ratione eveniet similique. Voluptatum quae quasi doloribus quibusdam doloremque odio amet. Numquam, ipsam!",
                price: "2480.00",
                model: "Sam-Led-4",
                productType: "Monitores"
            },

            {
                id: 47,
                brand: "LG",
                detail: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quisquam blanditiis voluptas nihil nulla recusandae, reiciendis illo ratione eveniet similique. Voluptatum quae quasi doloribus quibusdam doloremque odio amet. Numquam, ipsam!",
                price: "1650.00",
                model: "Lg-Led-4",
                productType: "Monitores"
            },

            {
                id: 48,
                brand: "Hitachi",
                detail: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quisquam blanditiis voluptas nihil nulla recusandae, reiciendis illo ratione eveniet similique. Voluptatum quae quasi doloribus quibusdam doloremque odio amet. Numquam, ipsam!",
                price: "8650.00",
                model: "Hit-Led-1",
                productType: "Monitores"
            },

            {
                id: 49,
                brand: "Hitachi",
                detail: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quisquam blanditiis voluptas nihil nulla recusandae, reiciendis illo ratione eveniet similique. Voluptatum quae quasi doloribus quibusdam doloremque odio amet. Numquam, ipsam!",
                price: "9650.00",
                model: "Hit-Led-2",
                productType: "Monitores"
            },

            {
                id: 50,
                brand: "Brother",
                detail: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, quos provident. Voluptatem magni eveniet eius fuga aperiam eos fugiat laudantium quaerat rerum delectus, maxime autem pariatur voluptatum! Illum, eos ipsa!",
                price: "7899.99",
                model: "Hl-1212w",
                productType: "Impresoras"
            },

            {
                id: 51,
                brand: "Epson",
                detail: "Ecotank",
                price: "11020.00",
                model: "L3110",
                productType: "Impresoras"
            },

            {
                id: 52,
                brand: "Epson",
                detail: "Ecotank/Wi-Fi",
                price: "13225.00",
                model: "L3150",
                productType: "Impresoras"
            },

            {
                id: 53,
                brand: "HP",
                detail: "Ink Tank/Wi-Fi Insumos:GT51/52/53/54",
                price: "10120.00",
                model: "HP 410",
                productType: "Impresoras",

            },

            {
                id: 54,
                brand: "HP",
                detail: "Ink Tank/Wi-FI/Insumos:GT51/52/5354",
                price: "10445.00",
                model: "HP 415",
                productType: "Impresoras"
            },

            {
                id: 55,
                brand: "Samsung",
                detail: "SL-M2885FW/Wi-Fi/Full duplex Insumo:Mlt-d116s",
                price: "16210.00",
                model: "multif Samsung",
                productType: "Impresoras"
            },

            {
                id: 56,
                brand: "Brother",
                detail: "Tecnología de impresión: Tecnología láser blanco y negro Velocidad de impresión max. Negro: Hasta 21ppm Negro Resoluciones de la Impresión máxima (dpi): Hasta 2400 x 600 dpi Capacidad Estandard de Papel (hojas): Bandeja con capacidad para 150 hojas Capacidad Opcional de Papel (hojas): No Interfaz/interfaces Estandard: USB 2.0 de Velocidad Total Controlador de Impresión: Windows® Mac OS® Ciclo de Trabajo Mensual Max.: Hasta 10,000 páginas Volumen de Impresión Mensual Recomendado: 250 a 1,800 páginas Primera página impresa: Menos de 10 seg Memoria Estándar (MB): 1MB Memoria Opcional (MB): No Pantalla LCD: No Velocidad del Procesador (CPU Processor): 200 Mhz Modo Ahorro de Tóner: Sí Tipos de papel: Papel normal, papel reciclado Manejo de Papel - Bandeja para Papel: A4, Carta, Legal, Folio Alimentación Manual - Tamaño del Papel: A4, Carta, Legal, Folio Bandeja para Papel -Peso del papel: 65 a 105 g/m2 Capacidad de Papel - Salida (hojas): Hasta 50 hojas de 80 g/m2 Energy Star: Si Dimensiones de la Unidad: largo 34.0 cm x ancho 23.8 cm x 18.9 alto",
                price: "8999.00",
                model: "Hl 1200",
                productType: "Impresoras"
            },

            {
                id: 57,
                brand: "HP",
                detail: "Ecotank/Wi-Fi",
                price: "15620.00",
                model: "K34510",
                productType: "Impresoras"
            },

            {
                id: 58,
                brand: "HP",
                detail: "Ecotank",
                price: "29020.00",
                model: "JP3110",
                productType: "Impresoras"
            },

            {
                id: 59,
                brand: "HP",
                detail: "Ecotank",
                price: "95020.00",
                model: "XYZ110",
                productType: "Impresoras"
            },

            {
                id: 60,
                brand: "Sound Blaster",
                detail: "Muy buenos parlantes",
                price: "15920.00",
                model: "Creative Sound Blaster E5 Alta Resolución Usb Dac 600 Ohm Am",
                productType: "Parlantes"
            },

            {
                id: 70,
                brand: "Toshiba",
                detail: "Disco externo 2 TB",
                price: "5920.00",
                model: "Tos-Disk-1",
                productType: "Discos rígidos"
            },

            {
                id: 71,
                brand: "Western Digital",
                detail: "Disco externo 2 TB",
                price: "4920.00",
                model: "WD-Disk-1",
                productType: "Discos rígidos"
            },

            {
                id: 72,
                brand: "Toshiba",
                detail: "Disco externo 2 TB",
                price: "2920.00",
                model: "Tos-Disk-2",
                productType: "Discos rígidos"
            },

            {
                id: 73,
                brand: "Western Digital",
                detail: "Disco externo 2 TB",
                price: "1920.00",
                model: "WD-Disk-2",
                productType: "Discos rígidos"
            },

            {
                id: 80,
                brand: "Radeon",
                detail: "Esta placa esta buena, no se si mejor que la competencia",
                price: "4920.00",
                model: "Radeon-Placa-1",
                productType: "Placas de video"
            },

            {
                id: 81,
                brand: "Nvidia",
                detail: "Esta placa esta buena",
                price: "5920.00",
                model: "Nvidia-Placa-1",
                productType: "Placas de video"
            },

            {
                id: 82,
                brand: "Radeon",
                detail: "Esta placa esta mejor que la anterior, no se si mejor que la competencia",
                price: "8920.00",
                model: "Radeon-Placa-2",
                productType: "Placas de video"
            },

            {
                id: 81,
                brand: "Nvidia",
                detail: "Esta placa esta más buena que la otra",
                price: "9920.00",
                model: "Nvidia-Placa-2",
                productType: "Placas de video"
            },

            {
                id: 90,
                brand: "Corsair",
                detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eligendi quia natus impedit suscipit voluptate architecto blanditiis nulla eius, fugiat ipsam corrupti quasi culpa vero, tempora laudantium consequatur adipisci! Quisquam!",
                price: "2345.99",
                model: "1000 HP",
                productType: "Fuentes de alimentación"
            },

            {
                id: 91,
                brand: "Antec",
                detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eligendi quia natus impedit suscipit voluptate architecto blanditiis nulla eius, fugiat ipsam corrupti quasi culpa vero, tempora laudantium consequatur adipisci! Quisquam!",
                price: "2454.99",
                model: "1000 HP",
                productType: "Fuentes de alimentación"
            },

            {
                id: 92,
                brand: "Thermaltake",
                detail: "Eligendi quia natus impedit suscipit voluptate architecto blanditiis nulla eius, fugiat ipsam corrupti quasi culpa vero, tempora laudantium consequatur adipisci! Quisquam!",
                price: "15345.99",
                model: "Thermaltake-1",
                productType: "Fuentes de alimentación"
            },

            {
                id: 100,
                brand: "Creative",
                detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eligendi quia natus impedit suscipit voluptate architecto blanditiis nulla eius, fugiat ipsam corrupti quasi culpa vero, tempora laudantium consequatur adipisci! Quisquam!",
                price: "6988.99",
                model: "Creative-Creativa",
                productType: "Webcam"
            },

            {
                id: 101,
                brand: "Papalook",
                detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eligendi quia natus impedit suscipit voluptate architecto blanditiis nulla eius, fugiat ipsam corrupti quasi culpa vero, tempora laudantium consequatur adipisci! Quisquam!",
                price: "7985.99",
                model: "Papalook-Paparulo",
                productType: "Webcam"
            },

            {
                id: 102,
                brand: "Creative",
                detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eligendi quia natus impedit suscipit voluptate architecto blanditiis nulla eius, fugiat ipsam corrupti quasi culpa vero, tempora laudantium consequatur adipisci! Quisquam!",
                price: "8455.99",
                model: "Creative-Creativa-1",
                productType: "Webcam"
            },

            {
                id: 103,
                brand: "Papalook",
                detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eligendi quia natus impedit suscipit voluptate architecto blanditiis nulla eius, fugiat ipsam corrupti quasi culpa vero, tempora laudantium consequatur adipisci! Quisquam!",
                price: "9966.99",
                model: "Papalook-Paparulo-1",
                productType: "Webcam"
            },

            {
                id: 104,
                brand: "Creative",
                detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eligendi quia natus impedit suscipit voluptate architecto blanditiis nulla eius, fugiat ipsam corrupti quasi culpa vero, tempora laudantium consequatur adipisci! Quisquam!",
                price: "17454.99",
                model: "Creative-Creativa-2",
                productType: "Webcam"
            },

            {
                id: 105,
                brand: "Papalook",
                detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eligendi quia natus impedit suscipit voluptate architecto blanditiis nulla eius, fugiat ipsam corrupti quasi culpa vero, tempora laudantium consequatur adipisci! Quisquam!",
                price: "18552.99",
                model: "Papalook-Paparulo-2",
                productType: "Webcam"
            },

            {
                id: 106,
                brand: "Creative",
                detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eligendi quia natus impedit suscipit voluptate architecto blanditiis nulla eius, fugiat ipsam corrupti quasi culpa vero, tempora laudantium consequatur adipisci! Quisquam!",
                price: "19665.99",
                model: "Creative-Creativa-3",
                productType: "Webcam"
            },

            {
                id: 107,
                brand: "Papalook",
                detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eligendi quia natus impedit suscipit voluptate architecto blanditiis nulla eius, fugiat ipsam corrupti quasi culpa vero, tempora laudantium consequatur adipisci! Quisquam!",
                price: "17556.99",
                model: "Papalook-Paparulo-3",
                productType: "Webcam"
            },

            {
                id: 108,
                brand: "Creative",
                detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eligendi quia natus impedit suscipit voluptate architecto blanditiis nulla eius, fugiat ipsam corrupti quasi culpa vero, tempora laudantium consequatur adipisci! Quisquam!",
                price: "19454.99",
                model: "Creative-Creativa-4",
                productType: "Webcam"
            },

            {
                id: 109,
                brand: "Papalook",
                detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eligendi quia natus impedit suscipit voluptate architecto blanditiis nulla eius, fugiat ipsam corrupti quasi culpa vero, tempora laudantium consequatur adipisci! Quisquam!",
                price: "19252.99",
                model: "Papalook-Paparulo-4",
                productType: "Webcam"
            }

        ]
    }
}