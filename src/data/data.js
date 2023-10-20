// Esta es una array para valores de apriete, no he tenido tiempo de en lazarla//
export const torques = [
    
    {
      id: 1.1,
      calidad: "Estándar",
      acero: {
        grado: 2,
        apriete: 6,
      },
      id: 1.2,
      acero_inoxidable: {
        grado: 304,
        apriete: 8, 
      },
      id: 1.3,
      aluminio: {
        grado: 6061,
        apriete: 4,
      }
    },
    
    {
      id: 2.1,
      calidad: "Media",
      acero: {
        grado: 5,
        apriete: 10,
      },
      id: 2.2,
      acero_inoxidable: {
        grado: 316,
        apriete: 12,
      },
      id: 2.3,
      aluminio: {
        grado: 7075,
        apriete: 6,
      }
    },
    
    {
      id: 3.1,
      calidad: "Alta",
      acero: {
        grado: 8,
        apriete: 15,
      },
      id: 3.2,
      acero_inoxidable: {
        grado: 317,
        apriete: 18,
      },
      id: 3.3,
      aluminio: {
        grado: 7075-T6,
        apriete: 8,
      }
    }
];


export const getTorque = (grado) =>{
    const torque = torques.find((torque) => torque.grado === grado);
    return torque;
}
  