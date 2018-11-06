const getFileType = (ext) => {
  switch (ext) {
    case 'png':
      return 'image/png';
    default:
      return 'image/jpeg';
  }
};

const openFileToBlobAsync = () => new Promise((resolve, reject) => {
  /* global remote fs Blob */
  remote.dialog.showOpenDialog({
    properties: ['openFile'],
    filters: [
      { name: 'Images', extensions: ['jpg', 'jpeg', 'png'] },
    ],
  }, (filePaths) => {
    if (filePaths) {
      const filePath = filePaths[0];
      fs.readFile(filePath, (err, data) => {
        if (err) {
          reject(err);
          return;
        }

        const fileExt = filePath.split('.').pop();

        const blob = new Blob([data], { type: getFileType(fileExt) });

        resolve({
          fileName: `image.${fileExt}`,
          blob,
        });
      });
    } else {
      resolve(null);
    }
  });
});

export default openFileToBlobAsync;
