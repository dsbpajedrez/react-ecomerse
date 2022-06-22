import {useState,useEffect} from 'react'

const useGetProducts = (API) => {
	const [productos, setProductos] = useState([])
	useEffect(()=>{
		fetch(API)
			.then(respuesta => respuesta.json())
			.then(data => {
				setProductos(data)
			})
	},[])    
  return productos
}

export default useGetProducts