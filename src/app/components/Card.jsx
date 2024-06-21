/** 
 * @author 李耕棋 <s1040704@mqjh.tw>
 */

import Image from "next/image";

export default function CustomCard({item}){
    return(
        <div className = "border">
            <Image src = {item.Picture.PictureUrl1} alt={item.Picture.PictureDescription1} width="200" height="100" />
            <div>{item.ScenicSpotName}</div>  
        </div>
    )
}


