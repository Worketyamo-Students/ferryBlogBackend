import { Router } from 'express';

import BlogController from '../Controllers/BLog.Controller';
import myRoutes from '../utils/Mooks';

const Blogrouter = Router()


Blogrouter.get(myRoutes.GETALLBLOGS, BlogController.getallBlog)
Blogrouter.get(myRoutes.GETONEBLOG, BlogController.getBlogById)
Blogrouter.post(myRoutes.ADDONEBLOG, BlogController.AddOneBlog)
Blogrouter.post(myRoutes.ADDMANYBLOGS, BlogController.AddMAnyBlog)
Blogrouter.put(myRoutes.UPDATEBLOG, BlogController.UpdateBlog)
Blogrouter.delete(myRoutes.DELETEONEBLOG, BlogController.deleteOneBlog)
Blogrouter.delete(myRoutes.DELETEMANYBLOGS, BlogController.deleteManyBlog)

export default Blogrouter