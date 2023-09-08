import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"
// import {User,Log} from "../model/user.model"
export const userApi=createApi({
    reducerPath:"userApi",
    tagTypes:["Auth"],
    baseQuery:fetchBaseQuery({
        // baseUrl:"http://localhost:7000/api",
        baseUrl:"https://ai-api-l8mn.onrender.com",
        credentials: "include",
    }),
        endpoints:(builder)=>({
      
        generateCoverLetter:builder.mutation<any,any>({
            query:data=>({
                url:"/ai/coverletter",
                method:"POST",
                body:data,
            }),
            
        })
   }),
})

export const {
useGenerateCoverLetterMutation
}=userApi