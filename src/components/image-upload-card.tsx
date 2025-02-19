import { useRef } from 'react';
import InputImage from "@/components/ui/input-image";
import SubmitImage from "@/components/ui/submit-image";
import ImageSocket from "@/components/ui/image-socket";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter
} from "@/components/ui/card"

interface ImageUploadSectionProps {
  image: string | null;
  setImage: React.Dispatch<React.SetStateAction<string | null>>;
  destructCount: number;
  setDestructCount: React.Dispatch<React.SetStateAction<number>>;
  setPrediction: React.Dispatch<React.SetStateAction<[string, number] | null>>;
}

const ImageUploadSection: React.FC<ImageUploadSectionProps> = ({
  image,
  setImage,
  destructCount,
  setDestructCount,
  setPrediction
}) => {
  const imageInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    imageInputRef.current?.click();
  };

  return (
    <Card className="pt-6 w-full md:w-1/3">
      <CardContent>
        <ImageSocket
          image={image}
          setImage={setImage}
          destructCount={destructCount}
          setDestructCount={setDestructCount}
          setPrediction={setPrediction}
        />
      </CardContent>
      <CardFooter className="flex justify-between">
        <InputImage
          setImage={setImage}
          setPrediction={setPrediction}
          destructCount={destructCount}
          ref={imageInputRef}
          hidden={true}
        />
        <Button onClick={handleButtonClick} variant="outline">
          Upload Image
        </Button>
        <SubmitImage
          image={image}
          variant="outline"
          setPrediction={setPrediction}
        />
      </CardFooter>
    </Card>
  );
};

export default ImageUploadSection;