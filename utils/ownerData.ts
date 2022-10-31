const business = {
  celular: "celular",
  ropa: "ropa",
  comida: "comida",
  garage:"garage"
};

// set the mode of the shop
export const businessType = business.comida;

export const showLogoType = `/logo&banner/${businessType}/logo.png`;
export const showLogoTypeGif = `/logo&banner/${businessType}/logo.gif`;
export const showBusinesName =
  businessType === business.celular
    ? "Equipos Mobiles"
    : businessType === business.ropa
    ? "Ropa a la Moda"
    :businessType === business.garage
    ?"Venta de garage"
    : "Viandas del Sur";

export const showFavIcon = `${businessType}/icon-192x192.png`;
export const ownerEmail ="gregorycomida@gmail.com"
export const showBannerType = `/logo&banner/${businessType}/banner.gif`;
export const whatsaapNumber = "59897097479";
export const emailNotifications = "gregory.notificaciones@gmail.com"
export const msgOWnerContact = "Hola tengo una consulta sobre tu tienda";
export const instagramAccount = "";
export const facebookAccount = "";
export const telefono = "24180116";
export const msgPrincipal = (status: string): string =>
  status !== "approved"
    ? "Tu compra esta casi lista, cualquier duda estamos a las ordenes 😊"
    : "Felicidades! tu compra ha sido confirmada 😀";

export const footer = `Puedes comunicarte con nostros +${whatsaapNumber}`;
export const textDisplayBtn = "Ir a la Tienda";

export const customColor: number[] =
  businessType === "comida"
    ? [237, 181, 6]
    : businessType === "celular"
    ? [71, 104, 224]
    : [124, 124, 124];

const RopaMode = {
  50: "#bcbcbc", //BOTÓN HOVER
  100: "#7c7c7c", // BOTÓN ACTIVE & SCROLL & CARGA
  200: "#7c7c7c",
  300: "#7c7c7c",
  400: "#000000", //HEADER
  500: "#7c7c7c", // TEXTO CARD
  600: "#7f7f7f", //TITULO CARD
  700: "#424242",

  800: "#424242",
  900: "#000000",
};
const ComidaMode = {
  100: "#f69d55",
};


const GarageMode = {
  50: "#acb4c4", //BOTÓN HOVER
  100: "#4764e0", // BOTÓN ACTIVE & SCROLL & CARGA
  200: "#acb4c4",
  300: "#747c8d",
  400: "#050A30", //HEADER
  500: "#5473fc", // TEXTO CARD
  600: "#050a30", //TITULO CARD
  700: "#041424",
  800: "#041424",
  900: "#041424",
};

const celularMode = {
  50: "#acb4c4", //BOTÓN HOVER
  100: "#4764e0", // BOTÓN ACTIVE & SCROLL & CARGA
  200: "#acb4c4",
  300: "#747c8d",
  400: "#050A30", //HEADER
  500: "#5473fc", // TEXTO CARD
  600: "#050a30", //TITULO CARD
  700: "#041424",
  800: "#041424",
  900: "#041424",
};
export const themeOwner =
  businessType === "celular"
    ? celularMode
    : businessType === "ropa"
    ? RopaMode
    : businessType ==="garage"
    ? GarageMode
    : ComidaMode;

const documentSettingsCelular = {
  metaDescription: "Tecnologia, Equipos Mobiles",
  metaKeyWords: "Iphone, Samsung, Android",
};


const documentSettigsVianda = {
  metaDescription: "Viandas sanas y saludables.",
  metaKeyWords: "VIANDAS, DELIVERY, URUGUAY, SALUDABLE, SANO, COMIDA",
};
const documentSettigsRopa = {
  metaDescription: "Prendas de calidad a la moda",
  metaKeyWords: "PRENDAS, ROPA, MODA DISEÑO, CALIDAD",
};
const documentSettigsGarage = {
  metaDescription: "Ofertas electrodomesticos",
  metaKeyWords: "cocina, lavaropa, tv cama, heladera, mesa",
};


export const documentSetttings =
  businessType === "celular"
    ? documentSettingsCelular
    : businessType === "ropa"
    ? documentSettigsRopa
    : businessType === "garage"
    ? documentSettigsGarage
    : documentSettigsVianda;



export const manifestPath = `${businessType}/manifest.json`;


documentSettigsVianda
