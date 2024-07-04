$(document).ready(function() {
    const arrow = $('.arrow');
    const arr1 = $('.arr1');
    const arr2 = $('.arr2');


    const slider = $('.slider');
    if (window.innerWidth > 991) {
        arrow.hide();
        slider.mouseenter(() => {
            arrow.fadeIn();
            arrow.css('margin', '0px');
          
        }).mouseleave(() => { 
            arrow.fadeOut();
            arr1.css('margin-left', '15px');
            arr2.css('margin-right', '15px');
        });
        console.log("innerWidth > 900");
    }else{
        arrow.show();
        console.log("show");

    }

/*
        let serv1=$('.serv-1');
        let serv2=$('.serv-2');
        let serv3=$('.serv-3');
        let serv=$(".serv");
        let rotar=$('.rotar')
        
   tarjer();

     
    function tarjer() {
        // Verificar si el ancho no es '36%' y establecerlo si no lo es
       

        serv.mouseenter(function() {
            $(this).css('width', '36%');
            rotar.css('transform', 'rotate(0)');
            if (serv2.css('width') !== '36%' && serv3.css('width') !== '36%') {
                serv1.css('width', '36%');
            }
        }).mouseleave(function() {
            $(this).css('width', '25%');
            rotar.css('transform', 'rotate(-90deg)');
            if (serv2.css('width') !== '36%' && serv3.css('width') !== '36%') {
                serv1.css('width', '36%');
            }
        });
    }

*/

    // Validar tamaño de pantalla al cargar y redimensionar
 /*   window.addEventListener('resize', () => {
      if (window.innerWidth <= 900) {
     //   arrow.hide();
      }
    });
*/
    /*--------------------------------- 
     // Arreglo de objetos JSON para el carrusel
     let carrucel = [
        {
            'img': '/assets/backgrounds/fondo-main.png',
            'titulo': "Medio Ambiente, Cambio Climático y Sostenibilidad",
            'descrip': "Diseñamos e Implementamos el Sistema de gestión ambiental conforme a la ISO 14001:2015, ayudando a las organizaciones a gestionar sus impactos ambientales, cumplir con la normativa aplicable y avanzar hacia prácticas más sostenibles.",
            'ruta': '[/medio-ambiente]'
        },
        {
            'img': '/assets/backgrounds/slier2.png',
            'titulo': "Seguridad y Salud",
            'descrip': "Diseñamos e implementamos el Sistema de gestión de SST conforme a la naturaleza de su organización y a la Ley N° 29783, Ley de SST, ayudando a las empresas a cumplir con la legislación vigente, mejorar las condiciones laborales y reducir los riesgos de accidentes y enfermedades ocupacionales; que contribuye a crear un ambiente de trabajo seguro y saludable, lo que se traduce en una fuerza laboral más comprometida y productiva.",
              'ruta': '[/seguridad-salud]'
        },
        {
            'img': '/assets/backgrounds/slider3.png',
            'titulo': "Gestión de Riesgos Ocupacionales",
            'descrip': "Efectuamos y garantizamos un estricto seguimiento a la empresa constructora, para que el proyecto se ejecute cumpliendo el Expediente Técnico, con la calidad y seguridad, en el tiempo y con el costo estipulados en el Contrato.",
              'ruta': '[/supervision]'
        }
    ];

    
    // Variables para manejar el estado del carrusel
    let cont = 0;
    let totalImages = carrucel.length;
    let intervalId;

    // Elementos del DOM para modificar
    let fondo = $('.fondo');
    let title = $('.title-c');
    let descrip = $('.descrip-c');
    let ruta = $('.btn_info');

    function showImage(index) {
  

        // Mostrar nueva imagen después de ocultar título y descripción
        setTimeout(function() {
            fondo.addClass('fade-out');
            setTimeout(function() {
                fondo.attr('src', carrucel[index].img).removeClass('fade-out');
                title.text(carrucel[index].titulo)
                descrip.text(carrucel[index].descrip).css('transform', 'translateY(0)');
                ruta.attr('[routerLink]',carrucel[index].ruta);
                console.log(carrucel[index].ruta.toString);
            }, 300); 
        }, 300); 

        /*
        clearInterval(intervalId);
        startInterval();
        
    }

    // Mostrar la primera imagen al cargar la página
    showImage(cont);

    // Manejar clics en las flechas de navegación
    $('.arr1').click(function() {
        cont = (cont - 1 + totalImages) % totalImages;
        showImage(cont);
    });

    $('.arr2').click(function() {
        cont = (cont + 1) % totalImages;
        showImage(cont);
    });

    /*
    // Función para iniciar el intervalo de cambio automático
    function startInterval() {
        intervalId = setInterval(function() {
            $('.arr2').click(); // Simula un clic en la flecha derecha para avanzar automáticamente
        }, 10000); // Intervalo de cambio automático en milisegundos (10 segundos en este caso)
    }

    // Iniciar el intervalo automáticamente al cargar la página
    startInterval();

*/



})