import { useState } from "react";
import IdGenerator from "./IdGenerator";
import ImageUpload from "./ImageUpload";
import { toast } from "sonner";
import axios from "axios";

const ArtisanRegistrationForm = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [artId, setartId] = useState<string | null>(null);
  const [artName, setArtName] = useState<string | null>(null);
  const [artisanName, setArtisanName] = useState<string | null>(null);
  const [artDescription, setArtDescription] = useState<string | null>(null);
  const [artisanAddress, setArtisanAddress] = useState<string | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [err, setErr] = useState<String | null>(null)

  const RegisterArt = async () => {
    setIsSubmitting(true)
    const formdata = new FormData()
    formdata.append('productphoto', imageFile)
    formdata.append('productID', artId)
    formdata.append('productName', artName)
    formdata.append('artisanName', artisanName)
    formdata.append('productInfo', artDescription)
    formdata.append('artisanAddress', artisanAddress)
    formdata.append('shopID', "TSHPID")

    try {
      const { data } = await axios.post(`${import.meta.env.VITE_PUBLIC_BACKEND_URL}/register`, formdata, {
        headers: {
          "Content-Type": 'multipart/form-data'
        }
      })
      toast.success(`Art registered successfully! Please note down ArtID ${data.productID}`)
    } catch (e) {
      toast.error('Registration Success!', e)
    } finally {
      setIsSubmitting(false)
    }
  }

  const generateArtId = () => {
    const timestamp = Date.now();
    const randomStr = Math.random().toString(36).substring(2, 7).toUpperCase();
    const newArtId = `BAS-${timestamp.toString().slice(-6)}-${randomStr}`;
    setartId(newArtId);
  };
  const handleImageChange = (file: File | null, preview: string | null) => {
    setImageFile(file);
    setImageUrl(preview);
  };

  return (
    <div className="animate-fade-in">
      <IdGenerator artId={artId} onGenerate={generateArtId} />

      <div className="mb-4">
        <label htmlFor="artName" className="bastar-label">
          Artifact Name
        </label>
        <input
        onChange={(e)=>setArtName(e.target.value)}
          id="artName"
          type="text"
          className={"bastar-input"}
          placeholder="Enter art piece name"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="artisanName" className="bastar-label">
          Artisan Name
        </label>
        <input
        onChange={(e)=>setArtisanName(e.target.value)}
          id="artisanName"
          type="text"
          className={"bastar-input"}
          placeholder="Enter artisan's name"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="bastar-label">
          Description
        </label>
        <textarea
        onChange={(e)=>setArtDescription(e.target.value)}
          id="description"
          rows={4}
          className="bastar-input"
          placeholder="Describe the art piece and its cultural significance"
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="address" className="bastar-label">
          Address or Origin
        </label>
        <input
        onChange={(e)=>setArtisanAddress(e.target.value)}
          id="address"
          type="text"
          className={"bastar-input"}
          placeholder="What is the origin of the artifact"
        />
      </div>
      <ImageUpload imageUrl={imageUrl} onImageChange={handleImageChange} />
      <div className="mt-6">
        <button
          type="button"
          onClick={RegisterArt}
          className="bastar-btn-primary w-full"
          disabled={isSubmitting || !artId}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Registering...
            </span>
          ) : (
            "Register Art Piece"
          )}
        </button>
      </div>
    </div>
  );
};

export default ArtisanRegistrationForm;
