import { FC, useState } from "react";
import { useDropzone } from 'react-dropzone';
import Button from "../../Button/Button";
import Avatar from "../../Avatar/Avatar";
import { XMarkIcon } from "@heroicons/react/20/solid";

export interface UploadProps {
  helpText?: string
  label: string
}

const Upload: FC<UploadProps> = ({ label, helpText }) => {
  const [file, setFile] = useState<File & { preview: string } | null>(null)
  const { getInputProps, open } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
    maxFiles: 1,
    onDrop(acceptedFiles) {
      setFile(Object.assign(acceptedFiles[0], {
        preview: URL.createObjectURL(acceptedFiles[0])
      }))
    },
  });

  const isImage = file?.type.startsWith('image')

  return (
    <div className="flex gap-4 flex-start">
      {file && isImage && <Avatar size="xxl" variant="user" src={file?.preview} />}
      <input {...getInputProps()} />
      <div className="flex flex-col items-start gap-2">
        <h2 className="text-sm font-bold leading-4 text-neutral-900">{label}</h2>
        <div className="flex items-center gap-2">
          <Button onClick={open} label="Choose file..." intent='default' type="button" category='primary' />
          {file && <div className="flex items-center">
            <div>{file?.name}</div>
            <XMarkIcon title='Remove File' role="button" onClick={() => setFile(null)} className="w-5 h-5 text-gray-500" />
          </div>}
        </div>
        <div className="text-sm leading-4 text-neutral-500">{helpText}</div>
      </div>
    </div>
  );
}

export default Upload;
