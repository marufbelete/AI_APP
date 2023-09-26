import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"
// import {User,Log} from "../model/user.model"
export const userApi=createApi({
    reducerPath:"userApi",
    tagTypes:["Auth"],
    baseQuery:fetchBaseQuery({
        // baseUrl:"http://localhost:7000/api",
        baseUrl:"https://api.careercompanion.au/api",
        // baseUrl:"https://ai-api-l8mn.onrender.com/api",
        credentials: "include",
    }),
        endpoints:(builder)=>({
      
        generateCoverLetter:builder.mutation<any,any>({
            query:data=>({
                url:"/ai/coverletter",
                method:"POST",
                body:data,
            }),
            
        }),

        generateFieldInfo:builder.mutation<any,any>({
            query:data=>({
                url:"/ai/fieldinfo",
                method:"POST",
                body:data,
            }),
            
        }),

        registerUser:builder.mutation<any,any>({
            query:data=>({
                url:"/auth/signup",
                method:"POST",
                body:data,
            }),
            
        }),
        loginUser:builder.mutation<any,any>({
            query:data=>({
                url:"/auth/login",
                method:"POST",
                body:data,
            })
        }),
        logoutUser:builder.mutation<any,any>({
            query:data=>({
                url:"/auth/logout",
                method:"POST"
            }),
        }),
        checkAuth:builder.mutation<any,any>({
            query:data=>({
                url:"/auth/checkAuth",
                method:"POST"
            }),
        }),
        getFields:builder.query<any,any>({
            query:data=>({
                url:"/ai/fields",
                method:"GET"
            }),
        }),
        getTrainings:builder.query<any,any>({
            query:data=>({
                url:"/ai/trainings",
                method:"GET",
                params:{
                    field:data.field
                }
            }),
        }),
        uploadFile:builder.mutation<any,any>({
            query:data=>({
                url:"/ai/uploadxlsx",
                method:"POST",
                body:data
            }),
        }),
        updateFile:builder.mutation<any,any>({
            query:data=>({
                url:"/ai/file",
                method:"PUT",
                body:data
            }),
        }),

        deleteFile:builder.mutation<any,any>({
            query:data=>({
                url:`/ai/file/${data.id}`,
                method:"DELETE",
            }),
        }),

        readFile:builder.query<any,any>({
            query:data=>({
                url:'/ai/file',
                method:"GET"
            }),
        }),


   }),
   
})

export const {
useGenerateCoverLetterMutation,
useLoginUserMutation,
useLogoutUserMutation,
useRegisterUserMutation,
useCheckAuthMutation,
useGenerateFieldInfoMutation,
useGetFieldsQuery,
useGetTrainingsQuery,
useUploadFileMutation,
useDeleteFileMutation,
useReadFileQuery,
useUpdateFileMutation
}=userApi