import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { X, Image } from "lucide-react";

interface ImageSocketProps {
  image: string | null;
  setImage: React.Dispatch<React.SetStateAction<string | null>>;
  destructCount: number;
  setDestructCount: React.Dispatch<React.SetStateAction<number>>;
  setPredictionLabel: React.Dispatch<React.SetStateAction<string | null>>;
  setPredictionConfidence: React.Dispatch<React.SetStateAction<number | null>>;
}

const ImageSocket: React.FC<ImageSocketProps> = (
  { image,
    setImage,
    destructCount,
    setDestructCount,
    setPredictionLabel,
    setPredictionConfidence }) => {

  const handleRemoveImage = () => {
    setImage(null);
    setPredictionLabel(null);
    setPredictionConfidence(null);
    setDestructCount(destructCount + 1);
  }

  return (
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
            <X />
          </Button>
        </div>
      ) : (
        <div className="flex items-center text-muted-foreground bg-transparent h-full w-full">
          <Image className="w-full" />
        </div>
      )}
    </AspectRatio>
  );
};

export default ImageSocket;