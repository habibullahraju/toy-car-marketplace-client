import { useEffect } from "react"

const useTitle = (title) =>{
    useEffect(()=>{
        document.title = `${title} - Glaze Car`
    },[title])
}

export default useTitle;