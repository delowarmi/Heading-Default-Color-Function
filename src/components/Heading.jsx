import React from 'react'

const Heading = ({className,text}) => {
        // console.log(text.split("#")) 
        text.split(" ").map(item =>{
                // console.log(item); 
                // console.log(item.includes("#")) 
                // # tag er modder word k khujte includes likhte hoy 
                if(item.includes("#")){
                        let arr= item.split("")
                         arr.pop()
                         arr.shift()
                        // console.log(arr) 
                        // join koranor jnno "join likte hoy"
                        console.log(arr.join(""));
                         
                        // console.log(item);
                }

        })
  return (
    <h1 className={`${className}`}>{text}</h1>
  )
}

export default Heading
