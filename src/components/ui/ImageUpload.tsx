import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { X } from "lucide-react";

interface UploadImageButtonProps {
  image: string | null;
  setImage: React.Dispatch<React.SetStateAction<string | null>>;
}
const UploadImageButton: React.FC<UploadImageButtonProps> = ({ image, setImage }) => {

  const [destructCount, setDestructCount] = useState(0);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setImage(URL.createObjectURL(files[0]));
    };
  };

  const handleRemoveImage = () => {
    setImage(null);
    setDestructCount(destructCount + 1);
  };

  return (
    <div className="w-[288px] transition-all duration-150 md:w-[366px] text-center">
      <AspectRatio ratio={9 / 9} className="bg-muted rounded-md items-center">
        {image ? (
          <div className="relative w-full h-full group">
            <img src={image} alt="Preview" className="w-full h-full object-cover rounded-md" />
            <Button
              onClick={handleRemoveImage}
              variant="outline"
              size="icon"
              className="absolute -top-3 -right-3 p-3 rounded-full opacity-0 group-hover:opacity-80 transition-opacity"
            >
              <X className="h-2 w-2" />
            </Button>
          </div>
        ) : (

          <div className="flex items-center text-muted-foreground bg-transparent h-full w-full">
            <div className="w-full">Please upload and image</div>
          </div>
        )}
      </AspectRatio>
      <Input
        type="file"
        accept="image/*"
        className="mt-3"
        ref={null}
        onChange={handleImageChange}
        key={destructCount}
      />
    </div>
  );
};

export default UploadImageButton;