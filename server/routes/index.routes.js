import { Router } from "express";
import { GetImagesAll, GetImagesId, PostUploadImages, DeleteImagesId } from "../http/http.request"
const router = Router();

router.get('/', (req, res) => GetImagesAll(res, req))

export default router;