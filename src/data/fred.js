//Esta es una array para una conexión con la APIFred, tengo la APIKey, pero no lo he terminado// 
export default {
    API_KEY : '5d8c1ef70ca616fecc21e57339f5a8fa',
    BASE_URL : 'http://api.stlouisfed.org/fred/series/',
    SERIES_ID : {
      shaded : 'T10Y2Y',
      bar : 'GDPCA',
      line : 'DGS10-T10YIE'
    },
    API_OPTIONAL_PARAMS : {
      GDPCA : {
          frequency  : 'a',
          aggregation_method : 'avg'
      },
      T10Y2Y : {
          frequency  : 'a',
          aggregation_method : 'avg'
      },
      DGS10 : {
          frequency  : 'a',
          aggregation_method : 'avg'
      },
      T10YIE : {
          frequency  : 'a',
          aggregation_method : 'avg'		
      }
    }
    
};