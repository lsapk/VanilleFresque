import https from 'https';
import fs from 'fs';

const download = (url: string, dest: string) => {
  https.get(url, (res) => {
    const file = fs.createWriteStream(dest);
    res.pipe(file);
  });
};

download('https://u.jimcdn.com/cms/o/s2cc6620082dc29db/layout/l65628d768c458dca/css/main.css', 'main.css');
download('https://u.jimcdn.com/cms/o/s2cc6620082dc29db/layout/l65628d768c458dca/css/layout.css', 'layout.css');
download('https://u.jimcdn.com/cms/o/s2cc6620082dc29db/layout/l65628d768c458dca/css/font.css', 'font.css');

