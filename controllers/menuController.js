menuController = {
  listarPlatos: () => {
    return [
      {
        id: 1,
        nombre: "Carpaccio fresco",
      
        precio: 65.5,
        imagenUrl: "/images/Carpaccio-de-salmon.jpg",
      },
      {
        id: 2,
        nombre: "Risotto de berenjenao",
        descripcion: "Risotto de berenjena y queso de cabra",
        precio: 47.0,
        imagenUrl: "/images/Risotto-berenjena-queso-cabra.jpg",
      },
      {
        id: 3,
        nombre: "Mousse de arroz",
        descripcion: "Mousse de arroz con leche y aroma de azahar",
        precio: 27.5,
        imagenUrl: "/images/Mousse-de-arroz-con-leche.jpg",
      },
      {
        id: 4,
        nombre: "Espárragos blancos",
        descripcion:
          "Espárragos blancos con vinagreta de verduras y jamón ibérico",
        precio: 37.5,
        imagenUrl: "/images/esparragos.png",
      },
    ];
  },
};

module.exports = menuController;
