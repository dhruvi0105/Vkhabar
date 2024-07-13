import { Avatar } from '@mui/material'
import React from 'react'

const HomeSection = () => {

    const handleSubmit = (values) =>{
        console.log("values",values)

    }

    const formik = useFormik({
        initialValues:{
            content:"",
            image:""
        },
        onSubmit:handleSubmit
    })
  return (
    <div className = 'space-y-5'>
        <section>
            <h1 className='py-1  text-xl font-bold opacity-90'>Home</h1>
        </section>
        <section className={`pb-10`}>
            <div>
                <Avatar alt='username' src = 'https://yt3.ggpht.com/yti/ANjgQV8cr6E96hj3y4PXbKUhfS1q8DEZu7RiMfWSvGGr0IdYHQ=s88-c-k-c0x00ffffff-no-rj-mo'/>
            </div>
            <div className='w-full'>
                <form>
                    <div>
                        <input type = 'text' name = 'content' placeholder='What is happening' className='border-none outline-none text-xl bg-transparent' {...formik.getFileProps("content")}/>
                    </div>
                </form>
            </div>

        </section>


    </div>
  )
}

export default HomeSection