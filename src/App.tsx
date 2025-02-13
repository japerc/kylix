import UploadImageButton from "@/ImageUpload";
import { useState } from "react";

function App() {
  const [image, setImage] = useState<string | null>(null);
  return (
    <div className="flex flex-col itmes-center">
      <div className="min-h-screen flex flex-col">
        <h1 className="text-center">Kylix Image Upload</h1>
        <UploadImageButton image={image} setImage={setImage} />
      </div>
    </div>
  );
}

export default App;