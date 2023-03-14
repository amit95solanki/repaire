import { useQuery } from "react-query";
import axios from "axios";

const fatchingProductdata = () => {
  return axios.get("http://209.97.156.170:7071/owner/get_all_product");
};

export const useProductData = (onSuccess, onError) => {
  return useQuery("product-data", fatchingProductdata, {
    // cacheTime:5000,
    // staleTime:0,
    // refetchOnMount:true,
    // refetchOnWindowFocus:true,
    // refetchInterval:2000,
    // refetchIntervalInBackground:true,
    // enabled:false,
    onSuccess,
    onError,

    // select:(data)=>{
    //     const superHeroName= data.data.map((hero)=>hero.hero)
    // },
  });
};
