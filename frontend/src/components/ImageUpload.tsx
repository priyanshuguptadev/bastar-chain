
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface ImageUploadProps {
  onImageChange: (file: File | null, previewUrl: string | null) => void;
  imageUrl: string | null;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageChange, imageUrl }) => {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      handleFile(file);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      handleFile(file);
    }
  };

  const handleFile = (file: File) => {
    if (file.type.startsWith('image/')) {
      const previewUrl = URL.createObjectURL(file);
      onImageChange(file, previewUrl);
    } else {
      alert('Please upload an image file');
      onImageChange(null, null);
    }
  };

  const handleRemove = () => {
    onImageChange(null, null);
  };

  return (
    <div className="mb-4">
      <label className="bastar-label">Art Image</label>
      {!imageUrl ? (
        <div
          className={cn(
            "border-2 border-dashed rounded-md p-6 text-center transition-colors duration-200",
            dragActive ? "border-bastar-peru bg-bastar-peru/10" : "border-bastar-peru/40"
          )}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            name='productphoto'
            type="file"
            id="imageUpload"
            onChange={handleChange}
            accept="image/*"
            className="hidden"
          />
          <label
            htmlFor="imageUpload"
            className="flex flex-col items-center cursor-pointer"
          >
            <svg
              className="w-12 h-12 text-bastar-peru mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="text-bastar-brown font-medium">
              Drag and drop an image or click to browse
            </p>
            <p className="text-sm text-bastar-brown/70 mt-1">
              JPG, PNG, or GIF files only
            </p>
          </label>
        </div>
      ) : (
        <div className="relative rounded-md overflow-hidden border border-bastar-peru/30">
          <img
            src={imageUrl}
            alt="Uploaded art"
            className="w-full h-64 object-contain bg-white"
          />
          <button
            type="button"
            onClick={handleRemove}
            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 shadow-md hover:bg-red-600 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
