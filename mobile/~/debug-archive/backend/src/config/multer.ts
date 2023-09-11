
import multer, { FileFilterCallback } from 'multer';
import path from 'path';
import crypto from 'crypto';

export default {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    filename(request, file, callback) {
      const hash = crypto.randomBytes(6).toString('hex');

      const fileName = `${hash}-${file.originalname}`;

      callback(null, fileName);
    },
  }),
 /* fileFilter: function (
    request: Express.Request,
    file: Express.Multer.File,
    callback: FileFilterCallback
  ): void {
    if (file) {
      if (['image/jpeg', 'image/png', 'image/svg'].includes(file.mimetype)) {
        callback(null, true);
      } else {
        callback(
          new Error(
            'The file to be sent must be an image with jpg / jpeg, png or svg formats.'
          )
        );
      }
    } else {
      callback(new Error('File is required.'));
    }
  },*/
};