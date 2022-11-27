import pdfIcon from "./icons/pdf.png";
import txtIcon from "./icons/txt.png";
import folderIcon from "./icons/folder.png";
import browserIcon from "./icons/browser.png";
import firefoxIcon from "./icons/firefox.png";
import operaIcon from "./icons/opera.png";
import chromeIcon from "./icons/chrome.png";

import facebookIcon from "./icons/facebook.png";
import instagramIcon from "./icons/instagram.png";
import linkedinIcon from "./icons/linkedin.png";
import youtubeIcon from "./icons/youtube.png";
import twitterIcon from "./icons/twitter.png";
import gitIcon from "./icons/github.png";

import wallpaper1 from "./wallpapers/wallpaper1.jpg";
import wallpaper2 from "./wallpapers/wallpaper2.jpg";
import { DataNode } from "antd/lib/tree";


function getIndexNav(txt: string): number {
  return navigator.userAgent.toLowerCase().indexOf(txt);
}

function getNavIcon() {
  if (getIndexNav("chrome")) {
    return chromeIcon;
  } else if (getIndexNav("firefox")) {
    return firefoxIcon;
  } else if (getIndexNav("opera")) {
    return operaIcon;
  } else {
    return browserIcon;
  }
}

export const dummyItem = [
  //{
  //  name: "Curriculum Juan Mansilla.pdf",
  //  position: {
  //    left: 25,
  //    top: 25,
  //  },
  //  icon: pdfIcon,
  //  showIcon: true,
  //  dimensions:{
  //    width: 1000,
  //    height: 450,
  //    minWidth: 0,
  //    minHeight: 0
  //  },
  //},
  {
    name: "modulos ofbiz.txt",
    icon: txtIcon,
    html: `<p>Desarrollo de modulos para apache <a href="https://ofbiz.apache.org/" target="_blank" rel="noopener"><strong>ERP Apache ofbiz</strong></a></p>
    <p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/ThemeSaphir.png/1200px-ThemeSaphir.png" style='width: 100%; heigth: 100%;'  /></p>`,
    showIcon: false,
    dimensions: {
      width: 1000,
      height: 450,
      minWidth: 0,
      minHeight: 0
    },
  },
  {
    name: "motor de itineriarios.txt",
    icon: txtIcon,
    html: `
    El Motor de itinerarios permite la administración de itinerarios para diferentes empresas que conforman el grupo GTP (Turbus, JAC, Buses Biobío).
    <p><img src="https://drive.google.com/uc?id=1jvnOLiLc1gQEBuD_1DWF89n-X941H96m" style='width: 100%; heigth: 100%;'  /></p>
    <p><img src="https://drive.google.com/uc?id=14uxEP0RqhVwPuO7AyMaauBKOt5O_bdz7" style='width: 100%; heigth: 100%;'  /></p>
    `,
    showIcon: false,
    dimensions: {
      width: 1000,
      height: 450,
      minWidth: 0,
      minHeight: 0
    },
  },
  {
    name: "formularios dinamicos.txt",
    icon: txtIcon,
    html: `<p>El <strong>Gestor para la autoadministraci&oacute;n de formularios</strong> permite la asignacion de un layout adem&aacute;s de diferentes inputs (archivo, texto, num&eacute;ricos, Rut, selectores autoadministrables, selectores de ciudades, etc.) por medio de un drag and drop que permite su construcci&oacute;n, tambi&eacute;n permite enlazar correos de destino y a&ntilde;adir un mensaje para el cuerpo del correo.</p>
    <p><br />Al crear un formulario este se guarda en una base de datos como un componente el cual puede ser utilizado por el CMS para ser incluido dentro de una de sus p&aacute;ginas.</p>
    <p><br />Cada vez que es utilizado el formulario env&iacute;a los datos a los destinatarios y guarda el registro en una base de datos.</p>
    <p><a href="https://drive.google.com/file/d/15wAuV3xbBihW_RZ7jyclMsOqq1ROli-h/view?usp=sharing"><strong><img src="https://drive.google.com/uc?id=15wAuV3xbBihW_RZ7jyclMsOqq1ROli-h" alt="" style='width: 100%; heigth: 100%;' /></strong></a></p>
    <p><img src="https://drive.google.com/file/d/1gl-Z8KAhFBoTqu64eb4R8YlR1hj-LXrI/view?usp=sharing" alt="" /><img src="https://drive.google.com/file/d/1gl-Z8KAhFBoTqu64eb4R8YlR1hj-LXrI" alt="" /></p>
    <p><img src="https://drive.google.com/uc?id=1gl-Z8KAhFBoTqu64eb4R8YlR1hj-LXrI" style='width: 100%; heigth: 100%;'  /></p>
    `,
    showIcon: false,
    dimensions: {
      width: 1000,
      height: 450,
      minWidth: 0,
      minHeight: 0
    },
  },
  {
    name: "gestor de contenidos.txt",
    icon: txtIcon,
    html: `<p><strong>Gestor de contenidos (CMS)</strong> para la autoadministraci&oacute;n del sitio web por medio de componentes.</p>
    <p>El gestor permite <strong>la creaci&oacute;n y modificaci&oacute;n de versiones del sitio web</strong>, cada versi&oacute;n incluye: un header y footer adem&aacute;s de las diferentes p&aacute;ginas, cada p&aacute;gina se puede personalizar modificando colores, texto, im&aacute;genes, etc. todo por medio de la distribuci&oacute;n de componentes.</p>
    <p><br />Al crear una versi&oacute;n, se genera un JSON con la estructura del sitio web creado que luego es guardada en una base de datos para posteriormente ser consultada y generada.</p>
    <p><img src="https://drive.google.com/uc?id=1pQmnD9dzvInjATNQcyygXGV3Xxjzq3hL" style='width: 100%; heigth: 100%;' /></p>
    <p><img src="https://drive.google.com/uc?id=162UYAdeCSaGsPKiZX88bpdWyiVsUetSy" style='width: 100%; heigth: 100%;'  /></p>
    <p><img src="https://drive.google.com/uc?id=1lgNtc1bYg7x2rPdbbXGibEH8HVE2yICW" style='width: 100%; heigth: 100%;'  /></p>
    `,
    showIcon: false,
    dimensions: {
      width: 1000,
      height: 450,
      minWidth: 0,
      minHeight: 0
    },
  },
  {
    name: "reloj control.txt",
    icon: txtIcon,
    html: "<p>Hola</p>",
    showIcon: false,
    dimensions: {
      width: 1000,
      height: 450,
      minWidth: 0,
      minHeight: 0
    },
  },
  {
    name: "Mis Documentos",
    position: {
      left: 60,
      top: 25,
    },
    icon: folderIcon,
    showIcon: true,
    dimensions: {
      width: 580,
      height: 450,
      minWidth: 0,
      minHeight: 0
    },
    files: [
      {
        "title": "desarrollos laborales",
        "key": "0-0",
        "children": [
          {
            "title": "opciones",
            "key": "0-0-0",
            "children": [
              {
                "title": "modulos ofbiz.txt",
                "key": "0-0-0-0",
                "isLeaf": true
              }
            ]
          },
          {
            "title": "turbus",
            "key": "0-0-1",
            "children": [
              {
                "title": "motor de itineriarios.txt",
                "key": "0-0-1-0",
                "isLeaf": true
              }
            ]
          },
          {
            "title": "starken",
            "key": "0-0-2",
            "children": [
              {
                "title": "formularios dinamicos.txt",
                "key": "0-0-2-0",
                "isLeaf": true
              },
              {
                "title": "gestor de contenidos.txt",
                "key": "0-0-2-1",
                "isLeaf": true
              }
            ]
          }
        ]
      },
      {
        "title": "desarrollos personales",
        "key": "0-1"
      }
    ]
  },
  {
    name: "Recursos.txt",
    position: {
      left: 70,
      top: 150,
    },
    icon: txtIcon,
    showIcon: true,
    dimensions: {
      width: 580,
      height: 450,
      minWidth: 0,
      minHeight: 0
    },
    html: `<p>Listado de Recursos:</p>
           <ul>
              <li><a href="https://ant.design/" target="_blank">AntDesign</a></li>
              <li><a href="https://es.reactjs.org/" target="_blank">React</a></li>
           </ul>`
  },
  {
    name: "Mis Imagenes",
    position: {
      left: 210,
      top: 25,
    },
    icon: folderIcon,
    showIcon: true,
    dimensions: {
      width: 580,
      height: 450,
      minWidth: 0,
      minHeight: 0
    },
    files: [
      {
        "title": "fondo de Pantalla 2.jpg",
        "key": "1",
        "isLeaf": true
      },
      {
        "title": "fondo de Pantalla 1.jpg",
        "key": "2",
        "isLeaf": true
      }
    ]
  },
  //{
  //  name: "Mis Videos",
  //  position: {
  //    left: 350,
  //    top: 25,
  //  },
  //  icon: folderIcon,
  //  showIcon: true,
  //  dimensions: {
  //    width: 580,
  //    height: 450,
  //    minWidth: 0,
  //    minHeight: 0
  //  },
  //  files: [
  //    {
  //      "title": "fondo de Pantalla 2.jpg",
  //      "key": "1",
  //      "isLeaf": true
  //    },
  //    {
  //      "title": "fondo de Pantalla 1.jpg",
  //      "key": "2",
  //      "isLeaf": true
  //    }
  //  ]
  //},
  {
    name: "Navegador",
    position: {
      left: 72,
      top: 275,
    },
    icon: getNavIcon(),
    showIcon: true,
    dimensions: {
      width: 1000,
      height: 450,
      minWidth: 0,
      minHeight: 0
    }
  },
  {
    name: "fondo de Pantalla 1.jpg",
    icon: txtIcon,
    img: wallpaper1,
    showIcon: false,
    dimensions: {
      width: 1000,
      height: 450,
      minWidth: 0,
      minHeight: 0
    },
  },
  {
    name: "fondo de Pantalla 2.jpg",
    icon: txtIcon,
    img: wallpaper2,
    showIcon: false,
    dimensions: {
      width: 1000,
      height: 450,
      minWidth: 0,
      minHeight: 0
    },
  },
];


export const browserIcons = [
  {
    name: "Facebook",
    icon: facebookIcon,
    url: ""
  },
  {
    name: "Instagram",
    icon: instagramIcon,
    url: "https://www.instagram.com/juanmansillaasenjo/"
  },
  {
    name: "Linkedin",
    icon: linkedinIcon,
    url: "https://www.linkedin.com/in/juangabrielmansillaasenjo/"
  },
  {
    name: "Youtube",
    icon: youtubeIcon,
    url: "https://www.youtube.com/channel/UCo_pBiRfdbZ6xOy_aCmw2Pg"
  },
  {
    name: "Twitter",
    icon: twitterIcon,
    url: "https://twitter.com/JMansillaAsenjo"
  },
  {
    name: "Github",
    icon: gitIcon,
    url: "https://github.com/settings/profile"
  },
];


export const wallpapers = [
  {
    background: wallpaper1,
  },
  {
    background: wallpaper2,
  }
];