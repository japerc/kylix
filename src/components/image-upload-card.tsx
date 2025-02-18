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
  setPredictionLabel: React.Dispatch<React.SetStateAction<string | null>>;
  setPredictionConfidence: React.Dispatch<React.SetStateAction<number | null>>;
}

const ImageUploadSection: React.FC<ImageUploadSectionProps> = ({
  image,
  setImage,
  destructCount,
  setDestructCount,
  setPredictionLabel,
  setPredictionConfidence
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
          setPredictionLabel={setPredictionLabel}
          setPredictionConfidence={setPredictionConfidence}
        />
      </CardContent>
      <CardFooter className="flex justify-between">
        <InputImage
          setImage={setImage}
          setPredictionLabel={setPredictionLabel}
          setPredictionConfidence={setPredictionConfidence}
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
          setLabel={setPredictionLabel}
          setConf={setPredictionConfidence}
        />
      </CardFooter>
    </Card>
  );
};

export default ImageUploadSection;