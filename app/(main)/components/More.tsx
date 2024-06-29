import Image from 'next/image'
import React from 'react'
import styles from '@/app/styles/Main.module.scss'
import logo from '@/assets/Quick actions.svg'
import CustomMotionDiv from '@/app/CustomMotionDiv'
interface AboutCardProps{
  desc:string,
   title:string,
   image:string,
   index:number
 }
 const data = [{
    image:logo,
    title:"Quick actions",
    desc:"Streamline your workflow with customizable shortcuts.",
 },
 {
  image:logo,
  title:"Quick actions",
  desc:"Streamline your workflow with customizable shortcuts.",
},
{
  image:logo,
  title:"Quick actions",
  desc:"Streamline your workflow with customizable shortcuts.",
}]
const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}
 const MoreCard = ({desc , title , image,index}:AboutCardProps) =>{
   return(
     <CustomMotionDiv
     variants={variants}
     initial='hidden'
     animate='visible'
     transition={{
        delay: 0.15 * index,
        ease: "easeInOut",
        duration: 0.5,
     }}
     className={styles.more_card}>
       <Image width={300} src={image} alt='icon'/>
         <h4>{title}</h4>
         <p>{desc}</p>
     </CustomMotionDiv>
   )
 }
const More = () => {
  return (
    <div className={styles.more}>
      <div className="container">
         <h2>And so much more...</h2>
         <h3>Your customers are always connected.  Why should your CRM be any different?</h3>

         <div className={styles.more_block}>
            {data.map((item,index)=>(
              <MoreCard 
              key={index} 
              index={index} 
              desc={item.desc}
              image={item.image}
              title={item.title}/>
            ))}
         </div>
      </div>
    </div>
  )
}

export default More
