import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from "react-router-dom"

function PostCard({
    $id,title,featuredImage,status
}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className=' w-full rounded-xl sm:bg-gray-300 dark:bg-[#333333] dark:hover:border-[1px] dark:text-white px-5 py-3 sm:px-4 sm:py-4'>
            {status==='blogPost' &&<div className='w-full justify-center mb-4'>
                <img  src={appwriteService.getFileDownload(featuredImage).href}  alt="" className='mx-auto h-[250px] hover:border-[0px] border-[1px] border-gray-100 rounded-xl'/>
            </div>}
            <h2 className='sm:text-xl  text-lg font-bold'>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard