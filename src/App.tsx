import UploadImageButton from "@/components/ui/ImageUpload";
import { useState } from "react";
import SubmitImage from "./components/ui/Submit";

function App() {
  const [image, setImage] = useState<string | null>(null);
  return (
    <div >
      <a className="fixed top-0 left-0 w-full h-16 z-10 border-b border-dashed bg-background" >
        <h1 className="text-left indent-4 min-w-96 text-foreground ">Kylix Image Upload</h1>
      </a>
      <div className="flex flex-col md:flex-row h-[1000px] border border-dashed bg-popover">
        <div className="pl-4 pr-4 pt-20 border-r border-dashed">
          <UploadImageButton image={image} setImage={setImage} />
          <SubmitImage image={image} buttonProps={{ variant: "outline", className: "mt-2" }} />
        </div>
        <div className="pl-4 pr-4 pt-4 md:pt-20 w-[288px] transition-all duration-150 md:w-[366px]">
        </div>
      </div>
    </div>
  );
}

export default App;