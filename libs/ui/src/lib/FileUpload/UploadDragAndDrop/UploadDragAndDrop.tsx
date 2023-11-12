import { FC, useState } from "react";
import { useDropzone } from 'react-dropzone';

/* eslint-disable-next-line */
export interface UploadDragAndDropProps { }

const UploadDragAndDrop: FC<UploadDragAndDropProps> = ({ }) => {
  const [files, setFiles] = useState<(File & { preview: string })[] | null>(null)
  const { getInputProps, open } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
    maxFiles: 1,
    onDrop(acceptedFiles) {
      setFiles(acceptedFiles.map((file) => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })))
    },
  });

  return (
    <div>
      <h1>Welcome to UploadDragAndDrop!</h1>
    </div>
  );
}

export default UploadDragAndDrop;
