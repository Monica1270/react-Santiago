import { useEffect } from "react"

//1er paso crear la fucnion 
const withLogging = (wrappedComponent) => {
    const ComponentWithLogging = (props) => {
        useEffect(() => {
            console.log('👌${WrappedComponent.name}se monto')

        }, [])
        return(
        <wrappedComponent {...props}/>
        )
    }
    return ComponentWithLogging
}

export default withLogging