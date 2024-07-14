"use client"
import { prisma } from "@/lib/prisma";
import { createProduct } from "@/lib/server-actions";
import { useCallback, useState } from "react";
import { format } from "date-fns";
import styles from "@/app/styles/Product.module.scss"
import CustomMotionDiv from "@/app/CustomMotionDiv";
import { toast } from 'react-toastify';
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

const categories = [
  "Media",
  "Blockchain",
  "Cloud",
  "Commerce",
  "Cybersecurity",
  "Data",
  "Design",
  "Photography",
  "E-commerce",
  "Education",
  "Entertainment",
  "Video",
  "Finance",
  "Social",
  "Health",
  "Fitness",
  "Marketing",
  "Music",
  "Productivity",
  "Engineering",
  "Sales",
  "Sports",
  "Travel",
  "Bootstrapped",
  "Art",
  "Analytics",
];


export default function NewProduct() {
  const [step,setStep]=useState(1)
  const [title,setTitle]=useState("")
  const [desc,setDesc]=useState("")
  const [logo,setLogo]=useState("")
  const [selectedCategories,setSelectedCategories]=useState<string[]>([])

  const previousStep = () =>{
    if(step === 1) return
    setStep(prev => prev - 1)
  }
  const nextStep = useCallback(() => {
    if (step === 1 && title.length < 4) {
      toast(
        <>
          <div className="flex items-center gap-4  mx-auto">

            GGGG
          </div>
        </>,
        {
          position: "top-center",
        }
      );

      return;
    }

    if (step === 2 && desc.length < 4) {
      toast(
        <>
            asdasdas
        </>,
        {
          position: "top-center",
        }
      );
      return;
    }

    setStep(step + 1);
  }, [
    step,
    desc,
    title,
  ]);
  const handleCategoryToggle = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories((prevCategories) =>
        prevCategories.filter((prevCategory) => prevCategory !== category)
      );
    } else if (selectedCategories.length < 3) {
      setSelectedCategories((prevCategories) => [...prevCategories, category]);
    }
  };
   const [slug, setSlug] = useState("bwe");
   const submitProduct = async () => {
      try {
        const product = createProduct({
          name:title,
          description:desc,
          category: selectedCategories,
          slug:title
        })
      } catch (error) {
        console.log(error);
      }
    };
  return (
   <div className={styles.product}>
      <div className="container">
         <div className={styles.product_step}>
            {step === 1 && (
              <CustomMotionDiv
              initial={{ opacity: 0, x: "100%" }} 
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "-100%" }} 
              transition={{ duration: 0.3 }}
              className={styles.product_step_1}
              >
                <h2>📦 New product</h2>
                <h3>Ready to showcase your product to the world? You came to the right place. Follow the steps below to get started.</h3>
                <div className={styles.product_input}>
                  <label htmlFor="title">Type your Title</label>
                  <input name="title" value={title} onChange={(e)=> setTitle(e.target.value)} maxLength={30} />
                    <p>{title.length} \ 30</p>
                </div>                
              </CustomMotionDiv>
            )}
            {step === 2 && (
              <CustomMotionDiv
              initial={{ opacity: 0, x: "100%" }} 
              animate={{ opacity: 1, x: 0 }} 
              exit={{ opacity: 0, x: "-100%" }} 
              transition={{ duration: 0.3 }}
              className={styles.product_step_1}
              >
                <h2>🎓 Which description do you want</h2>
                <h3>Keep it simple and clear. Describe your product in a way that makes it easy for people to understand what it does.</h3>
                <div className={styles.product_input}>
                  <label htmlFor="desc">Type your Description</label>
                  <textarea name="desc" value={desc} onChange={(e)=> setDesc(e.target.value)} maxLength={400} />
                    <p>{desc.length} \ 400</p>
                </div>                
              </CustomMotionDiv>
            )}

              {step === 3 && (
              <CustomMotionDiv
              initial={{ opacity: 0, x: "100%" }} 
              animate={{ opacity: 1, x: 0 }} 
              exit={{ opacity: 0, x: "-100%" }} 
              transition={{ duration: 0.3 }}
              className={styles.product_step_1}
              >
                <h2>📊 What category is your product</h2>
                <h3>Keep it simple and clear. Describe your product in a way that makes it easy for people to understand what it does.</h3>
                <div className={styles.product_input_category}>
                  {categories.map((category, index) => {  
                  return(
                    <CustomMotionDiv
                      key={index}
                      onClick={() => {
                        handleCategoryToggle(category)
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <div 
                      className={selectedCategories.includes(category) ? styles.product_category_active : styles.product_category}>
                        {category}
                      </div>
                    </CustomMotionDiv>
                  )
                  
                  })}
                </div>                
              </CustomMotionDiv>
            )}
                  {step === 4 && (
              <CustomMotionDiv
              className={styles.product_step_1}
              >
                <h2>🎓 FINISG</h2>
                <h3>Keep it simple and clear. Describe your product in a way that makes it easy for people to understand what it does.</h3>

              </CustomMotionDiv>
            )}
            <div>
            {step===4 ? (
              <div>
                <button className={styles.product_button} onClick={submitProduct}>Create</button>

              </div>
            ): (
             
              <div className={styles.product_buttons}>
                 {step != 1 && (
                     <button className={styles.product_button_prev} onClick={previousStep}>Previous</button>
                 )}
                <button className={styles.product_button} onClick={nextStep}>Continue</button>
              </div>
            )}
            </div>
         </div>
      </div>

      <ToastContainer />
   </div>
 
 
  );
}
 