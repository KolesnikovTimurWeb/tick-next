import styles from "@/app/styles/Main.module.scss"
import Image from "next/image"
import aboutImg from '@/assets/about-img.webp';
import CustomMotionDiv from "@/app/CustomMotionDiv";
import avatar from "@/assets/avatar.svg";
import company1 from "@/assets/companies/Census.svg";
import company2 from "@/assets/companies/Fivetran.svg";
import company3 from "@/assets/companies/Gmail.svg";
import company4 from "@/assets/companies/Hightouch.svg";
import company5 from "@/assets/companies/Outlook.svg";
import company6 from "@/assets/companies/Segment.svg";


const variants = {
   hover:{transition: { duration: 0.5 },  scale:0}
 }
 const variants2 = {
   initial: { opacity: 0, scale:0 , x:-250},
   hover: {transition: { duration: 0.3 }, opacity: 1, scale:1 },
 }
 const variants3 = {
   hover:{transition: { duration: 0.2 }, x:-250}
 }
 const variants4 = {
   hover:{transition: { duration: 0.2 }, x:250}
 }
const reviews = [
   {
   name:"Timur Kolesnikov" ,
   desc:"Can we have a feature to add a custom domain to IndiePage?",
    icon:"https://insigh.to/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmarc.be50937c.png&w=32&q=75",
},
{
   name:"Timur Kolesnikov" ,
   desc:"Can we have a feature to add a custom domain to IndiePage?",
    icon:"https://insigh.to/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmarc.be50937c.png&w=32&q=75",
},
{
   name:"Timur Kolesnikov" ,
   desc:"Can we have a feature to add a custom domain to IndiePage?",
    icon:"https://insigh.to/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmarc.be50937c.png&w=32&q=75",
},
{
   name:"Timur Kolesnikov" ,
   desc:"Can we have a feature to add a custom domain to IndiePage?",
    icon:"https://insigh.to/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmarc.be50937c.png&w=32&q=75",
}
]
const cards = [
   {
      title:"user",
      button:"Classis",
      users:500,
},
{
   title:"user",
   button:"Classis",
   users:500,
},
{
   title:"user",
   button:"Classis",
   users:500,
},
{
   title:"user",
   button:"Classis",
   users:500,
},
{
   title:"user",
   button:"Classis",
   users:500,
},
{
   title:"user",
   button:"Classis",
   users:500,
},
]


const Modeled = () => {
  return (
   <div className={styles.modeled}>
    <div className="container">
         <div className={styles.modeled_title}>
            <h2>Modeled around your data and workflows.</h2>
            <p>A CRM should go beyond deals. Attio is built for any business process.</p>
         </div>
         <div className={styles.modeled_block}>
            <div className={styles.modeled_block_text}>
               <p><span>Always connected to your data.</span> Continually sync your product, billing, and relationship data into your workspace.</p>
            </div>
            <div className={styles.modeled_block_image}>
            <Image src={aboutImg} alt='aboutImg'/>

            </div>
         </div>
         <div className={styles.modeled_splite_block}>
            <CustomMotionDiv
            initial="initial"
            whileHover={"hover"}
              className={styles.modeled_splite_block_item}>
               <p><span>A CRM for any use case.</span> Easily create custom objects that match your business’ unique data structure.</p>
                  <div  className={styles.modeled_motion}>
                     {cards.map((item,index)=> {
                        if(index === 0) return(
                           <CustomMotionDiv
                           variants={variants}>
                           <CardModeled
                            title={item.title}
                            users={item.users}
                            button={item.button}                          
                            />
                           </CustomMotionDiv>
                          
                        )
                        return(
                           <CustomMotionDiv
                           variants={variants3}>
                           <CardModeled
                            title={item.title}
                            users={item.users}
                            button={item.button}                          
                            />
                           </CustomMotionDiv>
                        )
                     })}
                     
                  </div>
               <div  className={styles.modeled_motion}>
                     {cards.map((item,index)=> {
                        if(index === cards.length -1 ) return(
                           <CustomMotionDiv
                           variants={variants}>
                           <CardModeled
                            title={item.title}
                            users={item.users}
                            button={item.button}                          
                            />
                           </CustomMotionDiv>
                          
                        )
                        return(
                           <CustomMotionDiv
                           variants={variants4}>
                           <CardModeled
                            title={item.title}
                            users={item.users}
                            button={item.button}                          
                            />
                           </CustomMotionDiv>
                        )
                     })}
                     
               </div>
            </CustomMotionDiv>
            <div className={styles.modeled_splite_block_splititem}>
               <CustomMotionDiv
                  initial="initial"
                  whileInView={"visible"}
                  viewport={{
                     amount:'all',
                     once:true
                   }}
                   className={styles.modeled_splite_block_lg} >
                  <div className={styles.modeled_splite_block_lg_text}>
                     <h2>Discover our reviews</h2>
                     <p>Users can chat and discuss features.</p>
                  </div>
                  <div className={styles.modeled_splite_block_lg_block}>
                     {reviews.map((item,index)=>(
                        <ReviewModeled
                        name={item.name}
                        desc={item.desc}
                        icon={item.icon}
                        index={index}
                        key={index}
                        />
                     ))}
                  </div>
                
               </CustomMotionDiv>
               <div className={styles.modeled_splite_block_sm}>
                     <Image src={company1} width={40} height={40} alt="companies"/>
                     <Image src={company2} width={40} height={40} alt="companies"/>
                     <Image src={company3} width={40} height={40} alt="companies"/>
                     <Image src={company4} width={40} height={40} alt="companies"/>
                     <Image src={company5} width={40} height={40} alt="companies"/>
                     <Image src={company6} width={40} height={40} alt="companies"/>
               </div>
            </div>
         </div>
      </div>
   </div>
  
  )
}

interface CardModeledProps{
   title:string,
   button:string,
   users:number,
}
const CardModeled = ({title,button,users}:CardModeledProps) => {
   return (
      <div className={styles.modeled_card}>
            <div className={styles.modeled_card_title}>
            <h2>{title}</h2>
            <span>{button}</span>
            </div>
         
            <div className={styles.modeled_card_line}></div>
            <h5>total users: <span>{users}</span></h5>
      </div>

   )
}
interface ReviewModeledProps{
   name:string,
   desc:string,
   icon:string,
   index:number
}

const ReviewModeled = ({name,desc,icon,index}:ReviewModeledProps) => {

   const delay = index * 0.5
   const variantshow = {
      initial: { opacity: 0.1 },
      visible:  {opacity: 1 ,  transition: {
         opacity: { delay  , duration: .7 }
       }}
    };
   return (
      <CustomMotionDiv
      variants={variantshow}
      className={styles.modeled_review}>
         <div className={styles.modeled_review_text}>
            <p>{desc}</p>

            <div className={styles.modeled_review_avatar}>
                  <Image src={icon.length >1 ? icon : avatar} width={24} height={24} alt="avatar"/>
                  <p>{name}</p>
            </div>
          </div> 

      </CustomMotionDiv>
   )
}
export default Modeled
