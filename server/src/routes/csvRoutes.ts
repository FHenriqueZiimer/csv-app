import express from 'express';
import { uploadCSV, searchCSV } from '../controllers/csvController';
import multer from 'multer';

const router = express.Router();

const upload = multer({ dest: './uploads/' });  

router.post('/files', upload.single('file'), uploadCSV);
router.get('/users', searchCSV);

export default router;
