import {
  Request,
  Response,
} from 'express';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const BlogController = {

    getallBlog: async (req: Request, res: Response) => {

        try {

            const blogs = await prisma.blog.findMany();
            res.json(blogs)

        } catch (error) {
            console.error(error)
            res.json({ msg: 'erreur interne !' })
        }
    },
    getBlogById: async (req: Request, res: Response) => {

        try {
            const { id } = req.params
            const blog = await prisma.blog.findFirst({
                where: {
                    id
                }
            })

        } catch (error) {
            console.error(error)
            res.json({ msg: 'erreur interne !' })
        }
    },

    AddOneBlog: async (req: Request, res: Response) => {

        try {
            const { title, content, author, vue, slug } = req.body

            const newblog = await prisma.blog.create({
                data: {

                    title,
                    content,
                    author,
                    vue,
                    slug
                }
            })

            res.json(newblog)
        } catch (error) {

            console.error(error)
            res.json({ msg: "erreur interne !" })
        }

    },
    AddMAnyBlog: async (req: Request, res: Response) => {

        try {
            const { title, content, author, vue, slug } = req.body

            const newblogs = await prisma.blog.createMany({
                data: [{

                    title,
                    content,
                    author,
                    vue,
                    slug
                }]
            })

            res.json(newblogs)
        } catch (error) {

            console.error(error)
            res.json({ msg: "erreur interne !" })
        }

    },
    UpdateBlog: async (req:Request, res: Response)=>{

          try {
            const { id } = req.params
            const { title, content, author, vue, slug } = req.body

            const updatedBlog = await prisma.blog.update({
                where: {
                    id
                },
                data: {
                    title,
                    content,
                    author,
                    vue,
                    slug
                }
            })

            res.json(updatedBlog)
            
          } catch (error) {
            console.error(error)
            res.json({ msg: "erreur interne !" })
          }
    },
    deleteOneBlog: async (req: Request, res: Response) => {

        try {
            const { id } = req.params
            await prisma.blog.delete({

                where: {
                    id
                }
            })

            res.json({ msg: "Blog supprimé avec succès!" })
        } catch (error) {
           

             console.error(error)
             res.json({ msg: "erreur interne !" })
        }
    },
    deleteManyBlog : async (req:Request, res:Response) => {
        try {
            const { ids } = req.body
            await prisma.blog.deleteMany({
                where: {
                    id: { in: ids }
                }
            })

            res.json({ msg: "Blogs supprimés avec succès!" })
        } catch (error) {
            console.error(error)
            res.json({ msg: "erreur interne !" })
        }
    }
}
export default BlogController