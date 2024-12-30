import { Image, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export default function LinkProfile({textContent, iconSrc, pathname, role}){
    return (
        <Link onMouseOver={(e)=>{
            e.currentTarget.style.backgroundColor = "#388e86"
        }}  onMouseOut={(e)=>{
            e.currentTarget.style.backgroundColor = "#259e93"
        }} to={pathname} style={{width:"100%",color:"white", fontWeight:"bold", paddingLeft:"15px", backgroundColor:"#259e93", display:"flex",gap : "16px", justifyContent:"flex-start", alignItems:"center", transition:"400ms"}}>
            <Image src={`images/${iconSrc}`} h={10} w={10} />
            <Text>{textContent}</Text>
        </Link>
    )
}